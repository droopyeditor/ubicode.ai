<script lang="ts">
	import { fade } from 'svelte/transition';
	import BlinkingCursor from './BlinkingCursor.svelte';
	import { typeText, delay } from '$lib/utils/typing.svelte.js';

	let { onComplete, skipped = false }: { onComplete?: () => void; skipped?: boolean } = $props();

	let commandText = $state('');
	let commandDone = $state(false);

	const command = 'cat README.md';

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

<section id="overview">
	<p>
		<span class="text-term-green">user@ubicode</span><span class="text-term-subtext">:</span><span class="text-term-blue">~</span><span class="text-term-subtext">$</span>
		 {commandText}{#if !commandDone}<BlinkingCursor />{/if}
	</p>

	{#if commandDone}
		<div in:fade={{ duration: 200 }} class="mt-2 sm:mt-3">
			<p class="text-term-cyan font-medium">## What is ubicode?</p>
			<p class="mt-2">
				<span class="text-term-text">ubicode is a <span class="text-term-yellow font-medium">full-featured SSH client</span> for iOS with a <span class="text-term-yellow font-medium">built-in text editor</span>.</span>
			</p>
			<p class="mt-2 text-term-subtext">
				Connect to your servers, edit remote files on the spot, manage
				tunnels — all from your iPhone. If you already use SSH,
				ubicode works out of the box. Zero config.
			</p>

			<div class="mt-3 space-y-1">
				<p><span class="text-term-green">→</span> <span class="text-term-text">SSH / Mosh with key & password auth</span></p>
				<p><span class="text-term-green">→</span> <span class="text-term-text">Built-in editor — edit remote files directly</span></p>
				<p><span class="text-term-green">→</span> <span class="text-term-text">File browser & transfer over SSH</span></p>
				<p><span class="text-term-green">→</span> <span class="text-term-text">Port forwarding & SSH tunneling</span></p>
				<p><span class="text-term-green">→</span> <span class="text-term-text">Sixel graphics, true color, Unicode</span></p>
			</div>
		</div>
	{/if}
</section>
