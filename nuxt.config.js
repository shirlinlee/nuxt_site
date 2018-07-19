const axios = require('axios');
const webpack = require('webpack');

module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'quarkbiosciences',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
    plugins: [
        '~/plugins/i18n.js', 
        { src: '~plugins/vue-carousel', ssr: false }, 
        { src: '~/plugins/vue-scroll-reveal', ssr: false }
        // { src: '~/plugins/jquery', ssr: false }
    ],
    generate: {
        routes: ['/', '/en', '/tw'],
    },
    loading: {
        color: '#838094',
        height: '5px'
    },
    // loading: '~/components/loading.vue',
    build: {
        /*
         ** Run ESLint on save
         */
        vendor: ['vue-i18n', 'jquery'],
        plugins: [
            new webpack.ProvidePlugin({
              '$': 'jquery',
              '_': 'lodash'
            })
        ],
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