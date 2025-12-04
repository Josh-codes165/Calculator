import img1 from "./assets/Clock.png";
import img2 from "./assets/Calculator.png";
import img3 from "./assets/Volume.png";
import img4 from "./assets/Temperature.png";
import img5 from "./assets/Area.png";
import img6 from "./assets/Weight.png";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <>
      <div className="entire">
        <div className="welcome">
          <h1>Welcome to Calculator App</h1>
          <p className="choose">Choose a mode </p>
        </div>
        <div className="images">
          <Link to="/normalCalc">
            <div className="img1">
              <img src={img2} alt="" srcset="" className="" />
              <p>Normal Calculator</p>
            </div>
          </Link>
          <Link to="/volumeCalc">
            <div className="img1">
              <img src={img3} alt="" srcset="" className="" />

              <p>Volume Calculator</p>
            </div>
          </Link>
          <Link to="/areaCalc">
            <div className="img1">
              <img src={img5} alt="" srcset="" className="img2" />

              <p>Area Conversion</p>
            </div>
          </Link>
          <Link to="/tempCalc">
            <div className="img1">
              <img src={img4} alt="" srcset="" className="" />

              <p>Temperature Conversion</p>
            </div>
          </Link>
          <Link to="/timeCalc">
            <div className="img1">
              <img src={img1} alt="" srcset="" className="" />

              <p>Time Conversion</p>
            </div>
          </Link>
          <Link to="/weightCalc">
            <div className="img1">
              <img src={img6} alt="" srcset="" className="" />

              <p>Weight Conversion</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Welcome;
