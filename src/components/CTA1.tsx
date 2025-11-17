'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import FadeInSection from './reactbits/FadeInSection';
import FloatingElements from './reactbits/FloatingElements';

interface CTA1Props {
  dark?: boolean;
}

export default function CTA1({ dark = true }: CTA1Props) {
  return (
    <section className="cta-section py-10 py-lg-15 position-relative overflow-hidden">
      <FloatingElements />
      
      {/* Gradient mesh background */}
      <div 
        className="position-absolute w-100 h-100 top-0 start-0"
        style={{
          background: 'radial-gradient(at 40% 20%, hsla(235, 94%, 68%, 0.2) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189, 90%, 56%, 0.2) 0px, transparent 50%)',
          filter: 'blur(60px)',
          opacity: 0.6,
        }}
      />
      
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <FadeInSection>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glow-border-card"
          >
            <div className="glass-card-premium p-6 p-md-10 p-lg-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="badge-premium mb-6 d-inline-block">
                  🚀 Get Started Today
                </span>
              </motion.div>

              <motion.h2 
                className={`mb-6 ${dark ? 'text-white' : ''}`}
                style={{ 
                  fontWeight: 800, 
                  letterSpacing: '-0.02em',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Ready to Deploy Your{' '}
                <span className="gradient-text">Intelligent AI Agent</span>?
              </motion.h2>

              <motion.p 
                className="mb-10 fs-5 text-white-50 mx-auto"
                style={{ maxWidth: '42rem', lineHeight: 1.7 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Transform your website and docs into a production RAG agent in 24 hours.
                Voice + chat with emotional intelligence built in.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="d-flex gap-4 justify-content-center align-items-center flex-wrap mb-12"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="btn btn-gradient-premium btn-lg px-8 py-3"
                  >
                    <span>Start Your Free Trial</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="btn btn-outline-glass btn-lg px-7"
                  >
                    Schedule a Demo
                  </Link>
                </motion.div>
              </motion.div>

              {/* Dashboard Preview */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="position-relative"
                style={{ maxWidth: '56rem', margin: '0 auto' }}
              >
                <div className="glass-card p-3 rounded-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="rounded-3 overflow-hidden position-relative"
                  >
                    <Image
                      src={`/images/screens/screen-${dark ? '1' : '6'}.jpg`}
                      alt="AI Agent Dashboard"
                      className="img-fluid w-100"
                      width={1200}
                      height={800}
                    />
                  </motion.div>
                </div>
                
                {/* Decorative glow effect */}
                <div
                  className="position-absolute top-50 start-50 translate-middle"
                  style={{
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                    zIndex: -1,
                  }}
                />
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-10 d-flex flex-wrap gap-6 justify-content-center align-items-center"
              >
                {['🔒 Enterprise Security', '⚡ 24hr Deployment', '💯 99.9% Uptime', '🎯 Zero Engineering'].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
                    className="glass rounded-pill px-5 py-3 text-white fw-medium"
                    style={{ fontSize: '0.95rem' }}
                  >
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </FadeInSection>
      </div>
    </section>
  );
}
