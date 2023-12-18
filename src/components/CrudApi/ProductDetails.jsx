import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [pdetails, setpdetails] = useState([]);
  let { pid } = useParams();
  useEffect(() => {
    getpdetails();
  }, []);
  async function getpdetails() {
    try {
      let { data } = await axios.get(
        `http://localhost:3000/allproducts/${pid}`
      );
      setpdetails(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div style={{ marginLeft: "20px" }}>
      <ul>
        <li>ProductName:{pdetails.pn}</li>
        <li>ProductPrice:{pdetails.pr}</li>
        <li>ProductColor:{pdetails.clr}</li>
        <li>ProductBrand:{pdetails.brd}</li>
      </ul>
    </div>
  );
};

export default ProductDetails;
