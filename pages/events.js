import React, { useEffect } from "react";
import Events from "../components/Events";

const MyEvents = ({ setCurrPage }) => {
  useEffect(() => {
    setCurrPage("events");
  }, []);

  return <Events />;
};

export default MyEvents;
