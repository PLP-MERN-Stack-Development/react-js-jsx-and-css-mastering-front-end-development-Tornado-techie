import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Card = ({ children, className = '' }) => {
  const { isDarkMode } = useTheme();

  return (
    <div 
      style={{
        backgroundColor: isDarkMode ? '#374151' : '#ffffff',
        color: isDarkMode ? '#f9fafb' : '#000000',
        borderColor: isDarkMode ? '#4b5563' : '#e5e7eb'
      }}
      className={`rounded-lg shadow-md border ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;