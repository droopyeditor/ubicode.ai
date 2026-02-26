<script lang="ts">
	import BlinkingCursor from './BlinkingCursor.svelte';
	import { typeText, delay } from '$lib/utils/typing.svelte.js';

	let { onComplete, skipped = false }: { onComplete?: () => void; skipped?: boolean } = $props();

	let commandText = $state('');
	let phase = $state(0);

	const command = 'ssh user@ubicode.ai';

	const connectionLines = [
		'Connecting to ubicode.ai port 22...',
		'Connection established.',
		'Authenticating with key... OK'
	];

	$effect(() => {
		if (skipped) {
			commandText = command;
			phase = 2;
			const t = setTimeout(() => onComplete?.(), 150);
			return () => clearTimeout(t);
		}

		const signal = { cancelled: false };

		(async () => {
			await delay(500);
			if (signal.cancelled) return;

			await typeText(command, 50, (t) => { if (!signal.cancelled) commandText = t; }, signal);
			if (signal.cancelled) return;
			phase = 1;

			await delay(600);
			if (signal.cancelled) return;
			phase = 2;

			await delay(800);
			if (signal.cancelled) return;
			onComplete?.();
		})();

		return () => { signal.cancelled = true; };
	});
</script>

<div class="h-dvh flex items-center justify-center px-4 leading-relaxed" style="font-size: clamp(0.875rem, calc((100vw - 3rem) / 21), 2.5rem);">
	<div>
		<p>
			<span class="text-term-green">user@local</span><span class="text-term-subtext">:</span><span class="text-term-blue">~</span><span class="text-term-subtext">$</span>
			 {commandText}{#if phase < 1}<BlinkingCursor />{/if}
		</p>

		{#if phase >= 1}
			{#each connectionLines as line}
				<p class="text-term-subtext">{line}</p>
			{/each}
		{/if}

		{#if phase >= 2}
			<p class="mt-4 text-term-subtext">Welcome to <span class="text-term-cyan">ubicode.ai</span></p>
			<p class="text-term-subtext"><BlinkingCursor /></p>
		{/if}
	</div>
</div>
