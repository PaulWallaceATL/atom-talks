import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Sign Up - AtomTalks',
  description: 'Create your AtomTalks account and start creating amazing content today.',
};

export default function RegisterPage() {
  return (
    <div className="wrapper min-vh-100 d-flex align-items-center bg-dark" data-bs-theme="dark">
      <div className="container py-10">
        <div className="row justify-center">
          <div className="col-lg-5 col-xl-4">
            <div className="text-center mb-8">
              <Link href="/" className="d-inline-block mb-6">
                <Image 
                  src="/images/logo-atomtalks.svg" 
                  alt="AtomTalks" 
                  width={165}
                  height={50}
                />
              </Link>
              <h2 className="text-white mb-2">Create Account</h2>
              <p>Get started with AtomTalks for free</p>
            </div>

            <div className="card bg-dark-blue-3 border-0 p-6 p-lg-8">
              <form action="/api/auth/register" method="POST">
                <div className="form-group mb-4">
                  <label htmlFor="name" className="form-label text-white">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="email" className="form-label text-white">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="password" className="form-label text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Create a strong password"
                    required
                  />
                </div>

                <div className="form-group mb-6">
                  <label htmlFor="confirmPassword" className="form-label text-white">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    required
                  />
                </div>

                <div className="form-check mb-6">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="terms"
                    name="terms"
                    required
                  />
                  <label className="form-check-label" htmlFor="terms">
                    I agree to the{' '}
                    <Link href="/terms" className="text-primary-dark">
                      Terms & Conditions
                    </Link>
                  </label>
                </div>

                <button type="submit" className="btn btn-gradient-1 w-full mb-4">
                  Create Account
                </button>

                <div className="text-center">
                  <p className="mb-0">
                    Already have an account?{' '}
                    <Link href="/login" className="text-primary-dark">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>

            <div className="text-center mt-6">
              <Link href="/" className="text-white-50">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

