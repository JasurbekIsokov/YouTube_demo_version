import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import Header from "./Header";
import Navbar from "./Navbar";

// styel

import "../Style/Style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputKey: "", videoList: [] };
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

  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <SearchBar getRequest={this.getData} />
        <VideoList data={this.state.videoList} />
      </div>
    );
  }
}

export default App;
