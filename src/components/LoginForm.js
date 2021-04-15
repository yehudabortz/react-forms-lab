import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (event) => {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    if (!this.state.password || !this.state.username) return;
    this.props.handleLogin(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              onChange={this.handleChange}
              id="username"
              name="username"
              type="text"
              value={this.state.username}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              onChange={this.handleChange}
              id="password"
              name="password"
              type="password"
              value={this.state.password}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
