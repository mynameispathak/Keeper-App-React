import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.note.title}</h1>
      <p>{props.note.content}</p>
      <button onClick={() => props.delete(props.id)}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
