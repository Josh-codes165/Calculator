import "./App.css";
import Welcome from "./Home.jsx";
import NormalCalc from "./normalCalc.jsx";
import Temperature from "./tempCalc.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Time from "./timeCalc.jsx";
import Volume from "./volumeCalc.jsx";
import Cube from "./Cube.jsx";
import Cuboid from "./Cuboid.jsx";
import Sphere from "./Sphere.jsx";
import Cylinder from "./Cylinder.jsx";
import Cone from "./Cone.jsx";
import Pyramid from "./Pyramid.jsx";
import Hemisphere from "./Hemisphere.jsx";
import FrustrumOfaCone from "./Frustrum of a cone.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/normalCalc" element={<NormalCalc />} />
        <Route path="/tempCalc" element={<Temperature />} />
        <Route path="/timeCalc" element={<Time />} />
        <Route path="/volumeCalc" element={<Volume />} />
        <Route path="/Cube" element={<Cube />} />
        <Route path="/Cuboid" element={<Cuboid />} />
        <Route path="/Sphere" element={<Sphere/>} />
        <Route path="/Cylinder" element={<Cylinder/>} />
        <Route path="/Cone" element={<Cone/>} />
        <Route path="/Pyramid" element={<Pyramid/>} />
        <Route path="/Hemisphere" element={<Hemisphere/>} />
        <Route path="/Frustrum of a cone" element={<FrustrumOfaCone/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
