'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorVariant, setCursorVariant] = useState<'default' | 'button' | 'link' | 'text'>('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      
      if (target.closest('.cursor-magnetic')) {
        setIsHovering(true);
        setCursorVariant('button');
      } else if (target.closest('button, .btn')) {
        setIsHovering(true);
        setCursorVariant('button');
      } else if (target.closest('a')) {
        setIsHovering(true);
        setCursorVariant('link');
      } else if (target.closest('input, textarea')) {
        setIsHovering(true);
        setCursorVariant('text');
      }
    };

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      
      if (
        target.closest('.cursor-magnetic') ||
        target.closest('button, .btn, a, input, textarea')
      ) {
        setIsHovering(false);
        setCursorVariant('default');
      }
    };

    const handleMouseOut = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);
    document.addEventListener('mouseleave', handleMouseOut);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, .btn, a, input, textarea, .cursor-magnetic');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.removeEventListener('mouseleave', handleMouseOut);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isVisible]);

  const springTransition = {
    type: 'spring' as const,
    mass: 0.3,
    stiffness: 300,
    damping: 20,
  };

  const variants = {
    default: {
      height: 32,
      width: 32,
      backgroundColor: 'rgba(99, 102, 241, 0.2)',
      border: '2px solid rgba(99, 102, 241, 0.5)',
    },
    button: {
      height: 64,
      width: 64,
      backgroundColor: 'rgba(99, 102, 241, 0.1)',
      border: '2px solid rgba(99, 102, 241, 0.8)',
    },
    link: {
      height: 48,
      width: 48,
      backgroundColor: 'rgba(168, 85, 247, 0.15)',
      border: '2px solid rgba(168, 85, 247, 0.6)',
    },
    text: {
      height: 4,
      width: 4,
      backgroundColor: 'rgba(99, 102, 241, 0.8)',
      border: 'none',
    }
  };

  // Only show on desktop/devices with mouse
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        
        @media (max-width: 768px) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>
      
      <motion.div
        className="custom-cursor"
        animate={cursorVariant}
        variants={variants}
        transition={springTransition}
        style={{
          position: 'fixed',
          left: mousePosition.x,
          top: mousePosition.y,
          pointerEvents: 'none',
          zIndex: 99999,
          borderRadius: '50%',
          backdropFilter: 'blur(4px)',
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 1 : 0,
          mixBlendMode: 'difference',
        }}
      />
      
      <motion.div
        className="custom-cursor-dot"
        animate={{
          scale: isHovering ? 0 : 1,
        }}
        style={{
          position: 'fixed',
          left: mousePosition.x,
          top: mousePosition.y,
          width: 8,
          height: 8,
          backgroundColor: '#6366f1',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          mass: 0.1,
          stiffness: 600,
          damping: 30,
        }}
      />
    </>
  );
}

