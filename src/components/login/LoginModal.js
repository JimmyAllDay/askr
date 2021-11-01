import React from "react";
import SelectUser from "./SelectUser";

import logo from "../../assets/images/logo.svg";

export function LoginModal(props) {
  // TODO: Add functionality for creating new users
  return (
    <div className="mt-5 w-25 h-auto login-modal">
      <div className="login-background d-flex">
        <h1 className="login-background title-brand ms-2">Askr</h1>
      </div>
      <div className="login-background">
        <div className="mt-4 login-background logo-container">
          <img
            style={{ borderRadius: "50px" }}
            src={logo}
            className="App-logo login-background"
            alt="logo"
          />
        </div>
      </div>
      <div className="mt-4 login-background">
        <h5 className="login-background">Select a user to log in</h5>
      </div>
      <div className="login-background">
        <div className="d-flex justify-content-center login-background"></div>
        <div className="login-background"></div>
      </div>
      <div className="add-select-user mt-2 login-background">
        <SelectUser className="login-dropdown" users={props.props} />
      </div>
    </div>
  );
}

export default LoginModal;
