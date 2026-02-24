import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

    // Get Note 
    const getNotes = async () => {
        // Add API call 
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjk4OGE0MTNmOTVkZGU2OWY2OThjYjk5In0sImlhdCI6MTc3MDU2MjYzN30.25lcrA7PWTlPpFquZ6e3bNHwoIBenIPdrGG43x74gPA'
            }
        });
        const json = await response.json();
        setNotes(json)

    }

    // Add Note 
    const addNote = async (title, description, tag) => {
        // Add API call 
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjk4OGE0MTNmOTVkZGU2OWY2OThjYjk5In0sImlhdCI6MTc3MDU2MjYzN30.25lcrA7PWTlPpFquZ6e3bNHwoIBenIPdrGG43x74gPA'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const note = await response.json();
        setNotes(notes.concat(note))
      
    }

    // Delete the Note
    const deleteNote = async (id) => {

        // API CALL 
        const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjk4OGE0MTNmOTVkZGU2OWY2OThjYjk5In0sImlhdCI6MTc3MDU2MjYzN30.25lcrA7PWTlPpFquZ6e3bNHwoIBenIPdrGG43x74gPA'
            },
        });
        const json = await response.json();
        console.log(json)

        // Logic to delete the Notes
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);
    }

    // Edit the Note 
    const editNote = async (id, title, description, tag) => {
        //API CALL 
        const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjk4OGE0MTNmOTVkZGU2OWY2OThjYjk5In0sImlhdCI6MTc3MDU2MjYzN30.25lcrA7PWTlPpFquZ6e3bNHwoIBenIPdrGG43x74gPA'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();
        // Logic for the edit the client 
        const newNotes = JSON.parse(JSON.stringify(notes));

        for (let i = 0; i < newNotes.length; i++) {
            if (newNotes[i]._id === id) {
                newNotes[i].title = title;
                newNotes[i].description = description;
                newNotes[i].tag = tag;
                break;
            }
        }

        setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
