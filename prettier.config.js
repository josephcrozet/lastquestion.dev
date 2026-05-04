/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	tailwindStylesheet: './src/styles/global.css',
	printWidth: 100,
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
				singleQuote: true,
				useTabs: true,
			},
		},
	],
};
