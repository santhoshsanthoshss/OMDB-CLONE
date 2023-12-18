import React from "react";
import crudstyle from "../../../css/Crud.module.css";

const UserTable = ({ users, deleteuser }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.sname}</td>
            <td>{user.username}</td>
            <td>
              <button className={(crudstyle.button, crudstyle.muted_button)}>
                Edit
              </button>
              <button
                onClick={() => {
                  deleteuser(user.id);
                }}
                className={(crudstyle.button, crudstyle.muted_button)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
