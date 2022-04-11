import React from "react";

import Container from "react-bootstrap/Container";

import { Icon } from "@iconify/react";

export default function Awards({ ranking }) {
  const gold = (
    <div className="d-flex flex-column">
      <Icon
        icon="emojione:trophy"
        className="align-self-center"
        style={{ fontSize: "2em", color: "gold" }}
      />
    </div>
  );

  const silver = (
    <div className="d-flex flex-column">
      <Icon
        icon="emojione:2nd-place-medal"
        className="align-self-center"
        style={{ fontSize: "1.8em", color: "silver" }}
      />
    </div>
  );

  const bronze = (
    <div className="d-flex flex-column">
      <Icon
        icon="emojione:3rd-place-medal"
        className="align-self-center"
        style={{ fontSize: "1.6em", color: "tan" }}
      />
    </div>
  );

  const renderAward = (position) => {
    switch (position) {
      case 1:
        return gold;
      case 2:
        return silver;
      case 3:
        return bronze;
      default:
        return <h5 className="text-info">{`${position}th`}</h5>;
    }
  };
  return (
    <Container
      fluid
      className="p-0 d-flex flex-column align-items-end mt-1 pe-1"
    >
      {renderAward(ranking)}
    </Container>
  );
}
