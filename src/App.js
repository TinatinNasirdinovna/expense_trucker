import { useState } from "react";
import "./App.scss";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initData = [
  {
    id: "el1",
    title: "Toilet Paper",
    amount: 200,
    date: new Date(2024, 7, 10),
  },
  {
    id: "el2",
    title: "Car Insuranse",
    amount: 400,
    date: new Date(2026, 8, 2),
  },
  {
    id: "el3",
    title: "Utilies",
    amount: 100,
    date: new Date(2025, 3, 2),
  },
  {
    id: "el4",
    title: "New TV",
    amount: 500,
    date: new Date(2023, 1, 2),
  },
];

function App() {
  const [expenses, setExpenses] = useState(initData)

  const getExpense = (data) => {
    setExpenses([data,...expenses])
  }

  return (
    <div className="container">
      <NewExpense onGet={getExpense}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
