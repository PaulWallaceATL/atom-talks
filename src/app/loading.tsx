export default function Loading() {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-dark">
      <div className="text-center">
        <div className="spinner-border text-primary-dark" role="status" style={{ width: '3rem', height: '3rem' }}>
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="text-white mt-4">Loading...</p>
      </div>
    </div>
  );
}

