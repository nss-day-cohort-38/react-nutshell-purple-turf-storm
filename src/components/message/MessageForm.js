import React, { useState } from "react";
import MessageManager from "../../modules/MessageManager";

const MessagesForm = () => {
    const [message, setMessage] = useState({ message: "", date: ""});
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...message };
        stateToChange[evt.target.id] = evt.target.value;
        setMessage(stateToChange);
    };

    const createNewMessage = evt => {
        evt.preventDefault();
        if (message.message === "") {
            window.alert("Please write a message before submitting")
        } else {
            setIsLoading(true);
            MessageManager.post(message)
        }
    }

    return (
        <>
        <form>
            <fieldset>
                <div className="formgrid">
                    <input type="text"
                    required
                    onChange={handleFieldChange}
                    id="name"
                    placeholder="Say hello!"/>
                    <label htmlFor="message">Message</label>
                </div>
                <div className="alignRight">
                    <button type="button"
                    disabled={isLoading}
                    onClick={createNewMessage}>
                        Comment
                    </button>
                </div>
            </fieldset>
        </form>
        </>
    )}

export default MessagesForm