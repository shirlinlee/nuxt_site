const axios = require('axios');
module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'quarkbiosciences',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'google-site-verification', content: 'kQ4BC0_h7RQmC3p5UB-CNpsVZXibQekymPkrcpu9Hrk' },
            
            { hid: 'description', name: 'description', content: 'quarkbiosciences' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ]
    },
    css: [
        'assets/reset.css',
        'assets/main.css'
    ],
    router: {
        middleware: 'i18n'
    },
    plugins: ['~/plugins/i18n.js', { src: '~plugins/vue-carousel', ssr: false }, { src: '~/plugins/vue-scroll-reveal', ssr: false }],
    generate: {
        routes: ['/', '/en', '/tw', '/blog/1', 'news/1', 'video/1'],
    },
    // generate: {
    //     routes: [
    //         function() {
    //             return axios.get('http://210.68.186.61:8082/Videos/en')
    //                 .then((res) => {
    //                     return res.data.map((user) => {
    //                         return '/video/' + user.id
    //                     })

    //                 })
    //         },
    //         '/', '/en', '/tw', '/blog/1', 'news/1', 'video/1'

    //     ]
    // },
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** Run ESLint on save
         */
        vendor: ['vue-i18n', 'jquery'],
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }

    }
}