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

	const asciiArtSmall = [
		'╦ ╦╔╗ ╦╔═╗╔═╗╔╦╗╔═╗',
		'║ ║╠╩╗║║  ║ ║ ║║║╣ ',
		'╚═╝╚═╝╩╚═╝╚═╝═╩╝╚═╝'
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
			<pre class="text-term-cyan mt-2 text-xs sm:text-sm leading-tight hidden sm:block">{#each asciiArt as line}{line}
{/each}</pre>
			<pre class="text-term-cyan mt-2 text-xs leading-tight sm:hidden">{#each asciiArtSmall as line}{line}
{/each}</pre>
			<p class="mt-3 text-lg sm:text-xl text-term-mauve font-medium">
				The SSH client your iPhone deserves.
			</p>
		</div>
	{/if}
</section>
