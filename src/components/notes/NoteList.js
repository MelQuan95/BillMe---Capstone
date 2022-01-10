import React, { useContext, useEffect, useState } from "react";
import { NoteContext } from "./NoteDataProvider"
import { NoteCard } from "./NoteCard";
import { useNavigate, useParams } from "react-router-dom"

export const NoteList = () => {
  const { getNotes, notes } = useContext(NoteContext)

  const [filteredNotes, SetFiltered] = useState([])

  const { billId } = useParams();

  useEffect(() => {
    console.log("NoteList: useEffect - getNotes")
    getNotes()
  }, [])

  const navigate = useNavigate()

  return (
    <>
      <h1 className="NotesHeader">NOTES</h1>

      
      {/* notes.filter(bill => bill.id.toLowerCase().includes(searchTerms)). */}
      <div className="notes">

        {notes.filter((note) => {
          return note.billId === +billId
        }).map((note) => {
          return <NoteCard
          key={note.id}
          note = {note}


        />
         
        })
        }


      </div>
    </>
  )
}