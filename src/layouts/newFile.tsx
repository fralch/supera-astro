import { Astro } from './Layout.astro';

<Fragment>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="description" content="Astro description" />
<meta name="viewport" content="width=device-width" />
<link rel="icon" type="image/svg+xml" href="./favicon2.svg" />
<meta name="generator" content={Astro.generator} />
<title>{title}</title>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
<script>
{() => {
// Burger menus
document.addEventListener('DOMContentLoaded', function () {
// open
const burger = document.querySelectorAll('.navbar-burger');
const menu = document.querySelectorAll('.navbar-menu');

if (burger.length && menu.length) {
for (var i = 0; i < burger.length; i++) {
burger[i].addEventListener('click', function () {
for (var j = 0; j < menu.length; j++) {
menu[j].classList.toggle('hidden');
}
});
}
}

// close
const close = document.querySelectorAll('.navbar-close');
const backdrop = document.querySelectorAll('.navbar-backdrop');

if (close.length) {
for (var i = 0; i < close.length; i++) {
close[i].addEventListener('click', function () {
for (var j = 0; j < menu.length; j++) {
menu[j].classList.toggle('hidden');
}
});
}
}

if (backdrop.length) {
for (var i = 0; i < backdrop.length; i++) {
backdrop[i].addEventListener('click', function () {
for (var j = 0; j < menu.length; j++) {
menu[j].classList.toggle('hidden');
}
});
}
}
});
}}
</script>
</head>
<body>
<header class="fixed top-0 right-0 border-gray-200 px-4 lg:px-6 py-4 dark:bg-0A4033 w-full fixed-header">
<nav class="relative px-4 py-4 flex justify-between items-center bg-secondary-100 ">
<a href="https://flowbite.com" class="flex items-center">
<img src="./supera-crema2.svg" class="h-20 " alt="Supera Logo" />
</a>
<div class="lg:hidden">
<button class="navbar-burger flex items-center text-blue-600 p-3">
<svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<title>Mobile menu</title>
<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
</svg>
</button>
</div>
<ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
<li><a class="text-sm text-gray-400 hover:text-gray-500" href="#">Home</a></li>
<li class="text-gray-300">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
<path d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" {...{ "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2" }} />
</svg>
</li>
<li><a class="text-sm text-blue-600 font-bold" href="#">About Us</a></li>
<li class="text-gray-300">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
<path d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" {...{ "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2" }} />
</svg>
</li>
<li><a class="text-sm text-gray-400 hover:text-gray-500" href="#">Services</a></li>
<li class="text-gray-300">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
<path d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" {...{ "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2" }} />
</svg>
</li>
<li><a class="text-sm text-gray-400 hover:text-gray-500" href="#">Pricing</a></li>
<li class="text-gray-300">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
<path d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" {...{ "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2" }} />
</svg>
</li>
<li><a class="text-sm text-gray-400 hover:text-gray-500" href="#">Contact</a></li>
<li class="text-gray-300">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
<path d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" {...{ "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2" }} />
</svg>
</li>
<li class="relative" {...{ "x-data": "{ open: false }", "@click.away": "open = false" }}>
<button class="flex items-center justify-between w-full py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" {...{ "@click": "open = !open" }}>
<span>Servicios</span>
<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...{ ":class": "{ 'transform rotate-180': open }" }}><path d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" {...{ "fill-rule": "evenodd", "clip-rule": "evenodd" }}></path></svg>
</button>
<div class="absolute z-10 w-500 max-w-xl py-2 mt-2 space-y-2 bg-white rounded-lg shadow-lg dark:bg-gray-800" {...{ "x-show": "open", "x-transition:enter": "transition transform duration-300 ease-out", "x-transition:enter-start": "opacity-0 -translate-y-2", "x-transition:enter-end": "opacity-100 translate-y-0", "x-transition:leave": "transition transform duration-300 ease-in", "x-transition:leave-start": "opacity-100 translate-y-0", "x-transition:leave-end": "opacity-0 -translate-y-3" }}>
<a href="#" class="block py-2 pl-3 text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 pr-20">Penal</a>
<a href="#" class="block py-2 pl-3 text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700">Civil</a>
<a href="#" class="block py-2 pl-3 text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700">Laboral</a>
<a href="#" class="block py-2 pl-3 text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700">Corporativo</a>
</div>
</li>
</ul>
<a class="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" href="#">Sign In</a>
<a class="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="#">Sign up</a>
</nav>
<div class="navbar-menu relative z-50 hidden">
<div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
<nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
<div class="flex items-center mb-8">
<a class="mr-auto text-3xl font-bold leading-none" href="#">
<svg class="h-12" viewBox="0 0 10240 10240">
<path xmlns="http://www.w3.org/2000/svg" d="M8284 9162 c-2 -207 -55 -427 -161 -667 -147 -333 -404 -644 -733 -886 -81 -59 -247 -169 -256 -169 -3 0 -18 -9 -34 -20 -26 -19 -344 -180 -354 -180 -3 0 -29 -11 -58 -24 -227 -101 -642 -225 -973 -290 -125 -25 -397 -70 -480 -80 -22 -3 -76 -9 -120 -15 -100 -13 -142 -17 -357 -36 -29 -2 -98 -7 -153 -10 -267 -15 -436 -28 -525 -40 -14 -2 -45 -7 -70 -10 -59 -8 -99 -14 -130 -20 -14 -3 -41 -7 -60 -11 -19 -3 -39 -7 -45 -8 -5 -2 -28 -6 -50 -10 -234 -45 -617 -165 -822 -257 -23 -10 -45 -19 -48 -19 -7 0 -284 -138 -340 -170 -631 -355 -1107 -842 -1402 -1432 -159 -320 -251 -633 -308 -1056 -26 -190 -27 -635 -1 -832 3 -19 7 -59 10 -89 4 -30 11 -84 17 -120 6 -36 12 -77 14 -91 7 -43 33 -174 39 -190 3 -8 7 -28 9 -45 6 -35 52 -221 72 -285 7 -25 23 -79 35 -120 29 -99 118 -283 189 -389 67 -103 203 -244 286 -298 75 -49 178 -103 196 -103 16 0 27 16 77 110 124 231 304 529 485 800 82 124 153 227 157 230 3 3 28 36 54 74 116 167 384 497 546 671 148 160 448 450 560 542 14 12 54 45 90 75 88 73 219 172 313 238 42 29 77 57 77 62 0 5 -13 34 -29 66 -69 137 -149 405 -181 602 -7 41 -14 82 -15 90 -1 8 -6 46 -10 83 -3 37 -8 77 -10 88 -2 11 -7 65 -11 122 -3 56 -8 104 -9 107 -2 3 0 12 5 19 6 10 10 8 15 -10 10 -34 167 -346 228 -454 118 -210 319 -515 340 -515 4 0 40 18 80 40 230 128 521 255 787 343 118 40 336 102 395 113 28 5 53 11 105 23 25 5 59 12 75 15 17 3 41 8 55 11 34 7 274 43 335 50 152 18 372 29 565 29 194 0 481 -11 489 -19 2 -3 -3 -6 -12 -6 -9 -1 -20 -2 -24 -3 -33 -8 -73 -16 -98 -21 -61 -10 -264 -56 -390 -90 -649 -170 -1243 -437 -1770 -794 -60 -41 -121 -82 -134 -93 l-24 -18 124 -59 c109 -52 282 -116 404 -149 92 -26 192 -51 220 -55 17 -3 64 -12 105 -21 71 -14 151 -28 230 -41 19 -3 46 -7 60 -10 14 -2 45 -7 70 -10 25 -4 56 -8 70 -10 14 -2 53 -7 88 -10 35 -4 71 -8 81 -10 10 -2 51 -6 92 -9 101 -9 141 -14 147 -21 3 -3 -15 -5 -39 -6 -24 0 -52 -2 -62 -4 -21 -4 -139 -12 -307 -22 -242 -14 -700 -7 -880 13 -41 4 -187 27 -250 39 -125 23 -274 68 -373 111 -43 19 -81 34 -86 34 -4 0 -16 -8 -27 -17 -10 -10 -37 -33 -59 -52 -166 -141 -422 -395 -592 -586 -228 -257 -536 -672 -688 -925 -21 -36 -43 -66 -47 -68 -4 -2 -8 -7 -8 -11 0 -5 -24 -48 -54 -97 -156 -261 -493 -915 -480 -935 2 -3 47 -21 101 -38 54 -18 107 -36 118 -41 58 -25 458 -138 640 -181 118 -27 126 -29 155 -35 14 -2 45 -9 70 -14 66 -15 137 -28 300 -55 37 -7 248 -33 305 -39 28 -3 84 -9 125 -13 163 -16 792 -8 913 12 12 2 58 9 102 15 248 35 423 76 665 157 58 19 134 46 170 60 86 33 344 156 348 166 2 4 8 7 13 7 14 0 205 116 303 184 180 126 287 216 466 396 282 281 511 593 775 1055 43 75 178 347 225 455 100 227 236 602 286 790 59 220 95 364 120 485 6 28 45 245 50 275 2 14 7 41 10 60 3 19 8 49 10 65 2 17 6 46 9 65 15 100 35 262 40 335 3 39 8 89 10 112 22 225 33 803 21 1043 -3 41 -7 129 -11 195 -3 66 -8 136 -10 155 -2 19 -6 76 -10 125 -3 50 -8 101 -10 115 -2 14 -6 57 -10 95 -7 72 -12 113 -20 175 -2 19 -7 55 -10 80 -6 46 -43 295 -51 340 -2 14 -9 54 -15 90 -5 36 -16 97 -24 135 -8 39 -17 84 -20 100 -12 68 -18 97 -50 248 -19 87 -47 204 -61 260 -14 56 -27 109 -29 117 -30 147 -232 810 -253 832 -4 4 -7 -23 -8 -60z"></path>
</svg>
</a>
<button class="navbar-close">
<svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path d="M6 18L18 6M6 6l12 12" {...{ "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2" }}></path>
</svg>
</button>
</div>
<div>
<ul>
<li class="mb-1">
<a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Home</a>
</li>
<li class="mb-1">
<a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">About Us</a>
</li>
<li class="mb-1">
<a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Services</a>
</li>
<li class="mb-1">
<a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Pricing</a>
</li>
<li class="mb-1">
<a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Contact</a>
</li>
</ul>
</div>
<div class="mt-auto">
<div class="pt-6">
<a class="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl" href="#">Sign in</a>
<a class="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl" href="#">Sign Up</a>
</div>
<p class="my-4 text-xs text-center text-gray-400">
<span>Copyright © 2021</span>
</p>
</div>
</nav>
</div>
</header>

