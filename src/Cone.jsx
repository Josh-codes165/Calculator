import { useState } from "react";

function Cone() {
  const [uni, useuni] = useState("");
  const [uni1, useuni1] = useState("");
  const [uni2, useuni2] = useState("");
  const [uni3, useuni3] = useState("");

  const handleCone = () => {
    const sec = parseFloat(uni);
    const sec1 = parseFloat(uni1);
    const sec2 = parseFloat(uni2);

    if (sec === "" || sec1 === "" || sec2 === "") {
      alert("Please Enter a Number");
      return;
    }

    if (Number.isNaN(sec || sec1 || sec2)) {
      alert("Please Enter a Number");
      return;
    }

    useuni3((1 / 3) * sec * (sec1 * sec1) * sec2);
  };
  return (
    <>
      <div className="cubeSetUp">
        <label className="length">Enter the Value PI</label>
        <input
          type="number"
          className="cubeInput"
          value={uni}
          onChange={(e) => useuni(e.target.value)}
        />
        <div className="div">
          <label className="length">Enter the Radius of the Cone</label>
          <input
            type="number"
            className="cubeInput"
            id="cb"
            value={uni1}
            onChange={(e) => useuni1(e.target.value)}
          />
        </div>
        <div className="div">
          <label className="length">Enter the height of the Cone</label>
          <input
            type="number"
            className="cubeInput"
            value={uni2}
            id="cb"
            onChange={(e) => useuni2(e.target.value)}
          />
        </div>
        <button className="solveBtn" onClick={handleCone}>
          Solve
        </button>
        <p className="answer">Answer: {uni3} </p>
      </div>
    </>
  );
}

export default Cone;
