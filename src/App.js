import React, { Component } from "react";
import Login from "./Login";
import Videos from "./Videos";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageToDisplay: "page_login",
      sessionId: ""
    };
  }
  handleChangePage = newPage => {
    this.setState({ pageToDisplay: newPage });
  };
  handleSessionId = sessionId => {
    this.setState({ sessionId: sessionId });
  };
  render() {
    var pageToDisplay = this.state.pageToDisplay;

    return (
      <div class="app-body">
        {pageToDisplay === "page_login" ? (
          <Login
            pageToDisplay={this.state.pageToDisplay}
            onChangePage={this.handleChangePage}
            onSetSessionId={this.handleSessionId}
          />
        ) : pageToDisplay === "page_videos" ? (
          <Videos sessionId={this.state.sessionId} />
        ) : null}
      </div>
    );
  }
}
export default App;
