import React from 'react';
import './main.css';

function Main({ children, title, description }) {
  return (
    <div className="site-main">
      <div className="site-main-description">
        <h1>{title}</h1>
        <p>{description}</p>
        <hr/>
      </div>
      {children}
    </div>
  );
}

export default Main;