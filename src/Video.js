import React, { Component } from "react";

class Video extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>asda{this.props.video.name}</div>;
  }
}
export default Video;
