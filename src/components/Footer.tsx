'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import FadeInSection from './reactbits/FadeInSection';
import DotPattern from './reactbits/DotPattern';
import { motion } from 'framer-motion';

interface FooterProps {
  dark?: boolean;
  extraClassList?: string;
}

export default function Footer({ dark = true, extraClassList = '' }: FooterProps) {
  const [email, setEmail] = useState('');
  
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <>
      <footer className={`footer position-relative bg-dark ${extraClassList}`}>
        {/* ReactBits Dot Pattern Background instead of striped */}
        <DotPattern />
        
        <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row g-10">
          <div className="col-lg-9 col-xl-8 order-lg-2">
            <div className="row g-6">
              <div className="col-md-4 col-lg-4">
                <FadeInSection delay={0.1}>
                  <div className="footer-widget text-center text-md-start">
                  <h6 className={`${dark ? 'text-white' : ''} mb-2`}>Navigation</h6>
                  <ul className="link-list list-unstyled mb-0">
                    <li><Link href="/" prefetch={true}>Home</Link></li>
                    <li><Link href="/contact" prefetch={true}>Contact</Link></li>
                  </ul>
                </div>
                </FadeInSection>
              </div>
              <div className="col-md-4 col-lg-4">
                <FadeInSection delay={0.2}>
                  <div className="footer-widget text-center text-md-start">
                  <h6 className={`${dark ? 'text-white' : ''} mb-2`}>Company</h6>
                  <ul className="link-list list-unstyled mb-0">
                    <li><Link href="/" prefetch={true}>About Us</Link></li>
                    <li><Link href="/contact" prefetch={true}>Get in Touch</Link></li>
                  </ul>
                </div>
                </FadeInSection>
              </div>
              <div className="col-md-4 col-lg-4">
                <FadeInSection delay={0.3}>
                  <div className="footer-widget text-center text-md-start">
                  <h6 className={`${dark ? 'text-white' : ''} mb-4`}>Get Updates</h6>
                  <form onSubmit={handleNewsletterSubmit}>
                    <div className="input-group">
                      <input 
                        type="email" 
                        className="form-control" 
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`btn btn-${dark ? 'primary-dark' : 'primary'} px-4`} 
                        type="submit"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="m4.031 8.917 15.477-4.334a.5.5 0 0 1 .616.617l-4.333 15.476a .5.5 0 0 1-.94.067l-3.248-7.382a.5.5 0 0 0-.256-.257L3.965 9.856a.5.5 0 0 1 .066-.94v0Z"
                          />
                        </svg>
                      </motion.button>
                    </div>
                  </form>
                  <ul className="list-unstyled d-flex flex-wrap align-items-center justify-content-center justify-content-md-start gap-3 social-list mb-0 mt-5">
                    <li>
                      <a href="#" aria-label="Github">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Dribbble">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <circle cx="12" cy="12" r="9" />
                          <path d="M9 3.6c5 6 7 10.5 7.5 16.2" />
                          <path d="M6.4 19c3.5-3.5 6-6.5 14.5-6.4M3.1 10.75c5 0 9.814-.38 15.314-5" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M15.75 6v6A3.75 3.75 0 0 1 12 15.75H6A3.75 3.75 0 0 1 2.25 12V6A3.75 3.75 0 0 1 6 2.25h6A3.75 3.75 0 0 1 15.75 6Z"
                          />
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M8.25 15.75V9c0-1.641.375-3 3-3m-4.5 3.75h4.5"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M17.25 2.258s-1.514.894-2.355 1.147A3.36 3.36 0 0 0 9 5.655v.75a7.995 7.995 0 0 1-6.75-3.397s-3 6.75 3.75 9.75a8.73 8.73 0 0 1-5.25 1.5c6.75 3.75 15 0 15-8.625a3.34 3.34 0 0 0-.06-.623c.765-.754 1.56-2.752 1.56-2.752Z"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M9 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z"
                          />
                          <path
                            stroke="currentColor"
                            strokeWidth="1.5"
                            d="M2.25 12V6A3.75 3.75 0 0 1 6 2.25h6A3.75 3.75 0 0 1 15.75 6v6A3.75 3.75 0 0 1 12 15.75H6A3.75 3.75 0 0 1 2.25 12Z"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
                </FadeInSection>
              </div>
            </div>
          </div>
          <div className="col-lg-3 order-lg-1 me-auto">
            <FadeInSection delay={0.1}>
              <div className="footer-widget text-center text-lg-start">
              <Link href="/" prefetch={true}>
                <Image
                  src={dark ? '/images/logo-atomtalks.svg' : '/images/logo-atomtalks-blue.svg'}
                  alt="AtomTalks Logo"
                  className="img-fluid"
                  width={150}
                  height={42}
                />
              </Link>
              <p className="fs-sm mb-0 mt-4">
                Deploy intelligent AI agents powered by your content. Voice + chat with emotional intelligence built in.
              </p>
            </div>
            </FadeInSection>
          </div>
        </div>

        <FadeInSection delay={0.4}>
          <div className="text-center py-6 mt-8">
            <p className="fs-sm mb-0">
              Copyright <span className={`text-${dark ? 'primary-dark' : 'primary'}`}>AI Agent Platform</span>. Powered by Intelligent AI.
            </p>
          </div>
        </FadeInSection>
      </div>
      </footer>
    </>
  );
}

