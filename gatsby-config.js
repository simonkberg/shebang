'use strict'

module.exports = {
  siteMetadata: {
    siteUrl: 'https://shebang.consulting',
    title: 'Shebang Consulting',
    description:
      'Fullstack web consulting, specialized in React, Node.js, and GraphQL, with a strong focus on building scalable frontend architecture.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-emotion',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    'gatsby-plugin-flow',
  ],
}
