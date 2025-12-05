import "./Cube.css";
import { useState } from "react";

function Cube() {
  const [num, setNum] = useState("");
  const [ans, setAns] = useState("");

  const handleCube = () => {
    const init = parseFloat(num);
    if (num === "") {
      setAns("Please Enter a Number");
      alert("Please Enter a Number");
      return;
    }

    if (isNaN(init)) {
      setAns("Only Numbers are allowed");
      alert("Only Numbers are allowed");
      return;
    }

    setAns(init * init * init);
  };
  return (
    <>
      <div className="cubeSetUp">
        <label>Enter the length</label>
        <input
          type="number"
          className="cubeInput"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <button className="solveBtn" onClick={handleCube}>
          Solve
        </button>
        <p className="answer">Answer: {ans}</p>
      </div>
    </>
  );
}

export default Cube;
