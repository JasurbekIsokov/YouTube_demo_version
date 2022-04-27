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
        <div className="header_left">
          <img
            className="burger"
            src="img/burger.png"
            style={{ width: "25px", color: "#fff" }}
          />
          <img
            className="youtube"
            src="img/youtube.png"
            style={{ width: "32px", color: "#fff" }}
          />
          <p className="youtube_t">YouTube</p>
        </div>
        <div className="header_right">
          <img
            className="youtube mik"
            src="img/mikrafon.png"
            style={{ width: "25px", color: "#fff" }}
          />
          <div className="header_right__icon">
            <img
              className="youtube"
              src="img/videopilus.png"
              style={{ width: "25px", color: "#fff" }}
            />
            <img
              className="youtube"
              src="img/category.png"
              style={{ width: "25px", color: "#fff" }}
            />
            <img
              className="youtube"
              src="img/qongiroq.png"
              style={{ width: "25px", color: "#fff" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
