import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AppRouter from './routes/Route';

function App() {
  return (
    <div>
      <AppRouter/>
    </div>
  );
}

export default App;
