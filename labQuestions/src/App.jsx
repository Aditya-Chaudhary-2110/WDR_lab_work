// importing the necessary modules and components
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import UserLogin from "./components/UserLogin";
import LanguageSelector from "./components/LanguageSelector";
import RegistrationForm from "./components/RegistrationForm";
import ContactForm from "./components/ContactForm";

function App() {
  // getting the current theme from ThemeContext
  const { theme } = useContext(ThemeContext);

  // it will style the app based on the current theme
  const appStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
    color: theme === "light" ? "#333" : "#f0f0f0",
    transition: "all 0.3s ease",
    padding: "20px",
  };

  return (
    <div style={appStyle}>
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
      <ThemeToggle />
      <UserLogin />
      <LanguageSelector />
      <RegistrationForm />
      <ContactForm />
    </div>
  );
}

export default App;
