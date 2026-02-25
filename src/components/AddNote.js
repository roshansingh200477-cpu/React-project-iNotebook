import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/NoteContext';

function AddNote(props) {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({
        title: "",
        description: "",
        tag: ""
    });


    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title:"", description:"", tag:""})
        props.showAlert("Added Successfully", "success");
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }
   return (
    <div className="container my-5">
        <div 
            className="card p-4"
            style={{
                borderRadius: "20px",
                border: "none",
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                transition: "0.3s ease",
                background: "linear-gradient(145deg, #ffffff, #f8f9fa)"
            }}
        >
            <h2 
                className="mb-4 fw-bold text-center"
                style={{ letterSpacing: "1px" }}
            >
                ✨ Add Your Note
            </h2>

            <form>
                {/* Title */}
                <div className="mb-4">
                    <label htmlFor="title" className="form-label fw-semibold">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        id="title"
                        name="title"
                        value={note.title}
                        onChange={onChange}
                        minLength={5}
                        required
                        style={{
                            borderRadius: "12px",
                            transition: "0.3s"
                        }}
                        onFocus={e => e.target.style.boxShadow = "0 0 0 3px rgba(13,110,253,0.25)"}
                        onBlur={e => e.target.style.boxShadow = "none"}
                    />
                    <div className="form-text">
                        Minimum 5 characters required.
                    </div>
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label htmlFor="description" className="form-label fw-semibold">
                        Description
                    </label>
                    <textarea
                        className="form-control form-control-lg"
                        id="description"
                        name="description"
                        rows="3"
                        value={note.description}
                        onChange={onChange}
                        minLength={5}
                        required
                        style={{
                            borderRadius: "12px",
                            transition: "0.3s"
                        }}
                        onFocus={e => e.target.style.boxShadow = "0 0 0 3px rgba(13,110,253,0.25)"}
                        onBlur={e => e.target.style.boxShadow = "none"}
                    />
                </div>

                {/* Tag */}
                <div className="mb-4">
                    <label htmlFor="tag" className="form-label fw-semibold">
                        Tag
                    </label>
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        id="tag"
                        name="tag"
                        value={note.tag}
                        onChange={onChange}
                        minLength={5}
                        required
                        style={{
                            borderRadius: "12px",
                            transition: "0.3s"
                        }}
                        onFocus={e => e.target.style.boxShadow = "0 0 0 3px rgba(13,110,253,0.25)"}
                        onBlur={e => e.target.style.boxShadow = "none"}
                    />
                </div>

                {/* Button */}
                <div className="d-grid">
                    <button
                        disabled={note.title.length < 5 || note.description.length < 5}
                        type="submit"
                        className="btn btn-primary btn-lg"
                        onClick={handleClick}
                        style={{
                            borderRadius: "12px",
                            fontWeight: "600",
                            letterSpacing: "0.5px",
                            transition: "0.3s"
                        }}
                        onMouseEnter={e => {
                            e.target.style.transform = "translateY(-2px)";
                            e.target.style.boxShadow = "0 8px 20px rgba(13,110,253,0.4)";
                        }}
                        onMouseLeave={e => {
                            e.target.style.transform = "translateY(0)";
                            e.target.style.boxShadow = "none";
                        }}
                    >
                        ➕ Add Note
                    </button>
                </div>
            </form>
        </div>
    </div>
)
}

export default AddNote
