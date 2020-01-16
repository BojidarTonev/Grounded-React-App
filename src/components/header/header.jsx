import React from 'react';
import './header.css';
import Link from '../../shared/link/link';
import Navigation from '../navigation/navigation'

function Header() {
    return (
        <header className="site-header">
            <h1 className="site-title">
                <Link to="/">Grounded</Link>
                <div className="login-register-buttons">
                    <Link to="/login"><i className="fas fa-sign-in-alt"></i></Link>
                    <Link to="/register"><i className="fas fa-dungeon"></i></Link>
                    <Link to="/logout"><i className="fas fa-door-closed"></i></Link>
                </div>
            </h1>
            <Navigation isLogged={false} user={{}} className="site-nav" />
        </header>
    );
  };
  
  export default Header;

