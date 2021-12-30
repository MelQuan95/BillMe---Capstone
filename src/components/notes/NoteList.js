import React, { useContext, useEffect } from "react";
import { NoteContext } from "./NoteDataProvider"
import { NoteCard } from "./NoteCard";
import { useNavigate } from "react-router-dom"

export const NoteList = () => {
    const { getNotes, notes } = useContext(NoteContext)
    

    useEffect(() => {
        console.log("NoteList: useEffect - getNotes")
        getNotes()
    }, [])

    const navigate = useNavigate()
    
    return (
        <>
          <h1 className="NotesHeader">Notes</h1>
      
          <button onClick={() => navigate("/notes/create")}>
                      New Note
                  </button>
          <div className="notes">

          {notes.map(note => {

              return <NoteCard
              key={note.id}
              note={note}

              />
          }
            
            )}
          
            
          </div>
        </>
        )
      }