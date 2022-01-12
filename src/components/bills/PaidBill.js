import React, { useContext, useEffect, useState } from "react";
import { BillContext } from "./BillDataProvider"
import { BillCard } from "./BillCard";
import { createRoutesFromChildren, useNavigate, useParams } from "react-router-dom"

export const BillPaidList = () => {
const {getBills, bills} = useContext(BillContext)

useEffect(() => {
    console.log("BillLPaidList: useEffect - getBills")
    getBills()
  }, [])

  const { billId } = useParams();
  const sortedMonths = bills.sort((a, b) => {
    return new Date(a.date) - new Date(b.date)

})
const MonthTotal = (p) => {
  const currentMonth = new Date().getMonth()
  const billMonth = new Date(p.date).getMonth()
  
  return `${currentMonth} <- Are these Equal? -> ${billMonth}`
 
  }
  
  const paidBillTotal = () => {

    
 let sum = 0;
 
 
const totalArray = bills.filter((paid) => {
  return paid.paid === true && new Date(paid.date).getMonth() === new Date().getMonth()
})
 
 for (let i = 0; i < totalArray.length; i++ ) {
    
     
        sum += (totalArray[i].amount)
     
    
   
}
return sum


}




  return ( 
    <div className="container1">
    

        <h3 className="paidbillslist"> PAID</h3>
 <p className=" tots">TOTAL: ${paidBillTotal()}</p>
{sortedMonths.filter((paid) => {
          return paid.paid === true && new Date(paid.date).getMonth() === new Date().getMonth()
        }).map(bill => {
          return (
            <>
          
          <BillCard

            key={bill.id}
            bill={bill}

          />
          </>)
        })
        }


    </div>
  )
   
  
  


}