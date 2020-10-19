import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Users.css";

function Users() {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const result = await axios.get(`http://localhost:3000/users`);
    return result.data;
  };

  useEffect(() => {
    getData().then((users) => setUsers(users));
  }, []);

  return (
    <div>
      <table className="users">
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
        {users
          ? users.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))
          : "Loading..."}
      </table>
    </div>
  );
}

export default Users;
