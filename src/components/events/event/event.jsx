import React from "react";
import Link from "../../../shared/link/link";
import "./event.css";

function Event({ name, place, dateStart, dateEnd, description, imageUrl }) {
  return (
    <li className="event-card">
        <Link to="#">
            <span>
                <img src={imageUrl} alt=""/>
            </span>
            <strong>Event: {name}<br/> Date: {dateStart} - {dateEnd}<br/>Place: {place}</strong>
        </Link>
    </li>
  );
}

export default Event;
