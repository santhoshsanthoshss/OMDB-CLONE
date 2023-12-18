import React, { useState } from "react";
import FormStyle from "../../css/Formobject.module.css";
const FormObject = () => {
  const [fltval, setfltval] = useState({
    fn: "",
    ln: "",
    mob: "",
    gen: "",
    em: "",
    pwd: "",
  });

  const [display, setdisplay] = useState({});

  const [isbool, setisbool] = useState(false);

  //   ! onchange
  let changedata = ({ target: { value, name } }) => {
    setfltval({ ...fltval, [name]: value });
  };
  //   !onsubmit
  let valueupdated = (e) => {
    e.preventDefault();

    if (
      //   fltval.fn === "" ||
      //   fltval.ln === "" ||
      //   fltval.mob === "" ||
      //   fltval.gen === "" ||
      //   fltval.em === "" ||
      //   fltval.pwd === ""
      !fltval.fn ||
      !fltval.ln ||
      !fltval.mob ||
      !fltval.gen ||
      !fltval.em ||
      !fltval.pwd
    ) {
      alert("Invalid");
    } else {
      console.log(fltval);
      setdisplay({ ...display, ...fltval });
      console.log(display);
      setfltval({ fn: "", ln: "", mob: "", gen: "", em: "", pwd: "" });
      setisbool(true);
    }
  };
  return (
    <div className={FormStyle.fullbox}>
      <form action="" onSubmit={valueupdated}>
        <input
          type="text"
          placeholder="FirstName"
          name="fn"
          value={fltval.fn}
          onChange={changedata}
          className={FormStyle.inputdata}
        />
        <br />

        <input
          type="text"
          placeholder="LastName"
          name="ln"
          value={fltval.ln}
          onChange={changedata}
          className={FormStyle.inputdata}
        />
        <br />

        <input
          type="number"
          placeholder="Mobile"
          name="mob"
          value={fltval.mob}
          onChange={changedata}
          className={FormStyle.inputdata}
        />
        <br />

        <input
          type="text"
          placeholder="gender"
          name="gen"
          value={fltval.gen}
          onChange={changedata}
          className={FormStyle.inputdata}
        />
        <br />

        <input
          type="email"
          placeholder="email"
          name="em"
          value={fltval.em}
          onChange={changedata}
          className={FormStyle.inputdata}
        />
        <br />

        <input
          type="password"
          placeholder="password"
          name="pwd"
          value={fltval.pwd}
          onChange={changedata}
          className={FormStyle.inputdata}
        />
        <br />

        <button className={FormStyle.submitbtn}>Submit</button>
      </form>
      {isbool && (
        <div className={FormStyle.fullcontain}>
          <h2>{isbool && <div>FullName: {display.fn}</div>}</h2>
          <h2>{isbool && <div>LastName: {display.ln}</div>}</h2>
          <h2>{isbool && <div>Mobile: {display.mob}</div>}</h2>
          <h2>{isbool && <div>Gender: {display.gen}</div>}</h2>
          <h2>{isbool && <div>Email: {display.em}</div>}</h2>
          <h2>{isbool && <div>Password: {display.pwd}</div>}</h2>
        </div>
      )}
    </div>
  );
};

export default FormObject;
