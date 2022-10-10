'use strict'

const Env = use('Env')

module.exports = {
  name: Env.get('APP_NAME', 'BC-ExampleAPIPleno'),
  appKey: Env.getOrFail('APP_KEY'),
  http: {
    allowMethodSpoofing: true,
    trustProxy: false,
    subdomainOffset: 2,
    jsonpCallback: 'callback',
    etag: false
  },

  views: {
    cache: Env.get('CACHE_VIEWS', true)
  },

  static: {
    dotfiles: 'ignore',
    etag: true,
    extensions: false
  },

  locales: {
    loader: 'file',
    locale: 'pt'
  },

  logger: {
    transport: 'console',
    console: {
      driver: 'console',
      name: 'bc-example-api',
      level: 'info'
    },

    file: {
      driver: 'file',
      name: 'adonis-app',
      filename: 'bc-example-api.log',
      level: 'info'
    }
  },

  cookie: {
    httpOnly: true,
    sameSite: false,
    path: '/',
    maxAge: 7200
  }
}
