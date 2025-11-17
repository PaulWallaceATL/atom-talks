'use client';

import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export default function ParallaxSection({ 
  children, 
  speed = 0.5,
  className = '' 
}: ParallaxSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);

  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden' }}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

export function ParallaxImage({ 
  src, 
  alt, 
  className = '' 
}: { 
  src: string; 
  alt: string; 
  speed?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);

  return (
    <div 
      ref={ref} 
      className={className}
      style={{ 
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ 
          y, 
          scale,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  );
}

export function ParallaxText({ 
  children,
  speed = 0.5,
  className = '' 
}: { 
  children: ReactNode; 
  speed?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`${speed * 50}%`, `-${speed * 50}%`]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <div ref={ref} style={{ overflow: 'visible' }}>
      <motion.div className={className} style={{ y, opacity }}>
        {children}
      </motion.div>
    </div>
  );
}

export function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);

  return (
    <div ref={ref} style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <motion.div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          y: y1,
        }}
      >
        <div className="parallax-blob" style={{ 
          width: '300px', 
          height: '300px', 
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
        }} />
      </motion.div>

      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          right: '15%',
          y: y2,
        }}
      >
        <div className="parallax-blob" style={{ 
          width: '400px', 
          height: '400px', 
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
        }} />
      </motion.div>

      <motion.div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '30%',
          y: y3,
        }}
      >
        <div className="parallax-blob" style={{ 
          width: '250px', 
          height: '250px', 
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(35px)',
        }} />
      </motion.div>
    </div>
  );
}

