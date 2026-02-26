<script lang="ts">
	import { fade } from 'svelte/transition';
	import BlinkingCursor from './BlinkingCursor.svelte';
	import { typeText, delay } from '$lib/utils/typing.svelte.js';

	let { onComplete, skipped = false }: { onComplete?: () => void; skipped?: boolean } = $props();

	let commandText = $state('');
	let commandDone = $state(false);

	const command = 'ubicode --list-features';

	const features = [
		{ name: 'Terminal Emulator', desc: 'Full-featured xterm-compatible terminal' },
		{ name: 'Sixel Graphics', desc: 'Render inline images directly in the terminal' },
		{ name: 'SFTP Browser', desc: 'Browse and transfer files with a visual file manager' },
		{ name: 'Built-in Text Editor', desc: 'Edit remote files without leaving the app' },
		{ name: 'SSH Tunneling', desc: 'Local and remote port forwarding made simple' },
		{ name: 'Command Snippets', desc: 'Save and reuse your most common commands' },
		{ name: 'Customizable Key Panel', desc: 'Tailor your keyboard shortcuts for efficiency' },
		{ name: 'SSH Key Management', desc: 'Generate, import, and manage your keys securely' }
	];

	const colors = [
		'text-term-cyan',
		'text-term-green',
		'text-term-yellow',
		'text-term-peach',
		'text-term-mauve',
		'text-term-blue',
		'text-term-red',
		'text-term-cyan'
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

<section id="features">
	<p>
		<span class="text-term-green">user@ubicode</span><span class="text-term-subtext">:</span><span class="text-term-blue">~</span><span class="text-term-subtext">$</span>
		 {commandText}{#if !commandDone}<BlinkingCursor />{/if}
	</p>

	{#if commandDone}
		<div in:fade={{ duration: 200 }}>
			<div class="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2">
				{#each features as feature, i (feature.name)}
					<div class="flex items-start gap-2 sm:gap-3">
						<span class="{colors[i]} shrink-0">◆</span>
						<div>
							<span class="{colors[i]} font-medium">{feature.name}</span>
							<span class="text-term-subtext ml-1 sm:ml-2">— {feature.desc}</span>
						</div>
					</div>
				{/each}
			</div>
			<p class="mt-3 text-term-subtext">
				<span class="text-term-green">✓</span> 8 features loaded.
			</p>
		</div>
	{/if}
</section>
