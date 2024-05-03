import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Task1() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>User List - {user.length}</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {user.map((ele) => {
            return (
              <tr key={ele.id}>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.address.city}</td>
                <td>
                  {ele.address.geo.lat}
                  {ele.address.geo.lng}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
