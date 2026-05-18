<script lang="ts">
	import TerminalWindow from '$lib/components/TerminalWindow.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import OverviewSection from '$lib/components/OverviewSection.svelte';
	import FeaturesShowcase from '$lib/components/FeaturesShowcase.svelte';
	import CtaSection from '$lib/components/CtaSection.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="px-2 py-2 sm:px-4 sm:py-3 h-dvh">
	<div class="max-w-4xl lg:max-w-6xl mx-auto h-full">
		<TerminalWindow title="ubicode — ssh session">
			<div class="space-y-4 sm:space-y-6">
				<HeroSection />
				<OverviewSection />
				<FeaturesShowcase />
				<CtaSection />
				<Footer />
			</div>
		</TerminalWindow>
	</div>
</div>
