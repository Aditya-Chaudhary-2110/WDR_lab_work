import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StudentRegistration from "./StudentRegistration";
import StudentList from "./StudentList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <StudentRegistration />
        <StudentList />
      </div>
    </>
  );
}

export default App;
