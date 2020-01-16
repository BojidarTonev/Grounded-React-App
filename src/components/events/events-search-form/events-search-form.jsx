import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "./events-search-form.css";

class EventsSearchFrom extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  onSelect(e) {};

  render() {
    return (
      <div className="events-search-bar">
        <Dropdown
          className="dropdown"
          options={this.state.dates}
          onChange={this.onSelect}
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

        <input type="text" placeholder="some dj..." />
        <button type="submit" className="search-events-button">
          <i className="fas fa-search"></i>
        </button>
      </div>
    );
  }
}

export default EventsSearchFrom;
