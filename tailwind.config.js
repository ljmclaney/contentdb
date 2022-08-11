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
                'brand-blue': '#33acfa',
                'brand-dark-blue': '#33acfa',
                'indigo-500': '#33acfa',
                'indigo-600': '#33acfa',
                'indigo-700': '#33acfa'
            }
        },
    },

    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
};
