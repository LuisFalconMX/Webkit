const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')
const tailwindcssNesting = require('tailwindcss/nesting')
const cssnano = require('cssnano')
const config = {}

module.exports = ({ env }) => {
  const Production = env === 'production'

  config.plugins = [
    tailwindcssNesting(),
    tailwindcss(),
    autoprefixer(),
    Production &&
      cssnano({ preset: ['default', { discardComments: { removeAll: true } }] })
  ]

  return config
}
