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
        <label>Enter the Value of PI</label>
        <input
          type="number"
          className="cuboidInput"
          value={chie}
          onChange={(e) => usechie(e.target.value)}
        />
        <label>Enter the Width of the Frustrum</label>
        <input
          type="number"
          className="cuboidInput"
          value={chie1}
          onChange={(e) => usechie1(e.target.value)}
        />
        <label>Enter the Radius of the Larger Base of the Frustrum(R1) </label>
        <input
          type="number"
          className="cuboidInput"
          value={chie2}
          onChange={(e) => usechie2(e.target.value)}
        />
        <label>Enter the Radius of the Larger Base of the Frustrum(R2)</label>
        <input
          type="number"
          className="cuboidInput"
          value={chie3}
          onChange={(e) => usechie3(e.target.value)}
        />
        <button className="solveBtn" onClick={handleFrustrum}>
          Solve
        </button>
        <p className="answer">Answer: {chie4}</p>
      </div>
    </>
  );
}

export default FrustrumOfaCone;
