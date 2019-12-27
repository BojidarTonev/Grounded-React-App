import React from "react";
import "../../../shared/styles/login-and-register.css";

function Login() {
  return (
    <div className="form-wrapper">
      <div className="form">
        <fieldset>
          <legend>Login</legend>
          <label htmlFor="email">Your email:</label>
          <input type="email" name="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" />
          <button type="submit" className="submit-button">Login</button>
        </fieldset>
      </div>
    </div>
  );
}

export default Login;
