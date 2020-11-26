import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [items, setItems] = useState([]);

  function addNote(inputText, event) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    // setItems("");
  }
  function deleteNote(id) {
    setItems((prevItems) => {
      return prevItems.filter(function (item, index) {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {items.map(function (item, index) {
        const uID = uuidv4();
        return <Note key={uID} id={uID} note={item} delete={deleteNote} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
