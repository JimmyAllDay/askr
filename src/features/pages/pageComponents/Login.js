import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../../users/loggedInSlice";

import { Container, Col, Button } from "react-bootstrap";

import { Redirect, useLocation } from "react-router-dom";

import Select from "react-select";
import AlertModal from "../../utils/AlertModal";

export default function LoginModal({ users, loggedIn }) {
  const [user, setUser] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const { state } = useLocation();

  const handleCloseAlert = () => {
    return setShowAlert(false);
  };
  const alertTitle = "User Log In";
  const alertMessage = "Please select a user to log in";

  const dispatch = useDispatch();

  const renderedUsers2 = users.map((user) => ({
    label: `${user.firstName} ${user.lastName}`,
    value: `${user.id}`,
    image: user.avatar,
  }));

  const onUserChanged = (person) => {
    const userId = person.value;
    const user = users.find((u) => u.id === userId);
    setUser(user);
  };

  const logInUser = () => {
    if (!user) {
      setShowAlert(true);
    } else {
      dispatch(
        userLoggedIn({
          loggedIn: true,
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          avatar: user.avatar,
        })
      );
      setUser("");
    }
  };

  if (loggedIn === true) {
    return <Redirect to={state?.from || "/"} />;
  }

  return (
    <Container
      fluid
      className="p-0 d-flex flex-column my-auto text-light blur-bg rounded-3 align-items-center"
    >
      <AlertModal
        showAlert={showAlert}
        handleCloseAlert={handleCloseAlert}
        title={alertTitle}
        message={alertMessage}
      />

      <h4
        className="ms-2 mt-1 text-info align-self-start"
        style={{ fontFamily: "Righteous, cursive" }}
      >
        Askr
      </h4>

      <h1
        className="align-self-center"
        style={{
          fontSize: "6em",
          fontFamily: "Righteous, cursive",
        }}
      >
        A
      </h1>

      <h5 className="align-self-center">Select a user to log in</h5>

      <Col xs={8} sm={6} className="d-flex flex-column">
        <Select
          options={renderedUsers2}
          className="text-dark my-4"
          formatOptionLabel={(user) => (
            <div className="d-flex">
              <div style={{ height: "30px", width: "30px" }}>
                <img
                  className="my-auto"
                  src={user.image}
                  alt="country-image"
                  style={{ height: "100%", width: "auto" }}
                />
              </div>
              <div className="ms-3 my-auto">{user.label}</div>
            </div>
          )}
          onChange={(e) => onUserChanged(e)}
        />
        <Button
          variant="primary"
          size="lg"
          className="align-self-center mb-3"
          onClick={() => logInUser()}
        >
          Log In
        </Button>
      </Col>
    </Container>
  );
}
