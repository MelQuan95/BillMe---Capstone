import React, { useContext, useEffect, useState } from "react"
import { BillContext } from "./BillDataProvider"
import "./Bill.css"
import { useParams, useNavigate } from "react-router-dom"

export const BillDetails = () => {
    const { getBillsById, deleteBills } = useContext(BillContext)

    const [bill, setBills] = useState({})

    const { billId } = useParams();
    const navigate = useNavigate();
    const billsDelete = () => {
        deleteBills(bill.id)
            .then(() => {
                navigate("/bills")
            })
    }

    useEffect(() => {
        console.log("useEffect", billId)
        getBillsById(billId)
            .then((response) => {
                setBills(response)
            })
    }, [])

    return (
        <section className="billcard">
            <div className="billname">{bill.name}</div>
            <div className="billdate">{bill.date}</div>
            <div className="billamount">{bill.amount}</div>
        
        <div className="buttons">
            <button className="fill" onClick={() => { navigate(`/bills/edit/${bill.id}`) }}>Edit</button>
            <button className="fill" onClick={billsDelete}>Delete</button>
            {/* <button className="fill" onClick={() => { navigate(`/notes/create/${bill.id}`) }}>Add Note</button> */}
            </div>
        </section>
    )
}
