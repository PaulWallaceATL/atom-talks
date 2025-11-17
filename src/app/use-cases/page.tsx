import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA1 from '@/components/CTA1';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Use Cases - AtomTalks',
  description: 'Discover how AtomTalks can help you create better content for various use cases.',
};

const useCases = [
  {
    id: 1,
    title: 'Blog Writing',
    description: 'Create engaging blog posts that rank well in search engines and keep your readers coming back for more.',
    icon: '/images/icons/feature-icon-1.svg',
    slug: 'blog-writing',
  },
  {
    id: 2,
    title: 'Email Marketing',
    description: 'Write compelling email campaigns that convert subscribers into customers with AI-powered copywriting.',
    icon: '/images/icons/feature-icon-2.svg',
    slug: 'email-marketing',
  },
  {
    id: 3,
    title: 'Social Media Posts',
    description: 'Generate engaging social media content that drives engagement and grows your following.',
    icon: '/images/icons/feature-icon-3.svg',
    slug: 'social-media',
  },
  {
    id: 4,
    title: 'Product Descriptions',
    description: 'Create compelling product descriptions that highlight features and drive sales.',
    icon: '/images/icons/feature-icon-1.svg',
    slug: 'product-descriptions',
  },
  {
    id: 5,
    title: 'Ad Copy',
    description: 'Write high-converting ad copy for Google, Facebook, and other advertising platforms.',
    icon: '/images/icons/feature-icon-2.svg',
    slug: 'ad-copy',
  },
  {
    id: 6,
    title: 'SEO Content',
    description: 'Generate SEO-optimized content that ranks higher in search results and drives organic traffic.',
    icon: '/images/icons/feature-icon-3.svg',
    slug: 'seo-content',
  },
];

export default function UseCasesPage() {
  return (
    <div className="wrapper d-flex flex-column justify-between">
      <Navbar dark={true} extraClassList="bg-dark" />

      <main className="flex-grow-1">
        {/* Page Header */}
        <section className="py-10 py-lg-15 bg-striped" data-aos="fade-up-sm" data-aos-delay="50">
          <div className="container">
            <div className="text-center">
              <h3 className="text-white mb-2">Use Cases</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-center fs-sm">
                  <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Use Cases</li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="py-20 py-lg-30">
          <div className="container">
            <div className="row justify-center mb-12 mb-lg-18">
              <div className="col-lg-9">
                <div className="text-center">
                  <h1 className="text-white mb-4" data-aos="fade-up-sm" data-aos-delay="50">
                    How Can <span className="text-primary-dark">AtomTalks</span> Help You?
                  </h1>
                  <p data-aos="fade-up-sm" data-aos-delay="100">
                    Discover the many ways AtomTalks can transform your content creation workflow
                  </p>
                </div>
              </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-6 g-lg-8">
              {useCases.map((useCase, index) => (
                <div key={useCase.id} className="col" data-aos="fade-up-sm" data-aos-delay={50 + index * 50}>
                  <Link href={`/use-cases/${useCase.slug}`} className="card h-full bg-dark-blue-3 border-0 p-6 p-lg-8 text-decoration-none">
                    <div className="mb-6">
                      <Image 
                        src={useCase.icon} 
                        alt={useCase.title}
                        width={64}
                        height={64}
                      />
                    </div>
                    <h4 className="text-white mb-4">{useCase.title}</h4>
                    <p className="mb-0">{useCase.description}</p>
                    <div className="mt-6">
                      <span className="text-primary-dark">Learn more →</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTA1 dark={true} />
      </main>

      <Footer dark={true} extraClassList="bg-striped pt-10 pt-lg-15" />
    </div>
  );
}

