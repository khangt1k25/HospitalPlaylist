import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import About from './components/About';
import UserProfile from './components/UserProfile';

function App() {
  return (
      <Router>
        <Header/>
        <Footer/>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/profile' element={<UserProfile/>} />
        </Routes>
        
      </Router> 
  );
}

export default App;
