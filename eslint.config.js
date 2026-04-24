import antfu from '@antfu/eslint-config';

export default antfu(
	{
		astro: true,
		markdown: false,
		stylistic: false,
	},
	{
		rules: {
			'perfectionist/sort-imports': 'off',
		},
	},
);
