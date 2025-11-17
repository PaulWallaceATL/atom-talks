'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="scroll-progress-bar"
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          transformOrigin: '0%',
          zIndex: 9999,
        }}
      />
      
      <motion.div
        className="scroll-progress-indicator"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '2px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9998,
          opacity: scrollYProgress.get() > 0.1 ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40">
          <circle
            cx="20"
            cy="20"
            r="18"
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="2"
          />
          <motion.circle
            cx="20"
            cy="20"
            r="18"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            style={{
              pathLength: scrollYProgress,
              rotate: -90,
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#667eea" />
              <stop offset="50%" stopColor="#764ba2" />
              <stop offset="100%" stopColor="#f093fb" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .scroll-progress-indicator {
            width: 48px !important;
            height: 48px !important;
            bottom: 1rem !important;
            right: 1rem !important;
          }
          
          .scroll-progress-indicator svg {
            width: 32px;
            height: 32px;
          }
        }
      `}</style>
    </>
  );
}

