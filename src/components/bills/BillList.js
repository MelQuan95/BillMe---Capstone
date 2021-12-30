import React, { useContext, useEffect } from "react";
import { BillContext } from "./BillDataProvider"
import { BillCard } from "./BillCard";
import { useNavigate } from "react-router-dom"

export const BillList = () => {
    const { getBills, bills } = useContext(BillContext)
    

    useEffect(() => {
        console.log("BillList: useEffect - getBills")
        getBills()
    }, [])

    const navigate = useNavigate()
    
    return (
        <>
          <h1 className="billsHeader">Bills</h1>
      
          <button onClick={() => navigate("/bills/create")}>
                      New Bill
                  </button>
          <div className="bills">

          {bills.map(bill => {

              return <BillCard
              key={bill.id}
              bill={bill}

              />
          }
            
            )}
          
            
          </div>
        </>
        )
      }