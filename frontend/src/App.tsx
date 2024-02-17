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
        <p>toto</p>
          <Users/>
        <CreateUser/>
      </header>
    </div>
  );
}

export default App;
