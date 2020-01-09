import React, { Component } from "react";
import Link from "../../../shared/link/link";
import EventDetailsModal from "../../modals/event-details-modal/event-details-modal";
import "./event.css";

class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
  }

  openModal() {
    if (!this.state.showModal) {
      this.setState({ showModal: true });
      document.getElementsByTagName("html")[0].classList.add("modalIsOpen");
    }
  }
  closeModal() {
    if (this.state.showModal) {
      this.setState({ showModal: false });
      document.getElementsByTagName("html")[0].classList.remove("modalIsOpen");
    }
  }

  render() {
    var { name, place, dateStart, dateEnd, description, imageUrl } = this.props;
    return (
      <li className="event-card" onClick={this.openModal.bind(this)}>
        <Link to="#">
          <span>
            <img src={imageUrl} alt="" />
          </span>
          <strong>
            Event: {name}
            <br /> Date: {dateStart} - {dateEnd}
            <br />
            Place: {place}
          </strong>
        </Link>

        <EventDetailsModal show={this.state.showModal}>
          <h3>{name}</h3>
          <h4>{place}</h4>
          <div className="event-details-body">
            <span>
              <img src={imageUrl} alt="" />
            </span>
            <span>{description}</span>
          </div>
          <div className="date-info">
            <span>
              Start: {dateStart} End: {dateEnd}
            </span>
          </div>
          <br />
          <button onClick={this.closeModal.bind(this)}>Close modal</button>
        </EventDetailsModal>
      </li>
    );
  }
}

export default Event;

//Modal popup reactjs useful articles
//https://hackernoon.com/create-react-modal-using-reactjs-popup-m24m231v1
//http://reactcommunity.org/react-modal/

//probably the most useful one
//https://react-popup.elazizi.com/
