import React from "react";

const Sports = (props) => {
  return (
    <div>
      <h2>Player Name: {props.player}</h2>
      <h2>Age : {props.age}</h2>
    </div>
  );
};

export default Sports;
