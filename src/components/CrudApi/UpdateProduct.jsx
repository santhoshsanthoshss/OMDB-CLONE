import axios from "axios";
import React, { useEffect, useState } from "react";
import formstyle from "../../css/Formobject.module.css";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [details, setdetails] = useState({ pn: "", pr: "", clr: "", brd: "" });
  let { pid } = useParams();
  useEffect(() => {
    Pdetails();
  }, []);
  let Pdetails = async () => {
    try {
      let { data } = await axios.get(
        `http://localhost:3000/allproducts/${pid}`
      );
      setdetails(data);
    } catch (error) {
      console.log(error);
    }
  };
  let sharedata = ({ target: { name, value } }) => {
    setdetails({ ...details, [name]: value });
  };
  let datasend = async (e) => {
    e.preventDefault();
    let senddata = await axios.put(
      `http://localhost:3000/allproducts/${pid}`,
      details
    );
    console.log(senddata);
  };
  return (
    <div className={formstyle.fullbox}>
      <form action="" onSubmit={datasend}>
        <input
          type="text"
          value={details.pn}
          name="pn"
          placeholder="ProductName"
          onChange={sharedata}
          className={formstyle.inputdata}
        />

        <input
          type="text"
          value={details.pr}
          name="pr"
          placeholder="Price"
          onChange={sharedata}
          className={formstyle.inputdata}
        />

        <input
          type="text"
          value={details.clr}
          name="clr"
          placeholder="Color"
          onChange={sharedata}
          className={formstyle.inputdata}
        />

        <input
          type="text"
          value={details.brd}
          name="brd"
          placeholder="Brand"
          onChange={sharedata}
          className={formstyle.inputdata}
        />

        <button className={formstyle.submitbtn}>Add Product</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
