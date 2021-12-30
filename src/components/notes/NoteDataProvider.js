import React, { useState, createContext } from "react"

export const NoteContext = createContext()

export const NoteProvider = (props) => {

        const [notes, setNotes] = useState([])
        
        const getNotes = () => {
            return fetch("http://localhost:8088/notes")
            .then(res => res.json())
            .then(setNotes)
        }

        const addNotes = NotesObj => {
            return fetch("http://localhost:8088/notes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(NotesObj)
            })
            .then(response => response.json())
        }
        
        const updateNotes = bills => {
            return fetch(`http://localhost:8088/notes/${notes.id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(bills)
            })
              .then(getNotes)
        }
        const getNotesById = (id) => {
            return fetch(`http://localhost:8088/notes/${id}?`)
                .then(res => res.json())
        }

        const deleteNotes = NotesId => {
            return fetch(`http://localhost:8088/notes/${NotesId}`, {
                method: "DELETE"
            })
                .then(getNotes)
        }
        return (
            <NoteContext.Provider value={{ 
                notes, addNotes, getNotes, deleteNotes, updateNotes, getNotesById
            }}>
                {props.children}
            </NoteContext.Provider>
        )
    }

