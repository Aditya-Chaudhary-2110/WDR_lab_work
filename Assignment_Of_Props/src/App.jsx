import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Faculty from "./Components/Faculty";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Faculty name="Ramesh" subject="Java" Experience={13} />
    </>
  );
}

export default App;
