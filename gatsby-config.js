/* eslint @typescript-eslint/camelcase: 0 */
const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = {
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      createProxyMiddleware({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      }),
    )
  },
  siteMetadata: {
    title: 'Nomod',
    description: 'A better banking experience for your business',
    keywords:
      'stripe iphone, stripe android, stripe ios, stripe mobile, stripe payments, stripe charge, stripe app, stripe mobile payments, stripe account, stripe dashboard, stripe, charge, payment, payment app, android payments, credit card, iphone credit card, android credit card, credit card app, credit card pos, pos, point of sale, point of sale app, card payments, card machine, card terminal, card processing, virtual terminal, visa, mastercard, multi-currency, IBANs, payment cards, nomod',
    siteUrl: 'https://nomod.com', // important for robots-txt and sitemap
    twitterUsername: '@Nomod',
    author: `@Nomod`,
    subscribeMailjetendpoint: '/.netlify/functions/subscribeMailjet',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-142731987-1',
        heading: true,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://nomod.com',
        sitemap: 'https://nomod.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locales`,
        path: `${__dirname}/src/i18n/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `comingSoon`,
        path: `${__dirname}/src/coming-soon-page/`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1366,
              quality: 90,
              withWebp: true,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nomod`,
        short_name: `Nomod`,
        description: 'A better banking experience for your business',
        start_url: `/`,
        background_color: `#244feb`,
        theme_color: `#244feb`,
        display: `minimal-ui`,
        icon: `static/img/nomod-384x384.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `static/img/nomod-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
          {
            src: `static/img/nomod-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },

          {
            src: `static/img/nomod-180x180.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
        ],
      },
    },
    // must be after other CSS plugins
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    // If you want to get rid of the service worker installed by
    // gatsby-plugin-offline comment it out and comment the
    // gatsby-plugin-remove-serviceworker below
    // `gatsby-plugin-remove-serviceworker`,
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
