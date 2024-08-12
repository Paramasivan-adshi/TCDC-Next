/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'http://localhost:3000/',
  generateRobotsTxt: true,
  sitemapSize: 5000, // Adjust this number based on your URL count
  generateIndexSitemap: false, // Avoid generating an index sitemap
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
};

module.exports = config;