import './App.css';
import AddBudgets from './components/AddBudgets';
import AddDepenses from './components/AddDepenses';
import Header from './components/Header';
import ListDepenses from './components/ListDepenses';
import StatsBudgets from './components/StatsBudgets';

function App() {
  return (
    <div className="App">
      <Header />
      <StatsBudgets />
      <div>
        <div>
          <AddBudgets />
          <AddDepenses />
        </div>
        <ListDepenses />
      </div>
    </div>
  );
}

export default App;
