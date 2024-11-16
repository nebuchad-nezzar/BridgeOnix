import React, { useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Globe2, Menu, X, LogIn, UserPlus } from 'lucide-react';
import logo from '/public/images/brigdeOnix.png';
import { useAuth } from '../contexts/AuthContext';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();
  const { user, logout } = useAuth();



  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/solutions', label: 'Solutions', dropdown: [
      { path: '/international-freight', label: 'International Freight' },
      { path: '/supply-chain', label: 'Supply Chain' },
      { path: '/last-mile-delivery', label: 'Last Mile Delivery' },
      { path: '/customs-clearance', label: 'Customs Clearance' }
    ]},
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


  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <nav className="fixed w-full bg-gray-900 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="BridgeOnix" className="h-14 w-14" />
            <span className="text-xl font-bold text-neutral-50">BridgeOnix</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div 
                key={link.path} 
                className="relative"
                onMouseEnter={() => handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                {link.dropdown ? (
                  <div className="relative">
                    <button className={`text-white hover:text-blue-600 transition-colors ${
                      activeDropdown === link.label ? 'text-blue-600' : ''
                    }`}>
                      {link.label}
                    </button>
                    <div
                      className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-opacity duration-150 ${
                        activeDropdown === link.label 
                          ? 'opacity-100 visible translate-y-0' 
                          : 'opacity-0 invisible -translate-y-1'
                      }`}
                    >
                      <div className="py-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`${
                      isActive(link.path)
                        ? 'text-blue-600'
                        : 'text-white hover:text-blue-600'
                    } transition-colors`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">{user.displayName}</span>
                <button
                  onClick={handleLogout}
                  className="text-white hover:text-blue-600 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="flex items-center text-white hover:text-blue-600 transition-colors"
                >
                  <LogIn className="h-5 w-5 mr-1" />
                  Login
                </Link>
                <Link
                  to="/register"
                  className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <UserPlus className="h-5 w-5 mr-1" />
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
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
                        className="text-white hover:text-blue-600 transition-colors w-full text-left"
                        onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                      >
                        {link.label}
                      </button>
                      <div 
                        className={`pl-4 mt-2 space-y-2 transition-all duration-200 ${
                          activeDropdown === link.label 
                            ? 'max-h-96 opacity-100' 
                            : 'max-h-0 opacity-0 overflow-hidden'
                        }`}
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="block text-white hover:text-blue-600"
                            onClick={() => {
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                            }}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={`${
                        isActive(link.path)
                          ? 'text-blue-600'
                          : 'text-white hover:text-blue-600'
                      } transition-colors`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              
              {user ? (
                <div className="pt-2 border-t border-gray-200">
                  <span className="block text-gray-700 mb-2">{user.displayName}</span>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="text-white hover:text-blue-600 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="pt-2 border-t border-gray-200 space-y-2">
                  <Link
                    to="/login"
                    className="flex items-center text-white hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <LogIn className="h-5 w-5 mr-1" />
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <UserPlus className="h-5 w-5 mr-1" />
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}