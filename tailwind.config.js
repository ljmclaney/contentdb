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
            },
            typography: ({ theme }) => ({
                black: {
                    css: {
                        '--tw-prose-body': '#000',
                        '--tw-prose-headings': '#000',
                        '--tw-prose-lead': '#000',
                        '--tw-prose-links': '#000',
                        '--tw-prose-bold': '#000',
                        '--tw-prose-counters': '#000',
                        '--tw-prose-bullets': '#000',
                        '--tw-prose-hr': '#000',
                        '--tw-prose-quotes': '#000',
                        '--tw-prose-quote-borders': '#000',
                        '--tw-prose-captions': '#000',
                        '--tw-prose-code': '#000',
                        '--tw-prose-pre-code': '#000',
                        '--tw-prose-pre-bg': '#000',
                        '--tw-prose-th-borders': '#000',
                        '--tw-prose-td-borders': '#000',
                        '--tw-prose-invert-body': '#000',
                        '--tw-prose-invert-headings': theme('colors.white'),
                        '--tw-prose-invert-lead': '#000',
                        '--tw-prose-invert-links': theme('colors.white'),
                        '--tw-prose-invert-bold': theme('colors.white'),
                        '--tw-prose-invert-counters': '#000',
                        '--tw-prose-invert-bullets': '#000',
                        '--tw-prose-invert-hr': '#000',
                        '--tw-prose-invert-quotes': '#000',
                        '--tw-prose-invert-quote-borders': '#000',
                        '--tw-prose-invert-captions': '#000',
                        '--tw-prose-invert-code': theme('colors.white'),
                        '--tw-prose-invert-pre-code': '#000',
                        '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
                        '--tw-prose-invert-th-borders': '#000',
                        '--tw-prose-invert-td-borders': '#000',
                    },
                },
            }),
        },
    },

    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
};
