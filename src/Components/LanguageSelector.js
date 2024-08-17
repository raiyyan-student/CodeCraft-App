import React, { useState } from 'react';

const LanguageSelector = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const content = {
    en: {
      welcome: 'Welcome to CodeCraft!',
      description: 'Learn coding with our tutorials and challenges.',
    },
    es: {
      welcome: '¡Bienvenido a CodeCraft!',
      description: 'Aprende a programar con nuestros tutoriales y desafíos.',
    },
  };

  return (
    <div className="language-selector">
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
      <div className="language-content">
        <h3>{content[language].welcome}</h3>
        <p>{content[language].description}</p>
      </div>
    </div>
  );
};

export default LanguageSelector;