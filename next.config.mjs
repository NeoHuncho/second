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
  // disable: process.env.NODE_ENV === "development",
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
export default withCustomPWA(config);
