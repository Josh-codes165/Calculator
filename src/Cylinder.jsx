import { useState } from "react";

function Cylinder() {
  const [cyl, usecyl] = useState("");
  const [cyl1, usecyl1] = useState("");
  const [cyl2, usecyl2] = useState("");
  const [cyl3, usecyl3] = useState("");

  const handleSphere = () => {

    const in3 = parseFloat(cyl)
    const in1 = parseFloat(cyl1)
    const in2 = parseFloat(cyl2)

    if (in3 === "" || in1 === "" || in2 === "") {
      alert("Please Enter a Number");
      return;
    }

    if (Number.isNaN(in3 || in1 || in2)) {
      alert("Please Enter a Number");
      return;
    }

    usecyl3(in3 * (in1 * in1) * in2)
  };

  return (
    <>
      <div className="cubeSetUp">
        <label className="length">Enter the Value PI</label>
        <input
          type="number"
          className="cubeInput"
          value={cyl}
          onChange={(e) => usecyl(e.target.value)}
        />
        <div className="div">
            <label className="length">Enter the Radius of the Cylinder</label>
          <input
            type="number"
            className="cubeInput"
            id="cb"
            value={cyl1}
            onChange={(e) => usecyl1(e.target.value)}
          />
        </div>
        <div className="div">
            <label className="length">Enter the height of the Cylinder</label>
          <input
            type="number"
            className="cubeInput"
            value={cyl2}
            id="cb"
            onChange={(e) => usecyl2(e.target.value)}
          />
        </div>
        <button className="solveBtn" onClick={handleSphere}>Solve</button>
        <p className="answer">Answer: {cyl3}</p>
      </div>
    </>
  );
}

export default Cylinder;
