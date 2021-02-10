import React from "react";
import "./Button.css";

// props title and width is required
const Button = (props) => {
  return <button style={{ width: `${props.width}` }}>{props.title}</button>;
};

export default Button;
