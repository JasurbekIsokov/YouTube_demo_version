import React from "react";

import VideoDetail from "./VideoDetail";

class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videoData: [] };
  }

  renderList = () => {
    return this.props.data.data?.items.map((val) => {
      return (
        <div key={val.id.videoId}>
          <VideoDetail data={val} func={this.props.videoIdFunc} />
        </div>
      );
    });
  };

  render() {
    return <div>{this.renderList()}</div>;
  }
}

export default VideoList;
