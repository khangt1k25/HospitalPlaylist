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
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}> </Route>
                <Route path='/signup' element={<SignUp/>}> </Route>
                <Route path='/signin' element={<SignIn/>}> </Route>
                <Route path='/userprofile' element={<UserProfile/>}> </Route>
                <Route path='/calendar' element={<Calendar/>}> </Route>
                <Route path='/craiglist' element={<Craiglist/>}> </Route>
                <Route path='/AD' element={localStorage.getItem('accessTokenAdmin') ? <Admin /> : <SignIn/>}></Route>
                <Route path='/userprofile' element={<UserProfile />}></Route>
            </Routes>
            <div className='container'>
                <Sidebar></Sidebar>
                <Routes>
                    <Route path='/admin' element={<DashBoard />}></Route>
                    <Route path='/user' element={<UserList />}></Route> 
                    <Route path='/newUser' element={<NewUser/>}></Route>
                    <Route path='/doctor' element={<Doctor></Doctor>}></Route>
                </Routes>
            </div>



                            {/* <Topbar />
                    <div className="container">
                        <Sidebar />
                        <Routes>
                        <Route path="/admin">
                            <DashBoard />
                        </Route>
                        <Route path="/users">
                            <UserList />
                        </Route>
                        <Route path="/user/:userId">
                            <User />
                        </Route>
                        <Route path="/newUser">
                            <NewUser />
                        </Route>
                        <Route path="/products">
                            <ProductList />
                        </Route>
                        <Route path="/product/:productId">
                            <Product />
                        </Route>
                        <Route path="/newproduct">
                            <NewProduct />
                        </Route>
                        </Routes>
                    </div> */}
        </Router>
    )
}


export default AppRouter;