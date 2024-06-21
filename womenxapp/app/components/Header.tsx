// components/Header.js
'use client'
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-white p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        
        <div className="text-2xl font-bold text-pink-400">Womenx Innovators</div>
        <button
          className="text-3xl md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          &#9776;
        </button>
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-right md:space-x-4`}
        >
          <Link href="/opportunities"
             className="block mt-5 md:inline-block md:mt-0 text-lg text-gray-700 hover:text-pink-600 py-2">
              Opportunities
          </Link>
          <Link href="/events"
            className="block mt-5 md:inline-block md:mt-0 text-lg text-gray-700 hover:text-pink-600 py-2">
              Events
          </Link>
          <Link href="#"
            className="block mt-5 md:inline-block md:mt-0 text-lg text-gray-700 hover:text-pink-600 py-2">
              Post an Opportunity
          </Link>
          <Link href="#">
            <button className="block mt-4 md:inline-block md:mt-0 text-lg text-gray-700 hover:text-pink-600 bg-pink border border-gray-700  px-2 py-2 rounded-md">
              Sign In
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
