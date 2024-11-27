import React, { useState } from "react";
import "../style/model.css";

const DynamicButtons = () => {
  const [param1, setButtons1] = useState([
    { id: 1, text: "Кнопка 1", isActive: false },
    { id: 2, text: "Кнопка 2", isActive: false },
    { id: 3, text: "Кнопка 3", isActive: false },
    { id: 4, text: "Кнопка 4", isActive: false },
    { id: 5, text: "Кнопка 5", isActive: false },
  ]);

  const [param2, setButtons2] = useState([
    { id: 1, text: "Кнопка 1", isActive: false },
    { id: 2, text: "Кнопка 2", isActive: false },
    { id: 3, text: "Кнопка 3", isActive: false },
    { id: 4, text: "Кнопка 4", isActive: false },
    { id: 5, text: "Кнопка 5", isActive: false },
  ]);

  // Функция для переключения стиля кнопки
  const toggleButtonStyle = (id) => {
    setButtons1(
      param1.map((button) =>
        button.id === id ? { ...button, isActive: !button.isActive } : button
      )
    );

    setButtons2(
      param2.map((button) =>
        button.id === id ? { ...button, isActive: !button.isActive } : button
      )
    );
  };

  return (
    <div className="content-button">
      <p className="text">Выберите параметры</p>
      <div className="margin-button">
        {/* Отображение кнопок */}
        {param1.map((button) => (
          <button
            key={button.id}
            onClick={() => toggleButtonStyle(button.id)}
            style={{
              margin: "5px",
              border: `2px solid ${
                button.isActive ? "white" : "rgb(136, 136, 219)"
              }`,
              backgroundColor: button.isActive ? "rgb(136, 136, 219)" : "white",
              color: button.isActive ? "white" : "black",
              cursor: "pointer",
              transition: "all 0.3s ease",
              width: "200px",
              height: "50px",
              borderRadius: "15px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            {button.text}
          </button>
        ))}
      </div>

      {param2.map((button) => (
        <button
          key={button.id}
          onClick={() => toggleButtonStyle(button.id)}
          style={{
            margin: "5px",
            border: `2px solid ${
              button.isActive ? "white" : "rgb(136, 136, 219)"
            }`,
            backgroundColor: button.isActive ? "rgb(136, 136, 219)" : "white",
            color: button.isActive ? "white" : "black",
            cursor: "pointer",
            transition: "all 0.3s ease",
            width: "200px",
            height: "50px",
            borderRadius: "15px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          {button.text}
        </button>
      ))}
      {/* Кнопка для добавления новой */}
    </div>
  );
};

export default DynamicButtons;
