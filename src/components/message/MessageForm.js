import React, { useState } from "react";
import MessageManager from "../../modules/MessageManager";
import moment from "moment";

const MessagesForm = (props) => {
    const userId = sessionStorage.getItem("id");
  const [message, setMessage] = useState({ userId: parseInt(userId), newMessage: "", date: "" });

  const handleFieldChange = evt => {
    const stateToChange = { ...message };
    stateToChange[evt.target.id] = evt.target.value;
    setMessage(stateToChange);
  };

  const createNewMessage = evt => {
      const newMessageObject = {
        userId: message.userId,
        message: message.newMessage,
        date: moment().format('h:mm:ss a')
      };

      if (message.newMessage === "") {
        window.alert("Please write a message")
    } else {
    MessageManager.post(newMessageObject).then(props.getMessages)
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <label htmlFor="message">New message</label>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="newMessage"
              placeholder="Say hello!"
            />
          </div>
          <div className="alignRight">
            <button
              type="button"
              onClick={createNewMessage}
            >
              Post
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default MessagesForm;
