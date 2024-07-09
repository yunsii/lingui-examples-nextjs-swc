/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en', 'sr', 'es', 'pseudo'],
    defaultLocale: 'en'
  },
  pageExtensions: ['page.tsx'],
  experimental: {
    swcPlugins: [['@lingui/swc-plugin', {}]]
  }
}
