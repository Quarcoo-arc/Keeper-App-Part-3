import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(props) {
  const [note, setNote] = useState([]);

  function addNote(info) {
    setNote((prevValue) => {
      return [...prevValue, info];
    });
    console.log(note);
  }

  function onDelete(id) {
    setNote((prevValue) => {
      return prevValue.filter((element, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addItem={addNote} />
      {note.map((element, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={element.title}
            content={element.content}
            delete={onDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
