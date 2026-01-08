// importing necessary providers
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./ThemeContext";
import { UserProvider } from "./UserContext";
import { LanguageProvider } from "./LanguageContext";

// wrapped the app with all the necessary context providers
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <UserProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </UserProvider>
  </ThemeProvider>
);
