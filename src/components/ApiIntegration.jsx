import React, { useState, useEffect } from 'react';
import Button from './Button';
import Card from './Card';

const ApiIntegration = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) throw new Error('Failed to fetch posts');
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Filter posts based on search term
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  if (loading) {
    return (
      <Card className="p-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400">Loading posts...</p>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="p-6">
        <div className="text-red-600 dark:text-red-400 mb-4">
          <p className="font-semibold">Error: {error}</p>
        </div>
        <Button onClick={fetchPosts} variant="primary">
          Try Again
        </Button>
      </Card>
    );
  }

  return (
    <div className="space-y-6 text-gray-900 dark:text-gray-50">
      {/* Search and Controls */}
      <Card className="p-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="flex-1 w-full">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-50"
            />
          </div>
          <Button onClick={fetchPosts} variant="secondary">
            Refresh
          </Button>
        </div>
      </Card>

      {/* Posts List */}
      <div className="space-y-4">
        {currentPosts.map(post => (
          <Card key={post.id} className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {post.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-800 mb-4">
              {post.body}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 dark:text-gray-800">
                Post ID: {post.id}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-800">
                User ID: {post.userId}
              </span>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Card className="p-4">
          <div className="flex justify-between items-center">
            <Button
              variant="secondary"
              size="sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
            >
              Previous
            </Button>
            
            <span className="text-gray-600 dark:text-gray-400">
              Page {currentPage} of {totalPages}
            </span>
            
            <Button
              variant="secondary"
              size="sm"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => prev + 1)}
            >
              Next
            </Button>
          </div>
        </Card>
      )}

      {/* Results Count */}
      <div className="text-center text-gray-500 dark:text-gray-400">
        Showing {currentPosts.length} of {filteredPosts.length} posts
        {searchTerm && ` matching "${searchTerm}"`}
      </div>
    </div>
  );
};

export default ApiIntegration;