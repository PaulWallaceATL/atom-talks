'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  dark?: boolean;
  extraClassList?: string;
}

export default function Navbar({ dark = true, extraClassList = '' }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`navbar navbar-expand-lg fixed-top ${extraClassList} ${isScrolled ? 'navbar-scrolled glass-dark' : ''}`}
      data-bs-theme={dark ? 'dark' : undefined}
      style={{
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        padding: isScrolled ? '0.75rem 0' : '1rem 0',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        zIndex: 1050,
        background: 'rgba(2, 6, 23, 0.95)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="container">
        <div className="d-flex align-items-center justify-content-between w-100">
          {/* Logo with hover effect */}
          <Link className="navbar-brand m-0" href="/" prefetch={true}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Image
                src={dark ? '/images/logo-atomtalks.svg' : '/images/logo-atomtalks-blue.svg'}
                alt="AtomTalks Logo"
                width={140}
                height={40}
                priority
                className="navbar-logo"
              />
            </motion.div>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation"
            style={{
              border: 'none',
              padding: '0.5rem',
              background: 'transparent',
            }}
          >
            <div className="navbar-toggler-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="navbar-content-inner ms-auto d-none d-lg-flex flex-row align-items-center gap-4 gap-xl-6">
            <ul className="navbar-nav gap-lg-2 gap-xl-4 mb-0 d-flex flex-row">
              {navItems.map((item) => (
                <li 
                  key={item.path}
                  className="nav-item position-relative"
                  onMouseEnter={() => setHoveredItem(item.path)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link 
                    className={`nav-link position-relative ${isActive(item.path) ? 'active' : ''}`}
                    href={item.path}
                    prefetch={true}
                    aria-current={isActive(item.path) ? 'page' : undefined}
                    style={{
                      padding: '0.5rem 1rem',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      fontWeight: 600,
                    }}
                  >
                    {item.label}
                    
                    {/* Animated underline */}
                    <AnimatePresence>
                      {(isActive(item.path) || hoveredItem === item.path) && (
                        <motion.span
                          layoutId="navbar-indicator"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3 }}
                          style={{
                            position: 'absolute',
                            bottom: '-2px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '60%',
                            height: '3px',
                            background: 'linear-gradient(90deg, #667eea, #764ba2)',
                            borderRadius: '2px',
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/contact" 
                prefetch={true}
                className="btn btn-gradient-premium px-5 py-2"
                style={{
                  fontSize: '0.95rem',
                  borderRadius: '0.75rem',
                }}
              >
                <span>Get Started</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mobile-menu-backdrop d-lg-none"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0, 0, 0, 0.8)',
                  backdropFilter: 'blur(8px)',
                  zIndex: 999,
                }}
              />

              {/* Mobile Menu */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="mobile-menu d-lg-none"
                style={{
                  position: 'fixed',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  width: '85%',
                  maxWidth: '400px',
                  background: 'linear-gradient(180deg, #0a0e1e 0%, #020617 100%)',
                  borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                  zIndex: 1000,
                  overflowY: 'auto',
                  padding: '2rem 1.5rem',
                }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.5rem',
                    background: 'transparent',
                    border: 'none',
                    color: 'white',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    padding: '0.5rem',
                    lineHeight: 1,
                  }}
                  aria-label="Close menu"
                >
                  ✕
                </button>

                {/* Logo in Mobile Menu */}
                <div className="mb-8 mt-2">
                  <Image
                    src="/images/logo-atomtalks.svg"
                    alt="AtomTalks Logo"
                    width={140}
                    height={40}
                  />
                </div>

                {/* Mobile Navigation Links */}
                <ul className="navbar-nav gap-2 mb-8">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="nav-item"
                    >
                      <Link 
                        className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                        href={item.path}
                        prefetch={true}
                        onClick={() => setIsMobileMenuOpen(false)}
                        style={{
                          padding: '1rem',
                          fontSize: '1.125rem',
                          fontWeight: 600,
                          borderRadius: '0.75rem',
                          display: 'block',
                          background: isActive(item.path) 
                            ? 'linear-gradient(90deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))' 
                            : 'transparent',
                          color: isActive(item.path) ? '#facc15' : 'rgba(255, 255, 255, 0.9)',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 + 0.1 }}
                >
                  <Link 
                    href="/contact" 
                    prefetch={true}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn btn-gradient-premium w-100 py-3"
                    style={{
                      fontSize: '1rem',
                      borderRadius: '0.75rem',
                      fontWeight: 600,
                    }}
                  >
                    <span>Get Started</span>
                  </Link>
                </motion.div>

                {/* Mobile Menu Footer */}
                <div 
                  className="mt-auto pt-8"
                  style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <p 
                    className="text-center mb-0"
                    style={{
                      color: 'rgba(255, 255, 255, 0.5)',
                      fontSize: '0.875rem',
                    }}
                  >
                    &copy; 2024 AtomTalks
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
