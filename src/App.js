import React, { Component } from 'react';
import Login from './Login';
import Videos from './Videos';
import VideoDetails from './VideoDetails';
import actionTypes from './store/actionTypes';
import store from './store/store';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageToDisplay: store.getState().pageToDisplay,
            sessionId: ''
        };
        store.subscribe( () => {
            this.setState({ pageToDisplay: store.getState().pageToDisplay });
        });
    }
    handleSessionId = sessionId => {
        this.setState({ sessionId: sessionId });
    };

    renderPage = () => {
        switch (this.state.pageToDisplay) {
            case actionTypes.LOGIN:
                return <Login onSetSessionId={this.handleSessionId} />
            case actionTypes.VIDEOS:
                return <Videos sessionId={this.state.sessionId} />
            case actionTypes.VIDEODETAILS:
                return <VideoDetails sessionId={this.state.sessionId}/>
            default:
                return null;
        }
    }
    render() {
        return (
            <div className='app-body'>
                {this.renderPage()}
            </div>
        );
    }
}
export default App;
