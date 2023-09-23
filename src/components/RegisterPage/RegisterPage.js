import { Component } from "react";
import './register-page.css'

export default class RergisterPage extends Component {

  state = {
    username: '',
    email: '',
    password: '',
    validationErrors: {}
  }

  validateEmail = (email) => {
    return false
  }

  validatePassword = (password) => {
    return false
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value })
  }

  handleRegister = () => {
    const { username, email, password } = this.state;
    const validationErrors = {}

    if (!email.trim()) {
      validationErrors.email = 'Please enter a valid email.'
    }

    if (!password.trim()) {
      validationErrors.password = 'Password must contain letters, numbers and bet at least 6 characters long.'
    }

    if (username.trim().length < 3) {
      validationErrors.username = 'Username is required.'
    }

    if (Object.keys(validationErrors).length === 0) {
      this.props.handleRegistration({ username, email, password })

      this.setState({
        username: '',
        email: '',
        password: '',
        validationErrors: {}
      })
    } else {
      this.setState({ validationErrors })
    }
  }

  render() {
    const { username, email, password, validationErrors } = this.state;

    return (
      <div className="register-page-wrapper">
        <h1>Register page</h1>

        <div className="register-form">
          <div className="register-input">
            <label htmlFor="username">Username:</label>
            <input
              type="text" 
              name="username"
              placeholder="Username"
              id="username"
              value={username}
              onChange={this.handleChange}
            />
          </div>

          <div className="register-input">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>

          <div className="register-input">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>

          {
            Object.keys(validationErrors).length ? (
              <div className="error-alert">
                <span>{ validationErrors.email }</span>
                <span>{ validationErrors.password }</span>
                <span>{ validationErrors.username }</span>
              </div>
            ) : null
          }

          <button
            className="register-btn"
            onClick={ this.handleRegister }
          >
            Register
          </button>
        </div>
      </div>
    )
  }
}