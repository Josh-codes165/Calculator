import { useState } from "react";

function FrustrumOfaCone() {
  const [chie, usechie] = useState("");
  const [chie1, usechie1] = useState("");
  const [chie2, usechie2] = useState("");
  const [chie3, usechie3] = useState("");
  const [chie4, usechie4] = useState("");

  const handleFrustrum = () => {
    const nn = parseFloat(chie);
    const nn1 = parseFloat(chie1);
    const nn2 = parseFloat(chie2);
    const nn3 = parseFloat(chie3);

    if (nn === "" || nn1 === "" || nn2 === "" || nn3 === "") {
      alert("Please Enter a Number");
      return;
    }

    if (Number.isNaN(nn || nn1 || nn2 || nn3)) {
      alert("Please Enter a Number");
      return;
    }
    usechie4(((1 / 3) * nn * nn1) * ((nn2 * nn2) + (nn2 * nn3) + (nn3 * nn3)));
  };

  return (
    <>
      <div className="cuboidSetUp">
        <label className="length">Enter Value of PI:</label>
        <input
          type="number"
          className="cuboidInput"
          value={chie}
          onChange={(e) => usechie(e.target.value)}
        />
        <div className="div">
            <label className="length">Enter Width of the Frustrum:</label>
          <input
            type="number"
            className="cuboidInput"
            value={chie1}
            id="cb"
            onChange={(e) => usechie1(e.target.value)}
          />
        </div>
        <div className="div">
            <label className="length">Enter Radius of the Larger Base(R1): </label>
          <input
            type="number"
            className="cuboidInput"
            value={chie2}
            id="cb"
            onChange={(e) => usechie2(e.target.value)}
          />
        </div>
        <div className="div">
            <label className="length">Enter Radius of the Larger Base(R2):</label>
          <input
            type="number"
            className="cuboidInput"
            value={chie3}
            id="cb"
            onChange={(e) => usechie3(e.target.value)}
          />
        </div>
        <button className="solveBtn" onClick={handleFrustrum}>
          Solve
        </button>
        <p className="answer">Answer: {chie4}</p>
      </div>
    </>
  );
}

export default FrustrumOfaCone;
