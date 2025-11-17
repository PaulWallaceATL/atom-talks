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
          <div className="row justify-center mb-18">
            <div className="col-lg-10">
              <div className="text-center">
                <h1 className={`mb-0 ${dark ? 'text-white' : ''}`}>
                  Questions About Our <span className={`text-${dark ? 'primary-dark' : 'primary'}`}>AI Agent Platform</span>?
                  <br className="d-none d-md-block" />
                  We Have Answers!
                </h1>
              </div>
            </div>
          </div>
        </FadeInSection>

        <div className="row justify-center">
          <div className="col-lg-8">
            <div className="accordion accordion-flush d-flex flex-column gap-6" id="faqAccordion">
              {faqs.map((faq, index) => (
                <FadeInSection key={faq.id} delay={index * 0.1}>
                  <motion.div 
                    className="accordion-item"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${openIndex !== index ? 'collapsed' : ''}`}
                        type="button"
                        onClick={() => toggleFAQ(index)}
                        aria-expanded={openIndex === index}
                      >
                        <span className="icon"></span>
                        {faq.question}
                      </button>
                    </h2>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="accordion-collapse"
                        >
                          <div className="accordion-body">{faq.answer}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
