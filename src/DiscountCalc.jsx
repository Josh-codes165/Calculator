import { useState } from "react";
function Discount() {
  const [dis, usedis] = useState("");
  const [idis, useidis] = useState("");
  const [iidis, useiidis] = useState("");

  const handleDiscount = () => {
    const make = parseFloat(dis);
    const nomake = parseFloat(idis);

    if (make === "" || nomake === "") {
      alert("Please Enter a Number");
      return;
    }

    if (isNaN(make || nomake)) {
      alert("Only Numbers are allowed");
      return;
    }

    useiidis((make) - ((nomake/100) * make))
  };
  return (
    <>
      <div className="cuboidSetUp">
        <label className="length">Enter Amount:</label>
        <input
          type="number"
          className="cuboidInput"
          value={dis}
          onChange={(e) => usedis(e.target.value)}
        />
        <div className="div">
          <label className="length">Enter Discount Rate:</label>
          <input
            type="number"
            className="cuboidInput"
            id="cb"
            value={idis}
            onChange={(e) => useidis(e.target.value)}
          />
        </div>
        <button className="solveBtn" onClick={handleDiscount}>Solve</button>
        <p className="answer">Answer: {iidis}</p>
      </div>
    </>
  );
}

export default Discount;
