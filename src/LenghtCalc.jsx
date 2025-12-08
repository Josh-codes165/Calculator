import { useState } from "react";

function Lenght() {
  const [input, setInput] = useState("");
  const [fromUnit, setFromUnit] = useState("meters");
  const [toUnit, setToUnit] = useState("meters");
  const [result, setResult] = useState("");

  const unitToMeters = {
    meters: 1,
    centimeters: 0.01,
    feet: 0.3048,
    miles: 1609.34,
  };

  const handleConvert = () => {
    if (input === "") {
      alert("Please enter a length.");
      return;
    }

    const valueInMeters = parseFloat(input) * unitToMeters[fromUnit];
    const finalValue = valueInMeters / unitToMeters[toUnit];

    setResult(finalValue);
  };
  return (
    <>
      <div className="timeConatiner">
        <h1 className="ti">Length Converter</h1>
        <div className="timeControls">
          <div className="controls">
            <label className="length">Enter Length</label>
            <input
              type="number"
              className="titi"
              min={0}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          <div className="controls">
            <label className="length">Length From:</label>
            <select
              className="select"
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
            >
              <option value="meters">Meters</option>
              <option value="centimeters">Centimeters </option>
              <option value="feet">Feet </option>
              <option value="miles">Miles</option>
            </select>
          </div>

          <div className="controls">
            <label className="length">Length To:</label>
            <select
              className="select"
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
            >
              <option value="meters">Meters</option>
              <option value="centimeters">Centimeters</option>
              <option value="feet">Feet</option>
              <option value="miles">Miles </option>
            </select>
          </div>

          <button className="convertBtn" onClick={handleConvert}>
            Convert
          </button>

          <p className="answer1">Converted Length: {result}</p>
        </div>
      </div>
    </>
  );
}

export default Lenght;
