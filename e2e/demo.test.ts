import { expect, test } from '@playwright/test';

test('home page has expected content', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('main')).toBeVisible();
	await expect(page).toHaveTitle(/ubicode/);
});
