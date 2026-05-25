import { expect, test } from '@playwright/test';

test('home page has expected content', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle(/ubicode/);
	await expect(page.getByRole('heading', { name: 'UBICODE — Editor and Terminal over SSH on iPhone' })).toBeVisible({ timeout: 500 });
	await expect(page.getByText('Editor and Terminal over SSH on iPhone')).toBeVisible({ timeout: 500 });
	await expect(page.getByText('Edit code, review Markdown, and command AI agents while away from your desk.')).toBeVisible({ timeout: 500 });
	await expect(page.getByText('## What is ubicode?')).toHaveCount(0);
	await expect(page.getByText('ubicode --getting-started')).toHaveCount(0);
	await expect(page.getByText('Add a server — host, user, key or password')).toHaveCount(0);
	await expect(page.getByText("That's it. Everything runs over your SSH connection — zero extra setup.")).toHaveCount(0);
	await expect(page.getByText('Ready to take your servers on the go?')).toBeVisible({ timeout: 500 });
	await expect(page.locator('html')).not.toHaveCSS('scroll-behavior', 'smooth');
});

test('home page uses a wider desktop layout', async ({ page }) => {
	await page.setViewportSize({ width: 1280, height: 720 });
	await page.goto('/');

	const terminal = page.locator('.rounded-lg.border.border-term-border').first();
	const box = await terminal.boundingBox();

	expect(box?.width).toBeGreaterThan(1000);

	const hero = page.locator('section').first();
	const headingBox = await hero.getByRole('heading', { level: 1 }).boundingBox();
	const videoBox = await hero.getByLabel('ubicode portrait voiceover demo').boundingBox();

	expect(videoBox?.x).toBeGreaterThan((headingBox?.x ?? 0) + (headingBox?.width ?? 0));
	expect(videoBox?.width).toBeGreaterThan(360);
});

test('hero shows the portrait voiceover video below the subtitle on mobile', async ({ page }) => {
	await page.setViewportSize({ width: 390, height: 844 });
	await page.goto('/');

	const hero = page.locator('section').first();
	const subtitle = hero.getByRole('heading', {
		level: 2,
		name: 'Editor and Terminal over SSH on iPhone'
	});
	const video = hero.getByLabel('ubicode portrait voiceover demo');

	await expect(subtitle).toBeVisible({ timeout: 500 });
	await expect(video).toBeVisible({ timeout: 500 });
	await expect(video.locator('source')).toHaveAttribute(
		'src',
		'/videos/ubicode_cm_portrait_en_voiceover.mp4'
	);
	await expect(video.locator('source')).toHaveAttribute('type', 'video/mp4');

	const heroBox = await hero.boundingBox();
	const videoBox = await video.boundingBox();

	expect(videoBox?.width).toBeGreaterThan((heroBox?.width ?? 0) * 0.85);

	const subtitlePrecedesVideo = await hero.evaluate((node) => {
		const subtitleNode = node.querySelector('h2');
		const videoNode = node.querySelector('video');

		return Boolean(
			subtitleNode &&
				videoNode &&
				subtitleNode.compareDocumentPosition(videoNode) & Node.DOCUMENT_POSITION_FOLLOWING
		);
	});

	expect(subtitlePrecedesVideo).toBe(true);
});

test('hero keeps the portrait voiceover video below the subtitle on tablet', async ({ page }) => {
	await page.setViewportSize({ width: 820, height: 1180 });
	await page.goto('/');

	const hero = page.locator('section').first();
	const subtitleBox = await hero
		.getByRole('heading', {
			level: 2,
			name: 'Editor and Terminal over SSH on iPhone'
		})
		.boundingBox();
	const videoBox = await hero.getByLabel('ubicode portrait voiceover demo').boundingBox();

	expect(videoBox?.y).toBeGreaterThan((subtitleBox?.y ?? 0) + (subtitleBox?.height ?? 0));
});

test('feature showcase screenshots are large and rounded on mobile', async ({ page }) => {
	await page.setViewportSize({ width: 390, height: 844 });
	await page.goto('/');

	const featureCard = page.locator('.box-card').filter({ hasText: 'Quick Connect' });
	const screenshotFrame = featureCard.getByRole('img', { name: 'Quick Connect' }).locator('xpath=..');

	const cardBox = await featureCard.boundingBox();
	const frameBox = await screenshotFrame.boundingBox();

	expect(frameBox?.width).toBeGreaterThan((cardBox?.width ?? 0) * 0.9);
	await expect(screenshotFrame).toHaveCSS('border-radius', '16px');
});

test('feature showcase omits ssh key management and keeps one terminal emulator screenshot', async ({
	page
}) => {
	await page.goto('/');

	const terminalCard = page.locator('.box-card').filter({ hasText: 'Terminal Emulator' });

	await expect(page.getByText('SSH Key Management')).toHaveCount(0);
	await expect(terminalCard.getByRole('img', { name: 'Terminal Emulator' })).toHaveCount(1);
	await expect(page.getByText('7 features loaded.')).toBeVisible({ timeout: 500 });
});
