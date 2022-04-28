import React from "react";

import "../Style/MainStyle.css";

class VideoDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { arr: "" };
    console.log(this.props);
  }

  getChannelInfo = async (id) => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&fields=items(id%2Csnippet%2Fthumbnails)&key=AIzaSyDXZdLg3XezWfbwftMKP7r2mJyzOf2AO1Q`
    );
    const getJson = await data.json();
    return getJson.items[0].snippet.thumbnails.default.url;
    console.log(this.props);
  };
  async componentDidMount() {
    let a = await this.getChannelInfo(this.props.data.snippet.channelId);
    this.setState({ arr: a });
  }

  renderVideo = () => {
    return (
      <div className="container">
        <div className="video_picture">
          <img src={this.props.data.snippet.thumbnails.medium.url} />
          <div className="data_vid">
            <h2 className="title">{this.props.data.snippet.title}</h2>
            <p>{this.props.data.snippet.publishedAt}</p>
            <div className="channel_image">
              <img
                src={this.state.arr}
                style={{ width: "30px", borderRadius: "20px" }}
              />
              <span>{this.props.data.snippet.channelTitle}</span>
            </div>
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
