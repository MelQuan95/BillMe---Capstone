import React, { useState, createContext } from "react"

export const BillContext = createContext()

export const BillProvider = (props) => {

        const [bills, setBills] = useState([])
        
        const getBills = () => {
            return fetch("http://localhost:8088/bills")
            .then(res => res.json())
            .then(setBills)
        }

        const addBills = BillsObj => {
            return fetch("http://localhost:8088/bills", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(BillsObj)
            })
            .then(response => response.json())
            .then(getBills)
        }
        const updateBills = bill => {
            return fetch(`http://localhost:8088/bills/${bill.id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(bill)
            })
              .then(getBills)
        }
          const getBillsById = (id) => {
            return fetch(`http://localhost:8088/bills/${id}?`)
                .then(res => res.json())
        }

        const deleteBills = billsId => {
            return fetch(`http://localhost:8088/bills/${billsId}`, {
                method: "DELETE"
            })
                .then(getBills)
        }

        const paidBills = billsId => {
            return fetch(`http://localhost:8088/bills/${billsId}`, {
                method: "PATCH",
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    paid: true,
                }),
            }).then(getBills)

        }
        return (
            <BillContext.Provider value={{ 
                bills, addBills, getBills, deleteBills, updateBills, getBillsById, paidBills
            }}>
                {props.children}
            </BillContext.Provider>
        )
    }

