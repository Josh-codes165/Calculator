import { useState } from "react";

function Interest() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState("");

  const handleSolve = () => {
    if (!principal || !rate || !time) {
      alert("Please fill all fields.");
      return;
    }

    const P = parseFloat(principal);
    const R = parseFloat(rate);
    const T = parseFloat(time);

    const simpleInterest = (P * R * T) / 100;
    const totalAmount = P + simpleInterest;

    setResult(
      `Simple Interest: ${simpleInterest}  Total Amount: ${totalAmount}`
    );
  };

  return (
    <>
      <div className="cubeSetUp">
        <label className="length">Principal Amount:</label>
        <input type="number" className="cubeInput" value={principal} onChange={(e) => setPrincipal(e.target.value)} />
        <div className="div">
          <label className="length">Interest Rate:</label>
          <input type="number" className="cubeInput" id="cb" value={rate} onChange={(e) => setRate(e.target.value)} />
        </div>
        <div className="div">
          <label className="length">Time (in years):</label>
          <input type="number" className="cubeInput" id="cb"  value={time} onChange={(e) => setTime(e.target.value)}/>
        </div>
        <button className="solveBtn" onClick={handleSolve}>Solve</button>
        <p className="answer">{result}</p>
      </div>
    </>
  );
}

export default Interest;
