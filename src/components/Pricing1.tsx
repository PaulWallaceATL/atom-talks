'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import FadeInSection from './reactbits/FadeInSection';
import GridBackground from './reactbits/GridBackground';

interface Pricing1Props {
  dark?: boolean;
  extraClassList?: string;
}

export default function Pricing1({ dark = true, extraClassList = '' }: Pricing1Props) {
  const plans = [
    {
      name: 'Starter',
      price: '$499',
      period: '/month',
      description: 'Perfect for small teams getting started with AI agents',
      buttonText: 'Start Free Trial',
      features: [
        'Up to 1,000 conversations/month',
        'Single AI agent persona',
        'Basic emotion detection',
        'Email support',
        'Standard documentation sync'
      ],
      badge: null,
    },
    {
      name: 'Professional',
      price: '$1,999',
      period: '/month',
      description: '24-hour deployment with full emotional intelligence',
      buttonText: 'Get Started',
      features: [
        'Up to 10,000 conversations/month',
        'Dual persona (Sales + Support)',
        { text: '53-point', bold: true, suffix: ' emotion detection' },
        { text: 'Voice + Chat', bold: true, suffix: ' enabled' },
        'Priority support',
        'Advanced analytics dashboard',
        'Custom integrations'
      ],
      badge: 'Most Popular',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Unlimited scale with white-glove deployment',
      buttonText: 'Contact Sales',
      features: [
        'Unlimited conversations',
        'Multiple AI agent personas',
        'Full emotional AI suite',
        'Dedicated success manager',
        'Custom LLM orchestration',
        'SLA guarantees',
        'On-premise deployment option'
      ],
      badge: null,
    }
  ];

  return (
    <section className={`position-relative ${extraClassList}`}>
      {/* ReactBits Grid Background */}
      <GridBackground />
      
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <FadeInSection>
          <div className="row justify-content-center mb-16">
            <div className="col-lg-10">
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="badge-premium mb-4 d-inline-block">
                    💎 Pricing Plans
                  </span>
                </motion.div>
                <h1 
                  className={`${dark ? 'text-white' : ''} mb-5`}
                  style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
                >
                  Choose Your <span className="gradient-text">AI Agent</span> Plan
                </h1>
                <p className="mb-0 fs-5 text-white-50 mx-auto" style={{ maxWidth: '36rem' }}>
                  Deploy in 24 hours. Cancel anytime. No engineering required.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>
        
        <div className="row g-6 g-lg-8 pricing-table">
          {plans.map((plan, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <FadeInSection delay={index * 0.15}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -12, scale: 1.03 }}
                  className="h-100"
                >
                  <div className={`pricing-card-premium h-100 ${plan.badge ? 'featured' : ''}`}>
                    {plan.badge && (
                      <div 
                        className="badge-premium position-absolute"
                        style={{ 
                          top: '2rem',
                          right: '2rem',
                          fontSize: '0.75rem',
                          padding: '0.4rem 1rem',
                        }}
                      >
                        {plan.badge}
                      </div>
                    )}
                    
                    <div className="mb-6">
                      <h3 
                        className="gradient-text fw-bold mb-2"
                        style={{ fontSize: '1.5rem' }}
                      >
                        {plan.name}
                      </h3>
                      <p className="text-white-50 mb-0" style={{ fontSize: '0.95rem' }}>
                        {plan.description}
                      </p>
                    </div>

                    <div className="d-flex align-items-baseline mb-8">
                      <h1 
                        className={`fw-bold ${dark ? 'text-white' : ''} mb-0`}
                        style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}
                      >
                        {plan.price}
                      </h1>
                      {plan.period && (
                        <span className="text-white-50 ms-2 fs-5">
                          {plan.period}
                        </span>
                      )}
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        href="/contact"
                        className="btn btn-gradient-premium w-100 py-3 mb-8"
                        style={{ fontSize: '1.05rem' }}
                      >
                        <span>{plan.buttonText}</span>
                      </Link>
                    </motion.div>

                    <ul className="list-unstyled d-flex flex-column gap-4 mb-0">
                      {plan.features.map((feature, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
                          className="d-flex align-items-start gap-3"
                        >
                          <div 
                            className="flex-shrink-0 mt-1"
                            style={{
                              width: '1.25rem',
                              height: '1.25rem',
                              borderRadius: '50%',
                              background: 'linear-gradient(135deg, #667eea, #764ba2)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <svg 
                              width="12" 
                              height="12" 
                              viewBox="0 0 12 12" 
                              fill="none"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="2 6 5 9 10 3" />
                            </svg>
                          </div>
                          <span className={`${dark ? 'text-white' : ''} flex-grow-1`}>
                            {typeof feature === 'string' ? (
                              feature
                            ) : (
                              <>
                                <strong className="fw-semibold text-white">
                                  {feature.text}
                                </strong>
                                {feature.suffix}
                              </>
                            )}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </FadeInSection>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <FadeInSection delay={0.6}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-white-50 mb-0">
              Need a custom plan? <Link href="/contact" className="gradient-text fw-semibold text-decoration-none">Contact our sales team →</Link>
            </p>
          </motion.div>
        </FadeInSection>
      </div>
    </section>
  );
}
