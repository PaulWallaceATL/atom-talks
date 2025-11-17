'use client';

import Image from 'next/image';
import Link from 'next/link';
import FadeInSection from './reactbits/FadeInSection';
import GradientBlob from './reactbits/GradientBlob';

interface Features2Props {
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

export default function Features2({ dark = true, extraClassList = '' }: Features2Props) {
  return (
    <section className={`py-10 py-lg-15 position-relative ${extraClassList}`}>
      {/* ReactBits Gradient Blob */}
      <GradientBlob className="top-0 start-0" />
      
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center gy-10 gy-lg-0">
          <div className="col-lg-6">
            <FadeInSection delay={0.2}>
              <div className="text-center">
                <Image
                  className="img-fluid"
                  src="/images/screens/screen-3.png"
                  alt="Emotional Intelligence Platform"
                  width={600}
                  height={450}
                />
              </div>
            </FadeInSection>
          </div>
          
          <div className="col-lg-6">
            <FadeInSection>
              <div>
                <p className={`text-${dark ? 'primary-dark' : 'primary'} fs-sm mb-2`}>
                  Emotional Intelligence
                </p>
                <h2 className={`text-${dark ? 'white' : 'dark'} mb-8`}>
                  Understand Your Users at an <span className="text-gradient-2">Emotional Level</span>
                </h2>
                
                <ul className="list-unstyled d-flex flex-column gap-4">
                  <li className="d-flex gap-4">
                    <div className={`icon-check w-6 h-6 bg-gradient-3 rounded-2 d-flex align-items-center justify-content-center flex-shrink-0 text-${dark ? 'primary-dark' : 'primary'}`}>
                      <CheckIcon />
                    </div>
                    <div>
                      <h6 className={`text-${dark ? 'white' : 'dark'} mb-2`}>
                        53-Point Emotion Detection
                      </h6>
                      <p className="mb-0">
                        Track intent, confusion, excitement, frustration, and 49 other emotional signals in every conversation.
                      </p>
                    </div>
                  </li>
                  
                  <li className="d-flex gap-4">
                    <div className={`icon-check w-6 h-6 bg-gradient-3 rounded-2 d-flex align-items-center justify-content-center flex-shrink-0 text-${dark ? 'primary-dark' : 'primary'}`}>
                      <CheckIcon />
                    </div>
                    <div>
                      <h6 className={`text-${dark ? 'white' : 'dark'} mb-2`}>
                        Insights No Analytics Tool Can See
                      </h6>
                      <p className="mb-0">
                        Go beyond page views and clicks—understand the emotional journey of every user interaction.
                      </p>
                    </div>
                  </li>
                  
                  <li className="d-flex gap-4">
                    <div className={`icon-check w-6 h-6 bg-gradient-3 rounded-2 d-flex align-items-center justify-content-center flex-shrink-0 text-${dark ? 'primary-dark' : 'primary'}`}>
                      <CheckIcon />
                    </div>
                    <div>
                      <h6 className={`text-${dark ? 'white' : 'dark'} mb-2`}>
                        Voice & Text Conversations
                      </h6>
                      <p className="mb-0">
                        Powered by Hume AI, our platform captures emotional nuances in both voice and chat interactions.
                      </p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <Link href="/contact" className={`btn btn-${dark ? 'primary-dark' : 'primary'}`}>
                    Explore Emotional AI
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
