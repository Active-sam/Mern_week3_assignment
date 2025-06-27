import React from 'react';

const Header = () => {
  return (
    <header className="bg-sky-400 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">📝 TodoApp</h1>
        <p className="text-sm opacity-90">Stay organized. Stay sharp. 💡</p>
      </div>
    </header>
  );
};

export default Header;
