import "./App.scss";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
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
      date: new Date(2024, 8, 2),
    },
    {
      id: "el3",
      title: "Utilies",
      amount: 100,
      date: new Date(2024, 3, 2),
    },
    {
      id: "el4",
      title: "New TV",
      amount: 500,
      date: new Date(2024, 1, 2),
    },
  ];
  return (
    <div className="container">
      <NewExpense/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
