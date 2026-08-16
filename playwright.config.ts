import { defineConfig } from '@playwright/test';

export default defineConfig({
	testDir: './tests/e2e',
	use: {
		baseURL: 'http://localhost:4321',
	},
	webServer: {
		command: process.env.CI ? 'bun run astro preview' : 'bun run astro dev',
		port: 4321,
		reuseExistingServer: !process.env.CI,
		timeout: 120_000,
	},
});
