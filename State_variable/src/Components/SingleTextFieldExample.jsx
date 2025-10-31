import { useState } from "react";

const SingleTextFieldExample = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        name="text"
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Output: {text}</p>
    </div>
  );
};

export default SingleTextFieldExample;
