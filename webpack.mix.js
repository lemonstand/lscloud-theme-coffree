let mix = require('laravel-mix');

mix.js('resources/src/js/main.js', 'resources/js')
   .sass('resources/src/scss/main.scss', 'resources/css')
   .setPublicPath('resources')
   .setResourceRoot('../');
