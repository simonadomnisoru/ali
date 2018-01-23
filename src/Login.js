import React, { Component } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleLogin = () => {
    const url = "http://localhost:3001/user/auth/";
    axios
      .post(url, {
        username: this.state.username,
        password: this.state.password,
      })
      .then(response => {
        if (response.data.status === "success") {
          this.props.onSetSessionId(response.data.sessionId);
          this.props.onChangePage("page_videos");
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  buttonLogin = () => {
    return (
      <Button bsStyle="primary" onClick={this.handleLogin}>
        Login
      </Button>
    );
  };
  render() {
    return (
      <div class="login-box">
        User:{" "}
        <input
          type="text"
          onChange={e =>
            this.setState({
              username: e.target.value
            })
          }
        />{" "}
        <br />
        Password:{" "}
        <input
          type="password"
          onChange={e =>
            this.setState({
              password: e.target.value
            })
          }
        />{" "}
        <br />
        {this.buttonLogin()}
      </div>
    );
  }
}
export default Login;
