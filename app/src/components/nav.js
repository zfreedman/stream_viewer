import React from "react";

const googleSignInClass = "g-signin2";

class Nav extends React.Component {
  render () {
    return (
      <div className="nav">
        <div className="g-signin2" />
      </div>
    );
  }

  componentDidMount () {
    // this is terrible practice, but can't seem to figure out how to hook into
    // the onsuccess for the sign in button
    window.responseGoogle = this.responseGoogle;

    document
      .querySelector(`.${googleSignInClass}`)
      .setAttribute("data-onsuccess", "responseGoogle");
  }

  responseGoogle = googleUser => {
    // console.log(googleUser);
    const id_token = googleUser.getAuthResponse().id_token;
    // console.log(id_token);
  };
}

export default Nav;
