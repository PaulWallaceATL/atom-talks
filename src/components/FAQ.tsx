'use client';

import FadeInSection from './reactbits/FadeInSection';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface FAQProps {
  dark?: boolean;
  extraClassList?: string;
}

export default function FAQ({ dark = true, extraClassList = '' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      id: 'One',
      question: 'How quickly can I deploy an AI agent?',
      answer: 'You can deploy a production-ready AI agent in 24 hours. Our platform automatically vectorizes your existing website and documentation, requiring zero engineering effort from your team.',
    },
    {
      id: 'Two',
      question: 'What makes your emotional intelligence different?',
      answer: 'We use Hume AI to capture 53 distinct emotional signals in real-time conversations. This goes far beyond basic sentiment analysis—we can detect intent, confusion, excitement, frustration, and help you understand what your users really need.',
    },
    {
      id: 'Three',
      question: 'Do I need engineering resources to set this up?',
      answer: 'No! That\'s the whole point. We handle all the RAG infrastructure, vector store management, and LLM orchestration. You simply connect your content sources, and we build the agent for you.',
    },
    {
      id: 'Four',
      question: 'How does the dual-persona system work?',
      answer: 'One AI agent, powered by the same vector store, can switch between sales and support personas based on context. This means you get both lead qualification and technical support from a single deployment.',
    },
    {
      id: 'Five',
      question: 'What integrations do you support?',
      answer: 'Our drop-in widget integrates with your GTM stack including CRM systems, analytics platforms, and support ticketing systems. We\'re enterprise-ready with secure, customizable deployments.',
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className={`position-relative ${extraClassList}`}>
      <div className="container">
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
                    ❓ FAQ
                  </span>
                </motion.div>
                <h1 
                  className={`mb-4 ${dark ? 'text-white' : ''}`}
                  style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
                >
                  Questions About Our <span className="gradient-text">AI Agent Platform</span>?
                </h1>
                <p className="text-white-50 fs-5">
                  Everything you need to know about deploying intelligent AI agents
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>

        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="d-flex flex-column gap-4">
              {faqs.map((faq, index) => (
                <FadeInSection key={faq.id} delay={index * 0.08}>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="glass-card p-1"
                    style={{ borderRadius: '1.25rem' }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      <button
                        className={`w-100 text-start p-5 border-0 bg-transparent d-flex align-items-center justify-content-between ${dark ? 'text-white' : 'text-dark'}`}
                        type="button"
                        onClick={() => toggleFAQ(index)}
                        aria-expanded={openIndex === index}
                        style={{
                          cursor: 'pointer',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      >
                        <span 
                          className="fw-bold flex-grow-1 pe-4"
                          style={{ fontSize: '1.15rem' }}
                        >
                          {faq.question}
                        </span>
                        <motion.div
                          animate={{ rotate: openIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                          style={{
                            width: '2rem',
                            height: '2rem',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #667eea, #764ba2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <svg 
                            width="16" 
                            height="16" 
                            viewBox="0 0 16 16" 
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="4 6 8 10 12 6" />
                          </svg>
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {openIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                            style={{ overflow: 'hidden' }}
                          >
                            <div 
                              className="px-5 pb-5 text-white-50"
                              style={{ 
                                fontSize: '1.05rem',
                                lineHeight: 1.7,
                              }}
                            >
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
