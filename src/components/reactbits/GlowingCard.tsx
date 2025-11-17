'use client';

import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface GlowingCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlowingCard({ children, className = '' }: GlowingCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`position-relative ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Glow effect */}
      <motion.div
        className="glow-effect"
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          inset: -20,
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3), transparent 70%)',
          borderRadius: '1.5rem',
          filter: 'blur(20px)',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />
      {children}
    </motion.div>
  );
}

