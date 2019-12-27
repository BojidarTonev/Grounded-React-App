import React from 'react';
import './navigation.css';
import Link from '../../shared/link/link';

function Navigation({ isLogged, user }) {
    return (
    <nav className="site-nav">
      <ul>
        <Link to="/artists/all"><i className="fas fa-assistive-listening-systems"></i>Artists</Link>
        <Link to="/contact"><i className="fas fa-mobile"></i>Contact</Link>
        <Link to="/events/all"><i className="fas fa-calendar-check"></i>Events</Link>
        <Link to="/music/all"><i className="fas fa-compact-disc"></i>Music</Link>
        {isLogged && <Link to="/profile">Profile</Link>}
        {isLogged && <Link to="/logout">Logout</Link>}
      </ul>
    </nav>
    );
  };
  
  export default Navigation;

