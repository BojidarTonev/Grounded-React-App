import React from 'react';
import './header.css';
import Link from '../../shared/link/link';
import Navigation from '../navigation/navigation'

function Header() {
    return (
        <header class="site-header">
            <h1 class="site-title">
                <Link to="/">Grounded</Link>
                <div className="login-register-buttons">
                    <Link to="/login"><i class="fas fa-sign-in-alt"></i></Link>
                    <Link to="/register"><i class="fas fa-dungeon"></i></Link>
                    <Link to="/logout"><i class="fas fa-door-closed"></i></Link>
                </div>
            </h1>
            <Navigation isLogged={false} user={{}} className="site-nav" />
        </header>
    );
  };
  
  export default Header;

