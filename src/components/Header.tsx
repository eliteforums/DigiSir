import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <GraduationCap className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">DigiSir</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/features" className="text-gray-600 hover:text-indigo-600">Features</Link>
            <Link to="/solutions" className="text-gray-600 hover:text-indigo-600">Solutions</Link>
            <Link to="/contact" className="text-gray-600 hover:text-indigo-600">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-indigo-600 hover:text-indigo-700">Login</button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/features" className="block px-3 py-2 text-gray-600">Features</Link>
            <Link to="/solutions" className="block px-3 py-2 text-gray-600">Solutions</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-600">Contact</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <button className="block w-full px-4 py-2 text-center text-indigo-600">Login</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;