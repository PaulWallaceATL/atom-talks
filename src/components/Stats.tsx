'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef, ReactNode } from 'react';
import FadeInSection from './reactbits/FadeInSection';

interface StatsProps {
  dark?: boolean;
  extraClassList?: string;
}

// Counter animation hook
function useCounter(end: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldStart]);

  return count;
}

// Individual stat card component to use hooks properly
function StatCard({ 
  stat, 
  index, 
  isVisible 
}: { 
  stat: { value: number; suffix: string; label: string; icon: ReactNode; color: string }; 
  index: number; 
  isVisible: boolean;
}) {
  const count = useCounter(stat.value, 2000, isVisible);
  
  return (
    <div className="col-6 col-lg-3">
      <FadeInSection delay={index * 0.1}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -8, scale: 1.05 }}
          className="glass-card-premium p-6 p-lg-8 text-center h-100"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.2 + index * 0.1 
            }}
            className="mb-4"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block' }}>
            {stat.icon}
            </svg>
          </motion.div>

          {/* Number */}
          <div className="mb-2">
            <motion.h2
              className="fw-bold mb-0 gradient-text"
              style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1,
              }}
            >
              {count}{stat.suffix}
            </motion.h2>
          </div>

          {/* Label */}
          <p 
            className="text-white-50 mb-0 fw-medium"
            style={{ fontSize: '0.95rem' }}
          >
            {stat.label}
          </p>

          {/* Decorative gradient line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '60%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
            style={{
              height: '3px',
              background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)`,
              margin: '1.5rem auto 0',
              borderRadius: '2px',
            }}
          />
        </motion.div>
      </FadeInSection>
    </div>
  );
}

export default function Stats({ dark = true, extraClassList = '' }: StatsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const stats = [
    {
      value: 24,
      suffix: 'hrs',
      label: 'Deployment Time',
      icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
      color: '#667eea',
    },
    {
      value: 53,
      suffix: '+',
      label: 'Emotion Points Detected',
      icon: <><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></>,
      color: '#764ba2',
    },
    {
      value: 85,
      suffix: '%',
      label: 'Support Ticket Reduction',
      icon: <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></>,
      color: '#f093fb',
    },
    {
      value: 99,
      suffix: '%',
      label: 'Uptime Guarantee',
      icon: <><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></>,
      color: '#06b6d4',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className={`py-10 py-lg-15 position-relative ${extraClassList}`}
      data-bs-theme={dark ? 'dark' : undefined}
    >
      <div className="container">
        <FadeInSection>
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge-premium mb-4 d-inline-block">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', marginRight: '0.5rem', verticalAlign: 'text-top' }}>
                  <line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/>
                </svg>
                By The Numbers
              </span>
            </motion.div>
            <h2 
              className={`${dark ? 'text-white' : 'text-dark'} mb-0`}
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              Proven Results That <span className="gradient-text">Drive Growth</span>
            </h2>
          </div>
        </FadeInSection>

        <div className="row g-6 g-lg-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeInSection delay={0.5}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-white-50 fs-5 mb-0">
              Join hundreds of companies already using AI agents to scale their support
            </p>
          </motion.div>
        </FadeInSection>
      </div>
    </section>
  );
}

