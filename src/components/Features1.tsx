'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import GridBackground from './reactbits/GridBackground';
import FadeInSection from './reactbits/FadeInSection';

interface Features1Props {
  dark?: boolean;
  extraClassList?: string;
}

const features = [
  {
    icon: (
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40">
        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M8.333 26.667V13.333L20 6.667l11.667 6.666v13.334L20 33.333l-11.667-6.666Z" />
          <path d="M20 20v13.333M20 20L8.333 13.333M20 20l11.667-6.667" />
        </g>
      </svg>
    ),
    title: 'Instant AI From Your Existing Content',
    description: 'Your entire site, docs, and knowledge base—automatically vectorized for RAG.',
  },
  {
    icon: (
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40">
        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M20 35c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15Z" />
          <path d="M20 13.333v6.667l4.167 4.167" />
        </g>
      </svg>
    ),
    title: 'Emotion-Driven Lead Scoring',
    description: 'Know who\'s ready to buy—based on what they say and how they feel.',
  },
  {
    icon: (
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40">
        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M33.333 8.333H6.667v20h26.666v-20Z" />
          <path d="M26.667 15h-13.334M26.667 21.667h-13.334" />
        </g>
      </svg>
    ),
    title: 'Developer Frustration & Satisfaction Insights',
    description: 'See exactly where developers get stuck in your docs. Fix issues with data, not guesswork.',
  },
  {
    icon: (
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40">
        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M20 23.333a6.667 6.667 0 1 0 0-13.333 6.667 6.667 0 0 0 0 13.333Z" />
          <path d="M20 30c5.523 0 10-4.477 10-10S25.523 10 20 10s-10 4.477-10 10 4.477 10 10 10Z" />
        </g>
      </svg>
    ),
    title: 'One Agent, Two Personas',
    description: 'One AI that sells to customers and supports developers—powered by the same vector store.',
  },
  {
    icon: (
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40">
        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M35 16.667c0 9.166-7.5 16.666-15 16.666s-15-7.5-15-16.666C5 7.5 12.5 0 20 0s15 7.5 15 16.667Z" />
          <path d="M13.333 15h.017M26.667 15h.016M13.333 22.5c1.667 3.333 5 5 6.667 5s5-1.667 6.667-5" />
        </g>
      </svg>
    ),
    title: 'Voice + Chat With Emotional Intelligence',
    description: 'Hume-powered voice conversations reveal intent, confusion, and excitement in real time.',
  },
  {
    icon: (
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40">
        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M20 6.667v26.666M6.667 20h26.666" />
          <path d="M28.333 11.667 20 3.333l-8.333 8.334M11.667 28.333 20 36.667l8.333-8.334" />
        </g>
      </svg>
    ),
    title: 'Zero-Engineering RAG Infrastructure',
    description: 'OpenAI Vector Store + custom LLM orchestration included. No pipelines to build.',
  },
];

export default function Features1({ dark = true, extraClassList = '' }: Features1Props) {
  return (
    <section className={`py-10 py-lg-15 position-relative ${extraClassList}`}>
      {/* ReactBits Grid Background */}
      <GridBackground />
      
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <FadeInSection>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge-premium mb-4 d-inline-block">
                ✨ Platform Features
              </span>
            </motion.div>
            <h1 
              className={`mb-4 text-${dark ? 'white' : 'dark'}`}
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              Why Choose Our <span className="gradient-text">AI Agent Platform</span>
            </h1>
            <p className="text-white-50 fs-5 mx-auto" style={{ maxWidth: '42rem' }}>
              Everything you need to deploy production-ready AI agents with emotional intelligence
            </p>
          </div>
        </FadeInSection>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-6 g-xl-8">
          {features.map((feature, index) => (
            <div key={index} className="col">
              <FadeInSection delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-100"
                >
                  <div className="feature-card-modern h-100">
                    <div className="icon-wrapper">
                      <div style={{ width: '2rem', height: '2rem', color: 'white' }}>
                        {feature.icon}
                      </div>
                    </div>
                    <div className="content">
                      <h4 
                        className={`mb-3 text-${dark ? 'white' : 'dark'}`}
                        style={{ fontWeight: 700 }}
                      >
                        {feature.title}
                      </h4>
                      <p className="text-white-50 mb-0" style={{ lineHeight: 1.7 }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </FadeInSection>
            </div>
          ))}
          
          {/* 7th Feature - Full Width with Premium Design */}
          <div className="col-12">
            <FadeInSection delay={0.7}>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="glass-card-premium p-6 p-lg-8">
                  <div className="d-flex flex-column flex-lg-row gap-6 align-items-center justify-content-center text-center text-lg-start">
                    <div 
                      className="icon-wrapper flex-shrink-0"
                      style={{
                        width: '5rem',
                        height: '5rem',
                        borderRadius: '1.25rem',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
                      }}
                    >
                      <svg 
                        style={{ width: '2.5rem', height: '2.5rem', color: 'white' }}
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 40 40"
                      >
                        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                          <path d="M20 35c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15Z" />
                          <path d="m13.333 20 3.334 3.333L26.667 13.333" />
                        </g>
                      </svg>
                    </div>
                    <div className="content flex-grow-1">
                      <h3 
                        className={`mb-3 text-${dark ? 'white' : 'dark'}`}
                        style={{ fontWeight: 800 }}
                      >
                        Drop-In Widget. <span className="gradient-text">Enterprise Ready.</span>
                      </h3>
                      <p className="text-white-50 mb-0 fs-5" style={{ lineHeight: 1.7 }}>
                        Easy install. Secure, customizable, and integrates seamlessly with your GTM stack. 
                        Production-ready in 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeInSection>
          </div>
        </div>

        <FadeInSection delay={0.9}>
          <div className="text-center mt-16">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="btn btn-gradient-premium btn-lg px-8 py-3">
                <span>See a Live Demo</span>
              </Link>
            </motion.div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
