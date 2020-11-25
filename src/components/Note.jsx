import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.note.title}</h1>
      <p>{props.note.content}</p>
      <button onClick={() => props.delete(props.id)}>DELETE</button>
    </div>
  );
}

export default Note;
