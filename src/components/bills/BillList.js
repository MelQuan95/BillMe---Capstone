import React, { useContext, useEffect, useState } from "react";
import { BillContext } from "./BillDataProvider"
import { BillCard } from "./BillCard";
import { useNavigate, useParams } from "react-router-dom"

export const BillList = () => {
  const { getBills, bills } = useContext(BillContext)

  useEffect(() => {
    console.log("BillLPaidList: useEffect - getBills")
    getBills()
  }, []);

  const { billId } = useParams();
  const sortedMonths = bills.sort((a, b) => {
    return new Date(a.date) - new Date(b.date)

  })


  const billTotal = () => {


    let sum = 0;


    const totalArray = bills.filter((unpaid) => {
      return unpaid.paid === false && new Date(unpaid.date).getMonth() === new Date().getMonth()
    })
     
     for (let i = 0; i < totalArray.length; i++ ) {
        
         
            sum += (totalArray[i].amount)
         

    


    }
    return sum


  }

  const MonthTotal = (p) => {
    const currentMonth = new Date().getMonth()
    const billMonth = new Date(p.date).getMonth()

    return `${currentMonth} <- Are these Equal? -> ${billMonth}`

  }

  const navigate = useNavigate()
  return (
    <>
      <div className="container2">


        <h3 className="unpaidbillslist">UNPAID</h3>
        <p className="tots">${billTotal()}</p>

        {sortedMonths.filter((unpaid) => {
          return unpaid.paid === false && new Date(unpaid.date).getMonth() === new Date().getMonth()
        }).map(bill => {
          return (
            <>
              {/* {MonthTotal(bill)} */}
              <BillCard

                key={bill.id}
                bill={bill}

              />
              
            </>)
        })
        }
      </div>

    </>
  )


 
}


/* <h1 className="billsHeader">Bills</h1>

      <button onClick={() => navigate("/bills/create")}>
        New Bill
      </button> */
/* 1. filter bills for unpaid bills only
         2.create a place for paid bills 
         3. make a way to mark unpaid bills as paid */