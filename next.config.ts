import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {   
  eslint: {
    ignoreDuringBuilds: true,
},
images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
          {
        protocol: "https",
        hostname: "picsum.photos",
      },
        {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
              {
        protocol: "https",
        hostname: "media.base44.com",
      },
    ],
  },

};
const withNextIntl = createNextIntlPlugin();


export default withNextIntl(nextConfig);

