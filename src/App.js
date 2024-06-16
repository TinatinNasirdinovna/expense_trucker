import './App.scss';
import Expenses from './components/Expenses';

function App() {

  const expenses = [
    {
      id: 'el1',
      title: 'Toilet Paper',
      amount: 200,
      date: new Date(2024, 7, 10)
    },
    {
      id: 'el2',
      title: 'Car Insuranse',
      amount: 400,
      date: new Date(2024, 8, 2)
    },
  ]
  return (
    <div className="container">
     <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
