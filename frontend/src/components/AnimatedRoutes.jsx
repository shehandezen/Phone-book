import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Home from "./Home/Home";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import ContactDetailsCard from "./ContactDetailsCard/ContactDetailsCard";

import UpdateContact from "./UpdateContact/UpdateContact";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes path="/" location={location} key={location.pathname}>
        <Route index path="/" element={<Home />} />
        <Route path="/contact/:id" element={<ContactDetailsCard />} />
        <Route path="/contacts" element={<ContactList />} />

        <Route path="/add" element={<ContactForm />} />
        <Route path="/update/:id" element={<UpdateContact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
