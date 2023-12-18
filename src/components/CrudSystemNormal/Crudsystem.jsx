import React, { useState } from "react";
import crudstyle from "../../css/Crud.module.css";
import UserTable from "./Table/UserTable";
import AddUser from "./Forms/AddUser";
const Crudsystem = () => {
  let userData = [
    { id: 1, sname: "santhosh", username: "santhoshk" },
    { id: 2, sname: "santhosh", username: "santhoshk" },
    { id: 3, sname: "santhosh", username: "santhoshk" },
  ];

  //   ! creating the new id
  let adduser = (user) => {
    user.id = users.length + 1;
    setusers([...users, user]);
    console.log(user.id);
  };

  //   ! delete user

  const deleteuser = (id) => {
    setusers(
      users.filter((user) => {
        return user.id !== id;
      })
    );
  };

  const [users, setusers] = useState(userData);
  return (
    <div className={crudstyle.container}>
      <h1> Crud App</h1>
      <div className={crudstyle.flex_row}>
        <div className={crudstyle.flex_large}>
          <h2>Add user</h2>
          <AddUser adduser={adduser} />
        </div>
        <div className={crudstyle.flex_large}>
          <h2>view user</h2>
          <UserTable deleteuser={deleteuser} users={users} />
        </div>
      </div>
    </div>
  );
};

export default Crudsystem;
