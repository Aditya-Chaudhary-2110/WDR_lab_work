import { createContext, useState } from "react";

// creating the context for language management
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // state to hold the current language
  const [language, setLanguage] = useState("en"); // default: English
  // function to change the language
  const changeLanguage = (lang) => setLanguage(lang);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
