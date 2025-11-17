'use client';

import Image from 'next/image';
import Link from 'next/link';
import FadeInSection from './reactbits/FadeInSection';
import GradientBlob from './reactbits/GradientBlob';

interface Features3Props {
  dark?: boolean;
  extraClassList?: string;
}

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" className="icon">
    <g>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m3.75 9 3.75 3.75 7.5-7.5"
      />
    </g>
  </svg>
);

export default function Features3({ dark = true, extraClassList = '' }: Features3Props) {
  return (
    <section className={`py-10 py-lg-15 position-relative ${extraClassList}`}>
      {/* ReactBits Gradient Blob */}
      <GradientBlob className="top-0 end-0" />
      
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center gy-10 gy-lg-0">
          <div className="col-lg-6 order-lg-2">
            <FadeInSection delay={0.2}>
              <div className="text-center">
                <Image
                  className="img-fluid"
                  src="/images/screens/screen-2.jpg"
                  alt="AI Agent Platform"
                  width={600}
                  height={450}
                />
              </div>
            </FadeInSection>
          </div>
          
          <div className="col-lg-6 order-lg-1">
            <FadeInSection>
              <div>
                <p className={`text-${dark ? 'primary-dark' : 'primary'} fs-sm mb-2`}>
                  Measurable Impact
                </p>
                <h2 className={`text-${dark ? 'white' : 'dark'} mb-8`}>
                  Cut Developer Support Tickets by <span className="text-gradient-2">30–60%</span>
                </h2>
                
                <ul className="list-unstyled d-flex flex-column gap-4">
                  <li className="d-flex gap-4">
                    <div className={`icon-check w-6 h-6 bg-gradient-3 rounded-2 d-flex align-center justify-center flex-shrink-0 text-${dark ? 'primary-dark' : 'primary'}`}>
                      <CheckIcon />
                    </div>
                    <div>
                      <h6 className={`text-${dark ? 'white' : 'dark'} mb-2`}>
                        AI Handles Technical Q&A Automatically
                      </h6>
                      <p className="mb-0">
                        Your AI agent answers technical questions instantly, trained on your complete documentation.
                      </p>
                    </div>
                  </li>
                  
                  <li className="d-flex gap-4">
                    <div className={`icon-check w-6 h-6 bg-gradient-3 rounded-2 d-flex align-center justify-center flex-shrink-0 text-${dark ? 'primary-dark' : 'primary'}`}>
                      <CheckIcon />
                    </div>
                    <div>
                      <h6 className={`text-${dark ? 'white' : 'dark'} mb-2`}>
                        Highlights Documentation Gaps Automatically
                      </h6>
                      <p className="mb-0">
                        Know exactly where your docs are missing information—based on real user questions.
                      </p>
                    </div>
                  </li>
                  
                  <li className="d-flex gap-4">
                    <div className={`icon-check w-6 h-6 bg-gradient-3 rounded-2 d-flex align-center justify-center flex-shrink-0 text-${dark ? 'primary-dark' : 'primary'}`}>
                      <CheckIcon />
                    </div>
                    <div>
                      <h6 className={`text-${dark ? 'white' : 'dark'} mb-2`}>
                        Real-Time Frustration Detection
                      </h6>
                      <p className="mb-0">
                        See when developers are confused or stuck—before they create a support ticket.
                      </p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <Link href="/contact" className={`btn btn-${dark ? 'primary-dark' : 'primary'}`}>
                    See How It Works
                  </Link>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
}
