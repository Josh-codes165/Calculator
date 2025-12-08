import React, { useState } from "react";

function WeightCalc() {

  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("kilogram");
  const [toUnit, setToUnit] = useState("kilogram");
  const [result, setResult] = useState("");

  const toGrams = {
    kilogram: 1000,
    grams: 1,
    milligram: 0.001,
    tonne: 1000000,
    hectogram: 100
  };

  const handleConvert = () => {
    if (value === "") {
      alert("Please enter a number");
      return;
    }

    const num = Number(value);

    if (isNaN(num)) {
      alert("Invalid number");
      return;
    }

    
    const grams = num * toGrams[fromUnit];


    const converted = grams / toGrams[toUnit];

    setResult(converted);
  };

  return (
    <>
      <div className="timeConatiner">
        <h1 className="ti">Weight Converter</h1>
        <div className="timeControls">

          <div className="controls">
            <label className="length">Enter Mass</label>
            <input
              type="number"
              className="titi"
              min={0}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>

          <div className="controls">
            <label className="length">Mass From:</label>
            <select
              className="select"
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
            >
              <option value="kilogram">Kilogram (Kg)</option>
              <option value="grams">Grams (g)</option>
              <option value="milligram">Milligram (mg)</option>
              <option value="tonne">Tonne (t)</option>
              <option value="hectogram">Hectogram (hg)</option>
            </select>
          </div>

          <div className="controls">
            <label className="length">Mass To:</label>
            <select
              className="select"
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
            >
              <option value="kilogram">Kilogram (kg)</option>
              <option value="grams">Grams (g)</option>
              <option value="milligram">Milligram (mg)</option>
              <option value="tonne">Tonne (t)</option>
              <option value="hectogram">Hectogram (hg)</option>
            </select>
          </div>

          <button
            className="convertBtn"
            onClick={handleConvert}
          >
            Convert
          </button>

          <p className="answer1">Converted Mass: {result}</p>
        </div>
      </div>
    </>
  );
}

export default WeightCalc;
