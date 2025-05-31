import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FractalTree from './components/fractal-tree-component';
import WelcomeText from './components/welcome-component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FractalTree />
        <WelcomeText />
      </header>

    </div>
  );
}

export default App;
