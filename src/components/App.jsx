import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { createNotEmittedStatement } from "typescript";

function App() {



const [notes, setNotes]= useState([]);
//This function enables to add a new note, the props have been passed over.
function addNote(note){
setNotes(prevNotes => {
 return  [...prevNotes, note];
});

}


//This function enables us to delete the note through the delete button.
//use an id for deletion.

function deleteNote (id) {
     setNotes(prevNotes =>  {
          return prevNotes.filter((noteItem, index) => {
               return index !==  id;
  });
});

}

  return (
    <div>
      <Header />
      <CreateArea
      onAdd={addNote}
       />

       {notes.map((noteItem, index)=>{ //This index has been added to help deletion through which we have set the key and id.
       return <Note title={noteItem.title}
       key={index}
         id={index}
       content={noteItem.content}
         onDelete={deleteNote}
         
       />})}

      
      <Footer />
    </div>
  );
       }

export default App;
