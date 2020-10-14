import React from "react";

function LoginForm() {
    return (
      <React.Fragment>
        <label htmlFor="username">username</label>
        <input type="text" id="username" />
        <label htmlFor="password">password</label>
        <input type="password" id="password" />
        <input type="submit" value="submit" className="submit" />
      </React.Fragment>
    );
  }

export default LoginForm;