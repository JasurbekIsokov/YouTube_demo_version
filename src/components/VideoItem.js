import React from "react";
import "../Style/VideoItem.css";

class VideoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <iframe
          width="800"
          height="425"
          src={"https://www.youtube.com/embed/" + this.props.dataId}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p className="video_check_title">{this.props.getVideoName}</p>
      </>
    );
  }
}

export default VideoItem;
