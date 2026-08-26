import { defineConfig } from '@playwright/test';

export default defineConfig({
	testDir: './tests/e2e',
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	use: {
		baseURL: 'http://localhost:4321',
	},
	webServer: {
		command: process.env.CI ? 'bun run astro preview' : 'bun run astro dev',
		url: 'http://localhost:4321',
		reuseExistingServer: !process.env.CI,
	},
});
