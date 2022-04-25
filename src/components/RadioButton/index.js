import React from "react";
import { Label, Input, Checkmark } from "./style";

const RadioButton = ({ label, name, onChange, value, checked }) => {
  return (
    <Label className={checked ? "active" : ""}>
      {label}
      <Input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <Checkmark />
    </Label>
  );
};

export default RadioButton;
