import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">TaskMaster</h3>
            <p className="text-gray-600 dark:text-gray-400">Manage your tasks efficiently</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
              Contact
            </a>
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className="text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} TaskMaster. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;