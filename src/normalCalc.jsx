import Welcome from "./App.jsx";
import "./normalCalc.css";
import { useState } from "react";

function NormalCalc() {
  const [input, setInput] = useState("");

  // Handles all button clicks
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Clears screen
  const handleClear = () => {
    setInput("");
  };

  // Delete last character
  const handleBack = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  // Evaluates the result
  const handleEqual = () => {
    try {
      const result = eval(input);
      setInput(String(result));
    } catch (error) {
      setInput("Error");
    }
  };
  return (
    <>
      <div className="calc">
        <div className="display">
          <input type="text" value={input} readOnly className="text" />
        </div>
        <div className="btns">
          <button onClick={handleClear}>AC</button>
          <button onClick={handleBack}>DEL</button>
          <button onClick={() => handleClick("%")}>%</button>
          <button onClick={() => handleClick("/")}>/</button>
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("*")}>*</button>
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button className="lastbtn" onClick={handleEqual}>
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default NormalCalc;
