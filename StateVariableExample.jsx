import React from "react";
import { useState } from "react";

const StateVariableExample = () => {
  // Initalizing a state variable
  let [num, updateNum] = useState(0);

  // A function to call the setState
  function incrementNum() {
    // setState which update the state
    updateNum(num + 5);
    console.log(num);
  }

  return (
    <div>
      <h3>State Variable</h3>
      number: {num}
      <br />
      <br />
      <button onClick={incrementNum}> click me</button>
    </div>
  );
};

export default StateVariableExample;
