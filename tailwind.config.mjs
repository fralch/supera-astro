/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					"50": "#D1EDE5",
					"100": "#A3D9CB",
					"200": "#75C4B1",
					"300": "#47AF97",
					"400": "#199A7D",
					"500": "#0A4033", // Cambié el color base a #0A4033
					"600": "#0A392E", // Puedes ajustar los tonos según tus preferencias
					"700": "#092F26",
					"800": "#08261F",
					"900": "#071D17",
					"950": "#05140F"
				}, 
				texto: {
					"primary": "#fff",
					"secondary": "#EED5AC",
				}
				
				
			}
		},
		fontFamily: {
			'body': [
				'Inter',
				'ui-sans-serif',
				'system-ui',
				'-apple-system',
				'system-ui',
				'Segoe UI',
				'Roboto',
				'Helvetica Neue',
				'Arial',
				'Noto Sans',
				'sans-serif',
				'Apple Color Emoji',
				'Segoe UI Emoji',
				'Segoe UI Symbol',
				'Noto Color Emoji'
			],
			'sans': [
				'Inter',
				'ui-sans-serif',
				'system-ui',
				'-apple-system',
				'system-ui',
				'Segoe UI',
				'Roboto',
				'Helvetica Neue',
				'Arial',
				'Noto Sans',
				'sans-serif',
				'Apple Color Emoji',
				'Segoe UI Emoji',
				'Segoe UI Symbol',
				'Noto Color Emoji'
			]
		}
	},
	plugins: [],
}
