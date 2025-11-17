import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA1 from '@/components/CTA1';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Blog - AtomTalks',
  description: 'Latest articles and insights about AI content writing and copywriting.',
};

// This would come from Payload CMS in production
const blogPosts = [
  {
    id: 1,
    title: 'Best free AI content generator & AI writers for 2023',
    category: 'Design',
    date: '14 March 2023',
    readTime: '5 Min. Read',
    image: '/images/thumbnails/1.jpg',
    slug: 'best-free-ai-content-generator',
  },
  {
    id: 2,
    title: 'Using AI to Write Articles: how I churn out 2000 words',
    category: 'ChatGPT',
    date: '14 March 2023',
    readTime: '5 Min. Read',
    image: '/images/thumbnails/2.jpg',
    slug: 'using-ai-to-write-articles',
  },
  {
    id: 3,
    title: 'Free AI content generator tools and free-forever AI writers in 2023',
    category: 'AI Tool',
    date: '14 March 2023',
    readTime: '5 Min. Read',
    image: '/images/thumbnails/3.jpg',
    slug: 'free-ai-content-generator-tools',
  },
  {
    id: 4,
    title: 'Best free AI content generator & AI writers for 2023',
    category: 'Design',
    date: '14 March 2023',
    readTime: '5 Min. Read',
    image: '/images/thumbnails/4.jpg',
    slug: 'best-free-ai-content-generator-2',
  },
  {
    id: 5,
    title: 'Using AI to Write Articles: how I churn out 2000 words',
    category: 'ChatGPT',
    date: '14 March 2023',
    readTime: '5 Min. Read',
    image: '/images/thumbnails/5.jpg',
    slug: 'using-ai-to-write-articles-2',
  },
  {
    id: 6,
    title: 'Free AI content generator tools and free-forever AI writers in 2023',
    category: 'AI Tool',
    date: '14 March 2023',
    readTime: '5 Min. Read',
    image: '/images/thumbnails/6.jpg',
    slug: 'free-ai-content-generator-tools-2',
  },
];

export default function BlogPage() {
  return (
    <div className="wrapper d-flex flex-column justify-between">
      {/* Navbar */}
      <Navbar dark={true} extraClassList="bg-dark" />

      <main className="flex-grow-1">
        {/* Page Header */}
        <section className="py-10 py-lg-15 bg-striped" data-aos="fade-up-sm" data-aos-delay="50">
          <div className="container">
            <div className="text-center">
              <h3 className="text-white mb-2">Blog Posts</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-center fs-sm">
                  <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Blog Posts</li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="pt-20 pb-10 pt-lg-30 pb-lg-15">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-6 gy-10 gy-lg-16">
              {blogPosts.map((post, index) => (
                <div 
                  key={post.id} 
                  className="col" 
                  data-aos="fade-up-sm" 
                  data-aos-delay={50 + index * 50}
                >
                  <div className="blog-card card border-0">
                    <div className="card-header border-0 bg-transparent ratio ratio-6x4 rounded overflow-hidden">
                      <Link href={`/blog/${post.slug}`} className="d-block">
                        <Image
                          src={post.image}
                          alt={post.title}
                          className="img-fluid post-thumbnail w-full h-full object-cover"
                          width={400}
                          height={267}
                        />
                      </Link>
                    </div>
                    <div className="card-body p-0 mt-6">
                      <ul className="list-unstyled d-flex flex-wrap align-center fs-sm meta-list">
                        <li>{post.category}</li>
                        <li>{post.date}</li>
                        <li>{post.readTime}</li>
                      </ul>

                      <h4 className="post-title fw-medium mb-0">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="text-center mt-18">
              <ul className="pagination flex-wrap justify-center gap-4">
                <li className="page-item">
                  <a className="page-link disabled" href="#" aria-label="Previous">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M5 12h14M5 12l4 4m-4-4 4-4" />
                    </svg>
                  </a>
                </li>
                <li className="page-item"><a className="page-link active" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">...</a></li>
                <li className="page-item"><a className="page-link" href="#">10</a></li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M5 12h14m-4 4 4-4m-4-4 4 4" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center mt-10">
              <p className="text-white-50">
                Note: In production, blog posts will be dynamically loaded from Payload CMS
              </p>
              <Link href="/admin" className="btn btn-outline-primary-dark">
                Manage Blog Posts
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTA1 dark={true} />
      </main>

      {/* Footer */}
      <Footer dark={true} extraClassList="bg-striped pt-10 pt-lg-15" />
    </div>
  );
}

