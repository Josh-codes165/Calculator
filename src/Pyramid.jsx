import { useState } from "react";

function Pyramid() {
  const [non, usenon] = useState("");
  const [non1, usenon1] = useState("");
  const [non2, usenon2] = useState("");

  const handlePyramid = () => {
    const no = parseFloat(non);
    const no1 = parseFloat(non1);

    if (no === "" || no1 === "") {
      alert("Please Enter a Number");
      return;
    }

    if (Number.isNaN(no || no1)) {
      alert("Please Enter a Number");
      return;
    }

    usenon2((1/3) * non * non1)
  };
  return (
    <>
      <div className="cubeSetUp">
        <label className="length">Enter the Base Area of the pyramid:</label>
        <input
          type="number"
          className="cubeInput"
          value={non}
          onChange={(e) => usenon(e.target.value)}
        />
        <div className="div">
            <label className="length">Enter the Height Of the Pyramid:</label>
          <input
            type="number"
            className="cubeInput"
            value={non1}
            id="cb"
            onChange={(e) => usenon1(e.target.value)}
          />
        </div>
        <button className="solveBtn" onClick={handlePyramid}>
          Solve
        </button>
        <p className="answer">Answer: {non2}</p>
      </div>
    </>
  );
}

export default Pyramid;
