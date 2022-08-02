const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Gilroy', ...defaultTheme.fontFamily.sans],
            },
            boxShadow: {
                'DEFAULT': '0px 2px 7px rgba(0, 0, 0, 0.05)'
            },
            colors: {
                'brand-grey': '#fbfbfb',
                'brand-yellow': '#FFEBCC',
                'brand-green': '#DAF2F0',
                'brand-orange': '#FFE2D6',
                'brand-blue': '#D7E1F9',
                'brand-red': '#FAD8D6',
            }
        },
    },

    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
};
