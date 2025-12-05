import { Link } from "react-router-dom";
import "./volumeCalc.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Volume() {
  return (
    <>
      <div className="volumeContainer">
        <h1 className="shape">Choose Shape</h1>
        <div className="shapeContainer">
          <Link className="homebtn1" to="/Cube">
            <p>Cube</p>
          </Link>
          <Link className="homebtn1" to="/Cuboid">
            <p>Rectangular Prism (Cuboid)</p>
          </Link>
          <Link className="homebtn1" to="/Sphere">
            <p>Sphere</p>
          </Link>
          <Link className="homebtn1" to="/Cylinder">
            <p>Cylinder</p>
          </Link>
          <Link className="homebtn1" to="/Cone">
            <p>Cone</p>
          </Link>
          <Link className="homebtn1" to="/Pyramid">
            <p>Pyramid</p>
          </Link>
          <Link className="homebtn1" to="/Hemisphere">
            <p>Hemisphere</p>
          </Link>
          <Link className="homebtn1" to="/Frustrum of a cone">
            <p>Frustum of a Cone</p>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Volume;

