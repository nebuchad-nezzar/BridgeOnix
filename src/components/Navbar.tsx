import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe2, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/solutions', label: 'Solutions' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    {
      path: '/',
      label: 'Company',
      dropdown: [
        { path: '/careers', label: 'Careers' },
        { path: '/press', label: 'Press' }
      ]
    },
    { path: '/contact', label: 'Contact' }
  ];

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Globe2 className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">BridgeOnix</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.path} className="relative">
                {link.dropdown ? (
                  <div
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="text-gray-600 hover:text-blue-600 transition-colors">
                      {link.label}
                    </button>
                    {activeDropdown === link.label && (
                      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`${
                      isActive(link.path)
                        ? 'text-blue-600'
                        : 'text-gray-600 hover:text-blue-600'
                    } transition-colors`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {link.dropdown ? (
                    <>
                      <button
                        className="text-gray-600 hover:text-blue-600 transition-colors w-full text-left"
                        onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                      >
                        {link.label}
                      </button>
                      {activeDropdown === link.label && (
                        <div className="pl-4 mt-2 space-y-2">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="block text-gray-600 hover:text-blue-600"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMenuOpen(false);
                              }}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={`${
                        isActive(link.path)
                          ? 'text-blue-600'
                          : 'text-gray-600 hover:text-blue-600'
                      } transition-colors`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}