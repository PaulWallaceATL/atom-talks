import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About AtomTalks - AI Content Writing Platform',
  description: '10,000+ Writers, Marketers, & Business owners Love AtomTalks for their content creation needs.',
};

export default function AboutPage() {
  return (
    <div className="wrapper d-flex flex-column justify-between">
      {/* Navbar */}
      <Navbar dark={true} extraClassList="bg-dark" />

      <main className="flex-grow-1">
        {/* Page Header */}
        <section className="py-10 py-lg-15 bg-striped" data-aos="fade-up-sm" data-aos-delay="50">
          <div className="container">
            <div className="text-center">
              <h3 className="text-white mb-2">About AtomTalks.</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-center fs-sm">
                  <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">About Us</li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-15">
          <div className="container">
            <div className="row align-center">
              <div className="col-lg-6 col-xl-5" data-aos="fade-up-sm" data-aos-delay="50">
                <div className="text-center text-lg-start">
                  <p className="text-primary-dark fs-sm">About AtomTalks.</p>
                  <h2 className="text-white mb-4">
                    10,000+ Writers, Marketers, & Business owners Love AtomTalks.
                  </h2>
                  <p className="mb-8">
                    With a few clicks of a button, you can create a whole outline, opening
                    paragraph, and body for your blog.
                  </p>
                  <Link href="/login" className="btn btn-lg btn-gradient-1">
                    Start Writing - It's Free
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 offset-xl-1" data-aos="fade-up-sm" data-aos-delay="100">
                <div className="text-center">
                  <Image
                    className="img-fluid d-inline-block"
                    src="/images/screens/screen-4.png"
                    alt="AtomTalks Platform"
                    width={600}
                    height={450}
                  />
                </div>
              </div>
            </div>
            <hr className="border-top border-dark-blue opacity-100" />
            <div className="d-flex gap-8 align-center justify-center mt-12 review-badges">
              <Image 
                className="img-fluid" 
                src="/images/review-logos/trustpilot_reviews.svg" 
                alt="Trustpilot Reviews"
                width={200}
                height={50}
              />
              <Image 
                className="img-fluid" 
                src="/images/review-logos/capterra_reviews.svg" 
                alt="Capterra Reviews"
                width={200}
                height={50}
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-10 py-lg-15">
          <div className="container">
            <div className="row justify-center mb-18">
              <div className="col-lg-9">
                <div className="text-center" data-aos="fade-up-sm" data-aos-delay="50">
                  <h1 className="text-white">
                    Powerful Features for Your <br className="d-none d-xl-block" />
                    <span className="text-primary-dark">Content Creation</span> Needs
                  </h1>
                </div>
              </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-10 gy-lg-12">
              <div className="col" data-aos="fade-up-sm" data-aos-delay="50">
                <div className="text-center">
                  <div className="mb-6">
                    <Image 
                      src="/images/icons/feature-icon-1.svg" 
                      alt="AI Writing"
                      width={64}
                      height={64}
                    />
                  </div>
                  <h4 className="text-white mb-4">AI-Powered Writing</h4>
                  <p>Generate high-quality content in seconds with our advanced AI technology.</p>
                </div>
              </div>
              
              <div className="col" data-aos="fade-up-sm" data-aos-delay="100">
                <div className="text-center">
                  <div className="mb-6">
                    <Image 
                      src="/images/icons/feature-icon-2.svg" 
                      alt="SEO Optimized"
                      width={64}
                      height={64}
                    />
                  </div>
                  <h4 className="text-white mb-4">SEO Optimized</h4>
                  <p>All content is optimized for search engines to help you rank higher.</p>
                </div>
              </div>
              
              <div className="col" data-aos="fade-up-sm" data-aos-delay="150">
                <div className="text-center">
                  <div className="mb-6">
                    <Image 
                      src="/images/icons/feature-icon-3.svg" 
                      alt="Multiple Formats"
                      width={64}
                      height={64}
                    />
                  </div>
                  <h4 className="text-white mb-4">Multiple Formats</h4>
                  <p>Create blogs, emails, social posts, and more with ease.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section - Coming from Payload CMS in future */}
        <section className="py-10 py-lg-15">
          <div className="container">
            <div className="row justify-center mb-18">
              <div className="col-lg-9">
                <div className="text-center" data-aos="fade-up-sm" data-aos-delay="50">
                  <h1 className="text-white">
                    <span className="text-primary-dark">AtomTalks.</span> is Powered by a Dynamic Team.
                  </h1>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-white">Team members can be managed through the Payload CMS admin panel.</p>
              <Link href="/admin" className="btn btn-outline-primary-dark">
                Manage Team
              </Link>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-10 py-lg-15">
          <div className="container">
            <div className="row justify-center">
              <div className="col-lg-10">
                <div className="text-center">
                  <h4 className="mb-10" data-aos="fade-up-sm" data-aos-delay="50">
                    <span className="text-gradient-2">20,000+</span> Professionals & Teams Choose{' '}
                    <span className="text-primary-dark">AtomTalks.</span>
                  </h4>

                  <div className="row align-center justify-center row-cols-3 row-cols-md-5 g-6 g-lg-10 g-xl-20">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="col" data-aos="fade-up-sm" data-aos-delay={100 + i * 50}>
                        <Image 
                          src={`/images/brands/${i}.png`} 
                          alt={`Brand ${i}`} 
                          className="img-fluid brand-img"
                          width={150}
                          height={60}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer dark={true} extraClassList="bg-striped pt-10 pt-lg-15" />
    </div>
  );
}

