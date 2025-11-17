'use client';

import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import SplitText, { CharacterSplit } from './SplitText';
import { ParallaxText } from './ParallaxSection';

export default function PremiumShowcase() {
  return (
    <section className="premium-showcase py-20 section-premium-bg position-relative overflow-hidden">
      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="badge-premium mb-4 d-inline-block">
            ✨ Ultra-Premium Experience
          </div>
          
          <SplitText className="display-3 fw-bold text-white mb-4">
            Experience the Future
          </SplitText>
          
          <CharacterSplit className="display-3 fw-bold text-holographic">
            of AI Interaction
          </CharacterSplit>
          
          <p className="lead text-white-75 mt-4 mx-auto" style={{ maxWidth: '700px' }}>
            Built with cutting-edge design patterns and advanced micro-interactions
          </p>
        </motion.div>

        {/* Interactive Demo Cards */}
        <div className="row g-6 mb-16">
          {/* Magnetic Button Demo */}
          <motion.div 
            className="col-md-6 col-lg-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card-ultra h-100">
              <div className="text-center">
                <div className="icon-wrapper-premium mb-4">
                  <span style={{ fontSize: '3rem' }}>🧲</span>
                </div>
                <h3 className="h4 text-white mb-3">Magnetic Buttons</h3>
                <p className="text-white-75 mb-5">
                  Buttons that attract your cursor with smooth spring physics
                </p>
                <MagneticButton 
                  className="btn-ultra"
                  strength={0.4}
                >
                  <span>Try Me!</span>
                </MagneticButton>
              </div>
            </div>
          </motion.div>

          {/* 3D Card Demo */}
          <motion.div 
            className="col-md-6 col-lg-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="card-ultra hover-tilt-premium h-100">
              <div className="text-center">
                <div className="icon-wrapper-premium mb-4">
                  <span style={{ fontSize: '3rem' }}>🎯</span>
                </div>
                <h3 className="h4 text-white mb-3">3D Transforms</h3>
                <p className="text-white-75 mb-5">
                  Hover over this card to see depth and tilt effects
                </p>
                <div className="badge-premium">
                  Hover to Experience
                </div>
              </div>
            </div>
          </motion.div>

          {/* Glow Effect Demo */}
          <motion.div 
            className="col-md-6 col-lg-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-ultra hover-glow-premium h-100">
              <div className="text-center">
                <div className="icon-wrapper-premium mb-4">
                  <span style={{ fontSize: '3rem' }}>✨</span>
                </div>
                <h3 className="h4 text-white mb-3">Glow Effects</h3>
                <p className="text-white-75 mb-5">
                  Cards that illuminate with beautiful glow on hover
                </p>
                <button className="btn btn-glass-premium">
                  Hover Here
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Advanced Typography Showcase */}
        <div className="row g-6 mb-16">
          <div className="col-lg-12">
            <motion.div
              className="card-holographic-premium p-8"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center">
                <h2 className="display-4 fw-bold mb-6">
                  <span className="text-chromatic d-block mb-3">
                    Chromatic Text Effects
                  </span>
                  <span className="text-shimmer d-block mb-3">
                    Shimmer Animations
                  </span>
                  <span className="gradient-text-animated d-block">
                    Flowing Gradients
                  </span>
                </h2>
                
                <p className="lead text-white-75">
                  Multiple premium text effects that bring your typography to life
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Parallax Text Demo */}
        <div className="row g-6">
          <div className="col-lg-12">
            <ParallaxText speed={0.6} className="text-center">
              <h3 className="display-2 fw-bold text-white opacity-50">
                Scroll to See Parallax ✨
              </h3>
            </ParallaxText>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="row g-4 mt-16">
          {[
            { icon: '🎨', title: 'Glassmorphism', desc: 'Modern frosted glass effects' },
            { icon: '🌊', title: 'Liquid Animations', desc: 'Smooth morphing shapes' },
            { icon: '⚡', title: 'Hardware Accelerated', desc: 'Buttery smooth 60fps' },
            { icon: '🎭', title: 'Context-Aware Cursor', desc: 'Smart cursor interactions' },
            { icon: '📊', title: 'Scroll Progress', desc: 'Beautiful progress indicators' },
            { icon: '🎪', title: 'Interactive Particles', desc: 'Mouse-reactive particles' },
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className="col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div 
                className="d-flex align-items-start gap-3 p-4 rounded-3"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <div 
                  className="flex-shrink-0"
                  style={{
                    fontSize: '2rem',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))',
                    borderRadius: '1rem',
                  }}
                >
                  {feature.icon}
                </div>
                <div>
                  <h4 className="h6 text-white mb-2">{feature.title}</h4>
                  <p className="text-white-75 mb-0 small">{feature.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="h2 text-white mb-4">Ready to Experience It?</h3>
          <p className="lead text-white-75 mb-6">
            All these premium features are built into every page
          </p>
          
          <div className="d-flex gap-4 justify-content-center flex-wrap">
            <MagneticButton className="btn-ultra" strength={0.3}>
              <span>Get Started Now</span>
            </MagneticButton>
            <button className="btn btn-glass-premium">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div 
        className="position-absolute"
        style={{
          top: '10%',
          left: '5%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />
      
      <div 
        className="position-absolute"
        style={{
          bottom: '10%',
          right: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          zIndex: 0,
        }}
      />

      <style jsx>{`
        .icon-wrapper-premium {
          width: 100px;
          height: 100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1));
          border-radius: 1.5rem;
          animation: float 3s ease-in-out infinite;
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
      `}</style>
    </section>
  );
}

