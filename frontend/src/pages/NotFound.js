import { TypeAnimation } from "react-type-animation";
import "../style/notfound.css";
import '../App.css';

const NotFound = () => {
  return (
    <div className="background">
      <div className="text">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "We produce food for Mice",
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          cursorColor="#333"
          cursor
          //   repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default NotFound;
