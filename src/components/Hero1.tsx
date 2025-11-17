'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ParticlesBackground from './reactbits/ParticlesBackground';
import FloatingElements from './reactbits/FloatingElements';
import TypewriterText from './reactbits/TypewriterText';

interface Hero1Props {
  dark?: boolean;
  extraClassList?: string;
}

export default function Hero1({ dark = true, extraClassList = '' }: Hero1Props) {
  return (
    <section 
      className={`hero-section style-1 position-relative ${extraClassList}`}
      data-bs-theme={dark ? 'dark' : undefined}
      style={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        paddingBottom: '60px',
        overflowX: 'hidden'
      }}
    >
      {/* ReactBits Animated Backgrounds */}
      <ParticlesBackground />
      <FloatingElements />
      
      <div className="container position-relative" style={{ zIndex: 1, width: '100%', maxWidth: '100%' }}>
        <div className="row justify-content-center" style={{ margin: '0 -0.75rem' }}>
          <div className="col-12 col-lg-10 col-xl-9" style={{ padding: '0 0.75rem' }}>
            <div className="text-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="position-relative z-1"
              >
                {/* Premium Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="d-inline-block mb-6"
                >
                  <span className="badge-premium">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', marginRight: '0.5rem', verticalAlign: 'text-top' }}>
                      <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    Intelligent AI Agent Platform
                  </span>
                </motion.div>

                {/* Main Heading with Enhanced Typography */}
                <h1
                  className={`text-${dark ? 'white' : 'dark'} mb-6`}
                  style={{ 
                    fontWeight: 800, 
                    letterSpacing: '-0.03em',
                    lineHeight: 1.1
                  }}
                >
                  <span className="d-block d-lg-inline">Turn Your Website & Docs </span>
                  <span className="d-block d-lg-inline">Into an{' '}</span>
                  <TypewriterText
                    words={['Intelligent AI Agent', 'Voice + Chat Agent', 'Production RAG Agent']}
                    className="fw-bold gradient-text d-inline-block"
                  />
                </h1>

                {/* Subheading with better spacing */}
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mb-8 fs-4 text-white-50 mx-auto px-3 px-lg-0"
                  style={{ maxWidth: '42rem', lineHeight: 1.7 }}
                >
                  Deploy a production-ready RAG agent in 24 hours—no engineering required.
                  Voice + chat with emotional intelligence built in.
                </motion.p>

                {/* Enhanced CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="d-flex gap-3 gap-md-4 justify-content-center align-items-center flex-wrap px-3 px-lg-0"
                >
                  <Link
                    href="/contact"
                    className="btn btn-gradient-premium btn-lg px-4 px-md-6 py-3"
                    style={{ minWidth: '180px' }}
                  >
                    <span className="d-none d-sm-inline">Deploy Your AI Agent Today</span>
                    <span className="d-inline d-sm-none">Get Started</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="btn btn-outline-glass btn-lg px-4 px-md-5"
                    style={{ minWidth: '140px' }}
                  >
                    Watch Demo
                  </Link>
                </motion.div>
              </motion.div>

              {/* Dashboard Preview with Glass Card Effect */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-16 position-relative"
              >
                <div className="image-with-shape">
                  {/* Decorative gradient blob */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 90, 0],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      position: 'absolute',
                      top: '-10%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '80%',
                      height: '80%',
                      background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)',
                      filter: 'blur(60px)',
                      zIndex: 0
                    }}
                  />
                  
                  {/* Glass card wrapper for screenshot */}
                  <div className="glass-card-premium p-4">
                    <div className="rounded-4 overflow-hidden position-relative">
                      <Image
                        className="img-fluid d-inline-block hover-lift"
                        src={`/images/screens/screen-${dark ? '1' : '6'}.jpg`}
                        alt="AI Agent Dashboard Screenshot"
                        width={1200}
                        height={800}
                        priority
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Feature Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="px-3 px-lg-0"
              >
                <ul className="d-flex flex-wrap gap-2 gap-md-4 align-items-center justify-content-center mt-8 mt-lg-10 mb-0 list-unstyled">
                  {[
                    { 
                      icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />, 
                      text: 'Deploy in 24 Hours' 
                    },
                    { 
                      icon: <><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></>, 
                      text: 'Zero Engineering Required' 
                    },
                    { 
                      icon: <><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></>, 
                      text: 'Voice + Chat Enabled' 
                    },
                    { 
                      icon: <><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></>, 
                      text: 'Emotional Intelligence' 
                    }
                  ].map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.3 + i * 0.1 }}
                      className="glass rounded-pill px-3 px-md-4 py-2 text-white fw-medium d-flex align-items-center gap-2"
                      style={{ fontSize: 'clamp(0.75rem, 2vw, 0.95rem)' }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                        {feature.icon}
                      </svg>
                      {feature.text}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Social Proof / Review Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="d-flex flex-column flex-md-row gap-4 gap-md-6 align-items-center justify-content-center mt-8 mt-lg-12 review-badges px-3 px-lg-0"
              >
                <Image
                  className="img-fluid opacity-75 hover-scale"
                  src={`/images/review-logos/${dark ? 'trustpilot_reviews.svg' : 'trustpilot_reviews_2.svg'}`}
                  alt="Trustpilot Reviews"
                  width={140}
                  height={38}
                />
                <Image
                  className="img-fluid opacity-75 hover-scale"
                  src={`/images/review-logos/${dark ? 'capterra_reviews.svg' : 'capterra_reviews_2.svg'}`}
                  alt="Capterra Reviews"
                  width={140}
                  height={38}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

