import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './Component/DisplayUser';
import CreateUser from "./Component/CreateUser";

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Users/>
        <CreateUser/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
