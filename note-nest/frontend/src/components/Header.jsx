// Header.jsx
import React, { useState } from 'react';
import logoImage from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Header = ({ scrollToAbout, scrollToFeatures, scrollToContact }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleHomeClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setOpen(false);
  };

  const handleScroll = (scrollFn) => {
    scrollFn();
    setOpen(false);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 w-full bg-[#020d23] text-white border-b border-gray-800/50 shadow-md">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-3 flex items-center justify-between">
        
        {/* Logo – moved very close to top-left corner */}
        <div
          className="flex items-center gap-2 cursor-pointer select-none pl-1 sm:pl-2 lg:pl-4"
          onClick={handleHomeClick}
        >
          <img
            src={logoImage}
            alt="NoteNest Logo"
            className="w-8 h-8 md:w-9 md:h-9 object-contain"
            style={{
              filter: 'invert(45%) sepia(95%) saturate(700%) hue-rotate(183deg) brightness(95%) contrast(85%)',
            }}
          />
          <span className="text-[#2094F3] text-lg md:text-xl font-bold">
            NoteNest
          </span>
        </div>

        {/* Right side – navigation + auth buttons */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {/* Navigation links */}
          <nav className="flex items-center gap-6 lg:gap-8 text-sm font-medium">
            <button
              onClick={handleHomeClick}
              className="hover:text-[#2094F3] transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => handleScroll(scrollToAbout)}
              className="hover:text-[#2094F3] transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => handleScroll(scrollToFeatures)}
              className="hover:text-[#2094F3] transition-colors duration-200"
            >
              Features
            </button>
            <button
              onClick={() => handleScroll(scrollToContact)}
              className="hover:text-[#2094F3] transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Auth buttons */}
          <div className="flex items-center gap-4">
            <a
              href="/login"
              className="px-6 py-2 text-sm font-medium rounded-full border border-[#2094F3]/60 hover:bg-[#2094F3]/10 transition duration-200"
            >
              Login
            </a>
            <a
              href="/register"
              className="px-6 py-2 text-sm font-medium bg-[#2094F3] hover:bg-[#1b7cd0] rounded-full transition duration-200 shadow-sm"
            >
              Register
            </a>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden bg-[#020d23] border-t border-gray-800/50 py-4 px-5">
          <div className="flex flex-col gap-4 text-base font-medium">
            <button onClick={handleHomeClick}>Home</button>
            <button onClick={() => handleScroll(scrollToAbout)}>About</button>
            <button onClick={() => handleScroll(scrollToFeatures)}>Features</button>
            <button onClick={() => handleScroll(scrollToContact)}>Contact</button>

            <div className="flex flex-col gap-3 pt-3 border-t border-gray-700/50">
              <a
                href="/login"
                className="text-center py-3 rounded-lg border border-[#2094F3]/50 hover:bg-[#2094F3]/10 transition"
              >
                Login
              </a>
              <a
                href="/register"
                className="text-center py-3 rounded-lg bg-[#2094F3] hover:bg-[#1b7cd0] transition"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;