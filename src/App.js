import './App.css';
import AddBudgets from './components/AddBudgets';
import AddDepenses from './components/AddDepenses';
import Header from './components/Header';
import ListDepenses from './components/ListDepenses';
import StatsBudgets from './components/StatsBudgets';

function App() {
  return (
    <div className="container">
      <Header />
      <StatsBudgets />
      <div className='details'>
        <div className='add'>
          <AddBudgets />
          <AddDepenses />
        </div>
        <ListDepenses />
      </div>
    </div>
  );
}

export default App;
