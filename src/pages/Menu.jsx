import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">🚀 Project Menu</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Link
          to="/api-integration"
          className="bg-blue-600 text-white px-6 py-4 rounded-lg shadow hover:bg-blue-700 text-center transition"
        >
          📡 API Integration
        </Link>

        <Link
          to="/task-manager"
          className="bg-green-600 text-white px-6 py-4 rounded-lg shadow hover:bg-green-700 text-center transition"
        >
          ✅ Task Manager
        </Link>
      </div>
    </div>
  );
};

export default Menu;
