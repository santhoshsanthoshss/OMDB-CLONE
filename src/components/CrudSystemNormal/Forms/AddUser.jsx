import React, { useState } from "react";

const AddUser = ({ adduser }) => {
  let initalstate = { id: null, sname: "", username: "" };
  const [user, setuser] = useState(initalstate);
  let handleinput = ({ target: { name, value } }) => {
    setuser({ ...user, [name]: value });
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!user.sname || !user.username) return;
          adduser(user);
          setuser(initalstate);
        }}
      >
        <label>Name</label>
        <input
          type="text"
          name="sname"
          onChange={handleinput}
          value={user.sname}
        />
        <label>Username</label>
        <input
          type="text"
          name="username"
          onChange={handleinput}
          value={user.username}
        />
        <button>Add new user</button>
      </form>
    </div>
  );
};

export default AddUser;
