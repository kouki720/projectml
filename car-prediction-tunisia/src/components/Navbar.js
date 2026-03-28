// components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, User, LogOut, Settings } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🚗</span>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                CarPredict
              </span>
              <span className="text-xs block text-gray-400">Tunisie</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/cars">Voitures</NavLink>
            <NavLink to="/auctions">Enchères</NavLink>
            <NavLink to="/history">Historique</NavLink>
            
            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full transition-colors duration-200"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <User size={18} />
                </div>
                <span>Profil</span>
                <ChevronDown size={16} className={`transform transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 text-gray-800 border border-gray-100">
                  <Link to="/profile" className="flex items-center space-x-2 px-4 py-3 hover:bg-gray-50 transition-colors">
                    <User size={18} />
                    <span>Mon Profil</span>
                  </Link>
                  <Link to="/add-car" className="flex items-center space-x-2 px-4 py-3 hover:bg-gray-50 transition-colors">
                    <Settings size={18} />
                    <span>Ajouter une voiture</span>
                  </Link>
                  <hr className="my-2" />
                  <button className="flex items-center space-x-2 px-4 py-3 text-red-600 hover:bg-red-50 w-full transition-colors">
                    <LogOut size={18} />
                    <span>Déconnexion</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 animate-slide-up">
            <MobileNavLink to="/">Accueilll</MobileNavLink>
            <MobileNavLink to="/cars">Voitures</MobileNavLink>
            <MobileNavLink to="/auctions">Enchères</MobileNavLink>
            <MobileNavLink to="/history">Historique</MobileNavLink>
            <div className="border-t border-gray-700 mt-4 pt-4">
              <MobileNavLink to="/profile">Mon Profil</MobileNavLink>
              <MobileNavLink to="/add-car">Ajouter une voiture</MobileNavLink>
              <button className="w-full text-left px-4 py-3 text-red-400 hover:bg-gray-700 rounded-lg transition-colors">
                Déconnexion
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="relative group py-2 text-gray-300 hover:text-white transition-colors duration-200"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
  </Link>
);

const MobileNavLink = ({ to, children }) => (
  <Link
    to={to}
    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors duration-200"
  >
    {children}
  </Link>
);

export default Navbar;