import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

function LanguageSelector() {
  // getting language and changeLanguage function from LanguageContext
  const { language, changeLanguage } = useContext(LanguageContext);

  // Text in different languages
  const messages = {
    en: "Hello, welcome!",
    hi: "नमस्ते, आपका स्वागत है!",
    fr: "Bonjour, bienvenue !",
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Select Language:</h3>
      <label>
        <input
          type="radio"
          value="en"
          checked={language === "en"}
          onChange={(e) => changeLanguage(e.target.value)}
        />
        English
      </label>
      <label style={{ marginLeft: "10px" }}>
        <input
          type="radio"
          value="hi"
          checked={language === "hi"}
          onChange={(e) => changeLanguage(e.target.value)}
        />
        Hindi
      </label>
      <label style={{ marginLeft: "10px" }}>
        <input
          type="radio"
          value="fr"
          checked={language === "fr"}
          onChange={(e) => changeLanguage(e.target.value)}
        />
        French
      </label>

      <p style={{ marginTop: "10px", fontWeight: "bold" }}>
        {messages[language]}
      </p>
    </div>
  );
}

export default LanguageSelector;
