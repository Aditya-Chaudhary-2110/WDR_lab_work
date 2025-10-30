import React from "react";
import Sports from "./Sports";

const Student = (props) => {
  return (
    <div>
      <h1>Hello, my self {props.name}</h1>
      <h1>My Age is {props.age}</h1>
      <Sports player={props.name} age={props.age} />
    </div>
  );
};

export default Student;
