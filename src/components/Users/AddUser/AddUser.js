import React, { useState, useRef } from "react";
import Button from "../../Ui/Button/Button";
import Card from "../../Ui/Card/Card";
import ErrorModal from "../../Ui/ErrorModal/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = ({ onAddUser }) => {
  const usernameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState(null);
  const errorHandler = () => setError(null);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const enteredUsername = usernameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    //
    if (!enteredUsername.trim() || +enteredAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    // Pass added user to parent component
    onAddUser({ username: enteredUsername, age: enteredAge });

    // Clear inputs after submit and error state.
    usernameInputRef.current.value = "";
    ageInputRef.current.value = "";
    errorHandler();
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error?.title}
          message={error?.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.container}>
        <form className={styles.form} onSubmit={formSubmitHandler}>
          <div className={styles.input_container}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              ref={usernameInputRef}
            />
          </div>
          <div className={styles.input_container}>
            <label htmlFor="age">Age</label>
            <input id="age" type="number" placeholder="Age" ref={ageInputRef} />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};
export default AddUser;
