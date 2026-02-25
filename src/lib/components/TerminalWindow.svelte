<script lang="ts">
	import type { Snippet } from 'svelte';

	let { title = 'terminal', children }: { title?: string; children: Snippet } = $props();
</script>

<div class="flex flex-col rounded-lg border border-term-border bg-term-surface overflow-hidden shadow-2xl h-full">
	<div class="flex items-center gap-2 px-4 py-2.5 bg-term-overlay/50 border-b border-term-border shrink-0">
		<div class="flex gap-1.5">
			<span class="w-3 h-3 rounded-full bg-term-red"></span>
			<span class="w-3 h-3 rounded-full bg-term-yellow"></span>
			<span class="w-3 h-3 rounded-full bg-term-green"></span>
		</div>
		<span class="flex-1 text-center text-xs text-term-subtext">{title}</span>
		<div class="w-[54px]"></div>
	</div>
	<div class="flex-1 overflow-y-auto p-4 sm:p-6 text-sm leading-relaxed">
		{@render children()}
	</div>
</div>
