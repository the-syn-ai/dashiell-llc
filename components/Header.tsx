'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md dark:bg-gray-900">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-blue-800 dark:text-white">
            Dashiell LLC
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white">
            Home
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white">
            Services
          </Link>
          <Link href="/projects" className="text-gray-700 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white">
            Projects
          </Link>
          <Link href="/locations" className="text-gray-700 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white">
            Locations
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="text-gray-700 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/locations"
              className="text-gray-700 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Locations
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}