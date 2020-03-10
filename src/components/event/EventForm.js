import React, { useState } from "react";
import EventManager from "../../modules/EventManager";
import "./EventForm.css";

const EventForm = props => {
  const userId = 
  sessionStorage.getItem("id")
  const [event, setEvent] = useState({userId: userId, name: "", date: "", location: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...event };
    stateToChange[evt.target.id] = evt.target.value;
    setEvent(stateToChange);
  };

  const constructNewEvent = evt => {
    evt.preventDefault();
    if (event.name === "" || event.date === "" || event.location === "") {
      window.alert("Please input an Event's name, date, and location");
    } else {
      setIsLoading(true);
      EventManager.post(event).then(() => props.history.push("/events"));
    }
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      setIsLoading(true);
      EventManager.delete(props.eventId).then(() =>
        props.history.push("/events")
      );
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
              placeholder="Event name"
            />
            <label htmlFor="name">Event Name</label>

            <input
              type="date"
              required
              onChange={handleFieldChange}
              id="date"
              placeholder="Date"
            />
            <label htmlFor="date">Date</label>

            <input
              type="location"
              required
              onChange={handleFieldChange}
              id="location"
              placeholder="Location"
            />
            <label htmlFor="location">Location</label>
          </div>

          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewEvent}
            >
              Submit
            </button>
           
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default EventForm;
