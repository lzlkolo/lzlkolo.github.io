const resource = [
    /* --- CSS --- */
    '/assets/css/style.css',

    /* --- PWA --- */
    '/app.js',
    '/sw.js',

    /* --- HTML --- */
    '/index.html',
    '/404.html',

    
        '/categories/',
    
        '/tags/',
    
        '/archives/',
    
        '/about/',
    

    /* --- Favicons & compressed JS --- */
    
    
        '/_javascript/categories.js',
        '/_javascript/commons.js',
        '/_javascript/misc.js',
        '/_javascript/modules/components/back-to-top.js',
        '/_javascript/modules/components/category-collapse.js',
        '/_javascript/modules/components/clipboard.js',
        '/_javascript/modules/components/convert-title.js',
        '/_javascript/modules/components/img-extra.js',
        '/_javascript/modules/components/locale-datetime.js',
        '/_javascript/modules/components/mode-watcher.js',
        '/_javascript/modules/components/pageviews.js',
        '/_javascript/modules/components/search-display.js',
        '/_javascript/modules/components/sidebar.js',
        '/_javascript/modules/components/smooth-scroll.js',
        '/_javascript/modules/components/toc.js',
        '/_javascript/modules/components/tooltip-loader.js',
        '/_javascript/modules/components/topbar-switcher.js',
        '/_javascript/modules/components/utils/scroll-helper.js',
        '/_javascript/modules/layouts.js',
        '/_javascript/modules/layouts/basic.js',
        '/_javascript/modules/layouts/sidebar.js',
        '/_javascript/modules/layouts/topbar.js',
        '/_javascript/modules/plugins.js',
        '/_javascript/page.js',
        '/_javascript/post.js',
        '/assets/img/favicons/android-chrome-192x192.png',
        '/assets/img/favicons/android-chrome-512x512.png',
        '/assets/img/favicons/apple-touch-icon.png',
        '/assets/img/favicons/favicon-16x16.png',
        '/assets/img/favicons/favicon-32x32.png',
        '/assets/img/favicons/favicon.ico',
        '/assets/img/favicons/mstile-150x150.png'
];

/* The request url with below domain will be cached */
const allowedDomains = [
    

    'localhost:4000',

    
        'chirpy-img.netlify.app',
    

    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'cdn.jsdelivr.net',
    'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
    
];

