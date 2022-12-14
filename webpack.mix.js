const mix = require('laravel-mix');
require('laravel-mix-jigsaw');

mix.disableSuccessNotifications();
mix.setPublicPath('source/assets/build');

mix.jigsaw()
    .js('source/_assets/js/app.js', 'js')
    .sass('source/_assets/scss/app.scss', 'css')
    .options({
        processCssUrls: false,
    })
    .browserSync({
        proxy: 'localhost:8000'
    })
    .version();
