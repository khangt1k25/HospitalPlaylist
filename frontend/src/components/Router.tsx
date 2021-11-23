import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate} from "react-router-dom";
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import About from './About';
import UserProfile from './UserProfile';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}> </Route>
                <Route path='/signup' element={<SignUp/>}> </Route>
                <Route path='/signin' element={<SignIn/>}> </Route>
                <Route path='/userprofile' element={<UserProfile/>}> </Route>
            </Routes>
        </Router>
    )
}


export default AppRouter;