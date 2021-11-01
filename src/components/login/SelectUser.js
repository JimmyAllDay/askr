import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../../features/users/loggedInSlice";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function SelectUser(props) {
  const [user, setUser] = useState("");

  const dispatch = useDispatch();

  const renderedUsers = props.users.map((user) => (
    <option key={user.id} className="login-user" value={`${user.id}`}>
      {`${user.firstName} ${user.lastName}`}
    </option>
  ));

  const onUserChanged = (e) => {
    const userId = e.target.value;
    const user = props.users.find((u) => u.id === userId);
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
    <div className="d-flex flex-column align-items-center justify-content-between login-background">
      <Row className="login-background">
        <Col className="mb-4 login-background">
          <select
            defaultValue="default"
            className="select-dropdown mt-3"
            onChange={(e) => onUserChanged(e)}
          >
            <option value="default" disabled>
              Select User
            </option>
            {renderedUsers}
          </select>
        </Col>
      </Row>
      <Row className="login-background">
        <Col className="login-background">
          <Button className="global-button" onClick={() => saveLoggedInUser()}>
            Log In
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default SelectUser;
