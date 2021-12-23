import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './views/Header';
import Footer from './views/Footer';
import Home from './views/Home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import About from './views/About';
import UserProfile from './views/UserProfile';
import AppRouter from './views/Router';
function App() {
  return (
    <div>
      <Header/>
      <Footer />
      <AppRouter/>
    </div>
    
      // <Router>
      //   <Header/>
      //   <Footer />
      //   <Routes>
      //   <Route path='/' element={<Home/>}></Route>
      //   <Route path='/about' element={<About/>}></Route>
      //   <Route path='/signin' element={<SignIn/>}></Route>
      //   <Route path='/signup' element={<SignUp/>}></Route>
      //   <Route path='/profile' element={<UserProfile/>} />
      //   </Routes>
      // </Router> 
  );
}

export default App;
