import React, { useState, useEffect } from "react";
//import the components we will need
import EventCard from "./EventCard";
import EventManager from "../../modules/EventManager";
import "./Event.css";



const EventList = props => {
  const [events, setEvents] = useState([]);

  const getEvents = () => {
    return EventManager.getAll().then(eventsFromAPI => {
      setEvents(eventsFromAPI);
    });
  };
const deleteEvent = id => {
    EventManager.delete(id).then(() =>
    EventManager.getAll().then(setEvents))
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
        {events.sort((a, b) => {
      if (a.date < b.date) {
        return -1;
      } else if (a.date > b.date) {
        return 1;
      } else {
        return 0;
      }
    }),

        events.map(event => (
          <EventCard
            key={event.id}
            event={event}
            deleteEvent={deleteEvent}
            {...props}
            />
            ))}
      </div>
      </section>
    </React.Fragment>
  );
};
export default EventList;
