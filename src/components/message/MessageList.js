import React, { useState, useEffect } from "react";
import MessageCard from "./MessageCard";
import MessageManager from "../../modules/MessageManager";

const MessageList = props => {
  const [messages, setmessages] = useState([]);

  const getMessages = () => {
    return MessageManager.getAll().then(messagesFromAPI => {
      setmessages(messagesFromAPI);
    });
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      <section className="section-content">
        <div className="container-cards">
          {messages.map(message => 
            <MessageCard key={messages.id} message={message} {...props} />
          )}
        </div>
      </section>
    </>
  );
};

export default MessageList