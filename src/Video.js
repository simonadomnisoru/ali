import React, { Component } from 'react';

class Video extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return
        <div>
            <p>{this.props.video.name}</p>
            <video width='400' controls>
                <source src={this.props.video.url} type='video/mp4' />
            </video>
        </div>;
    }
}
export default Video;
