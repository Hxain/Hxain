import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 border-b-2 border-white bg-transparent bg-opacity-50 backdrop-blur-md">
      <div className="flex justify-between items-center px-8 py-4">
        <div className="text-white font-bold text-3xl">
          <p className="cursor-pointer"><NavLink to="/">Portfolio</NavLink></p>
        </div>

        <button
          className="block lg:hidden text-white text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          &#9776;
        </button>

        <div className="hidden lg:flex space-x-4">
          <NavLink 
            to="/" 
            className={({ isActive }) =>
              `text-white transition-all duration-300 relative
                ${isActive ? 'text-3xl border-b-4 text-red-400 border-red-700' : 'text-2xl hover:text-3xl hover:cursor-pointer hover:border-b-4 hover:border-y-white'}`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) =>
              `text-white transition-all duration-300 relative
                ${isActive ? 'text-3xl border-b-4 text-red-400 border-red-700' : 'text-2xl hover:text-3xl hover:cursor-pointer hover:border-b-4 hover:border-white'}`
            }
          >
            Projects
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) =>
              `text-white transition-all duration-300 relative
                ${isActive ? 'text-3xl border-b-4 text-red-400 border-red-700' : 'text-2xl hover:text-3xl hover:cursor-pointer hover:border-b-4 hover:border-white'}`
            }
          >
            Services
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) =>
              `text-white transition-all duration-300 relative
                ${isActive ? 'text-3xl border-b-4 text-red-400 border-red-700' : 'text-2xl hover:text-3xl hover:cursor-pointer hover:border-b-4 hover:border-white'}`
            }
          >
            Contact
          </NavLink>
        </div>

        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-gray-800 text-white`}>
          <div className="flex flex-col items-center py-4 space-y-2">
            <NavLink 
              to="/" 
              className={({ isActive }) =>
                `text-white transition-all duration-300 relative
                  ${isActive ? 'text-3xl border-b-4 text-red-400 border-red-700' : 'text-2xl hover:text-3xl hover:cursor-pointer hover:border-b-4 hover:border-white'}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) =>
                `text-white transition-all duration-300 relative
                  ${isActive ? 'text-3xl border-b-4 text-red-400 border-red-700' : 'text-2xl hover:text-3xl hover:cursor-pointer hover:border-b-4 hover:border-white'}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) =>
                `text-white transition-all duration-300 relative
                  ${isActive ? 'text-3xl border-b-4 text-red-400 border-red-700' : 'text-2xl hover:text-3xl hover:cursor-pointer hover:border-b-4 hover:border-white'}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) =>
                `text-white transition-all duration-300 relative
                  ${isActive ? 'text-3xl border-b-4 text-red-400 border-red-700' : 'text-2xl hover:text-3xl hover:cursor-pointer hover:border-b-4 hover:border-white'}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;