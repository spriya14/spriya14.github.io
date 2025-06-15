import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FractalTree from './components/fractal-tree-component';
import WelcomeText from './components/welcome-component';
import Introduction from './components/introduction-comp/introduction-component';
import ChangeThemeButton from './components/changeTheme-component';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCardsComponent from './components/introduction-comp/project-cards-component';
import ChatbotComponent from './components/introduction-comp/chatbot-component/chatbot-comp';
import TopNavigation from './components/top-nav/top-navigation-comp';

function App() {
  const theme = useSelector((state: any) => state.theme.mode);
  const background_color = theme === 'dark' ? '#0A192F' : '#fff'
  const isDark = theme === 'dark';
  return (
    <header style={{ backgroundColor: background_color }} className="App-header">
      <TopNavigation />
      <div className="row">
        <div className="col-md-3">
          <FractalTree backgroundColor={background_color} />
        </div>
        <div className="col-md-8 d-flex justify-content-center">
          <div
            className="card border-0 shadow rounded"
            style={{
              backgroundColor: isDark ? ' #1b1a2e' : 'rgba(255, 247, 235, 0.85)',
              color: isDark ? '#dddddd' : '#333',
              fontFamily: "'Poppins', sans-serif",
              padding: '1.5rem',
              backdropFilter: 'blur(5px)',
            }}
          >
            <div className="card-body">
              <h3
                className="card-title mb-4"
                style={{
                  fontWeight: 600,
                  fontSize: '1.75rem',
                  color: '#e86a33', // warm rust highlight
                  fontFamily: "'Pacifico', cursive"

                }}
              >
                I'm Su🧟‍♀️
              </h3>
              <p
                className="card-text"
                style={{
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  fontFamily: 'FigTree, sans-serif',

                }}
              >
                I’m a senior software engineer who loves frontend design, creative
                coding, and building intuitive user experiences. I enjoy turning visual
                ideas into working products and am always learning and experimenting!
                <br /><br />
                I care deeply about user experience, performance, and accessibility.
                <br /><br />
                Outside of work, you’ll often find me at a Tennis Court, solving coding puzzles, or
                exploring tools that bridge design and development. Also I know a lot of cool vs code extensions
                that can make your coding experience more fun and productive!
              </p>
            </div>
          </div>
        </div>
      </div>
      <WelcomeText />
      <ProjectCardsComponent />
      <Introduction />
      <ChatbotComponent />
    </header>
  );
}

export default App;
