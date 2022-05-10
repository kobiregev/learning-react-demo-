import React from "react";
import Card from "../../Ui/Card/Card";
import UserItem from "../UserItem/UserItem";
import styles from "./UsersList.module.css";

const UsersList = ({ users }) => {
  return (
    <Card className={styles.container}>
      {users.map((user) => (
        <UserItem username={user.username} age={user.age} key={user.id} />
      ))}
    </Card>
  );
};

export default UsersList;
