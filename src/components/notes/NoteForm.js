import React, { useContext, useEffect, useState } from "react"
import { NoteContext } from "./NoteDataProvider"
import { useNavigate, useParams } from 'react-router-dom';
import "./Note.css"


export const NoteForm = () => {

    const { addNotes, updateNotes, getNotesById, getNotes } = useContext(NoteContext)
    const [notes, setNotes] = useState(
        {
            billId: 0,
            note: ""

        })


    const [isLoading, setIsLoading] = useState(false);

    const { billId } = useParams();

    const navigate = useNavigate();

    const handleControlledInputChange = (event) => {

        const newNote = { ...notes }

        newNote[event.target.name] = event.target.value

        setNotes(newNote)
    }

    const handleSaveNotes = () => {



        setIsLoading(true);


        
            addNotes({
                billId: +billId,
                note: notes.note
            })
                .then(() => navigate(`/bills/${billId}`))
        
    }




return (
    <form className="notesForm">
        <h2 className="noteForm_title">ADD NOTE</h2>

        <fieldset>
            <div className="form-group">
                <label htmlFor="billName"></label>
                <input type="text" name="note" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="add note" value={notes.note} />
            </div>
        </fieldset>




        <button className="cybr-btn"
            disabled={isLoading}
            onClick={event => {
                event.preventDefault()
                handleSaveNotes()
            }}>
            { <>Save note</>}  <span aria-hidden className="cybr-btn__glitch">SAVE</span></button>
    </form>

)
 }