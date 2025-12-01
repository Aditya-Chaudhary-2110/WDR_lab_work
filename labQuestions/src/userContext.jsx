import { createContext, useState } from "react";

// creating UserContext to manage user authentication state
export const UserContext = createContext();

// UserProvider component to wrap around the app and provide user context
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ isLoggedIn: false, name: "" });

  // Hardcoded credentials for simplicity
  const credentials = {
    name: "John",
    password: "1234",
  };

  const login = (name, password) => {
    if (name === credentials.name && password === credentials.password) {
      setUser({ isLoggedIn: true, name });
      return true;
    } else {
      setUser({ isLoggedIn: false, name: "" });
      return false;
    }
  };

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};
