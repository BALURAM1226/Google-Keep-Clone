import React, { useState } from "react";
import Input from "./Input";
import Header from "./Header"
import CreateNotes from "./CreateNotes"
import Notes from "./Notes"
import "./style.css";

export default function App() {
    const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
     
     setAddItem((oldData) => {
       return [...oldData, note];
     });
     
  };

const onDelete = (id) => {

setAddItem((preData) =>
preData.filter((curdata,index)=> {
  return index !== id;
})
);
 
};

  return (
    <>
    <Header/>
    <Input />
    <CreateNotes passNote={addNote}/>
    {
      addItem.map((val,index) => {
        return (
            <Notes 
             key={index}
             id={index}
             title = {val.title}
             content={val.content}
             deleteItem={onDelete}
            />

        );
      })
    }
  
    </>
  );
}
