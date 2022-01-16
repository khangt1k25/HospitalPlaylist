import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate} from "react-router-dom";
import Home from '../views/Home';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import About from '../views/About';
import UserProfile from '../views/UserProfile';
import Calendar from '../views/Calendar';
import Admin from '../views/Admin';
import Craiglist from '../views/Craiglist';
import Header from '../views/Header';
import Footer from '../views/Footer';


import Sidebar from "../components/Admin/components/sidebar/Sidebar";
import Topbar from "../components/Admin/components/topbar/Topbar";
import "../css/App.css";

import UserList from "../views/Admin/userList/UserList";
import User from "../views/Admin/user/User";
import NewUser from "../views/Admin/newUser/NewUser";
import Doctor from "../views/Admin/productList/ProductList";
import Product from "../views/Admin/product/Product";
import NewProduct from "../views/Admin/newProduct/NewProduct";
import DashBoard from '../views/Admin/home/Home';

const AppRouter = () => {
    
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}> </Route>
                <Route path='/signup' element={<SignUp/>}> </Route>
                <Route path='/signin' element={<SignIn/>}> </Route>
                <Route path='/userprofile' element={<UserProfile/>}> </Route>
                <Route path='/calendar/:id' element={<Calendar/>}> </Route>
                <Route path='/craiglist' element={<Craiglist/>}> </Route>
                <Route path='/AD' element={localStorage.getItem('accessTokenAdmin') ? <Admin /> : <SignIn/>}></Route>
                <Route path='/userprofile' element={<UserProfile />}></Route>
            </Routes>
            <Footer/>
            <div className='container'>
                {/* <Sidebar></Sidebar> */}
                <Routes>
                    <Route path='/admin' element={localStorage.getItem('accessToken') == 'ok' ? <DashBoard /> : <SignIn/>}></Route>
                    <Route path='/admin/user' element={localStorage.getItem('accessToken') == 'ok' ? <UserList /> : <SignIn/>}></Route> 
                    <Route path='/admin/newUser' element={<NewUser/>}></Route>
                    <Route path='/admin/doctor' element={localStorage.getItem('accessToken') == 'ok' ? <Doctor /> : <SignIn/>}></Route>
                </Routes>
            </div>

        </Router>
    )
}


export default AppRouter;