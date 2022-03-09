import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../../features/users/loggedInSlice";

import { Container, Col, Button } from "react-bootstrap";

export default function LoginModal({ users }) {
  const [user, setUser] = useState("");

  const dispatch = useDispatch();

  const renderedUsers = users.map((user) => (
    <option key={user.id} className="login-user" value={`${user.id}`}>
      {`${user.firstName} ${user.lastName}`}
    </option>
  ));

  const defaultValue = (
    <option value="default" disabled>
      Select User
    </option>
  );

  const onUserChanged = (e) => {
    const userId = e.target.value;
    const user = users.find((u) => u.id === userId);
    setUser(user);
  };

  const saveLoggedInUser = () => {
    if (user) {
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

  return (
    <Container
      fluid
      className="p-0 bg-dark text-light d-flex flex-column my-auto"
    >
      <h4 className="ms-1">
        <span className="login-modal__small-logo">Askr</span>
      </h4>

      <h1 className="login-modal__main-logo align-self-center">
        <span>A</span>
      </h1>

      <h5 className="align-self-center">Select a user to log in</h5>

      <Col className="d-flex flex-column">
        <select
          defaultValue="default"
          className="mx-5 my-3 login__modal--select"
          onChange={(e) => onUserChanged(e)}
        >
          {defaultValue}
          {renderedUsers}
        </select>
        <Button
          variant="primary"
          size="lg"
          className="align-self-center mb-3"
          onClick={() => saveLoggedInUser()}
        >
          Log In
        </Button>
      </Col>
    </Container>
  );
}
