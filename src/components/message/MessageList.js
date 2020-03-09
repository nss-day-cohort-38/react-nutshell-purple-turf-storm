import React, { useState, useEffect } from "react";
import MessagesCard from "./MessageCard";
import MessagesManager from "../../modules/MessageManager";

const MessagesList = props => {
  const [messages, setmessages] = useState([]);

  const getMessages = () => {
    return MessagesManager.getAll().then(messagesFromAPI => {
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
          {messages.map(message => (
            <MessagesCard key={messages.id} message={message} {...props} />
          ))}
        </div>
      </section>
    </>
  );
};

export default MessagesList