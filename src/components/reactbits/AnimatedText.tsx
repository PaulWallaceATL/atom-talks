'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedText({ children, className = '', delay = 0 }: AnimatedTextProps) {
  const text = typeof children === 'string' ? children : '';
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  if (typeof children !== 'string') {
    return <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className={className}
    >
      {children}
    </motion.div>;
  }

  return (
    <motion.div
      style={{ overflow: 'hidden', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          transition={{ type: 'spring', damping: 12, stiffness: 100 }}
          style={{ marginRight: '5px' }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

