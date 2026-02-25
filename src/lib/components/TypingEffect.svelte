<script lang="ts">
	import BlinkingCursor from './BlinkingCursor.svelte';

	let {
		text,
		speed = 50,
		startDelay = 0,
		showCursor = true,
		onComplete
	}: {
		text: string;
		speed?: number;
		startDelay?: number;
		showCursor?: boolean;
		onComplete?: () => void;
	} = $props();

	let displayed = $state('');
	let done = $state(false);

	$effect(() => {
		let cancelled = false;
		let timeout: ReturnType<typeof setTimeout>;
		displayed = '';
		done = false;

		timeout = setTimeout(() => {
			if (cancelled) return;
			let i = 0;
			function typeNext() {
				if (cancelled) return;
				if (i < text.length) {
					displayed = text.slice(0, i + 1);
					i++;
					timeout = setTimeout(typeNext, speed);
				} else {
					done = true;
					onComplete?.();
				}
			}
			typeNext();
		}, startDelay);

		return () => {
			cancelled = true;
			clearTimeout(timeout);
		};
	});
</script>

<span>{displayed}<BlinkingCursor visible={showCursor && !done} /></span>
