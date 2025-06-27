import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-8 border-t border-gray-300">
      <p className="text-sm text-gray-600">
        Made with 💻 by <span className="font-semibold text-blue-600">Sam</span>
      </p>
      <p className="text-xs text-gray-400 mt-1">
        “One task at a time. One step at a time. 🚀”
      </p>
      <p className="text-xs text-gray-400 mt-1">
        &copy; {new Date().getFullYear()} TodoApp. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
