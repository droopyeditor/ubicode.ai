<script lang="ts">
	import { fade } from 'svelte/transition';
	import BlinkingCursor from './BlinkingCursor.svelte';
	import { typeText, delay } from '$lib/utils/typing.svelte.js';

	let { onComplete, skipped = false }: { onComplete?: () => void; skipped?: boolean } = $props();

	let commandText = $state('');
	let commandDone = $state(false);

	const command = 'ssh user@ubicode.ai';

	const connectionLines = [
		'Connecting to ubicode.ai port 22...',
		'Connection established.',
		'Authenticating with key... OK'
	];

	const asciiArt = [
		'██╗   ██╗██████╗ ██╗ ██████╗ ██████╗ ██████╗ ███████╗',
		'██║   ██║██╔══██╗██║██╔════╝██╔═══██╗██╔══██╗██╔════╝',
		'██║   ██║██████╔╝██║██║     ██║   ██║██║  ██║█████╗  ',
		'██║   ██║██╔══██╗██║██║     ██║   ██║██║  ██║██╔══╝  ',
		'╚██████╔╝██████╔╝██║╚██████╗╚██████╔╝██████╔╝███████╗',
		' ╚═════╝ ╚═════╝ ╚═╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝'
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
			await delay(500);
			if (signal.cancelled) return;

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

<section>
	<p>
		<span class="text-term-green">user@local</span><span class="text-term-subtext">:</span><span class="text-term-blue">~</span><span class="text-term-subtext">$</span>
		 {commandText}{#if !commandDone}<BlinkingCursor />{/if}
	</p>

	{#if commandDone}
		<div in:fade={{ duration: 200 }}>
			{#each connectionLines as line}
				<p class="text-term-subtext">{line}</p>
			{/each}
			<pre class="ascii-large text-term-cyan mt-2 text-xs sm:text-sm leading-tight">{#each asciiArt as line}{line}
{/each}</pre>
			<p class="ascii-small text-term-cyan mt-2 text-2xl font-bold tracking-[0.2em]">UBICODE</p>
			<p class="mt-2 sm:mt-3 text-base sm:text-xl text-term-mauve font-medium">
				The SSH client your iPhone deserves.
			</p>
		</div>
	{/if}
</section>

<style>
	.ascii-large {
		display: none;
	}

	@media (min-width: 640px) {
		.ascii-large {
			display: block;
		}

		.ascii-small {
			display: none;
		}
	}
</style>
