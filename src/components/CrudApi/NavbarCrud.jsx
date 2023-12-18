import React from "react";
import { Link } from "react-router-dom";
import navstyle from "../../css/Nav.module.css";
const NavbarCrud = () => {
  return (
    <div className={navstyle.navabar_main}>
      <Link className={navstyle.hyper_main} to="/">
        Home
      </Link>
      <Link className={navstyle.hyper_main} to="/addproduct">
        AddProduct
      </Link>
      <Link className={navstyle.hyper_main} to="/allproducts">
        All Product
      </Link>
    </div>
  );
};

export default NavbarCrud;
