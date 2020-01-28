import React from "react";
import Link from "../../../shared/link/link";
import "./artist.css";

function Artist({ name, age, bio, imageUrl, memberSince, Albums, Events }) {
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
      <div className="artist-links">
        <ul className="artist-links-items">
          <li>
            <a href="">
              <i className="fas fa-compact-disc"></i>
              <div className="info-items-wrapper">
                <p>13</p>
                <p>Albums</p>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fas fa-music"></i>
              <div className="info-items-wrapper">
                  <p>10</p>
                  <p>Tracks</p>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <i className="far fa-calendar-plus"></i>
              <div className="info-items-wrapper">
                  <p>7</p>
                  <p>Events</p>
              </div>
            </a>
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

    // <div className="artist-card">
    //     <h3>{name}</h3>
    //     <p>Member since: {memberSince}</p>
    //     <div className="artist-main">
    //         <img src={imageUrl} alt="artist-img"/>
    //         <p>{bio}</p>
    //         <div className="artist-info">
    //             <ul className="artist-info-items">
    //                 <li>
    //                     <i className="fas fa-compact-disc"></i>
    //                     <div className="info-items-wrapper">
    //                         <p>13</p>
    //                         <p>Albums</p>
    //                     </div>
    //                 </li>
    //                 <li>
    //                     <i className="fas fa-music"></i>
    //                     <div className="info-items-wrapper">
    //                         <p>10</p>
    //                         <p>Tracks</p>
    //                     </div>
    //                 </li>
    //                 <li>
    //                     <i className="far fa-calendar-plus"></i>
    //                     <div className="info-items-wrapper">
    //                         <p>7</p>
    //                         <p>Events</p>
    //                     </div>
    //                 </li>
    //             </ul>
    //         </div>
    //         <div className="artist-links">
    //
    //         </div>
    //     </div>

    // </div>
  );
}

export default Artist;
