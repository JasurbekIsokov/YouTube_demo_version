import React from "react";

import "../Style/MainStyle.css";

class VideoDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { arr: "", obj: {} };
    // console.log(this.props);
  }

  getChannelInfo = async (id) => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&fields=items(id%2Csnippet%2Fthumbnails)&key=AIzaSyDXZdLg3XezWfbwftMKP7r2mJyzOf2AO1Q`
    );
    const getJson = await data.json();
    return getJson.items[0].snippet.thumbnails.default.url;
    console.log(this.props);
  };

  getWievInfo = async (id) => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${id}&key=AIzaSyDXZdLg3XezWfbwftMKP7r2mJyzOf2AO1Q`
    );
    const getJson = await data.json();
    console.log(getJson);
    return getJson.items[0].statistics;
  };

  async componentDidMount() {
    let a = await this.getChannelInfo(this.props.data.snippet.channelId);
    let b = await this.getWievInfo(this.props.data.snippet.channelId);
    this.setState({ arr: a, obj: b });
  }

  getIdClick = () => {
    this.props.func(this.props.data.id.videoId);
    this.props.getVideoName(this.props.data.snippet.title);
  };
  renderVideo = () => {
    return (
      <div className="container">
        <div className="video_picture" onClick={this.getIdClick}>
          <img src={this.props.data.snippet.thumbnails.medium.url} />
          <div className="data_vid">
            <a style={{ fontStyle: "none", color: "#000" }} className="title">
              {this.props.data.snippet.title}
            </a>
            <p style={{ marginTop: "10px" }}>
              {this.props.data.snippet.publishedAt}
            </p>
            <div className="channel_image">
              <img
                src={this.state.arr}
                style={{ width: "30px", borderRadius: "20px" }}
              />
              <p>{this.props.data.snippet.channelTitle}</p>
              {/* <br /> */}
              {/* <p>{this.state.obj.viewCount} views</p> */}
            </div>
            <p className="des">{this.props.data.snippet.description}</p>
            {/* <p className="des">{this.props.data.statistics}</p> */}
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
