/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

'use strict'

exports.modifyWebpackConfig = ({ config, stage }) => {
  config.removeLoader('css')
  config.removeLoader('cssModules')
  config.loader('css', {
    test: /\.css$/,
    loader: 'raw-loader',
  })
}
