import "./timeCalc.css";
import { useState } from "react";

function Time() {
  const unitToMs = {
    hours: 3600000,
    minutes: 60000,
    seconds: 1000,
    milliseconds: 1,
  };
  const [input, setInput] = useState("");
  const [fromUnit, setFromUnit] = useState("hours");
  const [toUnit, setToUnit] = useState("minutes");
  const [result, setResult] = useState(null);
  const handleConvert = () => {
    const value = parseFloat(input);

    if (input === "") {
      alert("Please enter a value.");
      return;
    }
    if (Number.isNaN(value)) {
      alert("Enter a valid number (e.g. 2.5).");
      return;
    }

    if (!(fromUnit in unitToMs) || !(toUnit in unitToMs)) {
      alert("Please pick valid units.");
      return;
    }

    const ms = value * unitToMs[fromUnit];
    const converted = ms / unitToMs[toUnit];

    const pretty = Number.isInteger(converted)
      ? converted
      : parseFloat(converted.toFixed(6));
    setResult(pretty);
  };
  return (
    <>
      <div className="timeConatiner">
        <h1 className="ti">Time Converter</h1>
        <div className="timeControls">
          <div className="controls">
            <label className="length">Enter the Time</label>
            <input
              type="number"
              className="titi"
              min={0}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className="controls">
            <label className="length">Time From:</label>
            <select
              name=""
              id=""
              className="select"
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
            >
              <option value="hours">Hours</option>
              <option value="minutes">Minutes</option>
              <option value="seconds">Seconds</option>
              <option value="milliseconds">MiliSeconds</option>
            </select>
          </div>
          <div className="controls">
            <label className="length">Time To:</label>
            <select
              name=""
              id=""
              className="select"
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
            >
              <option value="hours">Hours</option>
              <option value="minutes">Minutes</option>
              <option value="seconds">Seconds</option>
              <option value="milliseconds">MiliSeconds</option>
            </select>
          </div>
          <button className="convertBtn" onClick={handleConvert}>
            Convert
          </button>
          <p className="answer1">
            Converted Time: {result === null ? "—" : result}
          </p>
        </div>
      </div>
    </>
  );
}

export default Time;
