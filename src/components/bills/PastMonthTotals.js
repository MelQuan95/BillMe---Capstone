import React, { useContext, useEffect, useState } from "react";
import { BillContext } from "./BillDataProvider"
import { BillCard } from "./BillCard";
import { useNavigate, useParams } from "react-router-dom"

export const PastMonthTotalList = () => {
const {getBills, bills} = useContext(BillContext)

useEffect(() => {
    console.log("PastMonthTotalList: useEffect - getBills")
    getBills()
  }, [])

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
    const current = new Date();

    current.setMonth(current.getMonth()-1);
    return new Date(paid.date).getMonth() === current.getMonth()
  })
   
   for (let i = 0; i < totalArray.length; i++ ) {
      
       
          sum += (totalArray[i].amount)
}
return sum


}

const PastMonthTotals = (bill) => {
  const current = new Date();
  
  current.setMonth(current.getMonth()-1);
const previousMonth = current.toLocaleString('default', { month: 'long' });

return( current.getMonth()); 
}




  return ( 
    <div className="pastMonthContainer">
    

        <h3 className="paidbillslist"> Past Month</h3>
 <p className="tots">${paidBillTotal()}</p>
{sortedMonths.filter((paid) => {
          const current = new Date();
  
          current.setMonth(current.getMonth()-1);
          return new Date(paid.date).getMonth() === current.getMonth()
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