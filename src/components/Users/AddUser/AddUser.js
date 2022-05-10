import React, { useState } from "react";
import Button from "../../Ui/Button/Button";
import Card from "../../Ui/Card/Card";
import ErrorModal from "../../Ui/ErrorModal/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = ({ onAddUser }) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(null);

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const errorHandler = () => setError(null);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    //
    if (!username.trim() || +age < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    // Pass added user to parent component
    onAddUser({ username, age });

    // Clear inputs after submit and error state.
    setUsername("");
    setAge("");
    errorHandler();
  };

  return (
    <>
      {error && <ErrorModal title={error?.title} message={error?.message} onConfirm={errorHandler} />}
      <Card className={styles.container}>
        <form className={styles.form} onSubmit={formSubmitHandler}>
          <div className={styles.input_container}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={usernameChangeHandler}
            />
          </div>
          <div className={styles.input_container}>
            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="number"
              placeholder="Age"
              value={age}
              onChange={ageChangeHandler}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};
export default AddUser;
