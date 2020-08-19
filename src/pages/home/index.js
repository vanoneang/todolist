import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './home.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to={'/todo'}>
          <p  className="yellow">跳转TODOLIST页</p>
        </Link>
      </header>
    </div>
  );
}

export default App;
