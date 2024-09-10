import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './ProductList';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Our Exclusive Product Range</h1>
      </header>
      <main className="App-main">
        <ProductList />
      </main>
    </div>
  );
}

export default App;