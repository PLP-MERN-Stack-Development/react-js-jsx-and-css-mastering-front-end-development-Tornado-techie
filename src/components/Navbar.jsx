import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav style={{
      backgroundColor: isDarkMode ? '#111827' : '#ffffff',
      color: isDarkMode ? '#f9fafb' : '#000000',
      borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
    }} className="shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" style={{ color: isDarkMode ? '#f9fafb' : '#000000' }} className="text-xl font-bold">
              TaskMaster
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              to="/" 
              style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}
              className="hover:text-blue-500 transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/tasks" 
              style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}
              className="hover:text-blue-500 transition-colors"
            >
              Tasks
            </Link>
            <Link 
              to="/api-demo" 
              style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}
              className="hover:text-blue-500 transition-colors"
            >
              API Demo
            </Link>
            <Button 
              variant="secondary" 
              size="sm" 
              onClick={toggleTheme}
              className="ml-4"
            >
              {isDarkMode ? '☀️ Light' : '🌙 Dark'}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;