import React from "react";
import styles from "./ListNotes.module.css";
import Note from "../Note/Note";
export default function ListNotes({
  notes,
  deleteNote,
  showAlert,
  hideAlert,
  setTitleToDelete,
  isConfirmationAlertActive,
  isAlertActive,
}) {
  const loadNotes = () => {
    const notesAsItems = notes.map((note) => (
      <Note
        key={note.id}
        setTitleToDelete={setTitleToDelete}
        title={note.title}
        time={note.time}
        deleteNote={deleteNote}
        showAlert={showAlert}
        hideAlert={hideAlert}
      />
    ));
    return notesAsItems;
  };

  return (
    <div
      className={styles.container}
      style={
        isAlertActive || isConfirmationAlertActive
          ? { opacity: "70%", pointerEvents: "none" }
          : {}
      }
    >
      {notes && loadNotes()}
    </div>
  );
}
