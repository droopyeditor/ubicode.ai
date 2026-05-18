import { expect, test } from '@playwright/test';

test('home page has expected content', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle(/ubicode/);
	await expect(page.getByRole('heading', { name: 'UBICODE — Editor and Terminal over SSH on iPhone' })).toBeVisible({ timeout: 500 });
	await expect(page.getByText('Editor and Terminal over SSH on iPhone')).toBeVisible({ timeout: 500 });
	await expect(page.getByText('## What is ubicode?')).toBeVisible({ timeout: 500 });
	await expect(page.getByText('Ready to take your servers on the go?')).toBeVisible({ timeout: 500 });
	await expect(page.locator('html')).not.toHaveCSS('scroll-behavior', 'smooth');
});
