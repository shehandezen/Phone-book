import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";

//css
import "./Container.css";

//components
import Header from "../Header/Header";
import Home from "../Home/Home";
import FloatBtn from "../FloatBtn/FloatBtn";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import {
  ContactDetailsCard,
  dataLoader,
} from "../ContactDetailsCard/ContactDetailsCard";

import {
  UpdateContact,
  UpdateDataLoader,
} from "../UpdateContact/UpdateContact";

const Container = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route
          path="/contact/:id"
          element={<ContactDetailsCard />}
          loader={dataLoader}
        />
        <Route path="/contacts" element={<ContactList />} loader={dataLoader} />

        <Route path="/add" element={<ContactForm />} />
        <Route
          path="/update/:id"
          element={<UpdateContact />}
          loader={UpdateDataLoader}
        />
      </Route>
    )
  );

  return (
    <div className={"Container"}>
      {/* <ContactList />
      <ContactForm />
      <ContactDetailsCard /> */}
      <RouterProvider router={router} />
    </div>
  );
};

const Root = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Link to={"/add"}>
        <FloatBtn />
      </Link>
    </>
  );
};

export default Container;
