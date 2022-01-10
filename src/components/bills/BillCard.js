import React, { useContext } from "react"
import "./Bill.css"
import { Link } from "react-router-dom"
import { BillContext } from "./BillDataProvider"



export const BillCard = ({ bill }) => {
    const { getBills, paidBills } = useContext(BillContext)

    const handleCheckbox = (event) => {
        event.preventDefault();
        paidBills(bill.id).then(getBills)
    }
    if (bill.userId === parseInt(localStorage.getItem("billme_user"))) {
        return (

            <section className="billcard">

                <h3 className="cybr-btn">< Link to={`/bills/detail/${bill.id}`} className="link">{bill.name} <span aria-hidden className="cybr-btn__glitch">{bill.name}</span>
                </Link></h3>

                <div className="billdate">{bill.date}</div>
                <div className="billamount">{bill.amount}</div>

                <div className="billcheckall">
                    <label htmlFor="billcheck">paid:  </label>
                    <input type="checkbox" className="paidBills" onChange={handleCheckbox} />
                </div>

            </section>

        )
    }
    else {
        return (
            ""
        )
    }
}