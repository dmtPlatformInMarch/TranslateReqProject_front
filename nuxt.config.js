module.exports = {
    head: {
        title: "DMT",
        link: [{
            rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'
        }],
        meta: [{
            charset: 'utf-8'
        }, {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover'
        }, {
            'http-equiv': 'X-UA-Compatible', content: 'IE=edge',
        }, {
            name: 'description',
            content: 'DMT Translate Web'
        }, {
            hid: 'maintitle',
            name: 'og:title',
            content: 'DMT',
        }, {
            hid: 'maindesc',
            name: 'og:description',
            content: 'DMT Translate Web'
        }, {
            hid: 'maintype',
            property: 'og:type',
            content: 'website',
        }, /*{
            hid: 'mainimage',
            property: 'og:image',
            content: ''
        }, {
            hid: 'mainurl',
            property: 'og:url',
            content: ''
        },*/]
    },
    buildModules: [
        '@nuxtjs/vuetify',
        '@nuxtjs/moment',
    ],
    moment: {
        locales: ['ko'],
    },
    build: {
        analyze: false,
        extend(config, { isClient, isServer, isDev }) {
            if (isServer && !isDev === 'production') {
                config.devtool = 'hidden-source-map';
            }
        },
    },
    modules: [
        '@nuxtjs/axios',
    ],
    moduleContext: {
        './node_modules/pdfmake/build/vfs_fonts.js': 'window',
    },
    plugins: [
        { src: '~/plugins/manage.js', ssr: false },
    ],
    vuetify: {},
    axios: {
        browserBaseURL: 'http://localhost:3085',
        baseURL: 'http://localhost:3085',
        https: false,
    },
}