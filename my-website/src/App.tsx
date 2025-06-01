import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FractalTree from './components/fractal-tree-component';
import WelcomeText from './components/welcome-component';
import Introduction from './components/introduction-comp/introduction-component';
import ChangeThemeButton from './components/changeTheme-component';

function App() {
  return (
    <header className="App-header">
      <ChangeThemeButton />
      <FractalTree />
      <WelcomeText />
      <Introduction />
    </header>
  );
}

export default App;
