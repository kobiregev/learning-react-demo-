import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./ErrorModal.module.css";

const ErrorModal = ({ title, message, onConfirm }) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={onConfirm} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <main className={styles.content}>{message}</main>
        <footer className={styles.actions}>
          <Button onClick={onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
