import React, { useState } from "react";

const StudentForm = () => {
  // useState for the name
  let [name, setName] = useState("");
  // useState for the age
  let [age, setAge] = useState("");
  // useState for the standard
  let [standard, setStandard] = useState("");
  return (
    <div>
      {/* input field for name */}
      <label>name:</label>
      <br />
      <input
        id="name"
        type="text"
        placeholder="Enter the name of the student"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      {/* input field for age*/}
      <label>age:</label> <br />
      <input
        type="Number"
        placeholder="Enter the age of the student"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <br />
      {/* input field for standard */}
      <label>standard:</label> <br />
      <input
        type="text"
        placeholder="Enter the standard of the student"
        value={standard}
        onChange={(e) => {
          setStandard(e.target.value);
        }}
      />
      <br />
      <h4>Student profile</h4>
      <br />
      <p>Name of the student: {name}</p>
      <p>Age of the student: {age}</p>
      <p>Standard of the student: {standard}</p>
    </div>
  );
};

export default StudentForm;
