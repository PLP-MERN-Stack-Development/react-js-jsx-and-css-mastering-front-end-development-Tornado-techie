import React from 'react';
import ApiIntegration from '../components/ApiIntegration';

const ApiDemo = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        API Integration Demo
      </h1>
      <ApiIntegration />
    </div>
  );
};

export default ApiDemo;