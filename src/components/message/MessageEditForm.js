import React, { useState, useEffect } from "react";
import MessageManager from "../../modules/MessageManager";
import moment from "moment";

const MessageEditForm = props => {
  const [message, setMessage] = useState({ editMessage: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...message };
    stateToChange[evt.target.id] = evt.target.value;
    setMessage(stateToChange);
  };

  const updateMessage = evt => {
    evt.preventDefault();
    setIsLoading(true);
    const sessionId = props.editMessageId;

    const editedMessage = {
      id: sessionId,
      userId: parseInt(message.userId),
      message: message.message,
      date: moment().format("h:mm:ss a")
    };

      const loginInfo = sessionStorage.getItem("credentials").slice(12);
      const username = loginInfo.split(`"`);
  
      MessageManager.getMessageUsername().then(messages => {
        messages.forEach(message => {
          if (message.user.userName === username[1] && message.id === sessionId) {
              MessageManager.update(editedMessage).then(props.getMessages)
          }
        });
      });
  };


  useEffect(() => {
      MessageManager.get(props.editMessageId).then(messages => {
          setMessage(messages);
          setIsLoading(false);
      });
  }, []);
  
  return (   
      <>
      <form>
          <fieldset>
                <label htmlFor="editMessage">Edit Message</label>
              <div className="formgrid">
                  <input
                  type="text"
                  required
                  className="form-control"
                  onChange={handleFieldChange}
                  id="message"
                  value={message.message}
                  />
              </div>
              <div className="alignRight">
                  <button
                  type="button"
                  disabled={isLoading}
                  onClick={updateMessage}
                  className="btn btn-primary"
                  >
                      Submit
                  </button>
              </div>
          </fieldset>
      </form>
      </>
)
    };

    export default MessageEditForm