import React from "react";

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
        <div className="ui container" style={{ marginTop: "30px " }}>
          <form className="ui search" onSubmit={this.onSubmitForm}>
            <div className="ui icon input" style={{ width: "100%" }}>
              <input
                onChange={this.onChangeInput}
                className="prompt"
                type="text"
                placeholder="Search images..."
              />
              <i className="search icon"></i>
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
