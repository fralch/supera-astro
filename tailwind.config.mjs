/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
			  primary: {
				'50': '#D1EDE5',
				'100': '#A3D9CB',
				'200': '#75C4B1',
				'300': '#47AF97',
				'400': '#199A7D',
				'500': '#0A4033',
				'600': '#0A392E',
				'700': '#092F26',
				'800': '#08261F',
				'900': '#071D17',
				'950': '#05140F'
			  },
			  secondary: {
				'50': '#053036',
				'100': '#002E1F',
				'200': '#EDD6A9',
				'300' : '#E58E52',
				'400': '#D07131',
				// Puedes seguir agregando tonos según tus necesidades
			  },
			  texto: {
				primary: '#fff',
				secondary: '#EED5AC',
				tertiary : '#E58E52',
				// Puedes ajustar los colores de texto según tus preferencias
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
			], 
			'serif': [
				'ui-serif',
				'Georgia',
				'Cambria',
				'Times New Roman',
				'Times',
				'serif'
			],
		}
	},
	plugins: [],
}
