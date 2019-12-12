/* eslint-disable indent */
/* eslint-disable prettier/prettier */
export default {
  title: process.env.npm_package_name || '',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: process.env.npm_package_description || ''
    },
    { name: 'description', content: 'Latest 9ja. Music and Entertainment Zone' },
    { name: 'author', content: 'Igbogbo Murray, Justin, Emmanuel Alabi, Eben, Ebenezer Oladutemu' },
    { name: 'keywords', content: 'music, latest 9ja, Davido, Wizkid, news, download, latest, 9ja, latest9ja, videos, gist' },
    { name: 'agency', content: 'Latest 9ja' },
    { name: 'image', content: 'https://latest9ja.com.ng/logo-frames/latest-9ja.png' },
    // Schema.org for Google
    { itemprop: 'name', content: 'Latest 9ja' },
    { itemprop: 'title', content: 'Latest 9ja' },
    { itemprop: 'description', content: 'Latest 9ja. Music and Entertainment Zone' },
    { itemprop: 'image', content: 'https://latest9ja.com.ng/logo-frames/latest-9ja.png' },
    // Open Graph general (Facebook, Pinterest & Google+)
    { property: 'og:title', content: 'Latest 9ja' },
    { property: 'og:description', content: 'Latest 9ja. Music and Entertainment Zone' },
    { property: 'og:url', content: 'https://latest9ja.com.ng' },
    { property: 'og:image', content: 'https://latest9ja.com.ng/logo-frames/latest-9ja.png' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'en_NG' },
    { property: 'og:site_name', content: 'Latest 9ja' },
    // Twitter
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:url', content: 'https://latest9ja.com.ng' },
    { name: 'twitter:title', content: 'Latest 9ja' },
    { name: 'twitter:description', content: 'Latest 9ja. Music and Entertainment Zone' },
    { name: 'twitter:image', content: 'https://latest9ja.com.ng/logo-frames/latest-9ja.png' },
    { name: 'twitter:site', content: '@' },
    { name: 'twitter:creator', content: '@' }
  ],
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Cabin+Sketch:400,700&display=swap' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat&display=swap&subset=latin-ext' },
    { rel: 'icon', type: 'image/x-icon', href: '/logo-frames/latest-9ja.png' }
  ],
  script: [
    {
      src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
      defer: true,
      id: 'netlify-identity-widget-script'
    },
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
      async: true,
      'data-ad-client': 'ca-pub-8395629923299240'
    }
  ]
}
