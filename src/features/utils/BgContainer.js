import React from "react";

import Container from "react-bootstrap/Container";

import { imagesArray } from "./initialState";

export default function BgContainer({ children }) {
  const randomiseBg = (max) => {
    return Math.floor(Math.random() * max);
  };

  const bg = imagesArray[randomiseBg(imagesArray.length)];

  const backgroundImage = {
    background: `radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)) no-repeat center center / cover,
      url(${bg}) no-repeat center center / cover`,
  };

  return (
    <Container fluid className="p-0 min-vh-100 App" style={backgroundImage}>
      {children}
    </Container>
  );
}
