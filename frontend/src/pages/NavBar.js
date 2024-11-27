// import React, { useEffect, useRef } from "react";
// import "../style/navbar.css";
// // import "../dopAction/NavbarAc";

// const NavBar = () => {
//   // Создаем ссылки для элементов, к которым будем обращаться
//   const circleRef = useRef(null);
//   const menuRef = useRef(null);
//   const galleryRef = useRef(null);
//   const navItemsRef = useRef([]);
//   const boxLinesRef = useRef([]);
//   const boxRef = useRef(null);
//   const addRef = useRef(null);
//   const searchRef = useRef(null);
//   const line1Ref = useRef(null);
//   const line2Ref = useRef(null);
//   const effectRef = useRef(null);

//   useEffect(() => {
//     const circleNode = circleRef.current;
//     const menuNode = menuRef.current;
//     const galleryNode = galleryRef.current;

//     const handleCircleClick = () => {
//       for (let i = 0; i <= 3; i++) {
//         navItemsRef.current[i]?.classList.remove("show-menu");
//         boxLinesRef.current[i]?.classList.remove("box-line-show");
//       }
//       boxRef.current?.classList.remove("box-show");
//       addRef.current?.classList.toggle("go");
//       searchRef.current?.classList.toggle("search-focus");
//       searchRef.current?.focus();
//       circleNode?.classList.toggle("color");
//       line1Ref.current?.classList.toggle("move");
//       line2Ref.current?.classList.toggle("mov");
//       effectRef.current?.classList.toggle("big");
//     };

//     const handleMenuClick = () => {
//       for (let i = 0; i <= 2; i++) {
//         boxRef.current?.classList.remove("box-show");
//         navItemsRef.current[i]?.classList.toggle("show-menu");
//         boxLinesRef.current[i]?.classList.remove("box-line-show");
//       }
//     };

//     const handleGalleryClick = () => {
//       boxRef.current?.classList.toggle("box-show");
//       for (let i = 0; i <= 2; i++) {
//         boxLinesRef.current[i]?.classList.toggle("box-line-show");
//         navItemsRef.current[i]?.classList.remove("show-menu");
//       }
//     };

//     // Добавляем обработчики событий
//     circleNode?.addEventListener("click", handleCircleClick);
//     menuNode?.addEventListener("click", handleMenuClick);
//     galleryNode?.addEventListener("click", handleGalleryClick);

//     // Удаляем обработчики при размонтировании
//     return () => {
//       circleNode?.removeEventListener("click", handleCircleClick);
//       menuNode?.removeEventListener("click", handleMenuClick);
//       galleryNode?.removeEventListener("click", handleGalleryClick);
//     };
//   }, []);

//   return (
//     <div
//     style={{
//       width: '100%',
//     }}>
//       <div className="glass-container">
//         <div className="glass-content">
//           <div className="wrapper">
//             <div className="item menu" ref={menuRef}>
//               <div className="linee linee1"></div>
//               <div className="linee linee2"></div>
//               <div className="linee linee3"></div>
//             </div>
//             <div className="item gallery" ref={galleryRef}>
//               <div className="dot dot1"></div>
//               <div className="dot dot2"></div>
//               <div className="dot dot3"></div>
//               <div className="dot dot4"></div>
//               <div className="dot dot5"></div>
//               <div className="dot dot6"></div>
//             </div>
//             <button className="item add" ref={addRef}>
//               <div className="circle" ref={circleRef}>
//                 <div className="close">
//                   <div className="line line1" ref={line1Ref}></div>
//                   <div className="line line2" ref={line2Ref}></div>
//                 </div>
//               </div>
//               <input
//                 type="search"
//                 placeholder="search"
//                 className="search"
//                 ref={searchRef}
//               />
//             </button>

//             {[...Array(4)].map((_, index) => (
//               <div
//                 key={index}
//                 className={`nav-items items${index + 1}`}
//                 ref={(el) => (navItemsRef.current[index] = el)}
//               >
//                 <i
//                   className={`fas fa-${
//                     ["home", "camera", "folder", "heart"][index]
//                   }`}
//                 ></i>
//               </div>
//             ))}
//             <div className="box" ref={boxRef}>
//               {[...Array(4)].map((_, index) => (
//                 <div
//                   key={index}
//                   className={`box-line box-line${index + 1}`}
//                   ref={(el) => (boxLinesRef.current[index] = el)}
//                 ></div>
//               ))}
//             </div>
//           </div>

//           <div className="effect" ref={effectRef}></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBar;


import React from 'react';
import logo from '../image/logo.png';
import '../style/navbar.css';

const NavBar = () => {
  return (
    <div className='navbar'>
      <img id='logo' src={logo} alt='Лого'/>
      <a className='text-model' href='/model'>Model</a>
    </div>
  );
};

export default NavBar;