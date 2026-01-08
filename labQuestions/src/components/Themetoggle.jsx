import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

// ThemeToggle component to switch between light and dark themes
function ThemeToggle() {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Toggle Theme</button>;
}

export default ThemeToggle;
