import { useState } from "react";

function Sphere() {
  const [iam, useiam] = useState("");
  const [use, useuses] = useState("");
  const [mark, usemark] = useState("");

  const handleSphere = () => {
    const unit = parseFloat(iam);
    const unit1 = parseFloat(use);

    if (unit === "" || unit1 === "") {
      alert("Please Enter a Number");
      return;
    }

    if (Number.isNaN(unit || unit1)) {
      alert("Please Enter a Number");
      return;
    }
    usemark((4 / 3) * (unit * unit * unit) * unit1);
  };
  return (
    <>
      <div className="cubeSetUp">
        <label className="length">Enter the Radius of the Sphere</label>
        <input
          type="number"
          className="cubeInput"
          value={iam}
          onChange={(e) => useiam(e.target.value)}
        />
        <div className="div">
          <label className="length">Enter the Value PI</label>
          <input
            type="number"
            className="cubeInput"
            id="cb"
            value={use}
            onChange={(e) => useuses(e.target.value)}
          />
        </div>
        <button className="solveBtn" onClick={handleSphere}>
          Solve
        </button>
        <p className="answer">Answer: {mark} </p>
      </div>
    </>
  );
}

export default Sphere;
