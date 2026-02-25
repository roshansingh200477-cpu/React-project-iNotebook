import React, { useContext } from 'react'
import noteContext from '../context/notes/NoteContext'

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote, showAlert } = props;

  return (
    <div className="col-md-4 mb-4">
      <div
        className="card h-100"
        style={{
          borderRadius: "18px",
          border: "none",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          transition: "0.4s ease",
          cursor: "pointer"
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.25)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = "translateY(0px)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
        }}
      >
        <div className="card-body">
          <h5 className="card-title fw-bold">{note.title}</h5>
          <p className="card-text text-muted">{note.description}</p>

          <div className="d-flex justify-content-end mt-3">
            <i 
              className="fa-solid fa-trash-can mx-3 text-danger"
              style={{ cursor: "pointer", transition: "0.3s" }}
              onMouseOver={e => e.target.style.transform = "scale(1.2)"}
              onMouseOut={e => e.target.style.transform = "scale(1)"}
              onClick={() => {
                deleteNote(note._id);
                showAlert("Deleted Successfully", "success");
              }}
            ></i>

            <i 
              className="fa-regular fa-pen-to-square text-primary"
              style={{ cursor: "pointer", transition: "0.3s" }}
              onMouseOver={e => e.target.style.transform = "scale(1.2)"}
              onMouseOut={e => e.target.style.transform = "scale(1)"}
              onClick={() => updateNote(note)}
            ></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteItem