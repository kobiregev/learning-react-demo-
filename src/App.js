import React, { useState } from "react";

import AddUser from "./components/Users/AddUser/AddUser";
import UsersList from "./components/Users/UserList/UsersList";

const dummyUsers = [
  { id: "user1", username: "AngryJunkMember", age: 12 },
  { id: "user2", username: "regevk6", age: 24 },
];

function App() {
  const [users, setUsers] = useState(dummyUsers);

  const addUserHandler = (addedUser) => {
    setUsers((prevState) => [
      ...prevState,
      { ...addedUser, id: Math.random().toString() },
    ]);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
