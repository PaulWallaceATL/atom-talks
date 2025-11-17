'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BentoCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
  gradient?: string;
}

const BentoCard = ({ title, description, icon, className = '', gradient }: BentoCardProps) => {
  return (
    <motion.div
      className={`bento-card ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="bento-card-content">
        <div className="bento-icon-wrapper" style={{ background: gradient }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {icon}
          </svg>
        </div>
        <h3 className="bento-title">{title}</h3>
        <p className="bento-description">{description}</p>
      </div>
      <div className="bento-card-glow"></div>
    </motion.div>
  );
};

export default function BentoGrid() {
  const features = [
    {
      title: 'Lightning Fast',
      description: 'Optimized performance with edge computing and caching for instant responses',
      icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
      className: 'col-span-12 md:col-span-6 lg:col-span-4',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      title: 'Intelligent AI',
      description: 'Advanced RAG architecture with emotional intelligence and context awareness',
      icon: <><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></>,
      className: 'col-span-12 md:col-span-6 lg:col-span-4',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      title: 'Multi-Channel',
      description: 'Seamless integration across voice, chat, and messaging platforms',
      icon: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></>,
      className: 'col-span-12 md:col-span-12 lg:col-span-4',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level encryption with SOC 2 compliance and GDPR ready infrastructure',
      icon: <><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>,
      className: 'col-span-12 md:col-span-6 lg:col-span-6',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    },
    {
      title: 'Real-time Analytics',
      description: 'Comprehensive dashboards with actionable insights and sentiment analysis',
      icon: <><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></>,
      className: 'col-span-12 md:col-span-6 lg:col-span-6',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    },
    {
      title: 'Continuous Learning',
      description: 'Agents improve over time with machine learning and feedback loops',
      icon: <><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></>,
      className: 'col-span-12 md:col-span-12 lg:col-span-12',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
    },
  ];

  return (
    <section className="bento-section py-20 bg-noise">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="badge badge-premium mb-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', marginRight: '0.5rem', verticalAlign: 'text-top' }}>
              <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/>
            </svg>
            Next-Gen Features
          </div>
          <h2 className="display-4 fw-bold mb-4">
            Built for the
            <span className="gradient-text-animated d-block">Future of AI</span>
          </h2>
          <p className="lead text-white-75 mx-auto" style={{ maxWidth: '700px' }}>
            Experience cutting-edge technology with our advanced AI agent platform
          </p>
        </motion.div>

        <div className="bento-grid row g-4">
          {features.map((feature, index) => (
            <div key={index} className={feature.className}>
              <BentoCard {...feature} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .bento-section {
          position: relative;
          overflow: hidden;
        }

        .bento-grid {
          display: grid;
        }

        .bento-card {
          position: relative;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1.5rem;
          padding: 2.5rem;
          height: 100%;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .bento-card:hover {
          border-color: rgba(99, 102, 241, 0.5);
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 60px rgba(99, 102, 241, 0.2);
        }

        .bento-card-content {
          position: relative;
          z-index: 2;
        }

        .bento-icon-wrapper {
          width: 80px;
          height: 80px;
          border-radius: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          animation: float 3s ease-in-out infinite;
        }

        .bento-title {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.7) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .bento-description {
          color: rgba(255, 255, 255, 0.7);
          font-size: 1.1rem;
          line-height: 1.7;
          margin: 0;
        }

        .bento-card-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .bento-card:hover .bento-card-glow {
          opacity: 1;
        }

        .badge-premium {
          display: inline-block;
          padding: 0.5rem 1.25rem;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 2rem;
          color: #a5b4fc;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @media (max-width: 767px) {
          .bento-card {
            padding: 1.5rem;
          }

          .bento-icon-wrapper {
            width: 64px;
            height: 64px;
            font-size: 2rem;
          }

          .bento-title {
            font-size: 1.5rem;
          }

          .bento-description {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}

