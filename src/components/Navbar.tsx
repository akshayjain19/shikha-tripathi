import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn, LINKTREE_URL } from '../utils';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Me', path: '/about' },
  { name: 'Subconscious Pattern Healing', path: '/subconscious-pattern-healing' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        isScrolled ? 'py-3' : 'py-6'
      )}
    >
      <div className={cn(
        'max-w-7xl mx-auto rounded-full transition-all duration-500 flex items-center justify-between px-8 py-3',
        isScrolled ? 'glass shadow-lg' : 'bg-transparent'
      )}>
        <Link to="/" className="text-2xl font-serif font-semibold tracking-tight text-brand-text">
          Shikha Tripathi
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-brand-accent',
                location.pathname === item.path ? 'text-brand-accent' : 'text-brand-text/70'
              )}
            >
              {item.name}
            </Link>
          ))}
          <a
            href={LINKTREE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-brand-accent text-white rounded-full text-sm font-medium hover:bg-brand-accent/90 transition-all shadow-md shadow-brand-accent/20"
          >
            Connect
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-brand-text"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 glass rounded-3xl p-8 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'text-lg font-medium transition-colors',
                  location.pathname === item.path ? 'text-brand-accent' : 'text-brand-text/70'
                )}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={LINKTREE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-brand-accent text-white rounded-full text-center font-medium"
            >
              Connect
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

