import "./App.css";
import Welcome from "./Home.jsx";
import NormalCalc from "./normalCalc.jsx";
import Temperature from "./tempCalc.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Time from "./timeCalc.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/normalCalc" element={<NormalCalc />} />
        <Route path="/tempCalc" element={<Temperature />}/>
        <Route path="/timeCalc" element={<Time/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
