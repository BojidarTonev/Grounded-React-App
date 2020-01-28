import React from "react";
import Link from "../../../shared/link/link";
import "./artist.css";

function Artist({ name, age, bio, imageUrl, memberSince, Albums, Events, id }) {
  return (
    <div className="artist-card">
      <div className="artist-card-header">
        <h3>{name}</h3>
        <p>Member since: {memberSince}</p>
      </div>
      <div className="artist-card-main">
        <img src={imageUrl} alt="artist" />
        <p className="description-text">{bio}</p>
      </div>
      <hr/>
      <div className="artist-links">
        <ul className="artist-links-items">
          <li>
            <Link to={`/artist/${id}`}>
              <i className="fas fa-compact-disc"></i>
              <div className="info-items-wrapper">
                <p>13</p>
                <p>Albums</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="">
              <i className="fas fa-music"></i>
              <div className="info-items-wrapper">
                  <p>10</p>
                  <p>Tracks</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="">
              <i className="far fa-calendar-plus"></i>
              <div className="info-items-wrapper">
                  <p>7</p>
                  <p>Events</p>
              </div>
             </Link>
          </li>
        </ul>
        <ul className="artist-info-items">
          <li>
            <Link to="">
              <i className="fab fa-facebook-f"></i>
            </Link>
          </li>
          <li>
            <Link to="">
              <i className="fab fa-instagram"></i>
            </Link>
          </li>
          <li>
            <Link to="">
              <i className="fab fa-soundcloud"></i>
            </Link>
          </li>
          <li>
            <Link to="">
              <i className="fab fa-spotify"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Artist;
