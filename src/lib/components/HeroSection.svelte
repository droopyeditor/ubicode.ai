<script lang="ts">
	import { fade } from 'svelte/transition';
	import { typeText, delay } from '$lib/utils/typing.svelte.js';

	let { onComplete, skipped = false }: { onComplete?: () => void; skipped?: boolean } = $props();

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
			const t = setTimeout(() => onComplete?.(), 150);
			return () => clearTimeout(t);
		}

		const t = setTimeout(() => onComplete?.(), 500);
		return () => clearTimeout(t);
	});
</script>

<section in:fade={{ duration: 300 }}>
	<pre class="text-term-cyan text-[0.5rem] sm:text-sm leading-tight">{#each asciiArt as line}{line}
{/each}</pre>
	<p class="mt-2 sm:mt-3 text-base sm:text-xl text-term-mauve font-medium">
		The SSH client your iPhone deserves.
	</p>
</section>
