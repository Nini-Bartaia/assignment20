import React from 'react';
import { useLanguage } from './languageContext';

const Header = () => {
  const { language, translations, changeLanguage } = useLanguage();

  const handleLanguageChange = (selectedLanguage) => {
    changeLanguage(selectedLanguage);
  };

  return (
    <div>
      <header>
        <h1>{translations[language]?.todo}</h1>
        <button onClick={() => handleLanguageChange('en')}>English</button>
        <button onClick={() => handleLanguageChange('ge')}>Georgian</button>
      </header>
    </div>
  );
};

export default Header;
