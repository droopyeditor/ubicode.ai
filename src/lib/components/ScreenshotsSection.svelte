<script lang="ts">
	import { fade } from 'svelte/transition';
	import BlinkingCursor from './BlinkingCursor.svelte';
	import { typeText, delay } from '$lib/utils/typing.svelte.js';

	import screenshot1 from '$lib/assets/img/Simulator Screenshot - iPhone 17 Pro - 2026-02-25 at 16.49.36.png';
	import screenshot2 from '$lib/assets/img/Simulator Screenshot - iPhone 17 Pro - 2026-02-25 at 17.04.09.png';
	import screenshot3 from '$lib/assets/img/Simulator Screenshot - iPhone 17 Pro - 2026-02-25 at 17.04.14.png';
	import screenshot4 from '$lib/assets/img/Simulator Screenshot - iPhone 17 Pro - 2026-02-25 at 17.04.21.png';
	import screenshot5 from '$lib/assets/img/Simulator Screenshot - iPhone 17 Pro - 2026-02-25 at 17.05.04.png';
	import screenshot6 from '$lib/assets/img/Simulator Screenshot - iPhone 17 Pro - 2026-02-25 at 17.05.19.png';

	let { onComplete, skipped = false }: { onComplete?: () => void; skipped?: boolean } = $props();

	let commandText = $state('');
	let commandDone = $state(false);

	const command = 'ubicode --screenshots';

	const screenshots = [
		{ src: screenshot1, alt: 'ubicode terminal session' },
		{ src: screenshot2, alt: 'ubicode session management' },
		{ src: screenshot3, alt: 'ubicode SFTP browser' },
		{ src: screenshot4, alt: 'ubicode settings' },
		{ src: screenshot5, alt: 'ubicode key management' },
		{ src: screenshot6, alt: 'ubicode port forwarding' }
	];

	$effect(() => {
		if (skipped) {
			commandText = command;
			commandDone = true;
			const t = setTimeout(() => onComplete?.(), 150);
			return () => clearTimeout(t);
		}

		const signal = { cancelled: false };

		(async () => {
			await typeText(command, 50, (t) => { if (!signal.cancelled) commandText = t; }, signal);
			if (signal.cancelled) return;
			commandDone = true;

			await delay(500);
			if (signal.cancelled) return;
			onComplete?.();
		})();

		return () => { signal.cancelled = true; };
	});
</script>

<section id="screenshots">
	<p>
		<span class="text-term-green">user@ubicode</span><span class="text-term-subtext">:</span><span class="text-term-blue">~</span><span class="text-term-subtext">$</span>
		 {commandText}{#if !commandDone}<BlinkingCursor />{/if}
	</p>

	{#if commandDone}
		<div in:fade={{ duration: 200 }} class="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
			{#each screenshots as screenshot (screenshot.alt)}
				<div class="rounded-lg border border-term-border bg-term-bg overflow-hidden">
					<img
						src={screenshot.src}
						alt={screenshot.alt}
						class="w-full h-auto"
						loading="lazy"
					/>
				</div>
			{/each}
		</div>
	{/if}
</section>
