'use client';

import { motion } from 'framer-motion';

interface GradientBlobProps {
  className?: string;
}

export default function GradientBlob({ className = '' }: GradientBlobProps) {
  return (
    <motion.div
      className={`gradient-blob ${className}`}
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 90, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.3))',
        filter: 'blur(80px)',
        opacity: 0.4,
        pointerEvents: 'none',
      }}
    />
  );
}

