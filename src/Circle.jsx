import { useState } from "react";

function Circle() {
  const [ASrec, ASuserec] = useState("");
  const [ASrec1, ASuserec1] = useState("");
  const [ASrec2, ASuserec2] = useState("");

  const handleCircle = () => {
    const AScpc = parseFloat(ASrec);
    const AScpc1 = parseFloat(ASrec1);

    if (AScpc === "" || AScpc1 === "") {
      alert("Please Enter a Number");
      return;
    }

    if (Number.isNaN(AScpc || AScpc1)) {
      alert("Please Enter a Number");
      return;
    }

    ASuserec2(AScpc * (AScpc1 * AScpc1));
  };
  return (
    <>
      <div className="cubeSetUp">
        <label className="length">Enter Value Of PI:</label>
        <input
          type="number"
          className="cubeInput"
          value={ASrec}
          onChange={(e) => ASuserec(e.target.value)}
        />
        <div className="div">
          <label className="length">Enter Value of Radius:</label>
          <input
            type="number"
            className="cubeInput"
            value={ASrec1}
            id="cb"
            onChange={(e) => ASuserec1(e.target.value)}
          />
        </div>
        <button className="solveBtn" onClick={handleCircle}>
          Solve
        </button>
        <p className="answer">Answer: {ASrec2}</p>
      </div>
    </>
  );
}

export default Circle
