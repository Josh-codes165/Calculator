import "./App.css";
import Welcome from "./Home.jsx";
import NormalCalc from "./normalCalc.jsx";
import Temperature from "./tempCalc.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Time from "./timeCalc.jsx";
import Volume from "./volumeCalc.jsx";
import Cube from "./Cube.jsx";
import Cuboid from "./Cuboid.jsx";

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
        <Route path="/Cuboid" element={<Cuboid />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
