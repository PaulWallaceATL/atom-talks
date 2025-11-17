'use client';

import { motion } from 'framer-motion';

export default function FloatingElements() {
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="floating-elements" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1), transparent)',
          filter: 'blur(40px)',
        }}
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{
          position: 'absolute',
          top: '60%',
          right: '10%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15), transparent)',
          filter: 'blur(50px)',
          animationDelay: '2s',
        }}
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '15%',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent)',
          filter: 'blur(30px)',
          animationDelay: '4s',
        }}
      />
    </div>
  );
}

