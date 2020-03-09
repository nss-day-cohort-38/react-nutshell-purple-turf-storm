import React, { useState, useEffect } from "react";
import MessageCard from "./MessageCard";
import MessageManager from "../../modules/MessageManager";
import MessageForm from "./MessageForm";

const MessageList = props => {
  const [messages, setMessages] = useState([]);

  const getMessages = () => {
    return MessageManager.getMessageUsername().then(messagesFromAPI => {
      setMessages(messagesFromAPI);
    });
  };

  const deleteMessage = id => {
    MessageManager.delete(id).then(() =>
      MessageManager.getMessageUsername().then(setMessages)
    );
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      <section className="section-content">
        <div className="container-cards">
          {messages.map(message => 
            <MessageCard
              key={message.id}
              message={message}
              deleteMessage={deleteMessage}
              {...props}
            />
          )}
          <MessageForm/>
        </div>
      </section>
    </>
  );
};

export default MessageList;
