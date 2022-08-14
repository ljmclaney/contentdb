<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'CollectContent') }}</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <!-- Scripts -->
        @routes
        @vite('resources/js/app.js')
        @inertiaHead

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3DMNKRVBYW"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-3DMNKRVBYW');
        </script>
    </head>
    <body class="font-sans antialiased text-black bg-white">
        @inertia
    </body>
</html>
