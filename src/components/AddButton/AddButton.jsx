import React from "react";
import styles from "./AddButton.module.css";
import "../AddNote/AddNote";

const AddButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.buttonadd}>
      {children}
    </button>
  );
};

export default AddButton;
