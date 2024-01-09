/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				blue: {
					850: '#162330'
				},
				orange: {
					650: '#ec2f0d'
				}
			}
		},
	},
	plugins: [],
}
