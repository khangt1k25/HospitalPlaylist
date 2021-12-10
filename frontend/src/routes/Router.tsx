import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate} from "react-router-dom";
import Home from '../views/Home';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import About from '../views/About';
import UserProfile from '../views/UserProfile';
import Calendar from '../views/Calendar';
import Admin from '../views/Admin';
//import { Redirect } from 'react-router-dom';
const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}> </Route>
                <Route path='/signup' element={<SignUp/>}> </Route>
                <Route path='/signin' element={<SignIn/>}> </Route>
                <Route path='/userprofile' element={<UserProfile/>}> </Route>
                <Route path='/calendar' element={<Calendar/>}> </Route>
                <Route path='/admin' element={localStorage.getItem('accessTokenAdmin') ? <Admin /> : <SignIn/>}></Route>
                <Route path='/userprofile' element={<UserProfile />}></Route>
            </Routes>
        </Router>
    )
}


export default AppRouter;