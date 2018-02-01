import React, { Component } from 'react';
import { Button } from "react-bootstrap";

class VideoDetails extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <video width='700' controls>
                    <source src='this.props.video.url' type='video/mp4' />
                </video>
                <br />
                <br />
                <p>this.props.video.description</p>
                <br />
            </div>
        )
    }
}
export default VideoDetails;
