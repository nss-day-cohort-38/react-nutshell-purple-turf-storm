import React, { useState } from "react";
import MessageManager from "../../modules/MessageManager";
import moment from "moment";

const MessagesForm = () => {
  const [message, setMessage] = useState({ userId: "", message: "", date: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...message };
    stateToChange[evt.target.id] = evt.target.value;
    setMessage(stateToChange);
  };

  const createNewMessage = evt => {
      const newMessageObject = {
        userId: message.userId,
        message: message.message,
        date: moment().startOf('hour').fromNow()
      };
    evt.preventDefault();
    setIsLoading(true);
    MessageManager.post(newMessageObject);
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
              id="id"
              placeholder="Say hello!"
            />
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={createNewMessage}
            >
              Comment
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default MessagesForm;
