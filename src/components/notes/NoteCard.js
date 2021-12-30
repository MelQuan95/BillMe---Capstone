import React from "react"
import "./Note.css"
export const NoteCard = ({ note }) => {
    return (
            <section className="notecard">
                <div className="notetext">{note.note}</div>
                

            </section>
    )
}