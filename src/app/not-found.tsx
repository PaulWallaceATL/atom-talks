import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className="wrapper min-vh-100 d-flex align-items-center bg-dark" data-bs-theme="dark">
      <div className="container py-10">
        <div className="row justify-center">
          <div className="col-lg-6">
            <div className="text-center">
              <Link href="/" className="d-inline-block mb-8">
                <Image 
                  src="/images/logo-atomtalks.svg" 
                  alt="AtomTalks" 
                  width={180}
                  height={50}
                />
              </Link>
              
              <div className="mb-8">
                <h1 className="display-1 fw-bold text-gradient-2 mb-4">404</h1>
                <h2 className="text-white mb-4">Page Not Found</h2>
                <p className="fs-lg mb-0">
                  Sorry, the page you are looking for doesn't exist or has been moved.
                </p>
              </div>

              <div className="d-flex gap-4 justify-center">
                <Link href="/" className="btn btn-gradient-1">
                  Go to Homepage
                </Link>
                <Link href="/contact" className="btn btn-outline-primary-dark">
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

