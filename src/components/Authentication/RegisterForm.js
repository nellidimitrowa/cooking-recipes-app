import React from "react";

function RegisterForm() {
    return (
      <React.Fragment>
        <label htmlFor="username">username</label>
        <input type="text" id="username" />
        <label htmlFor="email">email</label>
        <input type="text" id="email" />
        <label htmlFor="password">password</label>
        <input type="password" id="password" />
        <input type="submit" value="submit" className="submit" />
      </React.Fragment>
    );
  }

export default RegisterForm;