<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Flight Finder</title>
</head>
<body>

    <div id="app" class="app"></div>

    @viteReactRefresh
    @vite('resources/js/front.jsx')

</body>
</html>
