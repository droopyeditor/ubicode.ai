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
	<h1 aria-label="UBICODE — The SSH client your iPhone deserves" class="flex items-end gap-3 sm:gap-5">
		<pre aria-hidden="true" class="text-term-cyan text-[0.5rem] sm:text-sm leading-tight">{#each asciiArt as line}{line}
{/each}</pre>
		<pre aria-hidden="true" class="text-term-text text-[1rem] sm:text-[1.75rem] leading-tight shrink-0">{String.raw`(\  /)`}{'\n'}{String.raw`( •.• )`}{'\n'}{String.raw`c(")("`})</pre>
	</h1>
	<p class="mt-2 sm:mt-3 text-base sm:text-xl text-term-mauve font-medium">
		The SSH client your iPhone deserves.
	</p>
</section>

