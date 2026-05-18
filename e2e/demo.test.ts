import { expect, test } from '@playwright/test';

test('home page has expected content', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle(/ubicode/);
	await expect(page.getByRole('heading', { name: 'UBICODE — Editor and Terminal over SSH on iPhone' })).toBeVisible({ timeout: 500 });
	await expect(page.getByText('Editor and Terminal over SSH on iPhone')).toBeVisible({ timeout: 500 });
	await expect(page.getByText('Edit code, review Markdown, and command AI agents while away from your desk.')).toBeVisible({ timeout: 500 });
	await expect(page.getByText('## What is ubicode?')).toHaveCount(0);
	await expect(page.getByText('Ready to take your servers on the go?')).toBeVisible({ timeout: 500 });
	await expect(page.locator('html')).not.toHaveCSS('scroll-behavior', 'smooth');
});

test('home page uses a wider desktop layout', async ({ page }) => {
	await page.setViewportSize({ width: 1280, height: 720 });
	await page.goto('/');

	const terminal = page.locator('.rounded-lg.border.border-term-border').first();
	const box = await terminal.boundingBox();

	expect(box?.width).toBeGreaterThan(1000);
});
