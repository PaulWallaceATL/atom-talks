import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Pricing1 from '@/components/Pricing1';
import FAQ from '@/components/FAQ';
import CTA1 from '@/components/CTA1';
import Link from 'next/link';

export const metadata = {
  title: 'Pricing Plans - AtomTalks',
  description: 'Choose the perfect plan for your content creation needs. Start free, upgrade anytime.',
};

export default function PricingPage() {
  return (
    <div className="wrapper d-flex flex-column justify-between">
      {/* Navbar */}
      <Navbar dark={true} extraClassList="bg-dark" />

      <main className="flex-grow-1">
        {/* Page Header */}
        <section className="py-10 py-lg-15 bg-striped" data-aos="fade-up-sm" data-aos-delay="50">
          <div className="container">
            <div className="text-center">
              <h3 className="text-white mb-2">Pricing Plans</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-center fs-sm">
                  <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Pricing</li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <Pricing1 dark={true} extraClassList="py-20 py-lg-30" />

        {/* FAQ */}
        <FAQ dark={true} extraClassList="py-10 py-lg-15" />

        {/* CTA */}
        <CTA1 dark={true} />
      </main>

      {/* Footer */}
      <Footer dark={true} extraClassList="bg-striped pt-10 pt-lg-15" />
    </div>
  );
}

