import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Home from "./Home/Home";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import ContactDetailsCard from "./ContactDetailsCard/ContactDetailsCard";

import UpdateContact from "./UpdateContact/UpdateContact";

const AnimatedRoutes = ({ user }) => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes path="/" location={location} key={location.pathname}>
        <Route index path="/" element={<Home user={user} />} />
        <Route
          path="/contact/:id"
          element={<ContactDetailsCard user={user} />}
        />
        <Route path="/contacts" element={<ContactList user={user} />} />

        <Route path="/add" element={<ContactForm user={user} />} />
        <Route path="/update/:id" element={<UpdateContact user={user} />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
