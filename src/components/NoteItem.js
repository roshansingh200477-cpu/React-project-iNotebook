import React, { useContext } from 'react';
import noteContext from '../context/notes/NoteContext';


const NoteItem = ({ note, updateNote }) => {
    const { deleteNote, editNote} = useContext(noteContext);
    // const { note } = props;
    return (
        <>
            {
                <div className="mx-3 my-2" style={{ border: "2px solid black", padding: "10px", width: "50rem", height: "8rem", boxShadow: "0px 2px 5px 5px"}}>
                    <h2>{note.title}</h2>
                    <p>{note.description}</p>
                    <i className="fa-solid fa-trash-can mx-3" onClick={()=>{deleteNote(note._id)}}></i>
                    <i className="fa-regular fa-pen-to-square" onClick={()=>{updateNote(note)}}></i>
                </div >
            }
        </>



        /* <div className="card" style={{width: "18rem",height: "15rem"}}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div> */

    );
}


export default NoteItem;

/* </div>
        <div className="col-md-3 my-2">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>  */