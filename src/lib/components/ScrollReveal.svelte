<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();

	let el: HTMLDivElement;
	let visible = $state(false);

	$effect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					visible = true;
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		observer.observe(el);

		return () => observer.disconnect();
	});
</script>

<div
	bind:this={el}
	class="transition-all duration-700 ease-out {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
>
	{@render children()}
</div>
