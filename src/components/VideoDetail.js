import React from "react";

class VideoDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  renderVideo = () => {
    return (
      <div className="container">
        <div className="video_picture">
          <img src={this.props.data.snippet.thumbnails.high.url} />
          <h2>{this.props.data.snippet.title}</h2>
          <p>{this.props.data.snippet.description}</p>
          <span>{this.props.data.snippet.publishedAt}</span>
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