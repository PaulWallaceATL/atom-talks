import type { NextConfig } from "next";
import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
};

export default withPayload(nextConfig);
