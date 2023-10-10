// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  tailwindcss: {
    cssPath: "~/assets/main.css",
  },
  css:['~/assets/css/plugins.bundle.css'],

  app:{
    head:{
      title:"Tailwind Admin Panel | Jugol Kumar",
      meta:[
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      ],
      link:[
        {rel:"apple-touch-icon", sizes:"180x180", href:"./admin/favicon/apple-touch-icon.png"},
        {rel:"icon", sizes:"32x32", type:"image/png", href:"./admin/favicon/favicon-32x32.png"},
        {rel:"icon", sizes:"16x16", type:"image/png", href:"./admin/favicon/favicon-16x16.png"},
        {rel:"manifest", href:"./admin/favicon/site.webmanifest"},
      ]
    }
  },  
  // routeRules:{
  //   '/' :{ssr:false},
  //   '/old-page': { redirect: '/admin' }
  // }
  ssr:false
})
