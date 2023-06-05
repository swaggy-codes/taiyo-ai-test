import { Route, Routes } from "react-router-dom";
import Contacts from "./Contacts";
import Dashboard from "./ChartsMaps";
import EditContact from "../Components/EditContact";
import ContactForm from "../Components/ContactForm";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Contacts />} />
      <Route path='/contact-form' element={<ContactForm />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/edit-contact/:id' element={<EditContact />} />
    </Routes>
  );
};

export default AllRoutes;
