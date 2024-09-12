import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CoffeeShopsList from './components/CoffeeShopsList';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Our Exclusive Product Range</h1>
        </header>
        <main className="App-main">
          <Routes>
            <Route path="/" element={<CoffeeShopsList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;