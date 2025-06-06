import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FractalTree from './components/fractal-tree-component';
import WelcomeText from './components/welcome-component';
import Introduction from './components/introduction-comp/introduction-component';
import ChangeThemeButton from './components/changeTheme-component';
import { useSelector } from 'react-redux';

function App() {
  const theme = useSelector((state: any) => state.theme.mode);
  const background_color = theme === 'dark' ? '#0A192F' : '#fff'
  return (
    <header style={{ backgroundColor: background_color }} className="App-header">
      <ChangeThemeButton />
      <FractalTree backgroundColor={background_color} />
      <WelcomeText />
      <Introduction />
    </header>
  );
}

export default App;
