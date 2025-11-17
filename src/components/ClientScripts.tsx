'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function ClientScripts() {
  useEffect(() => {
    // Initialize Bootstrap after it loads
    if (typeof window !== 'undefined') {
      // Bootstrap will auto-initialize dropdowns and other components
      // We can add custom initialization here if needed
    }
  }, []);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
      {/* AOS disabled to prevent hydration errors - using CSS animations instead */}
    </>
  );
}

