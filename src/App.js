import React, {createContext, useState} from "react";
import Layout from "./components/Layout";

export const LanguageContext = createContext();

function App() {
  const [language, setLanguage] = useState("en");
  const changeLanguage = () => {
    if(language === 'en'){
      setLanguage('jp');
    }else{
      setLanguage('en');
    }
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      <Layout></Layout>
    </LanguageContext.Provider>
  );
}

export default App;
