import React, { useState } from "react";

const Field = () => {
  const [count, setcount] = useState({ fn: "", ln: "", email: "", pwd: "" });
  let datachange = ({ target: { name, value } }) => {
    setcount({ ...count, [name]: value });
  };
  const [field, setfield] = useState([]);

  let formsumbit = (e) => {
    e.preventDefault();
    setfield([...field, count]);
    console.log(count);
    console.log(field);
    // setcount({ fn: "", ln: "", email: "", pwd: "" });
  };
  // const [fliterArray, setfliterArray] = useState([]);
  // let searchvalue;
  // let filteredchange = ({ target: { value } }) => {
  //   searchvalue = value;
  // };
  // let getusers = () => {
  //   setfliterArray(
  //     field.filter(({ fn }) => {
  //       return searchvalue === fn;
  //     })
  //   );
  // };

  const [change, setchange] = useState("");
  let filteredchange = ({ target: { value } }) => {
    setchange(value);
  };

  let filteredData = field.filter(({ fn }) => {
    return fn === change;
  });
  return (
    <div>
      <input type="text" placeholder="search" onChange={filteredchange} />
      <br />
      <br />
      <br />
      <form onSubmit={formsumbit}>
        <input
          type="text"
          value={count.fn}
          name="fn"
          placeholder="Enter the FirstName"
          onChange={datachange}
        />
        <br />
        <br />
        <hr />
        <input
          type="text"
          value={count.ln}
          name="ln"
          placeholder="Enter LastName"
          onChange={datachange}
        />
        <br />
        <br />
        <hr />
        <input
          type="email"
          value={count.email}
          name="email"
          placeholder="Enter Email"
          onChange={datachange}
        />
        <br />
        <br />
        <hr />
        <input
          type="password"
          value={count.pwd}
          name="pwd"
          placeholder="Enter Password"
          onChange={datachange}
        />
        <br />
        <br />
        <hr />

        <button>Add</button>
      </form>
      <div>
        {filteredData.map(({ fn, ln, email }) => {
          return (
            <div>
              <h1>{fn}</h1>
              <h1>{ln}</h1>
              <h1>{email}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Field;
