import { useState } from "react";

function Rectangle() {
  const [rec, userec] = useState("");
  const [rec1, userec1] = useState("");
  const [rec2, userec2] = useState("");

  const handleRectangle = () => {
    const cpc = parseFloat(rec);
    const cpc1 = parseFloat(rec1);

    if (cpc === "" || cpc1 === "") {
      alert("Please Enter a Number");
      return;
    }

    if (Number.isNaN(cpc || cpc1)) {
      alert("Please Enter a Number");
      return;
    }

    userec2(cpc * cpc1);
  };
  return (
    <>
      <div className="cubeSetUp">
        <label className="length">Enter Value of Width:</label>
        <input
          type="number"
          className="cubeInput"
          value={rec}
          onChange={(e) => userec(e.target.value)}
        />
        <div className="div">
          <label className="length">Enter Value of length:</label>
          <input
            type="number"
            className="cubeInput"
            value={rec1}
            id="cb"
            onChange={(e) => userec1(e.target.value)}
          />
        </div>
        <button className="solveBtn" onClick={handleRectangle}>
          Solve
        </button>
        <p className="answer">Answer: {rec2}</p>
      </div>
    </>
  );
}

export default Rectangle;
