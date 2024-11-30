import React, { useState } from "react";
import axios from "axios";
import styles from "../style/DynamicButtons.module.css";

const DynamicButtons = () => {
  const [buttonsData, setButtonsData] = useState({
    param1: [
      {
        id: 1,
        text: "4",
        value: "buildings administration/office 4 things",
        isActive: false,
      },
      {
        id: 2,
        text: "2",
        value: "buildings administration/office 2 things",
        isActive: false,
      },
      {
        id: 3,
        text: "1",
        value: "buildings administration/office 1 things",
        isActive: false,
      },
    ],
    param2: [
      { id: 4, text: "4", value: "production 4 things", isActive: false },
      { id: 5, text: "3", value: "production 3 things", isActive: false },
      { id: 6, text: "2", value: "production 2 things", isActive: false },
    ],
    param3: [
      { id: 7, text: "4", value: "VST V=10000m3 4 things", isActive: false },
      { id: 8, text: "2", value: "VST V=10000m3 2 things", isActive: false },
    ],
    param4: [
      { id: 9, text: "2", value: "VST V=5000m3 2 things", isActive: false },
      { id: 10, text: "1", value: "VST V=5000m3 1 things", isActive: false },
    ],
    param5: [
      { id: 11, text: "4", value: "VST V=4500m3 4 things", isActive: false },
      { id: 12, text: "2", value: "VST V=4500m3 2 things", isActive: false },
    ],
    param6: [
      { id: 13, text: "4", value: "VST V=3000m3 4 things", isActive: false },
    ],
    param7: [
      { id: 14, text: "6", value: "VST V=2000m3 6 things", isActive: false },
    ],
    param8: [
      { id: 15, text: "6", value: "VST V=1000m3 6 things", isActive: false },
      { id: 16, text: "4", value: "VST V=1000m3 4 things", isActive: false },
      { id: 17, text: "3", value: "VST V=1000m3 3 things", isActive: false },
      { id: 18, text: "2", value: "VST V=1000m3 2 things", isActive: false },
    ],
    param9: [
      { id: 19, text: "6", value: "VST V=500m3 6 things", isActive: false },
      { id: 20, text: "4", value: "VST V=500m3 4 things", isActive: false },
      { id: 21, text: "2", value: "VST V=500m3 2 things", isActive: false },
    ],
    param10: [
      { id: 22, text: "8", value: "VST V=100m3 8 things", isActive: false },
      { id: 23, text: "5", value: "VST V=100m3 5 things", isActive: false },
    ],
    param11: [
      { id: 24, text: "10", value: "VST V=50m3 10 things", isActive: false },
      { id: 25, text: "5", value: "VST V=50m3 5 things", isActive: false },
      { id: 26, text: "2", value: "VST V=50m3 2 things", isActive: false },
    ],
    param12: [
      { id: 27, text: "8", value: "HST V=75m3 8 things", isActive: false },
      { id: 28, text: "5", value: "HST V=75m3 5 things", isActive: false },
    ],
    param13: [
      { id: 29, text: "6", value: "HST V=60m3 6 things", isActive: false },
    ],
    param14: [
      { id: 30, text: "8", value: "HST V=50m3 8 things", isActive: false },
      { id: 31, text: "4", value: "HST V=50m3 4 things", isActive: false },
    ],
  });

  const [selectedValues, setSelectedValues] = useState([]);
  const [error, setError] = useState("");
  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Функция для переключения активности кнопки
  const toggleButtonStyle = (paramKey, id, value) => {
    setButtonsData((prevState) => ({
      ...prevState,
      [paramKey]: prevState[paramKey].map((button) =>
        button.id === id ? { ...button, isActive: !button.isActive } : button
      ),
    }));

    setSelectedValues((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((item) => item !== value);
      } else {
        return [...prevSelected, value];
      }
    });

    setError(""); // Очищаем ошибку, когда происходит выбор
  };

  // Функция для переключения активности всех кнопок
  const toggleAllButtons = () => {
    const allActive = Object.values(buttonsData).every((param) =>
      param.every((button) => button.isActive)
    );

    const updatedButtonsData = Object.keys(buttonsData).reduce(
      (acc, paramKey) => {
        acc[paramKey] = buttonsData[paramKey].map((button) => ({
          ...button,
          isActive: !allActive, // Переключаем на противоположное состояние
        }));
        return acc;
      },
      {}
    );

    setButtonsData(updatedButtonsData);

    if (allActive) {
      setSelectedValues([]); // Если все кнопки были активны, очищаем выбранные
    } else {
      const allValues = Object.values(updatedButtonsData)
        .flat()
        .map((button) => button.value);
      setSelectedValues(allValues); // Если все кнопки активируем, добавляем все их значения
    }

    setError(""); // Очищаем ошибку при изменении выбора
  };

  // Функция для отправки запроса на генерацию изображения
  const handleGenerate = async () => {
    if (selectedValues.length === 0) {
      setError("Пожалуйста, выберите хотя бы один параметр.");
      return;
    }

    setLoading(true);

    const payload = {
      prompt: selectedValues.join(", "),
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/generate-image",
        payload,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status !== 200) {
        throw new Error("Ошибка при генерации изображения");
      }

      const imageBase64 = response.data.image;
      setGeneratedImage(`data:image/png;base64,${imageBase64}`);
      setError(""); // Очищаем ошибку
    } catch (err) {
      console.error("Ошибка:", err);
      setError("Ошибка при генерации изображения.");
    } finally {
      setLoading(false);
    }
  };

  // Компонент для рендеринга кнопок
  const renderButtonGroup = (title, paramKey) => (
    <div className={styles.section}>
      <p className={styles.title}>{title}</p>
      <div>
        {buttonsData[paramKey].map((button) => (
          <button
            key={button.id}
            onClick={() => toggleButtonStyle(paramKey, button.id, button.value)}
            className={`${styles.button} ${
              button.isActive ? styles.active : ""
            }`}
          >
            {button.text}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <p className={styles.title}>Выберите параметры</p>
      <button onClick={toggleAllButtons} className={styles.generateButton}>
        {Object.values(buttonsData).every((param) =>
          param.every((button) => button.isActive)
        )
          ? "Деактивировать все"
          : "Активировать все"}
      </button>
      {renderButtonGroup("Здания администрации и офисы", "param1")}
      {renderButtonGroup("Здания производства", "param2")}
      {renderButtonGroup(
        "Резервуар вертикальный стальной(здесь и ниже)/10000м3",
        "param3"
      )}
      {renderButtonGroup("5000м3", "param4")}
      {renderButtonGroup("4500м3", "param5")}
      {renderButtonGroup("3000м3", "param6")}
      {renderButtonGroup("2000м3", "param7")}
      {renderButtonGroup("1000м3", "param8")}
      {renderButtonGroup("500м3", "param9")}
      {renderButtonGroup("100м3", "param10")}
      {renderButtonGroup("50м3", "param11")}
      {renderButtonGroup("Резервуар вертикальный стальной(здесь и ниже)/75м3", "param12")}
      {renderButtonGroup("60м3", "param13")}
      {renderButtonGroup("50м3", "param14")}
      <div className={styles.section}>
        <button onClick={handleGenerate} className={styles.generateButton}>
          {loading ? "Подождите..." : "Сгенерировать"}
        </button>
        <button onClick={toggleAllButtons} className={styles.generateButtonActivate}>
          {Object.values(buttonsData).every((param) =>
            param.every((button) => button.isActive)
          )
            ? "Деактивировать все"
            : "Активировать все"}
        </button>
        {error && <p className={styles.error}>{error}</p>}
        {generatedImage && (
          <div>
            <img src={generatedImage} alt="Generated" />
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicButtons;
