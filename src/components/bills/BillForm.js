import React, { useContext, useEffect, useState } from "react"
import { BillContext } from "./BillDataProvider"
import { useNavigate, useParams } from 'react-router-dom';
import "./Bill.css"



export const BillForm = () => {

    const { addBills, updateBills, getBillsById, getBills } = useContext(BillContext)
    const [bill, setBill] = useState(
        {
            userId: +localStorage.getItem("billme_user"),
            name: "",
            date: "",
            amount: "",
            paid: ""

        })

    const [isLoading, setIsLoading] = useState(false);

    const { billId } = useParams();
    const navigate = useNavigate();

    const handleControlledInputChange = (event) => {

        const newBill = { ...bill }

        newBill[event.target.name] = event.target.value

        setBill(newBill)


    }

    const handleSaveBills = () => {
       console.log(billId)



        if (billId === 0) {
            window.alert("please add a bill")
        } else {
            setIsLoading(true);
            if (billId){
                updateBills({
                    id: billId,
                    userId: +localStorage.getItem("billme_user"),
                    name: bill.name,
                    date: bill.date,
                    amount: +bill.amount,
                    paid: bill.paid

        
                    
                })
                .then(() => navigate(`/bills/${bill.id}`))
            } else {
            addBills ({
                userId: +localStorage.getItem("billme_user"),
                name: bill.name,
                date: bill.date,
                amount: +bill.amount,
                paid: false
                    
            })
            .then(() => navigate("/bills"))
            }
        }
    }
    

    useEffect(() => {
        if (billId){
          getBillsById(billId)
          .then(bill => {
              setBill(bill)
              setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
    }, [])
        
   return (
    <form className="billsForm">
    <h3 className="billForm_title">NEW BILL</h3>

      <fieldset>
          <div className="form-group">
              <label htmlFor="billName">Bill Name</label>
              <input type="text" name="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="bill name" value={bill.name}/>
          </div>
      </fieldset>

    <fieldset>
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input type="date" name="date" onChange={handleControlledInputChange} className="form-control" placeholder="date" value={bill.date}/></div>
    </fieldset>

    <fieldset>
          <div className="form-group">
              <label htmlFor="billAmount">Bill Amount:</label>
              <input type="number" name="amount" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="bill amount" value={bill.amount}/>
          </div>
      </fieldset>



      <button className="cybr-btn"
      disabled={isLoading}
      onClick={event => {
        event.preventDefault() 
        handleSaveBills()
      }}>
    {<>Save Bill</>}  <span aria-hidden className="cybr-btn__glitch">SAVE</span></button>
  </form>
   )

}


  



