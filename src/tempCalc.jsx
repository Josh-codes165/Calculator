import React from "react";
import "./tempCalc.css";
import { useState } from "react";

function Temperature() {
  const [celcius, setCelcius] = useState("");
  const [unit, setUnit] = useState("");
  const [result, setResult] = useState("");

  const handleConvert = () => {
    const c = parseFloat(celcius);

    if (unit === "fahrenheit") {
      setResult(((c * 9) / 5 + 32).toFixed(2) + " °F");
    } else {
      setResult((c + 273.15).toFixed(2) + " K");
    }
  };
  return (
    <>
      <div className="total">
        <div className="top">
          <h1>Temperature Converter</h1>
        </div>
        <div className="inputSection">
          <div className="enter">
            <labe>Enter Celcius Temperature</labe>
            <input
              type="number"
              className="tempInput"
              placeholder="Enter value"
              value={celcius}
              onChange={(e) => setCelcius(e.target.value)}
            />
          </div>
          <div className="enter">
            <labe>Choose Unit</labe>
            <select
              name=""
              id=""
              className="tempInput"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            >
              <option value="fahrenheit">Fahrenheit</option>
              <option value="kelvin">Kelvin</option>
            </select>
          </div>
          <button className="convertBtn" onClick={handleConvert}>Convert</button>
          <p>Coverted Temperature: {result}</p>
        </div>
      </div>
    </>
  );
}

export default Temperature;
