import axios from "axios";
import React, { useEffect, useState } from "react";
// import "../../css/AllProduct.css";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    userdata();
  }, []);
  async function userdata() {
    try {
      let { data } = await axios.get("http://localhost:3000/allproducts");
      setproduct(data);
      console.log(product);
    } catch (error) {
      console.log("Error");
    }
  }

  // ! updateproduct
  let updatenvaigate = useNavigate();

  let updateproduct = (pid) => {
    updatenvaigate(`/updateproduct/${pid}`);
  };

  // ! view product
  let viewnavigate = useNavigate();
  let viewProduct = (pid) => {
    viewnavigate(`/allproducts/${pid}`);
  };

  //!deleteProduct
  let deleteProduct = async (pid) => {
    try {
      await axios.delete(`http://localhost:3000/allproducts/${pid}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Price</th>
            <th>View</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {product.map(({ id, pn, pr, clr, brd }, ind) => {
            return (
              <tr key={id}>
                <td>{ind + 1}</td>
                <td>{pn}</td>
                <td>{pr}</td>

                <td>
                  <button
                    onClick={() => {
                      viewProduct(id);
                    }}
                  >
                    View
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      updateproduct(id);
                    }}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      deleteProduct(id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;
