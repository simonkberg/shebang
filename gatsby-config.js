'use strict'

console.log('***DEBUG NETLIFY ENV START***')
console.log(process.env.CONTEXT)
console.log(process.env.URL)
console.log(process.env.DEPLOY_URL)
console.log(process.env.DEPLOY_PRIME_URL)
console.log('***DEBUG NETLIFY ENV END***')

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
  ],
}
