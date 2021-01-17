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
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Shebang Consulting',
        short_name: 'Shebang',
        start_url: '/',
        background_color: '#151515',
        theme_color: '#151515',
        display: 'minimal-ui',
        icon: 'src/assets/icon.png',
      },
    },
  ],
}
