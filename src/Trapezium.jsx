import { useState } from "react";

function Trapezium() {
  const [Zrec, Zuserec] = useState("");
  const [Zrec1, Zuserec1] = useState("");
  const [Zrec2, Zuserec2] = useState("");
  const [Zrec3, Zuserec3] = useState("");

  const handleTrapezium = () => {
    const Zcpc = parseFloat(Zrec);
    const Zcpc1 = parseFloat(Zrec1);
    const Zcpc2 = parseFloat(Zrec2);

    if (Zcpc === "" || Zcpc1 === "" || Zcpc2 === "") {
      alert("Please Enter a Number");
      return;
    }

    if (Number.isNaN(Zcpc || Zcpc1 || Zcpc2)) {
      alert("Please Enter a Number");
      return;
    }

    Zuserec3((1/2) * (Zcpc + Zcpc1) * Zcpc2);
  };
  return (
    <>
      <div className="cubeSetUp">
        <label className="length">Enter Value of Shorter Side:</label>
        <input
          type="number"
          className="cubeInput"
          value={Zrec}
          onChange={(e) => Zuserec(e.target.value)}
        />
        <div className="div">
          <label className="length">Enter Value of Longer Side:</label>
          <input
            type="number"
            className="cubeInput"
            value={Zrec1}
            id="cb"
            onChange={(e) => Zuserec1(e.target.value)}
          />
        </div>
        <div className="div">
          <label className="length">Enter Height of Trapezium:</label>
          <input
            type="number"
            className="cubeInput"
            value={Zrec2}
            id="cb"
            onChange={(e) => Zuserec2(e.target.value)}
          />
        </div>
        <button className="solveBtn" onClick={handleTrapezium}>
          Solve
        </button>
        <p className="answer">Answer: {Zrec3}</p>
      </div>
    </>
  );
}

export default Trapezium
