const nextSafe = require("next-safe");

const isDev = process.env.NODE_ENV !== "production";

module.exports = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 31536000,
  },
  experimental: {
    scrollRestoration: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: nextSafe({
          contentTypeOptions: "nosniff",
          contentSecurityPolicy: {
            "base-uri": "'none'",
            "child-src": "'none'",
            "connect-src": isDev
              ? ["'self'", "webpack://*", "https://vitals.vercel-insights.com"]
              : ["'self'", "webpack://*", "https://vitals.vercel-insights.com"],
            "default-src": "'self'",
            "font-src": "'self'",
            "form-action": "'self'",
            "frame-ancestors": "'none'",
            "img-src": "'self' data:;",
            "manifest-src": "'self'",
            "media-src": "'self'",
            "object-src": "data:;",
            "prefetch-src": "'self'",
            "script-src": isDev
              ? ["'self' 'unsafe-eval' 'unsafe-inline'"]
              : ["'self' "],
            "style-src": "'self' 'unsafe-inline'",
            "worker-src": "'self'",
            reportOnly: false,
          },
          frameOptions: "DENY",
          permissionsPolicy: {},
          permissionsPolicyDirectiveSupport: ["proposed", "standard"],
          referrerPolicy: "no-referrer",
          xssProtection: "1; mode=block",
        }),
      },
    ];
  },
};
