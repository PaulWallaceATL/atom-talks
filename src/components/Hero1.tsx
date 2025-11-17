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
      className={`hero-section style-1 overflow-hidden position-relative ${extraClassList}`}
      data-bs-theme={dark ? 'dark' : undefined}
    >
      {/* ReactBits Animated Backgrounds */}
      <ParticlesBackground />
      <FloatingElements />
      
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">
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
                    🚀 Intelligent AI Agent Platform
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
                  Turn Your Website & Docs <br />
                  Into an{' '}
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
                  className="mb-8 fs-4 text-white-50 mx-auto"
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
                  className="d-flex gap-4 justify-content-center align-items-center flex-wrap"
                >
                  <Link
                    href="/contact"
                    className="btn btn-gradient-premium btn-lg px-6 py-3"
                  >
                    <span>Deploy Your AI Agent Today</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="btn btn-outline-glass btn-lg px-5"
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
              >
                <ul className="d-flex flex-wrap gap-3 gap-md-5 align-items-center justify-content-center mt-10 mb-0 list-unstyled">
                  {['⚡ Deploy in 24 Hours', '🎯 Zero Engineering Required', '🎤 Voice + Chat Enabled', '🧠 Emotional Intelligence'].map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.3 + i * 0.1 }}
                      className="glass rounded-pill px-4 py-2 text-white fw-medium"
                      style={{ fontSize: '0.95rem' }}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Social Proof / Review Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="d-flex gap-6 align-items-center justify-content-center mt-12 review-badges"
              >
                <Image
                  className="img-fluid opacity-75 hover-scale"
                  src={`/images/review-logos/${dark ? 'trustpilot_reviews.svg' : 'trustpilot_reviews_2.svg'}`}
                  alt="Trustpilot Reviews"
                  width={150}
                  height={40}
                />
                <Image
                  className="img-fluid opacity-75 hover-scale"
                  src={`/images/review-logos/${dark ? 'capterra_reviews.svg' : 'capterra_reviews_2.svg'}`}
                  alt="Capterra Reviews"
                  width={150}
                  height={40}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

