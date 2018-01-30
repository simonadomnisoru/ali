import React, { Component } from 'react';
import Login from './Login';
import Videos from './Videos';
import actionTypes from './store/actionTypes';
import store from './store/store';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageToDisplay: store.getState().pageToDisplay,
            sessionId: ''
        };
    }
    handleChangePage = newPage => {
        store.dispatch({ type: newPage });
        this.setState({ pageToDisplay: store.getState().pageToDisplay });
    };
    handleSessionId = sessionId => {
        this.setState({ sessionId: sessionId });
    };

    renderPage = () => {
        switch (this.state.pageToDisplay) {
            case actionTypes.LOGIN:
                return <Login
                    onChangePage={this.handleChangePage}
                    onSetSessionId={this.handleSessionId}
                />
                break;
            case actionTypes.VIDEOS:
                return <Videos sessionId={this.state.sessionId} />
                break;
            default:
                return null;
        }
    }
    render() {
        var pageToDisplay = this.state.pageToDisplay;

        return (
            <div className='app-body'>
                {this.renderPage()}
            </div>
        );
    }
}
export default App;
