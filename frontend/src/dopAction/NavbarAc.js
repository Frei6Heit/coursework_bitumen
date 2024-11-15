// import React, { useEffect, useRef } from "react";


// function NavbarAC() {
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
//     // Обработчик для "circle"
//     const handleCircleClick = () => {
//       for (let i = 0; i <= 3; i++) {
//         navItemsRef.current[i]?.classList.remove("show-menu");
//         boxLinesRef.current[i]?.classList.remove("box-line-show");
//       }
//       boxRef.current?.classList.remove("box-show");
//       addRef.current?.classList.toggle("go");
//       searchRef.current?.classList.toggle("search-focus");
//       searchRef.current?.focus();
//       circleRef.current?.classList.toggle("color");
//       line1Ref.current?.classList.toggle("move");
//       line2Ref.current?.classList.toggle("mov");
//       effectRef.current?.classList.toggle("big");
//     };

//     // Обработчик для "menu"
//     const handleMenuClick = () => {
//       for (let i = 0; i <= 3; i++) {
//         boxRef.current?.classList.remove("box-show");
//         navItemsRef.current[i]?.classList.toggle("show-menu");
//         boxLinesRef.current[i]?.classList.remove("box-line-show");
//       }
//     };

//     // Обработчик для "gallery"
//     const handleGalleryClick = () => {
//       boxRef.current?.classList.toggle("box-show");
//       for (let i = 0; i <= 3; i++) {
//         boxLinesRef.current[i]?.classList.toggle("box-line-show");
//         navItemsRef.current[i]?.classList.remove("show-menu");
//       }
//     };

//     // Добавляем обработчики событий
//     circleRef.current?.addEventListener("click", handleCircleClick);
//     menuRef.current?.addEventListener("click", handleMenuClick);
//     galleryRef.current?.addEventListener("click", handleGalleryClick);

//     // Удаляем обработчики при размонтировании
//     return () => {
//       circleRef.current?.removeEventListener("click", handleCircleClick);
//       menuRef.current?.removeEventListener("click", handleMenuClick);
//       galleryRef.current?.removeEventListener("click", handleGalleryClick);
//     };
//   }, []);

//   return (
//     <div>
//       <div ref={circleRef} className="circle">Circle</div>
//       <div ref={menuRef} className="menu">Menu</div>
//       <div ref={galleryRef} className="gallery">Gallery</div>
//       <div ref={boxRef} className="box">Box</div>
//       <div ref={addRef} className="add">Add</div>
//       <input ref={searchRef} className="search" type="text" placeholder="Search" />
//       <div ref={line1Ref} className="line1">Line 1</div>
//       <div ref={line2Ref} className="line2">Line 2</div>
//       <div ref={effectRef} className="effect">Effect</div>

//       {[0, 1, 2, 3].map((_, index) => (
//         <div
//           key={index}
//           ref={(el) => (navItemsRef.current[index] = el)}
//           className="nav-items"
//         >
//           Nav Item {index + 1}
//         </div>
//       ))}

//       {[0, 1, 2, 3].map((_, index) => (
//         <div
//           key={index}
//           ref={(el) => (boxLinesRef.current[index] = el)}
//           className="box-line"
//         >
//           Box Line {index + 1}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default NavbarAC;
