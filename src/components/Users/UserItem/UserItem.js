import React from "react";
import styles from "./UserItem.module.css";

const UserItem = ({ username, age }) => {
  return (
    <div className={styles.user_container}>
      <p>{username}</p>
      <p>{age} years old</p>
    </div>
  );
};

export default UserItem;
