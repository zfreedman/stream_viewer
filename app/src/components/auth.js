import { compose } from "redux";
import { connect } from "react-redux";
import React from "react";

import { setAuth } from "../actions/auth";

const googleSignInClass = "g-signin2";

class Auth extends React.Component {
  render () {
    const { auth } = this.props;
    
    return (
      <div>
        {
          auth === ""
              ? <div className={`${googleSignInClass}`} />
              : <button onClick={this.signOut}>Sign out</button>
        }
      </div>
    );
  }

  componentDidMount () {
    // this is terrible practice, but can't seem to figure out how to hook into
    // the onsuccess for the sign in button
    window.responseGoogle = this.responseGoogle;

    const googleButton = document.querySelector(`.${googleSignInClass}`);
    if (googleButton !== null) {
      googleButton.setAttribute("data-onsuccess", "responseGoogle");
    }
  }

  responseGoogle = googleUser => {
    // console.log(googleUser);
    const id_token = googleUser.getAuthResponse().id_token;
    this.props.dispatch(setAuth(id_token));
  };

  signOut = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      this.props.dispatch(setAuth(""))
      location.reload();
    });
  };
}

const mapStateToProps = ({ auth }) => ({ auth });

export default compose(
  connect(mapStateToProps)
)(Auth);
