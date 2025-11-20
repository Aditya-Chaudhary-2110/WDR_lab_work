import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { FacultyProvider } from "./components/facultyManagment/context/FacultyContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FacultyProvider>
      <App />
    </FacultyProvider>
  </React.StrictMode>
);
