import React, { useState, useEffect } from "react";
//import the components we will need
import EventCard from "./EventCard";
import EventManager from "../../modules/EventManager";

const EventList = props => {
  const [events, setEvents] = useState([]);

  const getEvents = () => {
    return EventManager.getAll().then(eventsFromAPI => {
      setEvents(eventsFromAPI);
    });
  };

  
  useEffect(() => {
    getEvents();
  }, []);

 
  return (
    <React.Fragment>
      <section className="section-content">
       
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/events/new");
          }}
        >
          Add Event
        </button>
      

      <div className="container-cards">
        {events.map(event => (
          <EventCard
            key={event.id}
            event={event}
            {...props}
            />
            ))}
      </div>
      </section>
    </React.Fragment>
  );
};
export default EventList;
