'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export function SlideTransition({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export function ScaleTransition({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.2, opacity: 0 }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export function PageLoader() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        transformOrigin: 'left',
        zIndex: 9999,
      }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
    />
  );
}

export function CircleTransition({ children }: { children: ReactNode }) {
  return (
    <>
      <motion.div
        initial={{ clipPath: 'circle(0% at 50% 50%)' }}
        animate={{ clipPath: 'circle(150% at 50% 50%)' }}
        exit={{ clipPath: 'circle(0% at 50% 50%)' }}
        transition={{
          duration: 0.8,
          ease: [0.87, 0, 0.13, 1],
        }}
      >
        {children}
      </motion.div>
    </>
  );
}

export function WaveTransition() {
  return (
    <motion.div
      initial={{ y: '-100%' }}
      animate={{ y: '-100%' }}
      exit={{ y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.87, 0, 0.13, 1],
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        zIndex: 9998,
      }}
    >
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: '100%' }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: [0.87, 0, 0.13, 1],
        }}
        style={{
          width: '100%',
          height: '100%',
          background: '#0f172a',
        }}
      />
    </motion.div>
  );
}

