import Navbar from '@/components/Navbar';
import Hero1 from '@/components/Hero1';
import Features1 from '@/components/Features1';
import Features2 from '@/components/Features2';
import Features3 from '@/components/Features3';
import Stats from '@/components/Stats';
import Pricing1 from '@/components/Pricing1';
import FAQ from '@/components/FAQ';
import CTA1 from '@/components/CTA1';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import InteractiveParticles from '@/components/InteractiveParticles';
import ScrollProgress from '@/components/ScrollProgress';
import BentoGrid from '@/components/BentoGrid';
import PremiumShowcase from '@/components/PremiumShowcase';

export const metadata = {
  title: 'AtomTalks - AI Agent Platform | Deploy RAG Agents in 24 Hours',
  description: 'Turn your website and docs into an intelligent AI agent with voice + chat. Emotion-driven lead scoring, zero engineering required. Deploy in 24 hours.',
  keywords: 'AI agent, RAG, vector database, emotional intelligence AI, voice AI, developer support automation, lead scoring, AtomTalks',
  openGraph: {
    title: 'AtomTalks - AI Agent Platform | Deploy RAG Agents in 24 Hours',
    description: 'Turn your website and docs into an intelligent AI agent with emotional intelligence. Deploy in 24 hours, no engineering required.',
    type: 'website',
  },
};

export const dynamic = 'force-static';
export const revalidate = false;

export default function HomePage() {
  return (
    <>
      {/* Ultra-Premium Interactive Elements */}
      <CustomCursor />
      <InteractiveParticles />
      <ScrollProgress />
      
      <div className="wrapper d-flex flex-column justify-between">
        <Navbar dark={true} extraClassList="bg-dark" />

        <main className="flex-grow-1">
          {/* Hero Section */}
          <Hero1 dark={true} extraClassList="bg-dark py-10 py-lg-15" />

          {/* Core Features - 7 Value Props */}
          <Features1 dark={true} extraClassList="bg-dark-blue-4" />

          {/* Stats Section */}
          <Stats dark={true} extraClassList="bg-dark" />

          {/* Bento Grid - Next-Gen Features */}
          <BentoGrid />

          {/* Premium Showcase - Advanced Interactions */}
          <PremiumShowcase />

          {/* Support Reduction Feature */}
          <Features3 dark={true} />

          {/* Emotional Intelligence Feature */}
          <Features2 dark={true} extraClassList="bg-dark-blue-4" />

          {/* Pricing Section */}
          <Pricing1 dark={true} extraClassList="py-10 py-lg-15" />

          {/* FAQ Section */}
          <FAQ dark={true} extraClassList="py-10 py-lg-15" />

          {/* CTA Section */}
          <CTA1 dark={true} />
        </main>

        <Footer dark={true} extraClassList="pt-10 pt-lg-15" />
      </div>
    </>
  );
}
