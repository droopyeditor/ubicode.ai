<script lang="ts">
	import TerminalWindow from '$lib/components/TerminalWindow.svelte';
	import BlinkingCursor from '$lib/components/BlinkingCursor.svelte';
</script>

<svelte:head>
	<title>EULA — ubicode</title>
</svelte:head>

<div class="px-4 py-8 sm:py-16">
	<div class="max-w-4xl mx-auto">
		<TerminalWindow title="ubicode — end-user license agreement">
			<p>
				<span class="text-term-green">user@ubicode</span><span class="text-term-subtext">:</span><span class="text-term-blue">~</span><span class="text-term-subtext">$</span>
				 <span class="text-term-text">cat EULA</span>
			</p>

			<div class="mt-4 space-y-6 text-term-text">
				<div>
					<h1 class="text-term-cyan font-bold text-lg">End-User License Agreement (EULA)</h1>
					<p class="text-term-subtext mt-1">Last updated: February 25, 2026</p>
				</div>

				<div class="space-y-4">
					<section>
						<h2 class="text-term-green font-bold">1. Agreement</h2>
						<p class="mt-1 text-term-subtext">By downloading, installing, or using ubicode ("the App"), you agree to be bound by the terms of this End-User License Agreement. If you do not agree, do not use the App.</p>
					</section>

					<section>
						<h2 class="text-term-green font-bold">2. License Grant</h2>
						<p class="mt-1 text-term-subtext">We grant you a limited, non-exclusive, non-transferable, revocable license to use the App on any Apple device that you own or control, subject to the Apple Media Services Terms and Conditions.</p>
					</section>

					<section>
						<h2 class="text-term-green font-bold">3. Restrictions</h2>
						<div class="mt-1 text-term-subtext">
							<p>You may not:</p>
							<ul class="mt-1 ml-4 space-y-1">
								<li><span class="text-term-red">✗</span> Copy, modify, or distribute the App</li>
								<li><span class="text-term-red">✗</span> Reverse engineer, decompile, or disassemble the App</li>
								<li><span class="text-term-red">✗</span> Rent, lease, lend, or sublicense the App</li>
								<li><span class="text-term-red">✗</span> Use the App for any unlawful purpose</li>
							</ul>
						</div>
					</section>

					<section>
						<h2 class="text-term-green font-bold">4. Subscriptions</h2>
						<p class="mt-1 text-term-subtext">ubicode Pro is available as an auto-renewable subscription. Payment is charged to your Apple ID account at confirmation of purchase. The subscription automatically renews unless turned off at least 24 hours before the end of the current period. You can manage and cancel subscriptions in your App Store account settings.</p>
					</section>

					<section>
						<h2 class="text-term-green font-bold">5. Disclaimer of Warranties</h2>
						<p class="mt-1 text-term-subtext">THE APP IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. YOU USE THE APP AT YOUR OWN RISK.</p>
					</section>

					<section>
						<h2 class="text-term-green font-bold">6. Limitation of Liability</h2>
						<p class="mt-1 text-term-subtext">IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF DATA, LOSS OF PROFITS, OR BUSINESS INTERRUPTION, ARISING FROM YOUR USE OF THE APP.</p>
					</section>

					<section>
						<h2 class="text-term-green font-bold">7. Your Responsibility</h2>
						<p class="mt-1 text-term-subtext">You are solely responsible for the servers you connect to and the commands you execute using the App. We are not liable for any damage to remote systems resulting from your use of the App.</p>
					</section>

					<section>
						<h2 class="text-term-green font-bold">8. Termination</h2>
						<p class="mt-1 text-term-subtext">This license is effective until terminated. We may terminate this license at any time if you fail to comply with any term of this agreement. Upon termination, you must cease all use of the App and delete all copies.</p>
					</section>

					<section>
						<h2 class="text-term-green font-bold">9. Governing Law</h2>
						<p class="mt-1 text-term-subtext">This agreement shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.</p>
					</section>

					<section>
						<h2 class="text-term-green font-bold">10. Contact Us</h2>
						<p class="mt-1 text-term-subtext">If you have questions about this EULA, please contact us at <a href="mailto:legal@ubicode.ai" class="text-term-blue hover:underline">legal@ubicode.ai</a>.</p>
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
