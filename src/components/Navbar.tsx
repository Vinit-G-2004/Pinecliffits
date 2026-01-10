import { useState, useEffect } from 'react';
import logo from '../assets/pinecliff-logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center">
        <div className="flex items-center gap-4 group cursor-pointer transition-transform duration-300 hover:scale-105">
          
          {/* LOGO BOX */}
          <div >
            <img
              src={logo}
              alt="Pinecliff IT Services"
              className="h-12 w-12 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
            />
          </div>

          {/* BRAND TEXT */}
          <div>
            <div
              className={`text-2xl font-bold tracking-wider transition-colors ${
                scrolled ? 'text-dark' : 'text-white'
              }`}
            >
              PINECLIFF
            </div>
            <div
              className={`text-sm font-medium tracking-widest transition-colors ${
                scrolled ? 'text-secondary' : 'text-white/90'
              }`}
            >
              IT SERVICES
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}
