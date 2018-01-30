import React, { Component } from 'react';
import axios from 'axios';
import Video from './Video';
class Videos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: '',
            sessionId: this.props.sessionId
        };
    }
    getVideosData = () => {
        const url = 'http://localhost:3001/videos/';
        axios
            .get(url, {
                params: {
                    sessionId: this.props.sessionId
                }
            })
            .then(response => {
                if (response.data.status === 'success') {
                    this.setState({ videos: response.data.data });
                }
            })
            .catch(error => {
                console.log(error);
            });
    };
    componentDidMount = () => {
        this.getVideosData();
    };

    renderVideos = () => {
        if (this.state && this.state.videos) {
            const listItems = this.state.videos.map((video, index) =>
                <li key={index}>
                    <Video video={video} key={index} />
                </li>
            );
            return (
                <ul>{listItems}</ul>
            );
        }
    };
    render() {
        return (
            <div>
                <p>Videos page</p>
                <div>
                    {this.renderVideos()}
                </div>
            </div>
        );
    }
}
export default Videos;
