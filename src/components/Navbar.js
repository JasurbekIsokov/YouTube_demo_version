import React from "react";

// style
import "../Style/NavbarStyle.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar_link">
          <div className="navbar_link__icon"></div>
          <div className="navbar_link__title">Home</div>
        </div>
        <div className="navbar_link">
          <div className="navbar_link__icon"></div>
          <div className="navbar_link__title">Location</div>
        </div>
        <div className="navbar_link">
          <div className="navbar_link__icon"></div>
          <div className="navbar_link__title">Shorts</div>
        </div>
        <div className="navbar_link">
          <div className="navbar_link__icon"></div>
          <div className="navbar_link__title">Follow</div>
        </div>
        <div className="navbar_link">
          <div className="navbar_link__icon"></div>
          <div className="navbar_link__title">Library</div>
        </div>
      </div>
    );
  }
}

export default Navbar;
