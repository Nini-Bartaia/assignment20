import React, { useState, createContext } from 'react';

 const LanguageContext = createContext();

 export const useLanguage = () => {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

 
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');  

 
  const translations = {
    en: {
      todo: 'Todo',
      addTodo: 'Add Todo',
      removeTodo: 'Remove Todo',
    },
    ge: {
      todo: 'დავალება',
      addTodo: 'დაამატე დავალება',
      removeTodo: 'წაშალე დავალება',
    },
  };

  
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, translations, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;


