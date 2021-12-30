import React from "react"
import "./Bill.css"
import { Link } from "react-router-dom"



export const BillCard = ({ bill }) => {
    return (
        <section className="billcard">
            <h3 className="cybr-btn">< Link to={`/bills/detail/${bill.id}`}className="link">{bill.name} <span aria-hidden className="cybr-btn__glitch">{bill.name}</span>
            </Link></h3>
            
            <div className="billdate">{bill.date}</div>
            <div className="billamount">{bill.amount}</div>

        </section>
    )
}


