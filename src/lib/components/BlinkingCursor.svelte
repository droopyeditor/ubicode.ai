<script lang="ts">
	let { visible = true }: { visible?: boolean } = $props();
</script>

{#if visible}
	<span class="cursor" aria-hidden="true">&#9608;</span>
{/if}

<style>
	.cursor {
		animation: blink 1s step-end infinite;
		color: var(--color-term-green);
	}

	@keyframes blink {
		0%, 100% { opacity: 1; }
		50% { opacity: 0; }
	}
</style>
