import React, { Component } from "react";
import Dropdown from "react-dropdown";
import Event from "./event/event";
import axios from "axios";
import "./events.css";
import "../../shared/styles/description.css";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      dates: [
        { value: "today", label: "Today" },
        { value: "tommorow", label: "Tommorow" },
        { value: "this weekend", label: "This weekend" },
        { value: "pick a date", label: "Pick a date" }
      ],
      locations: [
        { value: "sofia", label: "Sofia" },
        { value: "plovdiv", label: "Plovdiv" },
        { value: "varna", label: "Varna" },
        { value: "burgas", label: "Burgas" },
        { value: "ihtiman", label: "Ihtiman" },
        { value: "cru", label: "CRU" }
      ]
    };
  }

  componentDidMount() {
    let _this = this;
    axios.get("http://localhost:9000/events/all").then(function(res) {
      _this.setState({ events: res.data });
    });
  }

  toggleDropdown = () => {
      this.setState(prevState => ({
        isVisible: !prevState.isVisible}))

        console.log(this.state.isVisible)
  }

  onSelect(e) {}

  render() {
    var { events } = this.state;
    return (
      <div className="all-events">
        <div className="events-search-bar">
          <Dropdown
            className='dropdown'
            options={this.state.dates}
            onChange={this.onSelect}
            onClick={this.toggleDropdown}
            menuClassName="dropdown-items"
            arrowClassName="dropdown-arrow"
            placeholder="date... "
          ></Dropdown>

          <Dropdown
            className="dropdown"
            options={this.state.locations}
            onChange={this.onSelect}
            menuClassName="dropdown-items"
            arrowClassName="dropdown-arrow"
            placeholder="location..."
          />

          <input type="text" value="some dj..." />
          <button type="submit" className="search-events-button">
            <i class="fas fa-search"></i>
          </button>
        </div>
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
