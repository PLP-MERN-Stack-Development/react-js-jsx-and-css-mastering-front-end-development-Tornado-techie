import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '../context/ThemeContext';

const Layout = ({ children }) => {
  const { isDarkMode } = useTheme();

  return (
    <div style={{
      backgroundColor: isDarkMode ? '#1f2937' : '#f9fafb',
      color: isDarkMode ? '#f9fafb' : '#000000',
      minHeight: '100vh'
    }} className="flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;