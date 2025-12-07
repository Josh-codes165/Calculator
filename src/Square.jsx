import { useState } from "react";

function Square() {
  const [ee, useee] = useState("");
  const [ee1, useee1] = useState("");

  const handleSquare = () => {
    const yu = parseFloat(ee);
    if (yu === "") {
      alert("Please Enter a Number");
      return;
    }

    if (isNaN(yu)) {
      alert("Only Numbers are allowed");
      return;
    }

    useee1(yu * yu)
  };
  return (
    <>
      <div className="cubeSetUp">
        <label className="length">Enter length One Side:</label>
        <input
          type="number"
          className="cubeInput"
          value={ee}
          onChange={(e) => useee(e.target.value)}
        />
        <button className="solveBtn" onClick={handleSquare}>Solve</button>
        <p className="answer" >
          Answer: {ee1}
        </p>
      </div>
    </>
  );
}

export default Square;
