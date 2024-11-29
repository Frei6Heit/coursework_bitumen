import React, { useState } from "react";
import axios from "axios";
import styles from "../style/DynamicButtons.module.css";

const DynamicButtons = () => {
  const [buttonsData, setButtonsData] = useState({
    param1: [
      { id: 1, text: "4", value: "buildings administration/office 4 things", isActive: false },
      { id: 2, text: "2", value: "buildings administration/office 2 things", isActive: false },
      { id: 3, text: "1", value: "buildings administration/office 1 things", isActive: false },
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
  });

  const [selectedValues, setSelectedValues] = useState([]); // List of selected values
  const [error, setError] = useState(""); // Error message
  const [generatedImage, setGeneratedImage] = useState(null); // Image state
  const [loraFile, setLoraFile] = useState(null); // LoRA file state

  // Function to toggle button styles and update the list of selected values
  const toggleButtonStyle = (paramKey, id, value) => {
    setButtonsData((prevState) => ({
      ...prevState,
      [paramKey]: prevState[paramKey].map((button) =>
        button.id === id
          ? { ...button, isActive: !button.isActive }
          : button
      ),
    }));

    setSelectedValues((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((item) => item !== value);
      } else {
        return [...prevSelected, value];
      }
    });

    setError(""); // Reset error when a parameter is selected
  };

  // Universal component to render button groups
  const renderButtonGroup = (title, paramKey) => (
    <div className={styles.section}>
      <p className={styles.title}>{title}</p>
      <div>
        {buttonsData[paramKey].map((button) => (
          <button
            key={button.id}
            onClick={() => toggleButtonStyle(paramKey, button.id, button.value)}
            className={`${styles.button} ${button.isActive ? styles.active : ""}`}
          >
            {button.text}
          </button>
        ))}
      </div>
    </div>
  );

  // Handler for generating image
  const handleGenerate = async () => {
    if (selectedValues.length === 0 || !loraFile) {
      setError("Необходимо выбрать хотя бы один параметр и загрузить файл LoRA!");
      return;
    }

    const formData = new FormData();
    formData.append("prompt", selectedValues.join(", "));
    formData.append("lora_weights", loraFile);

    try {
      // Send selected parameters and LoRA file to the backend
      const response = await axios.post("http://localhost:8000/generate-image/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: 'blob', // To handle image response
      });

      // Check if the response is okay
      if (response.status !== 200) {
        throw new Error("Ошибка при генерации изображения");
      }

      // Create image URL from the response blob
      const imageUrl = URL.createObjectURL(response.data);
      setGeneratedImage(imageUrl); // Set generated image URL in state
      setError(""); // Clear any previous error
    } catch (error) {
      console.error("Ошибка:", error);
      setError("Ошибка при генерации изображения.");
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>Выберите параметры</p>
      {renderButtonGroup("Здания администрации и офисы", "param1")}
      {renderButtonGroup("Здания производства", "param2")}
      {renderButtonGroup("Резервуар вертикальный стальной/10000м3", "param3")}

      <div className={styles.selectedValues}>
        <p>Выбранные параметры (кодовые значения):</p>
        <p>{selectedValues.length > 0 ? selectedValues.join(", ") : "Нет выбранных параметров"}</p>
      </div>

      <div className={styles.uploadSection}>
        <input
          type="file"
          accept=".safetensors"
          onChange={(e) => setLoraFile(e.target.files[0])}
        />
        {loraFile && <p>Файл LoRA выбран: {loraFile.name}</p>}
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <button onClick={handleGenerate} className={styles.generateButton}>
        Сгенерировать
      </button>

      {generatedImage && (
        <div className={styles.generatedImage}>
          <h2>Сгенерированное изображение:</h2>
          <img src={generatedImage} alt="Generated" />
        </div>
      )}
    </div>
  );
};

export default DynamicButtons;
