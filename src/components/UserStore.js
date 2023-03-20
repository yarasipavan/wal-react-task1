//import create context obj
import { userContext } from "./userContext";
import { useState } from "react";

//function
function UserStore({ children }) {
  //state
  let [users, setUsers] = useState([]);

  //return
  return (
    <userContext.Provider value={[users, setUsers]}>
      {children}
    </userContext.Provider>
  );
}
export default UserStore;
