/** @type {import('prettier').Config & import('prettier-plugin-astro').PluginOptions & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	astroAllowShorthand: true,
	tailwindStylesheet: './src/styles/global.css',
	printWidth: 100,
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
				bracketSameLine: true,
				singleQuote: true,
				useTabs: true,
			},
		},
	],
};
