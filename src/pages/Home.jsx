import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to TaskMaster
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          A powerful task management application built with React and Tailwind CSS
        </p>
        <Link to="/tasks">
          <Button variant="primary" size="lg">
            Get Started
          </Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Manage Tasks</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Create, edit, and organize your tasks efficiently
          </p>
        </Card>
        
        <Card className="p-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Track Progress</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Monitor your task completion and stay productive
          </p>
        </Card>
        
        <Card className="p-6 text-center">
          <h3 className="text-lg font-semibold mb-2">API Integration</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Fetch and display data from external APIs
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Home;