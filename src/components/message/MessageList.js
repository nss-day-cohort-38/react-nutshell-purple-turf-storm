// Matt Reeds - This module contains the funcitons for the delete button and passes props down to child componets to access

import React, { useState, useEffect } from "react";
import MessageCard from "./MessageCard";
import MessageManager from "../../modules/MessageManager";
import MessageForm from "./MessageForm";
import MessageEditForm from "./MessageEditForm";

const MessageList = props => {
  const [messages, setMessages] = useState([]);
  const [editMessageId, setEditMessageId] = useState();
  const [isEdit, setIsEdit] = useState(false);

  const editHandler = id => {
    setIsEdit(true);
    setEditMessageId(id);
  };

  const newMessageHandler = () => {
    setIsEdit(false);
  };

  const getMessages = () => {
    return MessageManager.getMessageUsername().then(messagesFromAPI => {
      setMessages(messagesFromAPI);
    });
  };

  const deleteMessage = id => {
    const loginInfo = sessionStorage.getItem("credentials").slice(12);
    const username = loginInfo.split(`"`);

    MessageManager.getMessageUsername().then(messages => {
      messages.forEach(message => {
        if (message.user.userName === username[1] && message.id === id) {
          MessageManager.delete(id).then(() =>
            MessageManager.getMessageUsername().then(setMessages)
          );
        }
      });
    });
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      <section className="m-section-content">
        <div className="m-container-cards">
          {messages.map(message => (
            <MessageCard
              key={message.id}
              message={message}
              deleteMessage={deleteMessage}
              editHandler={editHandler}
              {...props}
            />
          ))}
        </div>

        <div>
          {isEdit ? (
            <MessageEditForm
              getMessages={getMessages}
              editMessageId={editMessageId}
              newMessageHandler={newMessageHandler}
              {...props}
            />
          ) : (
            <MessageForm getMessages={getMessages} {...props} />
          )}
        </div>
      </section>
    </>
  );
};

export default MessageList;
