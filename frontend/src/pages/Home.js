
import React from "react";
import "../style/home.css";
import photo from "../image/photo_bottom.png";
const InfiniteLines = () => {
  const lines = [
    { width: 50, top: 20 },
    { width: 30, top: 40 },
    { width: 20, top: 60 },
    { width: 30, top: 80 },
    { width: 50, top: 10 },
    { width: 20, top: 50 },
    { width: 30, top: 70 },
    { width: 50, top: 30 },
    { width: 20, top: 90 },
    { width: 30, top: 0 },
    { width: 50, top: 10 },
  ];

  return (
    <>
      <div className="home-content">
        {/* <h1>Генератор</h1> */}
        <div className="center-block">
          <span>
            Модель LoRA для генерации строительных схем с размещением битумных
            материалов. Она создаёт точные схемы, на которых отображены участки
            для укладки битума, с учётом их расположения и масштаба. Эта
            технология значительно ускоряет процесс проектирования, помогая
            оптимизировать работу подразделений бригады, сокращая время на
            подготовку и планирование. Идеально подходит для инфраструктурных
            объектов, таких как дорожные покрытия или кровельные работы.
          </span>
        </div>
        <div className="line-container">
          {lines.map((line, index) => (
            <div
              key={index}
              className="line"
              style={{
                width: `${line.width}%`,
                top: `${line.top}%`,
                backgroundColor: index % 2 === 0 ? "white" : "blue", // Чёрный для нечётных, синий для чётных
                animationDelay: `${index * 1}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className="photo-block">
        <img src={photo} className="photo" alt="photo_bottom" />
      </div>
      <a href="/model">
        <button className="button" style={{ marginTop: "-500px" }}>
          Перейти
        </button>
      </a>
    </>
  );
};

export default InfiniteLines;
