<script lang="ts">
	let { visible = true }: { visible?: boolean } = $props();
</script>

{#if visible}
	<span class="cursor" aria-hidden="true">&#9608;</span>
{/if}

<style>
	.cursor {
		color: var(--color-term-green);
	}
</style>
