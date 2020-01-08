import React, { Component } from "react";
import Link from "../../../shared/link/link";
import EventDetailsModal from '../../modals/event-details-modal/event-details-modal'
import "./event.css";

class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
  }

  toggleModal() {
    this.setState({showModal: !this.state.showModal})
    if(!this.state.showModal) {
      document.body.classList.add("modalIsOpen")
    } else (
      document.body.classList.remove("modalIsOpen")
    )
  }

  render() {
    var { name, place, dateStart, dateEnd, description, imageUrl } = this.props;
    return (
      <li className="event-card" onClick={this.toggleModal.bind(this)}>
        <Link to="#" className="event-card-link">
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
          {name}
          {dateStart} - {dateEnd}
          {place}
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
