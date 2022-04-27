import React from "react";

import "../Style/MainStyle.css";

class VideoDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  renderVideo = () => {
    return (
      <div className="container">
        <div className="video_picture">
          <img src={this.props.data.snippet.thumbnails.high.url} />
          <div className="data_vid">
            <h2 className="title">{this.props.data.snippet.title}</h2>
            <p>{this.props.data.snippet.publishedAt}</p>
            <p>{this.props.data.snippet.channelTitle}</p>
            <p className="des">{this.props.data.snippet.description}</p>
          </div>
        </div>
        <div className="video_data"></div>
      </div>
    );
  };

  render() {
    return <div>{this.renderVideo()}</div>;
  }
}

export default VideoDetail;
