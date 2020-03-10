import React, { useState, useEffect } from "react"
import EventManager from "../../modules/EventManager"
import "./EventForm.css"

const EventEditForm = props => {
  const [event, setEvent] = useState({ name: "", date: "", location: ""  });
  const [isLoading, setIsLoading] = useState(false);
const userId = sessionStorage.getItem("id")


  const handleFieldChange = evt => {
    const stateToChange = { ...event };
    stateToChange[evt.target.id] = evt.target.value;
    setEvent(stateToChange);
  };

  const updateExistingEvent = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedEvent = {
      id: props.match.params.eventId,
      name: event.name,
      date: event.date,
      location: event.location
    };

    EventManager.update(editedEvent)
      .then(() => props.history.push("/events"));
  };

  useEffect(() => {
    EventManager.get(props.match.params.eventId)
      .then(event => {
        setEvent(event);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={event.name}
            />
            <label htmlFor="name">Event Name: </label>

            <input
              type="date"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="date"
              value={event.date}
            />
            <label htmlFor="date">Date:</label>
          </div>

          <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="location"
              value={event.location}
            />
            <label htmlFor="location">Location</label>


          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingEvent}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default EventEditForm