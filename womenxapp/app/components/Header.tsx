"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="text-2xl font-bold text-pink">Womenx Innovators</Link>
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              color='black'
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-600 hover:underline dark:text-black">Home</Link>
          <Link href="#about" className="text-gray-600 hover:underline dark:text-black">About</Link>
          <Link href="/events" className="text-black hover:underline dark:text-black">Events</Link>
          <Link href="/opportunities" className="text-black hover:underline dark:text-black">Opportunities</Link>
          {/* <Link href="/signin" className="text-pink-600 hover:underline dark:text-black">Sign In</Link>
          <Link href="/signup" className="text-pink-600 hover:underline dark:text-black">Sign Up</Link> */}
        </nav>
      </div>
      {isOpen && (
        <nav className="md:hidden px-2 pt-2 pb-4 space-y-1">
          <Link href="/" className="block text-gray-600 dark:text-black hover:bg-gray-100 rounded-md px-3 py-2">Home</Link>
          <Link href="#about" className="block text-gray-600 dark:text-black hover:bg-gray-100 rounded-md px-3 py-2">About</Link>
          <Link href="/events" className="text-black hover:underline dark:text-black rounded-md px-3 py-2">Events</Link>
           <Link href="/opportunities" className="block text-gray-600 dark:text-black hover:bg-gray-100 rounded-md px-3 py-2">Opportunities</Link>
        </nav>
      )}
    </header>
  );
}
