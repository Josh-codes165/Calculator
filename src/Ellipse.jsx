import { useState } from "react";

function Ellipse() {
  const [IBSrec, IBSuserec] = useState("");
  const [IBSrec1, IBSuserec1] = useState("");
  const [IBSrec2, IBSuserec2] = useState("");
  const [IBSrec3, IBSuserec3] = useState("");

  const handleParallelogram = () => {
    const IBScpc = parseFloat(IBSrec);
    const IBScpc1 = parseFloat(IBSrec1);
    const IBScpc2 = parseFloat(IBSrec2);

    if (IBScpc === "" || IBScpc1 === "" || IBScpc2 === "") {
      alert("Please Enter a Number");
      return;
    }

    if (Number.isNaN(IBScpc || IBScpc1 || IBScpc2)) {
      alert("Please Enter a Number");
      return;
    }

    IBSuserec3(IBScpc * IBScpc1 * IBScpc2);
  };
  return (
    <>
      <div className="cubeSetUp">
        <label className="length">Enter Value of PI:</label>
        <input
          type="number"
          className="cubeInput"
          value={IBSrec}
          onChange={(e) => IBSuserec(e.target.value)}
        />
        <div className="div">
          <label className="length">Enter Value of Semi-Major axis:</label>
          <input
            type="number"
            className="cubeInput"
            value={IBSrec1}
            id="cb"
            onChange={(e) => IBSuserec1(e.target.value)}
          />
        </div>
        <div className="div">
          <label className="length">Enter Value of Semi-Minor axis:</label>
          <input
            type="number"
            className="cubeInput"
            value={IBSrec2}
            id="cb"
            onChange={(e) => IBSuserec2(e.target.value)}
          />
        </div>
        <button className="solveBtn" onClick={handleParallelogram}>
          Solve
        </button>
        <p className="answer">Answer: {IBSrec3}</p>
      </div>
    </>
  );
}

export default Ellipse