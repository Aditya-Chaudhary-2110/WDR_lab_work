import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Student from "./Components/Student";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Student name="Aditya" age={20} />
    </>
  );
}

export default App;
