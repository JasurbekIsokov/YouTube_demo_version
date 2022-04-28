import React from "react";

import "../Style/Search.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "" };
  }

  onChangeInput = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    this.props.getRequest(this.state.inputValue);
  };

  render() {
    return (
      <div>
        <div
          className="container"
          style={{
            marginTop: "-15px",
            marginLeft: "410px",
            position: "fixed ",
          }}
        >
          <form className="search" onSubmit={this.onSubmitForm}>
            <div
              className="ui icon input zSearch"
              style={{ width: "540px", borderRadius: "10px", zIndex: "1000" }}
            >
              <input
                style={{
                  backgroundColor: "#fff",
                  // padding: "12px auto",
                }}
                onChange={this.onChangeInput}
                className="prompt"
                type="text"
                placeholder="Search images..."
              />

              <i
                className="search icon"
                style={{
                  color: "#fff",
                  padding: "18px",
                  backgroundColor: "#555",
                }}
              ></i>
            </div>
            <div className="results"></div>
          </form>
        </div>
        <h2>{this.state.inputValue}</h2>
      </div>
    );
  }
}

export default SearchBar;
