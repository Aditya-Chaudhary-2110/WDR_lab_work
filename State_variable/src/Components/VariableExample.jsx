const VariableExample = () => {
  // A simple variable
  let num = 0;

  // Function to update the value
  function updateVar(params) {
    num = num + 5;
    console.log(num);
  }

  // UI designing
  return (
    <div>
      <h3>Simple Variable</h3>
      number: {num}
      {/* Button */}
      <br />
      <br />
      <button onClick={updateVar}>click me</button>
    </div>
  );
};

export default VariableExample;
