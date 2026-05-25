<script lang="ts">
	const asciiArt = [
		'██╗   ██╗██████╗ ██╗ ██████╗ ██████╗ ██████╗ ███████╗',
		'██║   ██║██╔══██╗██║██╔════╝██╔═══██╗██╔══██╗██╔════╝',
		'██║   ██║██████╔╝██║██║     ██║   ██║██║  ██║█████╗  ',
		'██║   ██║██╔══██╗██║██║     ██║   ██║██║  ██║██╔══╝  ',
		'╚██████╔╝██████╔╝██║╚██████╗╚██████╔╝██████╔╝███████╗',
		' ╚═════╝ ╚═════╝ ╚═╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝'
	];
</script>

<section class="relative flex flex-col gap-y-3 sm:gap-y-4 lg:min-h-[42rem] lg:justify-center lg:pr-[26rem]">
	<h1
		aria-label="UBICODE — Editor and Terminal over SSH on iPhone"
		class="flex items-end gap-3 sm:gap-5"
	>
		<pre aria-hidden="true" class="text-term-cyan text-[0.5rem] sm:text-sm leading-tight">{#each asciiArt as line}{line}
{/each}</pre>
		<pre aria-hidden="true" class="text-term-text text-[1rem] sm:text-[1.75rem] leading-tight shrink-0">{String.raw`(\  /)`}{'\n'}{String.raw`( •.• )`}{'\n'}{String.raw`c(")("`})</pre>
	</h1>
	<h2 class="text-base sm:text-xl text-term-mauve font-medium">
		Editor and Terminal over SSH on iPhone
	</h2>
	<div class="lg:absolute lg:right-0 lg:top-1/2 lg:w-96 lg:-translate-y-1/2">
		<video
			aria-label="ubicode portrait voiceover demo"
			class="mx-auto aspect-[9/16] w-full rounded-lg border border-term-border bg-term-bg shadow-lg shadow-black/30 lg:mx-0"
			controls
			playsinline
			preload="metadata"
		>
			<source src="/videos/ubicode_cm_portrait_en_voiceover.mp4" type="video/mp4" />
		</video>
	</div>
	<div>
		<a
			href="https://testflight.apple.com/join/4tsnW6vw"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg bg-term-mauve text-term-bg font-bold text-xs sm:text-sm hover:opacity-90"
		>
			<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
				<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
			</svg>
			Join the Beta on TestFlight
		</a>
	</div>
</section>
