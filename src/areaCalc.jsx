import { Link } from "react-router-dom";

function Area() {
  return (
    <>
      <div className="volumeContainer">
        <h1 className="shape">Choose Shape</h1>
        <div className="shapeContainer">
          <Link className="homebtn1" to="/Square">
            <p>Square</p>
          </Link>
          <Link className="homebtn1" to="/Rectangle">
            <p>Rectangle</p>
          </Link>
          <Link className="homebtn1" to="/Triangle">
            <p>Triangle</p>
          </Link>
          <Link className="homebtn1" to="/Circle">
            <p>Circle</p>
          </Link>
          <Link className="homebtn1" to="/Parallelogram">
            <p>Parallelogram</p>
          </Link>
          <Link className="homebtn1" to="/Trapezium">
            <p>Trapezium</p>
          </Link>
          <Link className="homebtn1" to="/Rhombus">
            <p>Rhombus</p>
          </Link>
          <Link className="homebtn1" to="/Ellipse">
            <p>Ellipse</p>
          </Link>
        </div>
      </div>

    </>
  );
}

export default Area;
