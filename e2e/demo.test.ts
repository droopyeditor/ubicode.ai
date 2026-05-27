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
	expect(videoBox?.width).toBeGreaterThan(260);
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
	const phoneFrame = hero.getByLabel('iPhone frame for ubicode demo');

	await expect(subtitle).toBeVisible({ timeout: 500 });
	await expect(phoneFrame).toBeVisible({ timeout: 500 });
	await expect(phoneFrame.locator('video')).toHaveCount(1);
	await expect(video).toBeVisible({ timeout: 500 });
	await expect(video).toHaveJSProperty('autoplay', true);
	await expect(video).toHaveJSProperty('muted', true);
	const phoneFrameBox = await phoneFrame.boundingBox();
	const framedVideoBox = await video.boundingBox();
	const viewport = page.viewportSize();

	expect(Math.abs((framedVideoBox?.x ?? 0) - (phoneFrameBox?.x ?? 0))).toBeLessThan(3);
	expect(Math.abs((framedVideoBox?.y ?? 0) - (phoneFrameBox?.y ?? 0))).toBeLessThan(3);
	expect(Math.abs((phoneFrameBox?.width ?? 0) - (framedVideoBox?.width ?? 0))).toBeLessThan(6);
	expect(Math.abs((framedVideoBox?.height ?? 0) - (phoneFrameBox?.height ?? 0))).toBeLessThan(6);
	await expect
		.poll(() => video.evaluate((node) => (node as HTMLVideoElement).videoWidth))
		.toBeGreaterThan(0);
	const { intrinsicAspect, renderedAspect } = await video.evaluate((node) => {
		const videoNode = node as HTMLVideoElement;
		const rect = videoNode.getBoundingClientRect();

		return {
			intrinsicAspect: videoNode.videoWidth / videoNode.videoHeight,
			renderedAspect: rect.width / rect.height
		};
	});

	expect(Math.abs(renderedAspect - intrinsicAspect)).toBeLessThan(0.01);
	await expect(video.locator('source')).toHaveAttribute(
		'src',
		'/videos/ubicode_cm_portrait_en_voiceover.mp4'
	);
	await expect(video.locator('source')).toHaveAttribute('type', 'video/mp4');

	const heroBox = await hero.boundingBox();
	const subtitleBox = await subtitle.boundingBox();
	const ctaBox = await hero.getByRole('link', { name: 'Join the Beta on TestFlight' }).boundingBox();

	expect(framedVideoBox?.width).toBeGreaterThan((heroBox?.width ?? 0) * 0.7);
	expect((phoneFrameBox?.y ?? 0) + (phoneFrameBox?.height ?? 0)).toBeLessThan((viewport?.height ?? 0) - 4);
	expect((phoneFrameBox?.y ?? 0) - ((subtitleBox?.y ?? 0) + (subtitleBox?.height ?? 0))).toBeGreaterThanOrEqual(28);
	expect((ctaBox?.y ?? 0) - ((phoneFrameBox?.y ?? 0) + (phoneFrameBox?.height ?? 0))).toBeGreaterThanOrEqual(28);
	const heroCenterX = (heroBox?.x ?? 0) + (heroBox?.width ?? 0) / 2;
	const phoneFrameCenterX = (phoneFrameBox?.x ?? 0) + (phoneFrameBox?.width ?? 0) / 2;

	expect(Math.abs(phoneFrameCenterX - heroCenterX)).toBeLessThan(3);

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
