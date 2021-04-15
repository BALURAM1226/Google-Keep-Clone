import React from 'react';
import DeleteOutlineIcon from 
'@material-ui/icons/DeleteOutline';
export default function Notes(props){

  const deleteNote = () => {
    props.deleteItem(props.id);
  }
  return(
    <>
    <div className="notes-content">
    <div className="main-notes">
    <h1> {props.title} </h1>
    <p className="info"> {props.content} </p>
     <DeleteOutlineIcon onClick={deleteNote} className="delete-button"/>
     </div>
    </div>
    <br/>
    </>

  );
}