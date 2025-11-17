'use client';

import { motion } from 'framer-motion';

interface DotPatternProps {
  className?: string;
}

export default function DotPattern({ className = '' }: DotPatternProps) {
  return (
    <div className={`dot-pattern-background ${className}`}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dotPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <motion.circle 
              cx="2" 
              cy="2" 
              r="1" 
              fill="rgba(99, 102, 241, 0.3)"
              animate={{
                r: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotPattern)" />
      </svg>
      <style jsx>{`
        .dot-pattern-background {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.6;
          z-index: 0;
        }
      `}</style>
    </div>
  );
}

