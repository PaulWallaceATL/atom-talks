'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import ParticlesBackground from './reactbits/ParticlesBackground';
import FloatingElements from './reactbits/FloatingElements';
import TypewriterText from './reactbits/TypewriterText';

interface Hero1Props {
  dark?: boolean;
  extraClassList?: string;
}

export default function Hero1({ dark = true, extraClassList = '' }: Hero1Props) {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Typed animation logic will be handled by the main.js if needed
    // Or we can implement it here with a library like typed.js
  }, []);

  return (
    <section 
      className={`hero-section style-1 overflow-hidden position-relative ${extraClassList}`}
      data-bs-theme={dark ? 'dark' : undefined}
    >
      {/* ReactBits Animated Backgrounds */}
      <ParticlesBackground />
      <FloatingElements />
      
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row justify-center">
          <div className="col-lg-9">
            <div className="text-center">
              <div className="position-relative z-1">
                <p
                  className={`text-${dark ? 'primary-dark' : 'primary'}`}
                >
                  Intelligent AI Agent Platform
                </p>
                <h1
                  className={`text-${dark ? 'white' : 'dark'} mb-8`}
                >
                  Turn Your Website & Docs <br />
                  Into an{' '}
                  <TypewriterText
                    words={['Intelligent AI Agent', 'Voice + Chat Agent', 'Production RAG Agent']}
                    className={`fw-bold text-gradient-${dark ? '2' : '1'} d-inline-block`}
                  />
                </h1>
                <p className="mb-8 fs-5">
                  Deploy a production-ready RAG agent in 24 hours—no engineering required.
                </p>
                <Link
                  href="/contact"
                  className="btn btn-lg btn-gradient-1"
                >
                  Deploy Your AI Agent Today
                </Link>
              </div>
              <div  >
                <div className="image-with-shape">
                  <Image
                    src="/images/shapes/blurry-shape-1.svg"
                    alt=""
                    className="shape animate-scale"
                    width={800}
                    height={600}
                  />
                  <div
                    className={`mt-12 rounded-5 border border-${dark ? 'primary-dark' : 'primary'} shadow-lg overflow-hidden position-relative z-1`}
                  >
                    <Image
                      className="img-fluid d-inline-block"
                      src={`/images/screens/screen-${dark ? '1' : '6'}.jpg`}
                      alt="Dashboard Screenshot"
                      width={1200}
                      height={800}
                    />
                  </div>
                </div>
              </div>
              <ul className="d-flex flex-wrap gap-4 gap-md-8 gap-lg-10 align-center justify-center mt-8 mb-0">
                <li>Deploy in 24 Hours</li>
                <li>Zero Engineering Required</li>
                <li>Voice + Chat Enabled</li>
              </ul>
              <div className="d-flex gap-8 align-center justify-center mt-12 review-badges">
                <Image
                  className="img-fluid"
                  src={`/images/review-logos/${dark ? 'trustpilot_reviews.svg' : 'trustpilot_reviews_2.svg'}`}
                  alt="Trustpilot Reviews"
                  width={150}
                  height={40}
                />
                <Image
                  className="img-fluid"
                  src={`/images/review-logos/${dark ? 'capterra_reviews.svg' : 'capterra_reviews_2.svg'}`}
                  alt="Capterra Reviews"
                  width={150}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

