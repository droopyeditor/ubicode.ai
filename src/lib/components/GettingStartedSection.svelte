<script lang="ts">
	import { fade } from 'svelte/transition';
	import BlinkingCursor from './BlinkingCursor.svelte';
	import { typeText, delay } from '$lib/utils/typing.svelte.js';

	let { onComplete, skipped = false }: { onComplete?: () => void; skipped?: boolean } = $props();

	let commandText = $state('');
	let commandDone = $state(false);

	const command = 'ubicode --getting-started';

	const steps = [
		{ num: '1', text: 'Join the beta on TestFlight', color: 'text-term-cyan' },
		{ num: '2', text: 'Add a server — host, user, key or password', color: 'text-term-green' },
		{ num: '3', text: 'Tap to connect — full terminal, ready to go', color: 'text-term-yellow' },
		{ num: '4', text: 'Browse files, open in the editor, save back — all over SSH', color: 'text-term-peach' }
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

<section id="getting-started">
	<p>
		<span class="text-term-green">user@ubicode</span><span class="text-term-subtext">:</span><span class="text-term-blue">~</span><span class="text-term-subtext">$</span>
		 {commandText}{#if !commandDone}<BlinkingCursor />{/if}
	</p>

	{#if commandDone}
		<div in:fade={{ duration: 200 }} class="mt-2 sm:mt-3 space-y-1.5">
			{#each steps as step (step.num)}
				<p>
					<span class="{step.color} font-medium">[{step.num}]</span>
					<span class="text-term-text">{step.text}</span>
				</p>
			{/each}

			<p class="mt-3 text-term-subtext">
				That's it. Everything runs over your SSH connection — zero extra setup.
			</p>
		</div>
	{/if}
</section>
