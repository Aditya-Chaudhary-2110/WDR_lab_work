import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { UserProvider } from "./context/UserContext";
import { MedicineProvider } from "./context/MedicineContext";

import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";

import "./App.css";

const App = () => {
  return (
    <UserProvider>
      <MedicineProvider>
        <Router>
          <Header />
          <AppRoutes />
        </Router>
      </MedicineProvider>
    </UserProvider>
  );
};

export default App;
