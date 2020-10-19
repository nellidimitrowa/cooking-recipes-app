import React from "react";
import axios from 'axios';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      role: 'user'
    }
  }

  changeHandler = (e) =>{
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3000/users`, this.state)
      .then(result => {
        console.log(result);
    });
    this.setState({ 
      username:'',
      email: '',
      password: ''
     });
  } 

  render() {
    const {username, email, password} = this.state;
    return (
      <React.Fragment>
        <label htmlFor="username">username</label>
        <input type="text" id="username" value={username} onChange={this.changeHandler} name="username" />
        <label htmlFor="email">email</label>
        <input type="text" id="email" value={email} onChange={this.changeHandler} name="email" />
        <label htmlFor="password">password</label>
        <input type="password" id="password" value={password} onChange={this.changeHandler} name="password" />
        <input type="submit" value="submit" className="submit" onClick={this.onSubmitHandler} />
      </React.Fragment>
    );
  }
}
   

export default RegisterForm;