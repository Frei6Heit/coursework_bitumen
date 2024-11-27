// import { motion } from "framer-motion";
// import "../style/home.css";
// import { FaInfoCircle } from "react-icons/fa";

// import React, { useState, useEffect } from "react";

// const RandomCircles = () => {
// const [circles, setCircles] = useState([]);

//   useEffect(() => {
//     // Генерация случайных кругов
//     const randomCircles = [];
//     const numberOfCircles = 20; // Количество кругов

//     for (let i = 0; i < numberOfCircles; i++) {
//       const randomX = Math.random() * window.innerWidth; // случайная позиция по оси X
//       const randomY = Math.random() * window.innerHeight; // случайная позиция по оси Y
//       const radius = Math.random() * 50 + 20; // случайный радиус от 20 до 70 пикселей

//       randomCircles.push({ x: randomX, y: randomY, radius });
//     }

//     setCircles(randomCircles);
//   }, []);

//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <>
//       <div className="question">
//         <span>Возникли вопросы? Вот наш <a href="t.me/NaDaInfo_bot">Telegram</a></span>
//       </div>
//       <div
//         style={{
//           position: "relative",
//           width: "100%",
//           height: "100vh",
//           overflow: "hidden",
//         }}
//       >
//         {circles.map((circle, index) => (
//           <div
//             key={index}
//             style={{
//               position: "absolute",
//               left: circle.x,
//               top: circle.y,
//               width: circle.radius * 2,
//               height: circle.radius * 2,
//               backgroundColor: "rgb(255, 0, 0, 0.1)", // Цвет круга
//               borderRadius: "50%", // Делаем круг
//               transform: "translate(-50%, -50%)", // Центрируем круг
//             }}
//           />
//         ))}

//         <div
//           style={{
//             position: "absolute",
//             width: "100%",
//             // overflow: "hidden",
//             display: "flex",
//             marginTop: "100px",
//             alignItems: "center",
//           }}
//         >
//           {/* Анимация линии */}
//           <motion.div
//             initial={{ x: "-100%" }} // Линия начинает за пределами экрана слева
//             animate={{ x: 0 }} // Движется до середины контейнера
//             transition={{ duration: 1.5 }}
//             className="line-animated"
//             style={{
//               height: "2px",
//               backgroundColor: "white",
//               width: "30%", // Линия занимает половину ширины контейнера
//               position: "absolute",
//               left: 0,
//             }}
//           />

//           {/* Анимация текста */}
//           <motion.div
//             initial={{ opacity: 0 }} // Текст начинается полностью прозрачным
//             animate={{ opacity: 1 }} // Постепенно становится видимым
//             transition={{ duration: 0.8, delay: 1.6 }} // Появление после завершения анимации линии
//             className="text-animated"
//             style={{
//               fontFamily: "Train One",
//               fontSize: "24px",
//               color: "white",
//               position: "absolute",
//               left: "30%", // Располагается сразу после линии
//               transform: "translateX(10px)", // Отступ от линии
//             }}
//           >
//             Модель
//             {/* <FaInfoCircle size={30} color="blue" /> */}
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0 }} // Текст начинается полностью прозрачным
//             animate={{ opacity: 1 }} // Постепенно становится видимым
//             transition={{ duration: 0.8, delay: 1.8 }} // Появление после завершения анимации линии
//             className="text-animated"
//             style={{
//               color: "white",
//               position: "absolute",
//               left: "44%", // Располагается сразу после линии
//               transform: "translateX(10px)", // Отступ от линии
//             }}
//           >
//             <div
//               style={{ position: "relative", display: "inline-block" }}
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//             >
//               <FaInfoCircle size={20} color="white" />

//               {isHovered && (
//                 <div
//                   style={{
//                     position: "absolute",
//                     top: "102%",
//                     left: "50%",
//                     transform: "translateX(-50%)",
//                     backgroundColor: "white",
//                     opacity: "0.7",
//                     color: "black",
//                     padding: "5px 10px",
//                     fontSize: "14px",
//                     marginTop: "5px",
//                     borderRadius: "15px",
//                     width: '400px',
//                   }}
//                 >
//                   Модель LoRA для генерации строительных схем с размещением
//                   битумных материалов. Она создаёт точные схемы, на которых
//                   отображены участки для укладки битума, с учётом их
//                   расположения и масштаба. Эта технология значительно ускоряет
//                   процесс проектирования, помогая оптимизировать работу
//                   подразделений бригады, сокращая время на подготовку и
//                   планирование. Идеально подходит для инфраструктурных объектов,
//                   таких как дорожные покрытия или кровельные работы.
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default RandomCircles;

// import React from "react";
// // import logo from '../image/logo.png';
// import "../style/home.css";

// const Home = () => {
//   return (
//     <div className="home-content">
//       {/* <img id='logo' src={logo} alt='Лого'/> */}
//       <h1>Генератор</h1>

//       <div className="line-container">
//         {/* Повторяющиеся линии */}
//         <div className="line"></div>
//         <div className="line"></div>
//       </div>

//       {/* <div className="line-container"> */}
//         {/* Повторяющиеся линии */}
//         {/* <div className="line"></div>
//         <div className="line"></div>
//       </div> */}
//     </div>
//   );
// };

// export default Home;

import React from "react";
import "../style/home.css";
import photo from "../image/photo_bottom.png";
// import tumenColor from "../image/tumen-color.png";
// import yassiBlack from "../image/yassi-black.png";
// import yassiColor from "../image/yassi-color.png";

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
        {/* <img src={yassiBlack} className="photo"/> */}
        {/* <img src={yassiColor} className="photo"/> */}
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
