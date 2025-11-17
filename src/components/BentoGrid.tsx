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
          {icon}
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
      icon: '⚡',
      className: 'col-span-12 md:col-span-6 lg:col-span-4',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      title: 'Intelligent AI',
      description: 'Advanced RAG architecture with emotional intelligence and context awareness',
      icon: '🧠',
      className: 'col-span-12 md:col-span-6 lg:col-span-4',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      title: 'Multi-Channel',
      description: 'Seamless integration across voice, chat, and messaging platforms',
      icon: '💬',
      className: 'col-span-12 md:col-span-12 lg:col-span-4',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level encryption with SOC 2 compliance and GDPR ready infrastructure',
      icon: '🔒',
      className: 'col-span-12 md:col-span-6 lg:col-span-6',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    },
    {
      title: 'Real-time Analytics',
      description: 'Comprehensive dashboards with actionable insights and sentiment analysis',
      icon: '📊',
      className: 'col-span-12 md:col-span-6 lg:col-span-6',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    },
    {
      title: 'Continuous Learning',
      description: 'Agents improve over time with machine learning and feedback loops',
      icon: '🎯',
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
            ✨ Next-Gen Features
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

