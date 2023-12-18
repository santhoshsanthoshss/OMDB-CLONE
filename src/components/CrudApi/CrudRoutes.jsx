import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import NavbarCrud from "./NavbarCrud";
import AddProduct from "./AddProduct";
import AllProducts from "./AllProducts";
import ProductDetails from "./ProductDetails";
import UpdateProduct from "./UpdateProduct";
const CrudRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <NavbarCrud />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/allproducts/:pid" element={<ProductDetails />} />

          <Route path="/updateproduct/:pid" element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default CrudRoutes;
