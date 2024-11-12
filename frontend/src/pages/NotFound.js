import { TypeAnimation } from "react-type-animation";
import "../style/notfound.css";

import { useNavigate } from "react-router-dom";

// const NotFound = () => {
//   const navigate = useNavigate();

// // import '../App.css';

//     const NotFound = () => {
//       return (
//         <div className="background">
//           <div className="text">
//             <TypeAnimation
//               sequence={[
//                 'Error, page not found',
//                 1000,
//                 'Ошибка, страница не найдена',
//                 1000
//               ]}
//               wrapper="span"
//               speed={50}
//               style={{ fontSize: "2em", display: "inline-block" }}
//               cursorColor="#333"
//               cursor
//               //   repeat={Infinity}
//             />
//           </div>
//           <div>
//             <button className="button-back" onClick={history.go(-1)}>
//               Назад
//             </button>
//           </div>
//         </div>
//       );
//     };

// export default NotFound;


const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Аналогично history.goBack()
  };

  return (
            <div className="background">
              <div className="text">
                <TypeAnimation
                  sequence={[
                    'Error, page not found',
                    1000,
                    'Ошибка, страница не найдена',
                    1000
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "2em", display: "inline-block" }}
                  cursorColor="#333"
                  cursor
                  //   repeat={Infinity}
                />
              </div>
              <div>
                <button className="button-back" onClick={handleGoBack}>
                  Назад
                </button>
              </div>
            </div>
          );
};

export default NotFound;
