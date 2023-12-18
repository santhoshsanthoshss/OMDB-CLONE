import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Fakestoreapi.css";
import Loaderforfake from "./Loaderforfake";
const FakeStoreapi = () => {
  const [store, setstore] = useState([]);
  const [lodaing, setlodaing] = useState(true);
  const [error, seterror] = useState(false);

  useEffect(() => {
    fakestore();
  }, []);
  async function fakestore() {
    try {
      let { data } = await axios.get("https://fakestoreapi.com/products");
      setstore(data);
      setlodaing(false);
      seterror(false);
    } catch (error) {
      seterror(true);
      setlodaing(false);
    }
  }
  return (
    <div>
      <h1>{lodaing && <Loaderforfake />}</h1>
      <h1>{error && "Error..."}</h1>
      <input type="text" placeholder="search" />
      {store.map(({ id, title, price, image, description }) => {
        return (
          <div className="flexcard" key={id}>
            <div className="flexcards">
              <h2 className="title">{title}</h2>
              <h1 className="prices">{"₹" + price}</h1>
              <p className="paraele">{description}</p>
              <img className="imgfull" src={image} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FakeStoreapi;
