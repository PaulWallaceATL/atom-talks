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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`navbar navbar-expand-lg fixed-top ${extraClassList} ${isScrolled ? 'navbar-scrolled glass-dark' : ''}`}
      data-bs-theme={dark ? 'dark' : undefined}
      style={{
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
      }}
    >
      <div className="container">
        {/* Logo with hover effect */}
        <Link className="navbar-brand" href="/" prefetch={true}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Image
              src={dark ? '/images/logo-atomtalks.svg' : '/images/logo-atomtalks-blue.svg'}
              alt="AtomTalks Logo"
              width={180}
              height={50}
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-content-inner ms-lg-auto d-flex flex-row align-items-center gap-4 gap-lg-10">
          <ul className="navbar-nav gap-lg-2 gap-xl-6 mb-0 d-flex flex-row">
            {[
              { path: '/', label: 'Home' },
              { path: '/contact', label: 'Contact' },
            ].map((item) => (
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

          {/* CTA Button with enhanced design */}
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
    </motion.nav>
  );
}
