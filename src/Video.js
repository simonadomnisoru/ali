import React, { Component } from 'react';
import { Button } from "react-bootstrap";

class Video extends Component {
    constructor(props) {
        super(props);
    }

    goToVideosDetails = () => {
        console.log('goToVideosDetails');
    };
    render() {
        return (
            <div>
                <Button bsStyle="link" onClick={this.goToVideosDetails}>{this.props.video.name}</Button>
                <br />
                <video width='400' controls>
                    <source src={this.props.video.url} type='video/mp4' />
                </video>
                <br />
                <br />
            </div>
        )
    }
}
export default Video;
