import React from "react";

import Auth from "./auth";

class Nav extends React.Component {
  render () {
    return (
      <div className="nav">
        <Auth />
      </div>
    );
  }
}

export default Nav;
