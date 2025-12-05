import { Link } from "react-router-dom";
import "./volumeCalc.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Volume() {
  return (
    <>
      <div className="volumeContainer">
        <h1 className="shape">Choose Shape</h1>
        <div className="shapeContainer">
          <Link to="/Cube">
            <p>Cube</p>
          </Link>
          <Link to="/Cuboid">
            <p>Rectangular Prism (Cuboid)</p>
          </Link>
          <Link to="/Sphere">
            <p>Sphere</p>
          </Link>
          <Link to="/Cylinder">
            <p>Cylinder</p>
          </Link>
          <Link to="/Cone">
            <p>Cone</p>
          </Link>
          <Link to="/Pyramid">
            <p>Pyramid</p>
          </Link>
          <Link to="/Hemisphere">
            <p>Hemisphere</p>
          </Link>
          <Link to="/Cone">
            <p>Frustum of a Cone:</p>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Volume;

