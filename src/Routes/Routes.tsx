import { Route, Routes } from "react-router-dom";
import EditContact from "../componenets/EditContact";
import Dashboard from "../componenets/Dashborad";
import Contacts from "../componenets/Contact";
import ContactForm from "../componenets/ContactForm";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Contacts />} />
      <Route path="/contact_form" element={<ContactForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/edit/:id" element={<EditContact />} />
    </Routes>
  );
};
export default AllRoutes;
