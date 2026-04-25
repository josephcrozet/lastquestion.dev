import { defineConfig, globalIgnores } from 'eslint/config';
import eslintPluginAstro from 'eslint-plugin-astro';

export default defineConfig([
	globalIgnores(['**/*.js', '**/*.cjs', '**/*.mjs', '.astro/', 'dist/']),
	...eslintPluginAstro.configs.recommended,
	{
		files: ['**/*.astro'],
		rules: {
			'no-unused-vars': 'warn',
			'prefer-const': 'warn',
		},
	},
]);
