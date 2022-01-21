import FetchData from "../hooks/FetchData";
import React from "react";

const Users = () => {
  const { data, loading } = FetchData("/users");
  return (
    <div>
      {loading ? (
        <div className="loading-text">Loading...</div>
      ) : (
        <div>
          <h2>Axios tutorial with hooks</h2>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                  <td>{user.company.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Users;
