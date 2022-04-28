import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import Header from "./Header";
import Navbar from "./Navbar";
import VideoItem from "./VideoItem";
import "../Style/StyleApp.css";

// styel

import "../Style/Style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputKey: "", videoList: [], videoId: "" };
  }

  // Op orqali axios bilan malumotlarni olib kelish
  getData = async (keyword) => {
    const key = "AIzaSyD7DWFI8Gg2NLDZKQjUbItIE0zIQlSkDzs";
    const data = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          type: "video",
          maxResaults: 5,
          key: key,
          q: keyword,
        },
      }
    );
    this.setState({ videoList: data });
    console.log(data);
  };

  getVideoId = (id) => {
    this.setState({ videoId: id });
    console.log(this.state.videoId);
  };

  showVideo = () => {
    if (this.state.videoId) {
      return (
        <div className="Video_container">
          <div className="player">
            <VideoItem dataId={this.state.videoId} />
          </div>
          <div className="video_list">
            <VideoList
              data={this.state.videoList}
              videoIdFunc={this.getVideoId}
            />
          </div>
        </div>
      );
    } else {
      return (
        <VideoList data={this.state.videoList} videoIdFunc={this.getVideoId} />
      );
    }
  };

  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <SearchBar getRequest={this.getData} />
        {this.showVideo()}
      </div>
    );
  }
}

export default App;
