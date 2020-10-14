import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import './Authentication.css';

function Authentication() {
    const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
  const loginProps = useSpring({ 
    left: registrationFormStatus ? -500 : 0, // Login form sliding positions
  });
  const registerProps = useSpring({
    left: registrationFormStatus ? 0 : 500, // Register form sliding positions 
  });

  const loginBtnProps = useSpring({
    borderBottom: registrationFormStatus 
      ? "solid 0px transparent"
      : "solid 2px #4ad9e4",  //Animate bottom border of login button
  });
  const registerBtnProps = useSpring({
    borderBottom: registrationFormStatus
      ? "solid 2px #4ad9e4"
      : "solid 0px transparent", //Animate bottom border of register button
  });

  function registerClicked() {
    setRegistartionFormStatus(true);
  }
  function loginClicked() {
    setRegistartionFormStatus(false);
  }

  return (
    <div className="login-register-wrapper">
      <div className="nav-buttons">
        <animated.button onClick={loginClicked} id="loginBtn" style={loginBtnProps}>Login</animated.button>
        <animated.button onClick={registerClicked} id="registerBtn" style={registerBtnProps}>Register</animated.button>
      </div>
      <div className="form-group">
        <animated.form action="" id="loginform" style={loginProps}><LoginForm /></animated.form>
        <animated.form action="" id="registerform" style={registerProps}><RegisterForm /></animated.form>
      </div>
    </div>
  );
}

export default Authentication;