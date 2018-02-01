import React, { Component } from 'react';
import axios from 'axios';
import Video from './Video';
import { Pager } from "react-bootstrap";
import paginationBasic from './VideosPagination';

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
                <div key={index}>
                    <Video video={video} key={index} />
                </div>
            );
            return (
                <div className='videos-container'>{listItems}</div>
            );
        }
    };

    renderPagination = () => {
        if (this.state && this.state.videos) {
            return (
                <div>
                    {paginationBasic}
                    <Pager>
                        <Pager.Item href="#" previous >Previous</Pager.Item>
                        <Pager.Item href="#" next >Next</Pager.Item>
                    </Pager>
                </div>
            );
        }
    };
    render() {
        return (
            <div>
                <h4 className='videos-title'>Video Searcher</h4>
                <div className="input-group videos-search">
                    <input type="text" className="form-control" placeholder="Search for..." />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button">Go!</button>
                    </span>
                </div>
                {this.renderVideos()}
                {this.renderPagination()}
            </div>
        );
    }
}
export default Videos;
