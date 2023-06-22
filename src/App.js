import { Fragment, useState } from "react";
import AddUser from "./Components/AddUser";
import UserList from "./Components/UserList";

const App = (props) => {
  const [usersList, setUsersList] = useState([]);
  const addUsersHandler = (uName , uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <Fragment>
      <AddUser  onAddUser={addUsersHandler} />
      <UserList users={usersList} />
    </Fragment>
  );
};

export default App;
