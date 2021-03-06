import colors from 'vuetify/es5/util/colors'

export default {
  hostname: "hire.com",
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - hijri',
    title: 'hijri',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { 'http-equiv': "content-language", content: "ar" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    __dangerouslyDisableSanitizers: ['script'],
script: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=UA-208155997-26",
        async: true,
      },
      {
        innerHTML: `  
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'UA-208155997-26');
      gtag('config', 'AW-955968979'); 
    `,
        type: 'text/javascript',
        charset: 'utf-8',
      }
    ]	
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
  sitemap: {
    hostname: "https://hijre.com",
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/clipboard.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,


  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/google-fonts',
    // '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    rtl: true,
    customVariables: ['~/assets/variables.scss'],
    theme: {

      themes: {
        light: {
          primary: colors.brown.darken3,
          secondary: colors.brown.darken3,
          accent: colors.brown.darken3,
          error: colors.brown.darken3,
        },
        dark: {
          primary: colors.brown.darken3,
          accent: colors.brown.darken3,
          secondary: colors.brown.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  googleFonts: {
    download: true,
    families: {
      Tajawal: true,
      'Open+Sans': true,

      wght: [100, 400],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    }
  }
}
