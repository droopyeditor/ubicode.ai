<script lang="ts">
	import TerminalWindow from '$lib/components/TerminalWindow.svelte';
	import BlinkingCursor from '$lib/components/BlinkingCursor.svelte';
</script>

<svelte:head>
	<title>Privacy Policy — ubicode</title>
</svelte:head>

<div class="px-4 py-8 sm:py-16">
	<div class="max-w-4xl mx-auto">
		<TerminalWindow title="ubicode — privacy policy">
			<p>
				<span class="text-term-green">user@ubicode</span><span class="text-term-subtext">:</span><span class="text-term-blue">~</span><span class="text-term-subtext">$</span>
				 <span class="text-term-text">cat PRIVACY_POLICY</span>
			</p>

			<div class="mt-4 space-y-6 text-term-text">
				<div>
					<h1 class="text-term-cyan font-bold text-lg">Privacy Policy</h1>
					<p class="text-term-subtext mt-1">Last updated: February 25, 2026</p>
				</div>

				<div class="space-y-4">
					<section>
						<h2 class="text-term-green font-bold">1. Introduction</h2>
						<p class="mt-1 text-term-subtext">ubicode ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our iOS SSH client application.</p>
					</section>

					<section>
						<h2 class="text-term-green font-bold">2. Information We Collect</h2>
						<div class="mt-1 text-term-subtext space-y-2">
							<p><span class="text-term-yellow">Local Data:</span> SSH connection profiles, SSH keys, and command snippets are stored locally on your device. We do not have access to this data.</p>
							<p><span class="text-term-yellow">Account Data:</span> If you subscribe to ubicode Pro, payment processing is handled entirely by Apple through the App Store. We do not collect or store payment information.</p>
							<p><span class="text-term-yellow">Analytics:</span> We may collect anonymous usage statistics (e.g., app launches, feature usage) to improve the app. No personally identifiable information is included.</p>
						</div>
					</section>

					<section>
						<h2 class="text-term-green font-bold">3. Data Storage</h2>
						<p class="mt-1 text-term-subtext">All sensitive data, including SSH keys and connection credentials, is stored exclusively on your device using iOS Keychain and encrypted local storage. We operate a zero-knowledge architecture — your credentials never leave your device.</p>
					</section>

					<section>
						<h2 class="text-term-green font-bold">4. Third-Party Services</h2>
						<p class="mt-1 text-term-subtext">ubicode connects to remote servers that you configure. We are not responsible for the privacy practices of those servers. The app does not include third-party advertising SDKs or tracking frameworks.</p>
					</section>

					<section>
						<h2 class="text-term-green font-bold">5. Data Sharing</h2>
						<p class="mt-1 text-term-subtext">We do not sell, trade, or otherwise transfer your personal information to third parties. We may disclose information only if required by law.</p>
					</section>

					<section>
						<h2 class="text-term-green font-bold">6. Children's Privacy</h2>
						<p class="mt-1 text-term-subtext">ubicode is not intended for use by children under the age of 13. We do not knowingly collect personal information from children.</p>
					</section>

					<section>
						<h2 class="text-term-green font-bold">7. Changes to This Policy</h2>
						<p class="mt-1 text-term-subtext">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy within the app and updating the "Last updated" date.</p>
					</section>

					<section>
						<h2 class="text-term-green font-bold">8. Contact Us</h2>
						<p class="mt-1 text-term-subtext">If you have questions about this Privacy Policy, please contact us at <a href="mailto:support@ubicode.ai" class="text-term-blue hover:underline">support@ubicode.ai</a>.</p>
					</section>
				</div>
			</div>

			<hr class="border-term-border my-6" />

			<p>
				<span class="text-term-green">user@ubicode</span><span class="text-term-subtext">:</span><span class="text-term-blue">~</span><span class="text-term-subtext">$</span>
				 <a href="/" class="text-term-blue hover:underline">cd ~</a>
			</p>
			<p class="mt-3">
				<span class="text-term-green">user@ubicode</span><span class="text-term-subtext">:</span><span class="text-term-blue">~</span><span class="text-term-subtext">$</span>
				 <BlinkingCursor />
			</p>
		</TerminalWindow>
	</div>
</div>
