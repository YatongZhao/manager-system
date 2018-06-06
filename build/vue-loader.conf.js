'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ExtractDocs = new ExtractTextPlugin('docs.md')

const vueLoaderConfig = {
  loaders: {
    ...utils.cssLoaders({
      sourceMap: sourceMapEnabled,
      extract: isProduction
    }),
    'docs': ExtractDocs.extract('raw-loader')
  },
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}

module.exports = {
  vueLoaderConfig,
  ExtractDocs
}
