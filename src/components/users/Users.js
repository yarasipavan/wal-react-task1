import AddUser from "../addUsers/AddUser";
import UserList from "../usersList/UserList";
function Users() {
  return (
    <div>
      <h1 className="text-center  p-3">Users</h1>
      <div className="container ">
        <div className="row">
          <div className="col col-12 col-md-4 mb-4  ">
            <AddUser />
          </div>
          <div className="col col-12 col-md-7 offset-md-1  mb-4">
            <UserList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
