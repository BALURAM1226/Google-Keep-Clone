import React,{ useState } from 'react';
import AddIcon from '@material-ui/icons/Add';

export default function CreateNotes(props){
  const [expand,setExpand]= useState(false);
  const [note,setNote] = useState({
    title:'',
    content:'',
  });
   
   const InputEvent =(event) => {
     const {name, value} = event.target;

     setNote((preDate) => {
       return {
         ...preDate,
         [name]: value,

       };
     });
     
   };

   const addEvent = () => {
      props.passNote(note);
      setNote({
         title:'',
         content:'' ,   
      });

   }

   const expandIt =() => {
     setExpand(true);
   }


  return(
    <>
    <div className="notes-div">
    <form>
    { expand?
    <input type="text" className="input-area" value={note.title} onChange={InputEvent} name="title" placeholder="Title" autoComplete='off' /> :null }

    <textarea className="content-area" rows=" " value={note.content} onChange={InputEvent} onClick={expandIt} columns=" "  name="content" placeholder="Write notes......"  />

    { expand?
    <AddIcon  className="add-button" onClick={addEvent}/> :null }
  
    </form>
    </div>
    </>

  );
}