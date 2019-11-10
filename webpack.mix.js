let mix = require('laravel-mix');

mix.js('resources/assets/js/index.js', 'public/assets/js')
    .sass('resources/assets/sass/index.scss', 'public/assets/css');
