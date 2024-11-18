// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBaseUrl:
        process.env.API_BASE_URL || 'https://vasalasmester.hu/api/public',
    },
  },
  devtools: { enabled: true },
  css: ['~/assets/css/app.css'],
  ssr: true,

  app: {
    head: {
      title: 'Vasalás Mester - Ingek mosása és vasalása Budapesten',
      htmlAttrs: {
        lang: 'hu',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Ingek mosása és vasalása Budapesten magánszemélyek részére. Gyors, megbízható és professzionális szolgáltatás a VasalásMester csapatától. Bízza ránk az ingjeit!',
        },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'robots', name: 'robots', content: 'index, follow' },
        {
          'http-equiv': 'Content-Security-Policy',
          content: `
            default-src 'self' https: data:;
            img-src 'self' https: http: data:;
            font-src 'self' https: data:;
            style-src 'self' https: 'unsafe-inline';
            script-src 'self' https: 'unsafe-inline' 'unsafe-eval';
            connect-src 'self' https: http: https://vasalasmester.hu/api/public;
          `,
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://www.vasalasmester.hu' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet',
        },
      ],
    },
  },

  modules: [
    '@nuxt/image',
    '@nuxtjs/sitemap',
    // [
    //   'nuxt-mail',
    //   {
    //     message: {
    //       to: 'web@alkuszom.info',
    //     },
    //     smtp: {
    //       host: '',
    //       port: '',
    //       auth: {
    //         user: '',
    //         pass: '',
    //       },
    //     },
    //   },
    // ],
  ],

  site: {
    url: 'https://www.vasalasmester.hu',
    trailingSlash: true,
  },

  compatibilityDate: '2024-09-12',

  // sitemap: {
  //   sitemaps: {
  //     pages: {
  //       includeAppSources: true, 
  //       defaults: { priority: 1.0 }, 
  //     },
  //     posts: {
  //       sources: ['/api/sitemap'],
  //       defaults: { priority: 0.7 }, 
  //     },
  //   },
  // },

  sitemap: {
    sources: ['/api/sitemap'],
    // defaults: { priority: 0.7 }, 
  },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }

})