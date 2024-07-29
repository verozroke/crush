// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Crush',
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' }
      ],
      meta: [
        { name: 'google-site-verification', content: '39CKGqrHvhiXFbGzqR-39VSYfBfbzcHJrLqde59Z6xw' },
        { name: 'yandex-verification', content: '0905eb56b8731059' },
        { name: 'google-site-verification', content: '39CKGqrHvhiXFbGzqR-39VSYfBfbzcHJrLqde59Z6xw' },
      ],
      script: [
        {
          type: 'text/javascript',
          innerHTML: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                      m[i].l=1*new Date();
                      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                      ym(97935596, "init", {
                            clickmap:true,
                            trackLinks:true,
                            accurateTrackBounce:true,
                            webvisor:true
                      });
                    `
        },
      ],
      noscript: [
        { innerHTML: `<div><img src="https://mc.yandex.ru/watch/97935596" style="position:absolute; left:-9999px;" alt="" /></div>` }
      ]
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ssr: false,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    vueI18n: './i18n/i18n.config.ts' // if you are using custom path, default
  },
  gtag: {
    id: 'GTM-KRZNZJBN'
  },
  modules: ["@nuxtjs/i18n", "@nuxt/image", "nuxt-gtag"]
})