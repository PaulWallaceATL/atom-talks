'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  dark?: boolean;
  extraClassList?: string;
}

export default function Navbar({ dark = true, extraClassList = '' }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

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
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`navbar navbar-expand-lg fixed-top ${extraClassList} ${isScrolled ? 'navbar-scrolled' : ''}`}
      data-bs-theme={dark ? 'dark' : undefined}
    >
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" href="/" prefetch={true}>
          <Image
            src={dark ? '/images/logo-atomtalks.svg' : '/images/logo-atomtalks-blue.svg'}
            alt="AtomTalks Logo"
            width={180}
            height={50}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-content-inner ms-lg-auto d-flex flex-row align-items-center gap-4 gap-lg-10">
          <ul className="navbar-nav gap-lg-2 gap-xl-5 mb-0 d-flex flex-row">
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/') ? 'active' : ''}`} 
                href="/"
                prefetch={true}
                aria-current={isActive('/') ? 'page' : undefined}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`} 
                href="/contact"
                prefetch={true}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div>
            <Link 
              href="/contact" 
              prefetch={true}
              className={`btn btn-outline-${dark ? 'primary-dark' : 'primary'}`}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
