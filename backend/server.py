from flask import Flask, request, jsonify
from diffusers import StableDiffusionPipeline
from safetensors.torch import load_file
import torch
import base64
from io import BytesIO
import traceback
from PIL import Image
from flask_cors import CORS

app = Flask(__name__)

CORS(app)  # Разрешает все кросс-доменные запросы

# Базовая модель Stable Diffusion
base_model = "runwayml/stable-diffusion-v1-5"

# Загрузка пайплайна
try:
    print("Базовая модель загрузки...")
    pipe = StableDiffusionPipeline.from_pretrained(base_model, torch_dtype=torch.float16)
    pipe.to("cuda")  # Используйте GPU
    print("Базовая загрузка прошла успешно.")
except Exception as e:
    print(f"Ошиька в базовой загрузки модели: {e}")

# Загрузка LoRA модели
lora_weights = "courseworkmodel.safetensors"
try:
    print("Загрузка LoRA модели...")
    state_dict = load_file(lora_weights)
    print("LoRA модель успешно загружена.")
except Exception as e:
    print(f"Ошибка загрузки LoRA модели: {e}")

# Применение LoRA к модели
for key, value in state_dict.items():
    if key in pipe.unet.state_dict():
        pipe.unet.state_dict()[key].copy_(value)

@app.route('/api/generate-image', methods=['POST'])
def generate_image():
    print("Запрос получен")  # Логирование входящего запроса
    data = request.get_json()  # Получаем данные как JSON
    prompt = data.get('prompt')  # Получаем prompt

    if not prompt:
        print("Запрос не получен")
        return jsonify({'error': 'Требуется запрос'}), 400

    try:
        print(f"Генерирование изображения на основе запроса: {prompt}")
        image = pipe(prompt).images[0]  # Генерируем изображение с помощью модели
        print("Изображение успешно сгенерировано!")

        # Конвертируем изображение в base64
        buffered = BytesIO()
        image.save(buffered, format="PNG")  # Сохраняем изображение в буфер
        img_str = base64.b64encode(buffered.getvalue()).decode('utf-8')  # Конвертируем в base64

        return jsonify({'image': img_str})  # Отправляем изображение обратно в формате base64

    except Exception as e:
        print(f"Ошибка при создании изображения: {e}")
        traceback.print_exc()  # Выведет стек вызовов
        return jsonify({'error': 'Ошибка генерации'}), 500

if __name__ == '__main__':
    app.run(debug=True)  # Стандартный Flask WSGI сервер
