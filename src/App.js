import React from 'react';
import './App.css';
import ExpenseTracker from './pages/ExpenseTracker/expense-tracker-page';
import { GlobalProvider } from './context/GlobalState';

const App = () => {
  return (
    <GlobalProvider>
      <div className="App">
        <h1>David's Expense Tracker</h1>
        <ExpenseTracker/>
      </div>
    </GlobalProvider>
    
  );
}

export default App;
