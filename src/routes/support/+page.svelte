<script lang="ts">
	import TerminalWindow from '$lib/components/TerminalWindow.svelte';
	import BlinkingCursor from '$lib/components/BlinkingCursor.svelte';
</script>

<svelte:head>
	<title>Support — ubicode</title>
</svelte:head>

<div class="px-4 py-8 sm:py-16">
	<div class="max-w-4xl mx-auto">
		<TerminalWindow title="ubicode — support">
			<p>
				<span class="text-term-green">user@ubicode</span><span class="text-term-subtext">:</span><span class="text-term-blue">~</span><span class="text-term-subtext">$</span>
				 <span class="text-term-text">cat SUPPORT</span>
			</p>

			<div class="mt-4 space-y-6 text-term-text">
				<div>
					<h1 class="text-term-cyan font-bold text-lg">Support</h1>
					<p class="text-term-subtext mt-1">Help, troubleshooting, and contact information for ubicode.</p>
				</div>

				<div class="space-y-4">
					<section>
						<h2 class="text-term-green font-bold">Contact</h2>
						<p class="mt-1 text-term-subtext">
							For questions, bug reports, or feature requests, email
							<a href="mailto:support@ubicode.ai" class="text-term-blue hover:underline">support@ubicode.ai</a>.
							We respond to messages within 2 business days.
						</p>
						<p class="mt-2 text-term-subtext">
							When reporting an issue, please include your iOS version, device model,
							and the ubicode app version (shown on the Settings screen).
						</p>
					</section>

					<section>
						<h2 class="text-term-green font-bold">Frequently Asked Questions</h2>

						<div class="mt-2 space-y-3 text-term-subtext">
							<div>
								<p class="text-term-yellow">Why does the app ask to install a VPN configuration?</p>
								<p class="mt-1">
									ubicode uses Apple's Network Extension framework so that your SSH
									sessions and port-forwarding rules can keep running while the app
									is in the background. iOS exposes this capability through the
									system VPN interface; installing the profile does not route all
									your device traffic through a third-party server. You can turn it
									off at any time from iOS Settings &gt; General &gt; VPN &amp; Device Management.
								</p>
							</div>

							<div>
								<p class="text-term-yellow">Are my SSH credentials stored on your servers?</p>
								<p class="mt-1">
									No. All SSH keys, passwords, and connection profiles are stored
									locally on your device using iOS Keychain. See the
									<a href="/privacy" class="text-term-blue hover:underline">Privacy Policy</a>
									for details.
								</p>
							</div>

							<div>
								<p class="text-term-yellow">My connection keeps dropping when the screen locks.</p>
								<p class="mt-1">
									Make sure the ubicode VPN profile is enabled in iOS Settings.
									If the issue persists, toggle background keep-alive on from the
									app's Settings screen and reconnect.
								</p>
							</div>

							<div>
								<p class="text-term-yellow">How do I import an existing SSH key?</p>
								<p class="mt-1">
									Open the Keys tab, tap the + button, and choose "Import from
									file" or paste the private key contents. OpenSSH (PEM) and
									PKCS#8 formats are supported. Encrypted keys will prompt for
									the passphrase on first use.
								</p>
							</div>

							<div>
								<p class="text-term-yellow">How do I cancel or manage my subscription?</p>
								<p class="mt-1">
									Subscriptions are managed through your Apple ID. Open iOS
									Settings, tap your name at the top, then Subscriptions, and
									select ubicode.
								</p>
							</div>
						</div>
					</section>

					<section>
						<h2 class="text-term-green font-bold">Legal</h2>
						<p class="mt-1 text-term-subtext">
							<a href="/privacy" class="text-term-blue hover:underline">Privacy Policy</a>
							&middot;
							<a href="/eula" class="text-term-blue hover:underline">End User License Agreement</a>
						</p>
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
