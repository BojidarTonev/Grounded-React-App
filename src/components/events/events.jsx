import React, { Component } from "react";
import EventsSearchForm from "./events-search-form/events-search-form"
import Event from "./event/event";
import FeaturedEvents from "./featured-events/featured-events"
import axios from "axios";
import "./events.css";
import "../../shared/styles/description.css";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    let _this = this;
    axios.get("http://localhost:9000/events/all").then(function(res) {
      _this.setState({ events: res.data });
    });
  }

  render() {
    var { events } = this.state;
    return (
      <div className="all-events">
        <FeaturedEvents />
        <EventsSearchForm />
        <div className="description">
          <h2>Our events</h2>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            nesciunt, sunt deserunt quidem cupiditate nemo quam reprehenderit
            facere culpa modi ad temporibus sapiente inventore dicta id enim aut
            voluptatum at.
          </span>
        </div>
        <div className="gallery">
          <ul>
            {events
              ? events.map(event => (
                  <Event
                    key={event._id}
                    name={event.name}
                    place={event.place}
                    dateStart={event.dateStart.split("T")[0]}
                    dateEnd={event.dateEnd.split("T")[0]}
                    description={event.description}
                    imageUrl={event.imageUrl}
                  ></Event>
                ))
              : ""}
          </ul>
        </div>
      </div>
    );
  }
}

export default Events;
