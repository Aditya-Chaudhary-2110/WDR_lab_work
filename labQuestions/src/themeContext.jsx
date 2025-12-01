import { createContext, useState } from "react";

// creating ThemeContext to manage light and dark themes
export const ThemeContext = createContext();

// ThemeProvider component to wrap around the app and provide theme context
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  // providing theme and toggleTheme function to the context consumers
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
