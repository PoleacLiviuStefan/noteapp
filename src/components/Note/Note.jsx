import React from "react";
import styles from "./Note.module.css";
import DeleteNote from "../DeleteNote/DeleteNote";
import CheckStatus from "../CheckStatus/CheckStatus";
import { useState } from "react";
import { useRef } from "react";
export default function Note({
  title,
  time,
  deleteNote,
  showAlert,
  hideAlert,
  setTitleToDelete,
}) {
  const [isChecked, setIsChecked] = useState(false);

  const [editVisible, setEditVisible] = useState(false);

  const checkNote = () => {
    setIsChecked((state) => !state);
  };

  const [isEditing, setIsEditing] = useState(false);

  const [noteTitle, setNoteTitle] = useState(title);

  const titleInput = useRef("");

  const saveChanges = (e) => {
    if (e.key === "Enter") {
       if(titleInput.current.value.length>=5)
      setNoteTitle(titleInput.current.value);
      else
      window.alert(
        "Each note must have a length bigger than 5 and lower than 52."
      );
        setIsEditing(false);
      
    
      
    
    }
  };

  const editModeHandler = () => {
    setIsEditing((state) => !state);
  };

  return (
    <div
      className={styles.container}
      style={
        isChecked
          ? { backgroundColor: "#00FFAB" }
          : { backgroundColor: "#646FD4" }
      }
      onMouseEnter={() => setEditVisible(true)}
      onMouseLeave={() => setEditVisible(false)}
    >
      <div className={styles.title}>
        {isEditing ? (
          <input
            ref={titleInput}
            type="text"
            className={styles.editMode}
            defaultValue={noteTitle}
            onKeyPress={saveChanges}
            autoFocus
            style={
              isChecked
                ? { backgroundColor: "#00FFAB" }
                : { backgroundColor: "#646FD4" }
            }
          />
        ) : (
          <h2>
            <i>{noteTitle}</i>
          </h2>
        )}
      </div>
      <div className={styles.edit}>
        <img
          src={require("../../assets/images/edit.png")}
          alt=""
          style={
            editVisible ? { visibility: "visible" } : { visibility: "hidden" }
          }
          onClick={() => editModeHandler()}
        />
      </div>
      <div className={styles.time}>
        <p>
          <i>{time}</i>
        </p>
      </div>
      <div className={styles.controls}>
        <CheckStatus onClick={checkNote} />
        <DeleteNote
          onClick={() => {
            showAlert();
            setTitleToDelete(title);
          }}
        />
      </div>
    </div>
  );
}
