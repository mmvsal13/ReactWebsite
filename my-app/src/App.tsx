import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HI THIS IS A WEBSITE.
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/melissavsalazar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect with me on linkedin ;)
        </a>
      </header>
    </div>
  );
}

export default App;
