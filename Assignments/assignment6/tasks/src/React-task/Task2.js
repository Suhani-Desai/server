import { useState, useEffect } from "react";
import axios from "axios";

export default function Task2() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleChange = (e) => {
    setSelectedUser(e.target.value);
  };

  return (
    <div>
      <h2>Show User</h2>

      <select value={selectedUser} onChange={handleChange}>
        <option value="">Select User</option>
        {users.map((user) => (
          <option value={user.name} key={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
}
