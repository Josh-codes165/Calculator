import "./Cuboid.css";
import { useState } from "react";

function Cuboid() {
  const [num3, setNum3] = useState("");
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [ans1, setAns1] = useState("");

  const handleCube1 = () => {
    const init3 = parseFloat(num3);
    const init1 = parseFloat(num1);
    const init2 = parseFloat(num2);
    if (num3 === "" || num1 === "" || num2 === "") {
      alert("Please Enter a Number");
      return;
    }

    if (isNaN(init3 || init1 || init2)) {
      alert("Only Numbers are allowed");
      return;
    }

    setAns1(init3 * init1 * init2);
  };
  return (
    <>
      <div className="cuboidSetUp">
        <label>Enter the length</label>
        <input
          type="number"
          className="cuboidInput"
          value={num3}
          onChange={(e) => setNum3(e.target.value)}
        />
        <label>Enter the Width</label>
        <input
          type="number"
          className="cuboidInput"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <label>Enter the Height</label>
        <input
          type="number"
          className="cuboidInput"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <button className="solveBtn" onClick={handleCube1}>
          Solve
        </button>
        <p className="answer">Answer: {ans1}</p>
      </div>
    </>
  );
}

export default Cuboid;
