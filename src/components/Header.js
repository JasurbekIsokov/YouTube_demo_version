import React from "react";

// Style
import "../Style/HeaderStyle.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header">
        <div className="header_left"></div>
        <div className="header_right">
          <i className="bell outline icon" style={{ color: "#fff" }}></i>
        </div>
      </div>
    );
  }
}

export default Header;
