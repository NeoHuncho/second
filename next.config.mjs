import { withSentryConfig } from "@sentry/nextjs";
// @ts-check
import withPWA from "next-pwa";



/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));


/** @type {import("next").NextConfig} */

const withCustomPWA = withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  disableDevLogs: true,
});
const config = {
  reactStrictMode: true,

  /**
   * If you have the "experimental: { appDir: true }" setting enabled, then you
   * must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'platform-lookaside.fbsbx.com'],
  },
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default withSentryConfig(withCustomPWA(config), {
// For all available options, see:
// https://github.com/getsentry/sentry-webpack-plugin#options

// Suppresses source map uploading logs during build
silent: true,

org: "second-fu",
project: "second",
}, {
// For all available options, see:
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

// Upload a larger set of source maps for prettier stack traces (increases build time)
widenClientFileUpload: true,

// Transpiles SDK to be compatible with IE11 (increases bundle size)
transpileClientSDK: true,

// Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
tunnelRoute: "/monitoring",

// Hides source maps from generated client bundles
hideSourceMaps: true,

// Automatically tree-shake Sentry logger statements to reduce bundle size
disableLogger: true,

});