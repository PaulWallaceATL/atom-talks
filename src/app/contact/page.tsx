'use client';

import { useState, useTransition } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import MeshGradient from '@/components/reactbits/MeshGradient';
import FadeInSection from '@/components/reactbits/FadeInSection';
import GlowingCard from '@/components/reactbits/GlowingCard';
import ShimmerButton from '@/components/reactbits/ShimmerButton';
import FloatingElements from '@/components/reactbits/FloatingElements';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [isPending, startTransition] = useTransition();
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    startTransition(async () => {
      setFormStatus('submitting');
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="wrapper d-flex flex-column justify-between">
      <Navbar dark={true} extraClassList="bg-dark" />

      <main className="flex-grow-1">
        {/* Page Header with MeshGradient - no stripes */}
        <section className="py-15 py-lg-20 position-relative overflow-hidden bg-dark-blue-4">
          <MeshGradient />
          <FloatingElements />
          
          <div className="container position-relative" style={{ zIndex: 1 }}>
            <FadeInSection>
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                  className="d-inline-block mb-6"
                >
                  <div className="w-20 h-20 mx-auto rounded-circle bg-gradient-3 d-flex align-items-center justify-content-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      className="text-white"
                      viewBox="0 0 24 24"
                      width="48"
                      height="48"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </div>
                </motion.div>
                
                <h1 className="text-white mb-4 display-4">
                  Let&apos;s Build Your <span className="text-gradient-2">AI Agent</span> Together
                </h1>
                <p className="fs-5 mb-0 text-white-75">
                  Questions about deployment? Ready to get started? We&apos;re here to help you launch in 24 hours.
                </p>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Contact Section with Enhanced UI */}
        <section className="py-15 py-lg-20 position-relative">
          <MeshGradient />
          
          <div className="container position-relative" style={{ zIndex: 1 }}>
            <div className="row justify-center">
              <div className="col-lg-10">
                
                {/* Success Message */}
                {formStatus === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="alert alert-success mb-8 d-flex align-items-center gap-4" 
                    role="alert"
                  >
                    <div className="flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                        <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <strong>Message Sent Successfully!</strong> We&apos;ll get back to you within 24 hours.
                    </div>
                  </motion.div>
                )}

                {/* Contact Form with Better UI */}
                <FadeInSection delay={0.2}>
                  <GlowingCard>
                    <div className="card bg-dark-blue-3 border-0 p-8 p-lg-12 rounded-5">
                      <form onSubmit={handleSubmit}>
                        <div className="row g-6">
                          <motion.div 
                            className="col-md-6"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            <div className="form-group">
                              <label htmlFor="name" className="form-label text-white fw-medium mb-3">
                                Full Name *
                              </label>
                              <input
                                type="text"
                                className="form-control form-control-lg"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                required
                                disabled={formStatus === 'submitting'}
                              />
                            </div>
                          </motion.div>

                          <motion.div 
                            className="col-md-6"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            <div className="form-group">
                              <label htmlFor="email" className="form-label text-white fw-medium mb-3">
                                Email Address *
                              </label>
                              <input
                                type="email"
                                className="form-control form-control-lg"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@company.com"
                                required
                                disabled={formStatus === 'submitting'}
                              />
                            </div>
                          </motion.div>

                          <motion.div 
                            className="col-md-6"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                          >
                            <div className="form-group">
                              <label htmlFor="phone" className="form-label text-white fw-medium mb-3">
                                Phone Number
                              </label>
                              <input
                                type="tel"
                                className="form-control form-control-lg"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+1 (555) 000-0000"
                                disabled={formStatus === 'submitting'}
                              />
                            </div>
                          </motion.div>

                          <motion.div 
                            className="col-md-6"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                          >
                            <div className="form-group">
                              <label htmlFor="subject" className="form-label text-white fw-medium mb-3">
                                Subject *
                              </label>
                              <input
                                type="text"
                                className="form-control form-control-lg"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="AI Agent Deployment"
                                required
                                disabled={formStatus === 'submitting'}
                              />
                            </div>
                          </motion.div>

                          <motion.div 
                            className="col-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                          >
                            <div className="form-group">
                              <label htmlFor="message" className="form-label text-white fw-medium mb-3">
                                Tell Us About Your Project *
                              </label>
                              <textarea
                                className="form-control form-control-lg"
                                id="message"
                                name="message"
                                rows={6}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us about your documentation, expected conversation volume, and timeline..."
                                required
                                disabled={formStatus === 'submitting'}
                              ></textarea>
                            </div>
                          </motion.div>

                          <motion.div 
                            className="col-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                          >
                            <ShimmerButton
                              type="submit"
                              className="btn btn-gradient-1 btn-lg w-full"
                              disabled={formStatus === 'submitting'}
                            >
                              {formStatus === 'submitting' ? (
                                <>
                                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                  Sending Your Message...
                                </>
                              ) : (
                                <>
                                  Send Message
                                  <svg className="ms-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </>
                              )}
                            </ShimmerButton>
                          </motion.div>
                        </div>
                      </form>
                    </div>
                  </GlowingCard>
                </FadeInSection>

                {/* Contact Info with Enhanced Cards */}
                <div className="row g-8 mt-15">
                  <div className="col-md-4">
                    <FadeInSection delay={0.3}>
                      <GlowingCard className="h-100">
                        <div className="card bg-dark-blue-3 border-0 p-6 text-center h-100 rounded-4">
                          <motion.div 
                            className="mb-4 d-flex justify-content-center"
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <div className="w-16 h-16 rounded-circle bg-gradient-3 d-flex align-items-center justify-content-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                className="text-white"
                                viewBox="0 0 24 24"
                                width="32"
                                height="32"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
                              </svg>
                            </div>
                          </motion.div>
                          <h5 className="text-white mb-3 fw-semibold">Phone</h5>
                          <p className="mb-0 fs-5">+1 (555) 123-4567</p>
                          <p className="text-white-50 fs-sm mt-2">Mon-Fri, 9am-6pm EST</p>
                        </div>
                      </GlowingCard>
                    </FadeInSection>
                  </div>

                  <div className="col-md-4">
                    <FadeInSection delay={0.4}>
                      <GlowingCard className="h-100">
                        <div className="card bg-dark-blue-3 border-0 p-6 text-center h-100 rounded-4">
                          <motion.div 
                            className="mb-4 d-flex justify-content-center"
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <div className="w-16 h-16 rounded-circle bg-gradient-3 d-flex align-items-center justify-content-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                className="text-white"
                                viewBox="0 0 24 24"
                                width="32"
                                height="32"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x="3" y="5" width="18" height="14" rx="2" />
                                <path d="m3 7 9 6 9-6" />
                              </svg>
                            </div>
                          </motion.div>
                          <h5 className="text-white mb-3 fw-semibold">Email</h5>
                          <p className="mb-0 fs-5">hello@atomtalks.com</p>
                          <p className="text-white-50 fs-sm mt-2">24-hour response time</p>
                        </div>
                      </GlowingCard>
                    </FadeInSection>
                  </div>

                  <div className="col-md-4">
                    <FadeInSection delay={0.5}>
                      <GlowingCard className="h-100">
                        <div className="card bg-dark-blue-3 border-0 p-6 text-center h-100 rounded-4">
                          <motion.div 
                            className="mb-4 d-flex justify-content-center"
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <div className="w-16 h-16 rounded-circle bg-gradient-3 d-flex align-items-center justify-content-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                className="text-white"
                                viewBox="0 0 24 24"
                                width="32"
                                height="32"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                                <path d="M12 8v4l3 3" />
                              </svg>
                            </div>
                          </motion.div>
                          <h5 className="text-white mb-3 fw-semibold">Deploy Time</h5>
                          <p className="mb-0 fs-5 text-gradient-2 fw-bold">24 Hours</p>
                          <p className="text-white-50 fs-sm mt-2">From kickoff to production</p>
                        </div>
                      </GlowingCard>
                    </FadeInSection>
                  </div>
                </div>

                {/* Additional Info Section */}
                <FadeInSection delay={0.6}>
                  <div className="row mt-15">
                    <div className="col-12">
                      <GlowingCard>
                        <div className="card bg-dark-blue-4 border border-primary-dark border-opacity-25 p-8 rounded-5 text-center">
                          <h3 className="text-white mb-4">
                            Prefer a Live Demo?
                          </h3>
                          <p className="mb-6 fs-5">
                            See our AI agent platform in action. Watch how it handles voice + chat,
                            detects emotions, and transforms your documentation into intelligent responses.
                          </p>
                          <div className="d-flex gap-4 justify-content-center flex-wrap">
                            <ShimmerButton className="btn btn-primary-dark btn-lg">
                              Schedule a Demo
                              <svg className="ms-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.833 3.333H4.167C3.247 3.333 2.5 4.08 2.5 5v10c0 .92.746 1.667 1.667 1.667h11.666c.92 0 1.667-.746 1.667-1.667V5c0-.92-.746-1.667-1.667-1.667zM2.5 7.5h15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </ShimmerButton>
                            <Link href="/" className="btn btn-outline-primary-dark btn-lg">
                              View Docs
                            </Link>
                          </div>
                        </div>
                      </GlowingCard>
                    </div>
                  </div>
                </FadeInSection>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer dark={true} extraClassList="pt-10 pt-lg-15" />
    </div>
  );
}
