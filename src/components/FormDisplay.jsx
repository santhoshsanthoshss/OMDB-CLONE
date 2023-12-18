import React, { useState } from "react";
import Formuser from "../css/Formobject.module.css";

const FormDisplay = () => {
  const [fltval, setfltval] = useState({
    fn: "",
    ln: "",
    mob: "",
    gen: "",
    em: "",
    pwd: "",
  });

  //   const [inpuarr, setinpuarr] = useState([]);
  let changedata = ({ target: { name, value } }) => {
    setfltval({ ...fltval, [name]: value });
  };
  let valueupdated = (e) => {
    e.preventDefault();
    console.log(fltval);
  };

  const [display, setdisplay] = useState([]);

  //   let { fn, ln, mob, pwd, gen, em } = fltval;
  let handlesubmit = () => {
    setdisplay([...display, fltval]);
    setfltval({ fn: "", ln: "", mob: "", gen: "", em: "", pwd: "" });
    console.log(display);
  };
  console.log(display);

  //   const [toogle, settoogle] = useState(false);
  //   let displayhide = () => {
  //     settoogle(!toogle);
  //   };
  return (
    <div style={{ backgroundColor: "crimson" }} className={Formuser.fullbox}>
      {/* <h1>
        fulll:{fltval.fn} {fltval.ln}
      </h1> */}

      <form action="" onSubmit={valueupdated}>
        <input
          type="text"
          placeholder="FirstName"
          name="fn"
          value={fltval.fn}
          onChange={changedata}
          className={Formuser.inputdata}
        />
        <br />

        <input
          type="text"
          placeholder="LastName"
          name="ln"
          value={fltval.ln}
          onChange={changedata}
          className={Formuser.inputdata}
        />
        <br />

        <input
          type="number"
          placeholder="Mobile"
          name="mob"
          value={fltval.mob}
          onChange={changedata}
          className={Formuser.inputdata}
        />
        <br />

        <input
          type="text"
          placeholder="gender"
          name="gen"
          value={fltval.gen}
          onChange={changedata}
          className={Formuser.inputdata}
        />
        <br />

        <input
          type="email"
          placeholder="email"
          name="em"
          value={fltval.em}
          onChange={changedata}
          className={Formuser.inputdata}
        />
        <br />

        <input
          type="password"
          placeholder="password"
          name="pwd"
          value={fltval.pwd}
          onChange={changedata}
          className={Formuser.inputdata}
        />
        <br />

        <button
          style={{ background: "white", color: "black" }}
          className={Formuser.submitbtn}
          onClick={handlesubmit}
        >
          Submit
        </button>
      </form>
      <div className={Formuser.fullcontain}>
        {/* {toogle && (
          <div>
            <h1>
              Name: {display.fn} {display.ln}
            </h1>
            <h1>Age: {display.mob}</h1>
            <h1>Gender:{display.gen}</h1>
import FormStyle from "../../css/Formobject.module.css";
            <h1>Email:{display.em}</h1>
          </div>
        )} */}
        {display.map((ele, ind) => {
          return (
            <div key={ind}>
              <h1>
                Name: {ele.fn} {ele.ln}
              </h1>

              <h1>Mobile:{ele.mob}</h1>
              <h1>Gender:{ele.gen}</h1>
              <h1>Email:{ele.em}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormDisplay;
