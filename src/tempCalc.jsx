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
          <h1 className="temp">Temperature Converter</h1>
        </div>
        <div className="inputSection">
          <div className="enter" id="kk">
            <label className='length1' id='nm'>Enter Celcius Temperature:</label>
            <input
              type="number"
              className="tempInput"
              placeholder="Enter value"
              value={celcius}
              onChange={(e) => setCelcius(e.target.value)}
            />
          </div>
          <div className="enter">
            <label className='length1' >Choose Unit</label>
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
          <p className="answer1">Coverted Temperature: {result}</p>
        </div>
      </div>
    </>
  );
}

export default Temperature;
