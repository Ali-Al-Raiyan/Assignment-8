import { useState } from "react";

const Incomes = () => {
  const [incomes, setIncomes] = useState([]);
  const [income, setIncome] = useState(0);

  function calculation() {
    let count = 0;
    for (let i = 0; i <= incomes.length - 1; i++) {
      count = count + incomes[i];
    }
    document.getElementById("income").innerHTML = "Total Incomes: " + count;
  }

  function add() {
    setIncomes((prev) => [...prev, income]);
  }

  return (
    <>
      <h1>Incomes:</h1>
      <input
        type="number"
        placeholder="Salary"
        onChange={(e) => setIncome(parseInt(e.target.value))}
      />
      <span> </span>
      <button onClick={add}>Add</button>
      <br />
      <br />
      <input
        type="number"
        placeholder="Business"
        onChange={(e) => setIncome(parseInt(e.target.value))}
      />
      <span> </span>
      <button onClick={add}>Add</button>
      <br />
      <br />
      <input
        type="number"
        placeholder="Others"
        onChange={(e) => setIncome(parseInt(e.target.value))}
      />
      <span> </span>
      <button onClick={add}>Add</button>
      <br />
      <br />
      <button onClick={calculation}>Calculation</button>
      <p id="income"></p>
    </>
  );
};

export default Incomes;
