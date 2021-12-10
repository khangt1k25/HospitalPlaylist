import React from 'react';
import logo from './logo.svg';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import SignIn from './SignIn';
import SignUp from './SignUp';
import About from './About';
import UserProfile from './UserProfile';
import AppRouter from '../routes/Router';
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