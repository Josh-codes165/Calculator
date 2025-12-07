import { useState } from "react";

function Parallelogram() {
  const [BSrec, BSuserec] = useState("");
  const [BSrec1, BSuserec1] = useState("");
  const [BSrec2, BSuserec2] = useState("");

  const handleParallelogram = () => {
    const BScpc = parseFloat(BSrec);
    const BScpc1 = parseFloat(BSrec1);

    if (BScpc === "" || BScpc1 === "") {
      alert("Please Enter a Number");
      return;
    }

    if (Number.isNaN(BScpc || BScpc1)) {
      alert("Please Enter a Number");
      return;
    }

    BSuserec2(BScpc * BScpc1);
  };
  return (
    <>
      <div className="cubeSetUp">
        <label className="length">Enter Base Value:</label>
        <input
          type="number"
          className="cubeInput"
          value={BSrec}
          onChange={(e) => BSuserec(e.target.value)}
        />
        <div className="div">
          <label className="length">Enter Height Value:</label>
          <input
            type="number"
            className="cubeInput"
            value={BSrec1}
            id="cb"
            onChange={(e) => BSuserec1(e.target.value)}
          />
        </div>
        <button className="solveBtn" onClick={handleParallelogram}>
          Solve
        </button>
        <p className="answer">Answer: {BSrec2}</p>
      </div>
    </>
  );
}


export default Parallelogram