import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Login - AtomTalks',
  description: 'Login to your AtomTalks account and start creating amazing content.',
};

export default function LoginPage() {
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
              <h2 className="text-white mb-2">Welcome Back!</h2>
              <p>Login to continue to AtomTalks</p>
            </div>

            <div className="card bg-dark-blue-3 border-0 p-6 p-lg-8">
              <form action="/api/auth/login" method="POST">
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
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center mb-6">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="remember"
                      name="remember"
                    />
                    <label className="form-check-label" htmlFor="remember">
                      Remember me
                    </label>
                  </div>
                  <Link href="/forgot-password" className="text-primary-dark">
                    Forgot Password?
                  </Link>
                </div>

                <button type="submit" className="btn btn-gradient-1 w-full mb-4">
                  Login
                </button>

                <div className="text-center">
                  <p className="mb-0">
                    Don&apos;t have an account?{' '}
                    <Link href="/register" className="text-primary-dark">
                      Sign up
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

