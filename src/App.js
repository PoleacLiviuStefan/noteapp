import AddNote from "./components/AddNote/AddNote";
import ListNotes from "./components/ListNotes/ListNotes";
import "./App.css";
import { useState } from "react";
import BasicAlert from "./components/Alerts/BasicAlert";

function App() {
  const [notes, setNotes] = useState([]);
  const [isConfirmationAlertActive, setIsConfirmationAlertActive] =
    useState(false);
  const [isAlertActive, setIsAlertActive] = useState(false);
  const [titleToDelete, setTitleToDelete] = useState("");
  const showAlert = () => {
    setIsConfirmationAlertActive(true);
  };

  const hideAlert = () => {
    setIsConfirmationAlertActive(false);
  };

  const changeTitleToDelete = (title) => {
    setTitleToDelete(title);
  };

  const addNewNote = (note) => {
    const filterForDuplicate = notes.filter(
      (currentNote) => currentNote.title === note.title
    );
    if (filterForDuplicate.length > 0) {
      window.alert("Dont repeat yourself!");
    } else {
      setNotes((state) => [...state, note]);
    }
  };

  const deleteNote = (note) => {
    const test = notes.filter((currentNote) => {
      console.log(`compar ${currentNote.title} cu ${note}`);
      return currentNote.title !== note;
    });

    setNotes([...test]);
  };

  console.log(titleToDelete);
  return (
    <div className="App">
      {isConfirmationAlertActive && (
        <BasicAlert
          onAccept={() => deleteNote(titleToDelete)}
          hideAlert={hideAlert}
        />
      )}

      <div className={"container"}>
        <h1 className={"notesCount"}>
          <i>Notes: </i>
          <span className="count">
            <i>{notes.length}</i>
          </span>
        </h1>
        <AddNote
          addNewNote={addNewNote}
          isConfirmationAlertActive={isConfirmationAlertActive}
          isAlertActive={isAlertActive}
        />
        <ListNotes
          setTitleToDelete={setTitleToDelete}
          notes={notes}
          deleteNote={deleteNote}
          showAlert={showAlert}
          hideAlert={hideAlert}
          isConfirmationAlertActive={isConfirmationAlertActive}
          isAlertActive={isAlertActive}
        />
      </div>
    </div>
  );
}

export default App;
