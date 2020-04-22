import React, { useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import ChatIcon from "@material-ui/icons/Chat";
import { Fab } from '@material-ui/core';
import { useViewport } from "../ViewportProvider";
import "./Chatbot.css";

const Chatbot = () => {
  const { width } = useViewport();
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hide) {
        setHide(true);
        setTimeout(() => setHide(false), 1500);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      className={
        width > 800
          ? hide
            ? "modaldiv modaldiv-hide"
            : "modaldiv modaldiv-show"
          : hide
          ? "modaldiv-mobile modaldiv-hide"
          : "modaldiv-mobile modaldiv-show"
      }
    >
      <div onClick={handleOpen}>
        <Fab style={{backgroundColor: "rgb(13, 33, 61)"}} classes={{label:"modaldiv__chatbutton"}}>
         <ChatIcon style={{
           fontSize: "2rem",
           color: "white"
         }}/>
         <span style={{fontSize: "0.4rem", color:"white"}}>Chatbot</span>
        </Fab>
        
      </div>
      <Modal className="modaldiv__modal" open={open} onClose={handleClose}>
        <div
          className={
            width > 800
              ? "modaldiv__iframe-wrapper"
              : "modaldiv__iframe-wrapper-mobile"
          }
        >
          <iframe
            className="modaldiv__iframe"
            title="CovidChatbot"
            src="https://covid-chatbot-app.herokuapp.com/chat"
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default Chatbot;
