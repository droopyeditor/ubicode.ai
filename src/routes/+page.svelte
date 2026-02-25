<script lang="ts">
	import TerminalWindow from '$lib/components/TerminalWindow.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import FeaturesSection from '$lib/components/FeaturesSection.svelte';
	import ScreenshotsSection from '$lib/components/ScreenshotsSection.svelte';
	import CtaSection from '$lib/components/CtaSection.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let step = $state(0);
	let skipped = $state(false);

	function skipAll() {
		if (skipped) return;
		skipped = true;
		step = 4;
	}

	$effect(() => {
		if (skipped) return;

		const handler = () => skipAll();

		window.addEventListener('wheel', handler, { once: true, passive: true });
		window.addEventListener('touchmove', handler, { once: true, passive: true });

		return () => {
			window.removeEventListener('wheel', handler);
			window.removeEventListener('touchmove', handler);
		};
	});
</script>

<div class="px-2 py-2 sm:px-4 sm:py-3 h-dvh">
	<div class="max-w-4xl mx-auto h-full">
		<TerminalWindow title="ubicode — ssh session">
			<div class="space-y-4 sm:space-y-6">
				<HeroSection {skipped} onComplete={() => step = 1} />

				{#if step >= 1}
					<FeaturesSection {skipped} onComplete={() => step = 2} />
				{/if}

				{#if step >= 2}
					<ScreenshotsSection {skipped} onComplete={() => step = 3} />
				{/if}

				{#if step >= 3}
					<CtaSection {skipped} onComplete={() => step = 4} />
				{/if}

				{#if step >= 4}
					<Footer />
				{/if}
			</div>
		</TerminalWindow>
	</div>
</div>
