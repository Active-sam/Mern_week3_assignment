import React, { useEffect, useState } from 'react';

const PostsViewer = () => {
  const [posts, setPosts] = useState([]);           // All fetched posts
  const [loading, setLoading] = useState(true);     // Loading state
  const [error, setError] = useState(null);         // Error state
  const [currentPage, setCurrentPage] = useState(1);// Page number
  const [searchTerm, setSearchTerm] = useState(''); // Search input

  const POSTS_PER_PAGE = 10;

  // Fetch data
  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch posts");
        return res.json();
      })
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filtered posts based on search term
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginated posts
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const indexOfLast = currentPage * POSTS_PER_PAGE;
  const indexOfFirst = indexOfLast - POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(indexOfFirst, indexOfLast);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">📚 Post Viewer</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by title..."
        className="border p-2 rounded mb-4 w-full"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1); // Reset to page 1 when searching
        }}
      />

      {/* Loading / Error */}
      {loading && <p className="text-blue-600">Loading...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

      {/* Post Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {currentPosts.map(post => (
          <div key={post.id} className="border p-4 rounded shadow-sm bg-white">
            <h3 className="font-semibold mb-2">{post.title}</h3>
            <p className="text-sm text-gray-700">{post.body}</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-2 mt-6">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-2 py-1">{currentPage} / {totalPages}</span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostsViewer;
