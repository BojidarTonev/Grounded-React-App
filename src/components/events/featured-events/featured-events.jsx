import React, { Component } from "react";
import Event from "../event/event";
import axios from "axios";
import "./featured-events.css";

class FeaturedEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    let _this = this;
    axios
      .get("http://localhost:9000/events/featured-events")
      .then(function(res) {
        _this.setState({ events: res.data.slice(0, 3) });
      });
  }

  render() {
    var { events } = this.state;
    events = events
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
      : "";
    return (
      <div>
        <div className="description">
          <h2>Featured events</h2>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit odit
            ratione est aliquid eius sunt, magnam repellendus inventore
            assumenda obcaecati voluptate provident ducimus aperiam laudantium
            voluptas numquam qui earum voluptatibus!
          </span>
        </div>
        <div className="featured-events">
          {events[0]}
          <div className="biggest-event">{events[1]}</div>
          {events[2]}
        </div>
        <hr className="events-hr"/>
      </div>
    );
  }
}

export default FeaturedEvents;
