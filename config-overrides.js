const { override, addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = override(
  addWebpackAlias({
    ['@pages']: path.resolve(__dirname, './src/pages'),
    ['@public']: path.resolve(__dirname, './public'),
    ['@common']: path.resolve(__dirname, './src/common'),
    ['@components']: path.resolve(__dirname, './src/components'),
    ['@utils']: path.resolve(__dirname, './src/utils'),
  }),
)
