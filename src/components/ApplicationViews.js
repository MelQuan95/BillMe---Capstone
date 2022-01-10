import React from "react";
import { Route, Routes } from "react-router-dom";
import { BillList } from "./bills/BillList";
import { BillProvider } from "./bills/BillDataProvider"
import { BillForm } from "./bills/BillForm";
import { NoteProvider } from "./notes/NoteDataProvider";
import  { BillDetails } from "./bills/BillDetail"
import { NoteForm } from "./notes/NoteForm"
import { NoteList } from "./notes/NoteList"
import { BillPaidList } from "./bills/PaidBill";

export const ApplicationViews = () => {
    return (

        <BillProvider>
             <NoteProvider>
                 
            <Routes>
            <Route path="/" element={<> <div className="billcontainer"><BillList/>  <BillPaidList/>
             </div> <div className="billformpage"> <BillForm /> </div> </> } />

                <Route path="bills/*" element={<> <div className="billlistpage"> <BillList /> </div> </>} />
                <Route path="bills/create/*" element={<> <div className="billformpage"> <BillForm /> </div> </>} />
                <Route path="bills/detail/:billId/*" element={<><BillDetails /> <NoteForm /> <NoteList /> </>} />
                <Route path="bills/edit/:billId/*" element={<> <BillForm />  </>}/>
                




            </Routes>
            
            </NoteProvider>
        </BillProvider>
        
    )}
