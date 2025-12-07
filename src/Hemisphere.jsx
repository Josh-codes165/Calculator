import { useState } from "react";

function Hemisphere() {
  const [inf, useinf] = useState("");
  const [inf1, useinf1] = useState("");
  const [inf2, useinf2] = useState("");

  const handleHemisphere = () => {
    const lap = parseFloat(inf);
    const lap2 = parseFloat(inf1);

    if (lap === "" || lap2 === "") {
      alert("Please Enter a Number");
      return;
    }

    if (Number.isNaN(lap || lap2)) {
      alert("Please Enter a Number");
      return;
    }

    useinf2((2 / 3) * inf * (inf1 * inf1 * inf1));
  };
  return (
    <>
      <div className="cubeSetUp">
        <label className="length">Enter the Value of PI:</label>
        <input
          type="number"
          className="cubeInput"
          value={inf}
          onChange={(e) => useinf(e.target.value)}
        />
        <div className="div">
          <label className="length">Enter the Radius of Hemisphere:</label>
          <input
            type="number"
            className="cubeInput"
            value={inf1}
            id="cb"
            onChange={(e) => useinf1(e.target.value)}
          />
        </div>
        <button className="solveBtn" onClick={handleHemisphere}>
          Solve
        </button>
        <p className="answer">Answer: {inf2}</p>
      </div>
    </>
  );
}

export default Hemisphere;
