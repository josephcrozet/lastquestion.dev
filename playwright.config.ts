import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './tests/e2e',
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	reporter: [['list'], ['html', { open: 'never' }]],
	use: {
		baseURL: 'http://localhost:4321',
		trace: 'on-first-retry',
	},
	projects: [
		{ name: 'chromium', use: { ...devices['Desktop Chrome'] } },
		{ name: 'webkit', use: { ...devices['Desktop Safari'] } },
	],
	webServer: {
		command: process.env.CI ? 'bun run astro preview' : 'bun run astro dev',
		url: 'http://localhost:4321',
		reuseExistingServer: !process.env.CI,
	},
});
