'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  APP_ID: '"dev-app-id"',
  BACKEND_URI: '"http://127.0.0.1:8000"'
})
