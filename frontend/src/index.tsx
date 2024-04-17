import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import Header from "./Component/Header/Header";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Router>
          <Header/>
          <Routes>
                <Route path="/" element={<App/>} />
          </Routes>
      </Router>
  </React.StrictMode>
);

