import React from "react";

const Faculty = (props) => {
  return (
    <div>
      <h2>Faculty Info:</h2>
      <h4>Fac-name: {props.name}</h4>
      <h4>subject: {props.subject}</h4>
      <h4>Experience:{props.Experience}</h4>
    </div>
  );
};

export default Faculty;
