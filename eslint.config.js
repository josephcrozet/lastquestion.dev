import antfu from '@antfu/eslint-config';

export default antfu(
  {
    astro: true,
    markdown: false,
    stylistic: false,
  },
  {
    rules: {
      'perfectionist/sort-imports': [
        'error',
        {
          internalPattern: [
            '^@assets/.+',
            '^@components/.+',
            '^@layouts/.+',
            '^@styles/.+',
          ],
          groups: [
            'type-astro',
            'astro',
            'type-import',
            ['value-builtin', 'value-external'],
            'type-internal',
            'value-internal',
            ['type-parent', 'type-sibling', 'type-index'],
            ['value-parent', 'value-sibling', 'value-index'],
            'ts-equals-import',
            'unknown',
          ],
          customGroups: [
            {
              groupName: 'type-astro',
              modifiers: ['type'],
              elementNamePattern: ['^astro$', '^astro:.+', '^astro/.+'],
            },
            {
              groupName: 'astro',
              elementNamePattern: ['^astro$', '^astro:.+', '^astro/.+'],
            },
          ],
        },
      ],
    },
  },
);
