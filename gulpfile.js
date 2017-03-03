var elixir = require('laravel-elixir');

elixir(function (mix) {
    mix.less('theme.less', 'dist/css');
});