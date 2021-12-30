import React, { useContext, useEffect, useState } from "react"
import { NoteContext } from "./NoteDataProvider"
import { useNavigate, useParams } from 'react-router-dom';
import "./Note.css"


export const NoteForm = () => {

    const { addNotes, updateNotes, getNotesById, getNotes } = useContext(NoteContext)
    const [notes, setNotes] = useState(
        {
            userId: +localStorage.getItem("billme_user"),
            note: ""

        })


    const [isLoading, setIsLoading] = useState(false);

    const { noteId } = useParams();
    const navigate = useNavigate();

    const handleControlledInputChange = (event) => {

        const newNote = { ...notes }

        newNote[event.target.name] = event.target.value

        setNotes(newNote)
    }

    const handleSaveNotes = () => {


        if (noteId === 0) {
            window.alert("please add a note")
        } else {
            setIsLoading(true);
            if (noteId) {
                updateNotes({
                    userId: +localStorage.getItem("billme_user"),
                    note: notes.note
                })
                    .then(() => navigate(`/notes/${notes.id}`))
            } else {
                addNotes({
                    userId: +localStorage.getItem("billme_user"),
                    note: notes.note
                })
                    .then(() => navigate(`/notes`))
            }
        }
    }

    useEffect(() => {
        if (noteId){
            getNotesById(noteId)
            .then(notes => {
                setNotes(notes)
                setIsLoading(false)
            })
        } else {
            setIsLoading(true)
        }
    }, [])

    return (
        <form className="notesForm">
        <h2 className="noteForm_title">Note</h2>
    
          <fieldset>
              <div className="form-group">
                  <label htmlFor="billName">Text:</label>
                  <input type="text" name="note" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="add note" defaultValue={notes.note}/>
              </div>
          </fieldset>
    
    
    
    
          <button class="cybr-btn"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() 
            handleSaveNotes()
          }}>
        {noteId ? <>Edit note</> : <>Save note</>}  <span aria-hidden class="cybr-btn__glitch">SAVE</span></button>
      </form>

    )
}