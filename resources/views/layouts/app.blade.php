<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon" />
    <title>BURGERSTORE!</title>

    @include('partials.css')
</head>

<body>

    @include('pages.about-us')

    @include('partials.header')

    @include('partials.sidebar')

    <main>
        @include('pages.home')

        @include('pages.service')

        @include('pages.menu')

        @include('pages.review')

        @include('pages.contact')
    </main>
    <!--~~~~~~~~~~~~~~~ Footer ~~~~~~~~~~~~~~~-->
    @include('partials.footer')

    <!--~~~~~~~~~~~~~~~ Scroll Up ~~~~~~~~~~~~~~~-->
    <a href="#"
        class="fixed right-4 -bottom-1/2 bg-secondaryColor shadow-sm inline-block px-4 py-2 rounded-full text-lg text-blackColor z-50 hover:-translate-y-1 ease-in duration-200"
        id="scroll-up">
        <i class="fa-solid fa-arrow-up"></i>
    </a>

    <!--~~~~~~~~~~~~~~~ Swiper JS ~~~~~~~~~~~~~~~-->
    @include('partials.js')
</body>

</html>
