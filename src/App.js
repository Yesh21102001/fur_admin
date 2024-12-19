import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./auth/LoginForm";
import SignIn from "./auth/SignIn";
import Dashboard from "./pages/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import Category from "./pages/Categories/Category";
import AddCategory from "./pages/Categories/AddCategory";
import UpdateCategory from "./pages/Categories/UpdateCategory";
import Orders from "./pages/Orders/Orders";
import Customers from "./pages/Customers/Customers";
import Coupons from "./pages/Coupons/Coupons";
import AddCoupons from "./pages/Coupons/AddCoupons";
import UpdateCoupons from "./pages/Coupons/UpdateCoupons";
import Products from "./pages/Products/Products";
import AddProducts from "./pages/Products/AddProducts";
import UpdateProducts from "./pages/Products/UpdateProducts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signUp" element={<SignIn />} />
          <Route path="/*" element={
            <Sidebar>
              <Routes>
                {/* Dashboard */}
                <Route path="/dashboard" element={<Dashboard />} />

                {/* Categories */}
                <Route path="/category" element={<Category/>} />
                <Route path="/addcategory" element={<AddCategory />} />
                <Route path="/updatecategory/:id" element={<UpdateCategory />} />

                {/**Orders */}
                <Route path="/orders" element={<Orders />} />

                {/* Customers */}
                <Route path="/customers" element={<Customers />} />

                {/* Coupons */}
                <Route path="/coupons" element={<Coupons />} />   
                <Route path="/addcoupon" element={<AddCoupons />} />  
                <Route path="/updatecoupon" element={<UpdateCoupons />} /> 

                {/* Products     */}
                <Route path="/product" element={<Products />} />
                <Route path="/addProducts" element={<AddProducts />} />
                <Route path="/updateProducts" element={<UpdateProducts />} />
              </Routes>
            </Sidebar>} />
        </Routes>

      </BrowserRouter>

    </div>

  );
}

export default App;
