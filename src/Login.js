import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Panel} from "react-bootstrap";
import axios from "axios";
import actionTypes from './store/actionTypes';
import changePage from './store/actionCreators';
import store from './store/store';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }
    handleLogin = () => {
        const url = 'http://localhost:3001/user/auth/';
        let data = {
            username: this.state.username,
            password: this.state.password,
        }

        axios.post(url, data)
            .then(response => {
                if (response.data.status === 'success') {
                    this.props.onSetSessionId(response.data.sessionId);
                    store.dispatch({ type: actionTypes.VIDEOS });
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    buttonLogin = () => {
        return (
            <Button bsStyle='primary' onClick={this.handleLogin}>
                Login
            </Button>
        );
    };
    render() {
        return (
            <div className='login-box'>
                <Panel bsStyle="info">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Login to see the videos</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <FormGroup >
                            <ControlLabel>User</ControlLabel>
                            <FormControl
                                type='text'
                                onChange={e =>
                                    this.setState({
                                        username: e.target.value
                                    })
                                }
                            />
                            <ControlLabel>Password</ControlLabel>
                            <FormControl
                                type='password'
                                onChange={e =>
                                    this.setState({
                                        password: e.target.value
                                    })
                                }
                            />
                            <br />
                            {this.buttonLogin()}
                        </FormGroup>
                    </Panel.Body>
                </Panel>

            </div>
        );
    }
}
export default Login;
