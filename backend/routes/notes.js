const express = require('express');
const router = express.Router();
const Note = require('../models/Note');
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');

// ROUTE 1 : Get all Notes using : GET "/api/notes/getuser". login reqiured
try {
    router.get('/fetchallnotes', fetchuser, async (req, res) => {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes)
    })
} catch (error) {
    res.status(500).send("Some error occured");
}


// ROUTE 2 : Add a new Notes using : POST "/api/notes/addnote". login reqiured

router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be at least 5 characters').isLength({ min: 5 }),], async (req, res) => {
        try {
            const { title, description, tag } = req.body;
            // if there errors , return bad request and erros
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Note({
                title, description, tag, user: req.user.id
            })
            const savedNote = await note.save()
            res.json(savedNote);

        } catch (error) {
            res.status(500).send("Some error occured");
        }


    })

    // ROUTE 3 : Update a existing Notes using : PUT "/api/notes/updatenote". login reqiured
    router.put('/updatenotes/:id', fetchuser, async (req, res) => {
        const { title, description, tag } = req.body;
    try {
        
    
        //Create newNote Object 
        const newNote = {};
        if(title){newNote.title = title};
        if(description){newNote.description = description};
        if(tag){newNote.tag = tag};

        //Find note to be update and update at 
        let note = await Note.findById(req.params.id);
        if(!note){return res.status(404).send("Note found!")}
        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not Allowd");
        }
        
        note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true})
        res.json(note);
        
    }catch (error) {
            res.status(500).send("Some error occured");
        }
    })

    // ROUTE 4 : Deleting a existing Notes using : DELETE "/api/notes/deletenote". login reqiured
     router.delete('/deletenotes/:id', fetchuser, async (req, res) => {
        // const { title, description, tag} = req.body;
    try {
        //Find note to be update and update at 
        let note = await Note.findById(req.params.id);
        if(!note){return res.status(404).send("Note found!")}

        // Allow only if user own this 
        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not Allowd");
        }
        
        note = await Note.findByIdAndDelete(req.params.id)
        res.json({"Success": "Note has been deleted ", note:note });
        
    }catch (error) {
            res.status(500).send("Some error occured");
        }
    })


module.exports = router 