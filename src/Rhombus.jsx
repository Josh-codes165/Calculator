import { useState } from "react";

function Rhombus() {
  const [WBSrec, WBSuserec] = useState("");
  const [WBSrec1, WBSuserec1] = useState("");
  const [WBSrec2, WBSuserec2] = useState("");

  const handleRhombus = () => {
    const WBScpc = parseFloat(WBSrec);
    const WBScpc1 = parseFloat(WBSrec1);

    if (WBScpc === "" || WBScpc1 === "") {
      alert("Please Enter a Number");
      return;
    }

    if (Number.isNaN(WBScpc || WBScpc1)) {
      alert("Please Enter a Number");
      return;
    }

    WBSuserec2((1/2) * (WBScpc * WBScpc1));
  };
  return (
    <>
      <div className="cubeSetUp">
        <label className="length">Enter Shorter Diagonal:</label>
        <input
          type="number"
          className="cubeInput"
          value={WBSrec}
          onChange={(e) => WBSuserec(e.target.value)}
        />
        <div className="div">
          <label className="length">Enter Longer Diagonal:</label>
          <input
            type="number"
            className="cubeInput"
            value={WBSrec1}
            id="cb"
            onChange={(e) => WBSuserec1(e.target.value)}
          />
        </div>
        <button className="solveBtn" onClick={handleRhombus}>
          Solve
        </button>
        <p className="answer">Answer: {WBSrec2}</p>
      </div>
    </>
  );
}

export default Rhombus