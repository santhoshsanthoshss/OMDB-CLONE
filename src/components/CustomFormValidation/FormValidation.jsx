import React, { useState } from "react";
import Formstyle from "../../css/Form.module.css";
const FormValidation = () => {
  const [inputdata, setinputdata] = useState({
    fn: "",
    mob: "",
    email: "",
    pwd: "",
  });
  //   ! Error State
  const [error, seterror] = useState({});

  let changeFormData = ({ target: { name, value } }) => {
    setinputdata({ ...inputdata, [name]: value });
  };
  let datasend = (e) => {
    e.preventDefault();
    console.log(inputdata);
    setinputdata({ fn: "", mob: "", email: "", pwd: "" });
    seterror(validate(inputdata));
  };

  //! validating form data
  let validate = (fdata) => {
    let errorMessage = {};

    // !fn validation code
    if (!fdata.fn) {
      errorMessage.fnMessage = "Full Name is Required";
    } else if (fdata.fn.length < 6) {
      errorMessage.fnMessage = "Full Name is should 6 charcter";
    } else if (!/^[A-Za-z\s]+$/g.test(fdata.fn)) {
      errorMessage.fnMessage = "Fullname is should only have alphabets";
    }
    //! mobile validation
    if (!fdata.mob) {
      errorMessage.mobMessage = "Mobile number is Required";
    } else if (fdata.mob.length < 10) {
      errorMessage.mobMessage = "Mobile number is should be only 10 numbers";
    } else if (!/^[6-9][0-9]{9}$/.test(fdata.mob)) {
      errorMessage.mobMessage = "Mobile number is should be only Numbers";
    }
    //! Email Validation
    if (!fdata.email) {
      errorMessage.emailMessage = "Email is Required";
    } else if (fdata.email.length < 15) {
      errorMessage.emailMessage = "Email should contain 15 char";
    } else if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        fdata.email
      )
    ) {
      errorMessage.emailMessage = "Email format is wrong";
    }
    // ! password validation

    if (!fdata.pwd) {
      errorMessage.pwdMessage = "Password is mandatory";
    } else if (fdata.pwd.length < 10) {
      errorMessage.pwdMessage = " Password should contain 10 char";
    }

    return errorMessage;
  };
  return (
    <div className={Formstyle.card}>
      <form onSubmit={datasend} action="">
        <input
          type="text"
          placeholder="Enter The FirstName"
          onChange={changeFormData}
          name="fn"
          value={inputdata.fn}
        />
        <small style={{ color: "red" }}>
          {error.fnMessage && error.fnMessage}
        </small>
        <br />

        <input
          type="tel"
          placeholder="Enter The Mobile number"
          onChange={changeFormData}
          name="mob"
          value={inputdata.mob}
        />
        <small style={{ color: "red" }}>
          {error.mobMessage && error.mobMessage}
        </small>

        <br />

        <input
          type="email"
          placeholder="Enter The Email"
          onChange={changeFormData}
          name="email"
          value={inputdata.email}
        />
        <small style={{ color: "red" }}>
          {error.emailMessage && error.emailMessage}
        </small>
        <br />

        <input
          type="password"
          placeholder="Enter The password"
          onChange={changeFormData}
          name="pwd"
          value={inputdata.pwd}
        />
        <small style={{ color: "red" }}>{error.pwdMessage}</small>
        <br />

        <button>Register</button>
      </form>
    </div>
  );
};

export default FormValidation;
