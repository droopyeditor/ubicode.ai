<script lang="ts">
	import BlinkingCursor from './BlinkingCursor.svelte';
	const year = new Date().getFullYear();
</script>

<footer class="text-sm text-term-subtext">
	<p>
		<span class="text-term-green">user@ubicode</span><span class="text-term-subtext">:</span><span class="text-term-blue">~</span><span class="text-term-subtext">$</span>
		 cat COPYRIGHT
	</p>
	<p class="mt-1">© {year} ubicode. All rights reserved.</p>
	<p class="mt-1">
		<a href="/privacy" class="text-term-blue hover:underline">Privacy Policy</a>
		<span class="mx-2">·</span>
		<a href="/eula" class="text-term-blue hover:underline">EULA</a>
	</p>
	<p class="mt-3">
		<span class="text-term-green">user@ubicode</span><span class="text-term-subtext">:</span><span class="text-term-blue">~</span><span class="text-term-subtext">$</span>
		 <BlinkingCursor />
	</p>
</footer>
