import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

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
      <Note note={{ title: "Hello", content: "This is content" }} />
      {items.map(function (item, index) {
        return <Note key={index} id={index} note={item} delete={deleteNote} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