<div class="mt-16 sm:mt-32 md:mt-32 lg:mt-32 xl:mt-128 "> {/** Ajusta el valor según la altura de tu header */}
<slot />
</div>


<footer class="bg-white shadow dark:bg-secondary-100 ">
<div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
<div class="sm:flex sm:items-center sm:justify-between">
<a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
<img src="./supera-crema.svg" class="h-12" alt="Supera Logo" />
</a>
<ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
<li>
<a href="#" class="hover:underline me-4 md:me-6">Penal</a>
</li>
<li>
<a href="#" class="hover:underline me-4 md:me-6">Civil</a>
</li>
<li>
<a href="#" class="hover:underline me-4 md:me-6">Laboral</a>
</li>
<li>
<a href="#" class="hover:underline">Corporativo</a>
</li>
</ul>
</div>
<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
<div class="
					justify-between
					text-sm text-texto-primary sm:text-center dark:text-texto-primary flex flex-col sm:flex-row items-center sm:items-center gap-3
				">
<span class="text-sm text-texto-primary sm:text-center dark:text-texto-primary flex flex-col sm:flex-row items-center sm:items-center gap-3">
<p class="flex items-center space-x-2 rtl:space-x-reverse gap-2">
<svg class="icon icon-tabler icon-tabler-phone" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" {...{ "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
+51 123 456 789
</p>
<p class="flex items-center space-x-2 rtl:space-x-reverse gap-2">
<svg class="icon icon-tabler icon-tabler-map-pin" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" {...{ "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
Jr. Talara 123, Lima, Perú
</p>
<p class="flex items-center space-x-2 rtl:space-x-reverse gap-2">
<svg class="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" {...{ "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
ingfralch@gmai.com
</p>
</span>
<span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400 mt-3">© 2024 <a href="#" class="hover:underline">Fralch™</a>. All Rights Reserved.</span>


</div>
</div>
</footer>







</body>
</html>
<style>{`
	body {
		display: flex;
		flex-direction: column;
		min-height: 100vh; /* Establece la altura mínima al 100% de la altura del viewport */
	}

	footer {
		margin-top: auto; /* Empuja el pie de página hacia abajo */
	}
`}</style>
<style is:global>{`
	:root {
		--accent: 136, 58, 234;
		--accent-light: 224, 204, 250;
		--accent-dark: 49, 10, 101;
		--accent-gradient: linear-gradient(
			45deg,
			rgb(var(--accent)),
			rgb(var(--accent-light)) 30%,
			white 60%
		);
	}
	html {
		font-family: system-ui, sans-serif;
		background: #13151a;
		background-size: 224px;
	}
	code {
		font-family:
			Menlo,
			Monaco,
			Lucida Console,
			Liberation Mono,
			DejaVu Sans Mono,
			Bitstream Vera Sans Mono,
			Courier New,
			monospace;
	}
	body {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	header {
		background-color: #002E1F;
		z-index: 1000;
	}
	

	


`}</style>

</Fragment>;
