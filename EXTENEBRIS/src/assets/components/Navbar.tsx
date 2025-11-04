import React from 'react';

const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent bg-opacity-20 backdrop-blur-md shadow-md">
      <div className="max-w-4xl mx-auto px-0 py-8 flex justify-end text-white font-bold font-cormorant">
        {/* Links */}
        <ul className="flex gap-15 text-sm uppercase tracking-wide">
          <li
            className="cursor-pointer hover:text-red-500"
            onClick={() => scrollToSection('hero')}
          >
            Home
          </li>
          <li
            className="cursor-pointer hover:text-red-500"
            onClick={() => scrollToSection('inferno')}
          >
            Inferno
          </li>
          <li
            className="cursor-pointer hover:text-red-500"
            onClick={() => scrollToSection('team')}
          >
            Team
          </li>
          <li
            className="cursor-pointer hover:text-red-500"
            onClick={() => scrollToSection('news')}
          >
            News
          </li>
          
        </ul>

        {/* Log In */}
        <button className="ml-25 bg-red-700 hover:bg-red-600 text-white px-4 py-1 rounded text-sm font-semibold">
          LogIn
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
