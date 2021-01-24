const splashscreens = '/img/'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  router: {
    base: '/blogs/',
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'blogs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/blogs/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        href: splashscreens + 'iphone5_splash.png',
        media:
          '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image',
      },
      {
        href: splashscreens + 'iphone6_splash.png',
        media:
          '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image',
      },
      {
        href: splashscreens + 'iphoneplus_splash.png',
        media:
          '(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)',
        rel: 'apple-touch-startup-image',
      },
      {
        href: splashscreens + 'iphonex_splash.png',
        media:
          '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)',
        rel: 'apple-touch-startup-image',
      },
      {
        href: splashscreens + 'iphonexr_splash.png',
        media:
          '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image',
      },
      {
        href: splashscreens + 'iphonexsmax_splash.png',
        media:
          '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)',
        rel: 'apple-touch-startup-image',
      },
      {
        href: splashscreens + 'ipad_splash.png',
        media:
          '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image',
      },
      {
        href: splashscreens + 'ipadpro1_splash.png',
        media:
          '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image',
      },
      {
        href: splashscreens + 'ipadpro3_splash.png',
        media:
          '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image',
      },
      {
        href: splashscreens + 'ipadpro2_splash.png',
        media:
          '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],
  pwa: {
    manifest: {
      name: 'myu-suke Weblog', // アプリの名前
    },
    meta: {
      /* meta options */
      theme_color: '#009669',
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: '/blogs/posts.*',
          handler: 'NetworkFirst',
          method: 'GET',
          strategyOptions: {
            cacheExpiration: {
              maxAgeSeconds: 60 * 60 * 24, // 1日
            },
            cacheableResponse: {
              statuses: [200],
            },
          },
        },
        {
          urlPattern: '/blogs/tags/.*',
          handler: 'NetworkFirst',
          method: 'GET',
          strategyOptions: {
            cacheExpiration: {
              maxAgeSeconds: 60 * 60 * 24, // 1日
            },
            cacheableResponse: {
              statuses: [200],
            },
          },
        },
      ],
    },
  },
  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
