import React, { useState } from "react";
import MessagesManager from "../../modules/MessageManager";

const MessagesForm = props => {
    const [message, setMessage] = useState({ message: "", date: ""});
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...message };
        stateToChange[evt.target.id] = evt.target.value;
        setMessage(stateToChange);
    };

    return (
        <>
        <form>
            <fieldset>
                <div className="formgrid">
                    <input type="text"
                    required
                    onChange={handleFieldChange}
                    id="name"
                    placeholder="Message"/>
                </div>
            </fieldset>
        </form>
        </>
}