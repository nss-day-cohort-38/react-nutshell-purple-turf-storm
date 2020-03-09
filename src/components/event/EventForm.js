import React, { useState } from 'react';
import EventManager from '../../modules/EventManager';
import './EventForm.css'

const EventForm = props => {
  const [event, setEvent] = useState({ name: "", date: "", location: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...event };
    stateToChange[evt.target.id] = evt.target.value;
    setEvent(stateToChange);
  };

  const constructNewEvent = evt => {
    evt.preventDefault();
    if (event.name === "" || event.date === "" || event.date === "") {
      window.alert("Please input an Even's name and role");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      EmployeeManager.post(employee)
        .then(() => props.history.push("/employees"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Employee name"
            />
            <label htmlFor="name">Name</label>

            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="role"
              placeholder="Role"
            />
            <label htmlFor="role">Role</label>
          </div>

          
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewEmployee}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default EmployeeForm