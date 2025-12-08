import img1 from "./assets/Clock.png";
import img2 from "./assets/Calculator.png";
import img3 from "./assets/Volume.png";
import img4 from "./assets/Temperature.png";
import img5 from "./assets/Area.png";
import img6 from "./assets/Weight.png";
import img7 from "./assets/Discount.png";
import img8 from "./assets/Interest.png";
import img9 from "./assets/Length.png";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <>
      <div className="entire">
        <div className="welcome">
          <h1 className="make">Welcome to <span className="josh">Joshua's</span> Calculator App</h1>
          <p className="choose">Choose a mode </p>
        </div>
        <div className="images">
          <Link className="homebtn" to="/normalCalc">
            <div className="img1">
              <img src={img2} alt="" srcset="" className="" />
              <p>Normal Calculator</p>
            </div>
          </Link>
          <Link className="homebtn" to="/volumeCalc">
            <div className="img1">
              <img src={img3} alt="" srcset="" className="" />

              <p>Volume Calculator</p>
            </div>
          </Link>
          <Link className="homebtn" to="/areaCalc">
            <div className="img1">
              <img src={img5} alt="" srcset="" className="img2" />

              <p>Area Conversion</p>
            </div>
          </Link>
          <Link className="homebtn" to="/tempCalc">
            <div className="img1">
              <img src={img4} alt="" srcset="" className="" />

              <p>Temperature Conversion</p>
            </div>
          </Link>
          <Link className="homebtn" to="/timeCalc">
            <div className="img1">
              <img src={img1} alt="" srcset="" className="" />

              <p>Time Conversion</p>
            </div>
          </Link>
          <Link className="homebtn" to="/weightCalc">
            <div className="img1">
              <img src={img6} alt="" srcset="" className="" />

              <p>Mass Conversion</p>
            </div>
          </Link>
          <Link className="homebtn" to="/DiscountCalc">
            <div className="img1">
              <img src={img7} alt="" srcset="" className="" />

              <p>Discount Calculator</p>
            </div>
          </Link>
          <Link className="homebtn" to="/InterestCalc">
            <div className="img1">
              <img src={img8} alt="" srcset="" className="" />

              <p> Simple Interest Calculator</p>
            </div>
          </Link>
          <Link className="homebtn" to="/LenghtCalc">
            <div className="img1">
              <img src={img9} alt="" srcset="" className="" />

              <p>Length Conversion</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Welcome;
