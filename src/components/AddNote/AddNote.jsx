import React from "react";
import AddButton from "../AddButton/AddButton";
import { useRef } from "react";

import styles from "./AddNote.module.css";

const AddNote = ({ addNewNote, isConfirmationAlertActive, isAlertActive }) => {
  const inputValue = useRef("");

  const generateTime = () => {
    const date = new Date();

    const hourAndMinutes = `${date.getHours()}:${(date.getMinutes()<10?'0':'')}${date.getMinutes()}`;
    return hourAndMinutes;
  };

  const addNoteHandler = () => {
    if (
      inputValue.current.value.length < 5 ||
      inputValue.current.value.length >= 52
    ) {
      window.alert(
        "Each note must have a length bigger than 5 and lower than 52."
      );
    } else if (
      inputValue.current.value.length >= 5 &&
      inputValue.current.value.length < 52
    ) {
      addNewNote({
        id: Math.random(),
        title: inputValue.current.value,
        time: generateTime(),
      });
    }
  };

  return (
    <div
      className={styles.container}
      style={
        isAlertActive || isConfirmationAlertActive
          ? { opacity: "70%", pointerEvents: "none" }
          : null
      }
    >
      <div className={styles.inputContainer}>
        <input
          ref={inputValue}
          type="text"
          placeholder="Start planning your day.."
        />
      </div>
      <AddButton onClick={addNoteHandler}>Add</AddButton>
    </div>
  );
};

export default AddNote;
