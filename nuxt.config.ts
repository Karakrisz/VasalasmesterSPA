// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBaseUrl:
        process.env.API_BASE_URL || 'https://blog.vasalasmester.hu/api/public',
    },
  },
  devtools: { enabled: true },
  css: ['~/assets/css/app.css'],
  ssr: true,

  app: {
    head: {
      title: 'Vasalás Mester - Ingek mosása és vasalása, ruhatisztítás Budapesten',
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
            'Ingek mosása és vasalása, ruhatisztítás Budapesten magánszemélyek részére. Gyors, megbízható és professzionális szolgáltatás a VasalásMester csapatától. Bízza ránk az ingjeit!',
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
      script: [
        {
          hid: 'clarity',
          type: 'text/javascript',
          children: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "p3kdgo8i0c");
          `,
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

  sitemap: {
    sitemaps: {
      pages: {
        includeAppSources: true,
        defaults: {
          priority: 0.7,
          changefreq: 'monthly',
        },
      },
      posts: {
        sources: ['/api/sitemap'],
        defaults: {
          priority: 0.9, 
          changefreq: 'daily', 
        },
      },
    },
  },

  
  // sitemap: {
  //   sources: ['/api/sitemap'],
  //   // defaults: { priority: 0.7 }, 
  // },

  // nitro: {
  //   prerender: {
  //     routes: ['/sitemap.xml']
  //   }
  // }

})