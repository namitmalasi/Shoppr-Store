import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a
        className="mailBtn"
        href="mailto:namitmalasi@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <Button>Contact: namitmalasi@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
