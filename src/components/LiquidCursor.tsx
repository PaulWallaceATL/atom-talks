'use client';

import { useEffect, useRef, useState } from 'react';

export default function LiquidCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Don't show on mobile
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <>
      <div
        ref={cursorRef}
        className="liquid-cursor"
        style={{
          left: position.x,
          top: position.y,
          opacity: isVisible ? 1 : 0,
          transform: `translate(-50%, -50%) scale(${isActive ? 0.8 : 1})`,
        }}
      />

      <style jsx>{`
        .liquid-cursor {
          position: fixed;
          width: 40px;
          height: 40px;
          pointer-events: none;
          z-index: 99999;
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
                      opacity 0.3s ease;
          mix-blend-mode: difference;
        }

        .liquid-cursor::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
          transform: translate(-50%, -50%);
          animation: liquidMorph 8s ease-in-out infinite;
          filter: blur(2px);
        }

        .liquid-cursor::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 60%;
          height: 60%;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          filter: blur(4px);
        }

        @keyframes liquidMorph {
          0%, 100% {
            border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
            transform: translate(-50%, -50%) rotate(0deg);
          }
          25% {
            border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
          }
          50% {
            border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
            transform: translate(-50%, -50%) rotate(180deg);
          }
          75% {
            border-radius: 30% 70% 70% 30% / 50% 50% 50% 50%;
          }
        }

        @media (max-width: 768px) {
          .liquid-cursor {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

