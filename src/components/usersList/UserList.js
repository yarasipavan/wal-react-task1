import { useContext } from "react";
import { userContext } from "../userContext";

function UserList() {
  let [users, setUsers] = useContext(userContext);
  return (
    <div className="text-start">
      <div className="mt-4 mb-2">
        <h2>Users List</h2>
      </div>
      <div>
        {users.length === 0 ? (
          <h4 className="text-danger ms-4 ">No Users </h4>
        ) : (
          <table className="text-center w-100  table table-striped">
            <thead className="bg-dark text-light ">
              <tr>
                <th>Name</th>
                <th>Date Of Birth</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.dob}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default UserList;
