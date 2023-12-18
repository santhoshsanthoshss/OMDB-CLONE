import React from "react";
import Formstyle from "../../css/Form.module.css";
import { useForm } from "react-hook-form";

const HookForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  let submitForm = (fadata) => {
    console.log(fadata);
    console.log(register("fn")); //! function called
  };

  return (
    <div className={Formstyle.card}>
      <form action="" onSubmit={handleSubmit(submitForm)}>
        <input
          type="text"
          placeholder="Enter The FirstName"
          {...register("fn", {
            required: { value: true, message: "Fullname is required" },
            minLength: { value: 6, message: "Full name should contain 6" },
          })}
        />
        <small style={{ color: "red" }}>{errors.fn?.message}</small>
        <br />

        <input
          type="tel"
          placeholder="Enter The Mobile number"
          {...register("mob", {
            required: { value: true, message: "Mobile number is Required" },
          })}
        />
        <small style={{ color: "red" }}>{errors.mob?.message}</small>

        <br />

        <input
          type="email"
          placeholder="Enter The Email"
          name="email"
          {...register("email", {
            required: { value: true, message: "Email is required" },
          })}
        />
        <small style={{ color: "red" }}>{errors.email?.message}</small>
        <br />

        <input
          type="password"
          placeholder="Enter The password"
          name="pwd"
          {...register("pwd", {
            required: { value: true, message: "Password is required" },
          })}
        />
        <small style={{ color: "red" }}>{errors.pwd?.message}</small>
        <br />
        <br />

        <button>Register</button>
      </form>
    </div>
  );
};

export default HookForm;
