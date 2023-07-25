import { useState } from "react";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState(0);

  function calculation() {
    let count = 0;
    for (let i = 0; i <= expenses.length - 1; i++) {
      count = count + expenses[i];
    }
    document.getElementById("expense").innerHTML = "Total Expenses: " + count;
  }

  function add() {
    setExpenses((prev) => [...prev, expense]);
  }

  return (
    <>
      <h1>Expenses:</h1>
      <input
        type="number"
        placeholder="House Rent"
        onChange={(e) => setExpense(parseInt(e.target.value))}
      />
      <span> </span>
      <button onClick={add}>Add</button>
      <br />
      <br />
      <input
        type="number"
        placeholder="Transport"
        onChange={(e) => setExpense(parseInt(e.target.value))}
      />
      <span> </span>
      <button onClick={add}>Add</button>
      <br />
      <br />
      <input
        type="number"
        placeholder="Meal Cost"
        onChange={(e) => setExpense(parseInt(e.target.value))}
      />
      <span> </span>
      <button onClick={add}>Add</button>
      <br />
      <br />
      <button onClick={calculation}>Calculation</button>
      <p id="expense"></p>
    </>
  );
};

export default Expenses;
