import React, { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

export default function HomeButtonGroup({ handler }) {
  const [radioValue, setRadioValue] = useState("2");

  const radios = [
    { name: "Answered", value: "1" },
    { name: "Unanswered", value: "2" },
  ];

  return (
    <ButtonGroup className="w-100">
      {radios.map((radio, idx) => (
        <ToggleButton
          key={idx}
          id={`radio-${idx}`}
          type="radio"
          variant={radio.value === radioValue ? "primary" : "outline-primary"}
          name="radio"
          value={radio.value}
          checked={radioValue === radio.value}
          onChange={(e) => {
            setRadioValue(e.currentTarget.value);
            handler();
          }}
        >
          {radio.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
}
