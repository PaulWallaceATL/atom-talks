import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Forgot Password - AtomTalks',
  description: 'Reset your AtomTalks account password.',
};

export default function ForgotPasswordPage() {
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
              <h2 className="text-white mb-2">Forgot Password?</h2>
              <p>Enter your email to reset your password</p>
            </div>

            <div className="card bg-dark-blue-3 border-0 p-6 p-lg-8">
              <form action="/api/auth/forgot-password" method="POST">
                <div className="form-group mb-6">
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
                  <div className="form-text">
                    We&apos;ll send you a link to reset your password
                  </div>
                </div>

                <button type="submit" className="btn btn-gradient-1 w-full mb-4">
                  Send Reset Link
                </button>

                <div className="text-center">
                  <p className="mb-0">
                    Remember your password?{' '}
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

