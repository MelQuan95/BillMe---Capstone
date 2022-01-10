import React, { useContext, useEffect, useState } from "react";
import { BillContext } from "./BillDataProvider"
import { BillCard } from "./BillCard";
import { useNavigate, useParams } from "react-router-dom"

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

  
  const paidBillTotal = () => {

    
 let sum = 0;
 
 

 
 for (let i = 0; i < bills.length; i++ ) {
     let currentBillInLoop = (bills[i].paid)
     console.log(currentBillInLoop)
     if(currentBillInLoop === true){
        sum += (bills[i].amount)
     }
    
   
}
return sum


}





  return ( 
    <div className="container1">
    

        <h3 className="paidbillslist"> PAID</h3>
 <p>{paidBillTotal()}</p>
{sortedMonths.filter((paid) => {
          return paid.paid === true
        }).map(bill => {
          return <BillCard

            key={bill.id}
            bill={bill}

          />
        })
        }


    </div>
  )

}