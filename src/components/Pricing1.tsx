'use client';

import Link from 'next/link';
import FadeInSection from './reactbits/FadeInSection';
import CardSpotlight from './reactbits/CardSpotlight';
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
          <div className="row justify-center mb-18">
            <div className="col-lg-10">
              <div className="text-center">
                <p className={`text-${dark ? 'primary-dark' : 'primary'}`}>
                  Pricing Plans
                </p>
                <h1 className={`${dark ? 'text-white' : ''} mb-5`}>
                  Choose Your <span className={`text-${dark ? 'primary-dark' : 'primary'}`}>AI Agent</span> Plan
                </h1>
                <p className="mb-0">
                  Deploy in 24 hours. Cancel anytime. No engineering required.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>
        
        <div className="row g-6 pricing-table">
          {plans.map((plan, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <FadeInSection delay={index * 0.15}>
                <CardSpotlight className="h-100">
                  <div className={`pricing-card p-6 px-lg-10 py-lg-8 rounded-4 h-full bg-${dark ? 'dark' : 'white'} position-relative`}>
                    {plan.badge && (
                      <span className="badge text-bg-primary px-4 py-2 rounded-end-0 position-absolute top-0 start-0">
                        {plan.badge}
                      </span>
                    )}
                    <h3 className={`text-${dark ? 'primary-dark' : 'primary'} fw-medium mb-0`}>
                      {plan.name}
                    </h3>
                    <div className="d-flex align-items-baseline mt-4">
                      <h1 className={`display-2 fw-semibold ${dark ? 'text-white' : ''} mb-0`}>
                        {plan.price}
                      </h1>
                      {plan.period && (
                        <span className={`${dark ? 'text-white-50' : 'text-dark-50'} ms-2`}>
                          {plan.period}
                        </span>
                      )}
                    </div>
                    <p className={`${dark ? 'text-white' : ''} lead fw-normal mt-4 mb-0`}>
                      {plan.description}
                    </p>
                    <Link
                      href="/contact"
                      className={`pricing-btn btn btn-lg w-full fs-4 lh-sm mt-9 ${
                        dark ? 'btn-dark-blue-3' : 'btn-lite-blue-2'
                      }`}
                    >
                      {plan.buttonText}
                    </Link>
                    <ul className="pricing-list d-flex flex-column gap-5 fs-lg mt-9 mb-0">
                      {plan.features.map((feature, i) => (
                        <li key={i}>
                          {typeof feature === 'string' ? (
                            feature
                          ) : (
                            <>
                              <strong className={`${dark ? 'text-white' : ''} fw-medium`}>
                                {feature.text}
                              </strong>
                              {feature.suffix}
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardSpotlight>
              </FadeInSection>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
