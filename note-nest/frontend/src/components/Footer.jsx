// Footer.jsx
import React from 'react';
import logoImage from '../assets/logo.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Footer({ scrollToAbout, scrollToFeatures, scrollToContact }) {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020d23] text-white pt-8 pb-6 px-6 md:px-10 lg:px-16 w-full">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          {/* About + Logo */}
          <div>
            <div 
              className="flex items-center gap-2 mb-4 cursor-pointer" 
              onClick={handleHomeClick}
            >
              <img
                src={logoImage}
                alt="NoteNest Logo"
                className="w-7 h-7 object-contain"
                style={{
                  filter:
                    'invert(45%) sepia(95%) saturate(700%) hue-rotate(183deg) brightness(95%) contrast(85%)',
                }}
              />
              <span className="text-[#2094F3] text-xl font-bold select-none">
                NoteNest
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering students worldwide with a platform to share and access study resources seamlessly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-base font-semibold mb-4 text-white">Quick Links</h2>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <button onClick={handleHomeClick} className="hover:text-[#2094F3] transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={scrollToAbout} className="hover:text-[#2094F3] transition">
                  About
                </button>
              </li>
              <li>
                <button onClick={scrollToFeatures} className="hover:text-[#2094F3] transition">
                  Features
                </button>
              </li>
              <li>
                <button onClick={scrollToContact} className="hover:text-[#2094F3] transition">
                  Contact
                </button>
              </li>
              <li><a href="#" className="hover:text-[#2094F3] transition">Terms of Use</a></li>
              <li><a href="#" className="hover:text-[#2094F3] transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-base font-semibold mb-4 text-white">Contact Us</h2>
            <div className="space-y-1.5 text-sm text-gray-400">
              <p>
                Email:{' '}
                <a href="mailto:2020icts012@vau.jfn.ac.lk" className="hover:text-[#2094F3] transition">
                  2020icts012@vau.jfn.ac.lk
                </a>
              </p>
              <p>Address: Eheliyagoda, Ratnapura</p>
            </div>
          </div>

          {/* Newsletter + Socials */}
          <div>
            <h2 className="text-base font-semibold mb-4 text-white">Stay Updated</h2>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe for latest tips & resources.
            </p>
            
            <form className="flex flex-col gap-2.5">
              <input
                type="email"
                placeholder="Your email..."
                className="px-3 py-2.5 rounded-md bg-[#0a1a38] border border-[#1b7cd0]/30 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#2094F3] focus:ring-1 focus:ring-[#2094F3]/40 transition"
              />
              <button
                type="submit"
                className="bg-[#2094F3] hover:bg-[#1b7cd0] text-white py-2.5 rounded-md text-sm font-medium transition duration-200"
              >
                Subscribe
              </button>
            </form>

            <div className="flex gap-3 mt-5">
              <a 
                href="#" 
                className="p-2.5 bg-[#0a1a38] text-[#2094F3] rounded-full hover:bg-[#2094F3]/20 hover:text-white transition"
                aria-label="Facebook"
              >
                <FaFacebookF size={16} />
              </a>
              <a 
                href="#" 
                className="p-2.5 bg-[#0a1a38] text-[#2094F3] rounded-full hover:bg-[#2094F3]/20 hover:text-white transition"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
              <a 
                href="#" 
                className="p-2.5 bg-[#0a1a38] text-[#2094F3] rounded-full hover:bg-[#2094F3]/20 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} NoteNest. All rights reserved.
        </div>
      </div>
    </footer>
  );
}