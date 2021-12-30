import React from "react";
import { Route, Routes } from "react-router-dom";
import { BillList } from "./bills/BillList";
import { BillProvider } from "./bills/BillDataProvider"
import { BillForm } from "./bills/BillForm";
import { NoteProvider } from "./notes/NoteDataProvider";
import  { BillDetails } from "./bills/BillDetail"


export const ApplicationViews = () => {
    return (
        <BillProvider>
             <NoteProvider>
            <Routes>
            <Route path="/" element={<> <BillList/> </>} />

                <Route path="bills/*" element={<BillList />} />
                <Route path="bills/create/*" element={<BillForm />} />
                <Route path="bills/detail/:billId/*" element={<BillDetails />} />
                <Route path="bills/edit/:billId/*" element={<BillForm />} />



            </Routes>
            </NoteProvider>
        </BillProvider>

    )
}
