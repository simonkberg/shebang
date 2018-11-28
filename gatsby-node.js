'use strict'

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: 'babel-plugin-emotion',
  })
}
