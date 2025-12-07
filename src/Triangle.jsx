import { useState } from "react";

function Triangle() {
  const [Srec, Suserec] = useState("");
  const [Srec1, Suserec1] = useState("");
  const [Srec2, Suserec2] = useState("");

  const handleTriangle = () => {
    const Scpc = parseFloat(Srec);
    const Scpc1 = parseFloat(Srec1);

    if (Scpc === "" || Scpc1 === "") {
      alert("Please Enter a Number");
      return;
    }

    if (Number.isNaN(Scpc || Scpc1)) {
      alert("Please Enter a Number");
      return;
    }

    Suserec2((1 / 2) * Scpc * Scpc1);
  };
  return (
    <>
      <div className="cubeSetUp">
        <label className="length">Enter Base Value:</label>
        <input
          type="number"
          className="cubeInput"
          value={Srec}
          onChange={(e) => Suserec(e.target.value)}
        />
        <div className="div">
          <label className="length">Enter Height Value:</label>
          <input
            type="number"
            className="cubeInput"
            value={Srec1}
            id="cb"
            onChange={(e) => Suserec1(e.target.value)}
          />
        </div>
        <button className="solveBtn" onClick={handleTriangle}>
          Solve
        </button>
        <p className="answer">Answer: {Srec2}</p>
      </div>
    </>
  );
}

export default Triangle;
