import React, { useEffect } from "react";
import Contact from "../components/Contact";

const MyContact = ({ setCurrPage }) => {
  useEffect(() => {
    setCurrPage("contact");
  }, []);

  return (
    <div>
      <Contact />
    </div>
  );
};

export default MyContact;
