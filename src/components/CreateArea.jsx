import React, { useState } from "react";

function CreateArea(props) {

  const[note, setNote]= useState({
title: "",
content: ""
  });

//This function creates the note with a title and content. 
function handleChange(event){
const{name,value} = event.target;
//Lets add this to the constants above
setNote(prevNote => {
  return{
...prevNote,
[name]: value
  };

});
}
//This function enables the submit button to add the note title and content.
function submitNote(event){
props.onAdd(note);
//To reset it back to the empty title and content as shown in the beginining
setNote({
title: "",
content: ""
});

event.preventDefault();//This helps us to avoid refresh of page upon clicking on submit.
}



  return (
    <div>
      <form>
        <input 
        name="title"     
         value={note.title} 
         placeholder="Title" 
        onChange={handleChange}
         />

        <textarea 
        name="content" 
        value={note.content}
         placeholder="Take a note..." rows="3" 
         onChange={handleChange}

         />

        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
