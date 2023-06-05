import React from "react";
import { Route, Routes } from "react-router-dom";
import Contacts from "../Pages/Contacts";
import ContactForm from "../Components/ContactForm";
import Dashboard from "../Pages/ChartsMaps";
import EditContact from "../Components/EditContact";
import { Toaster } from "react-hot-toast";

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Contacts />} />
        <Route path='/contact-form' element={<ContactForm />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/edit-contact/:id' element={<EditContact />} />
      </Routes>
      <Toaster position='top-center' reverseOrder={false} />
    </>
  );
};

export default MainRouter;
