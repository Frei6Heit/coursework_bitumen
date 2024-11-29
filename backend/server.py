from fastapi import FastAPI, File, UploadFile
from pydantic import BaseModel
from diffusers import StableDiffusionPipeline
from safetensors.torch import load_file
import torch
from io import BytesIO
from fastapi.responses import StreamingResponse

# Инициализация FastAPI
app = FastAPI()

# Базовая модель Stable Diffusion
base_model = "runwayml/stable-diffusion-v1-5"
pipe = StableDiffusionPipeline.from_pretrained(base_model, torch_dtype=torch.float16)
pipe.to("cuda")

# Модель LoRA (путь будет передан через API)
@app.post("/generate-image/")
async def generate_image(prompt: str, lora_weights: UploadFile = File(...)):
    # Загружаем веса LoRA
    state_dict = load_file(await lora_weights.read())

    # Применение LoRA к модели
    for key, value in state_dict.items():
        if key in pipe.unet.state_dict():
            pipe.unet.state_dict()[key].copy_(value)

    # Генерация изображения
    truncated_prompt = pipe.tokenizer(prompt, max_length=77, truncation=True)["input_ids"]
    prompt_decoded = pipe.tokenizer.decode(truncated_prompt)
    image = pipe(prompt_decoded).images[0]

    # Сохранение изображения в буфер
    img_byte_arr = BytesIO()
    image.save(img_byte_arr, format="PNG")
    img_byte_arr.seek(0)

    return StreamingResponse(img_byte_arr, media_type="image/png")

