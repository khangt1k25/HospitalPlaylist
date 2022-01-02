import Sidebar from "../components/Admin/components/sidebar/Sidebar";
import Topbar from "../components/Admin/components/topbar/Topbar";
import "../css/App.css";
import Home from "../views/Admin/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "../views/Admin/userList/UserList";
import User from "../views/Admin/user/User";
import NewUser from "../views/Admin/newUser/NewUser";
import ProductList from "../views/Admin/productList/ProductList";
import Product from "../views/Admin/product/Product";
import NewProduct from "../views/Admin/newProduct/NewProduct";

function AdminRoute() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/admin">
            <Home />
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
      </div>
    </Router>
  );
}

export default AdminRoute;
