<script lang="ts">
	import { fade } from 'svelte/transition';
	import BlinkingCursor from './BlinkingCursor.svelte';
	import { typeText, delay } from '$lib/utils/typing.svelte.js';

	import connectScreen from '$lib/assets/img/connect_screen.jpg';
	import terminal from '$lib/assets/img/terminal.jpg';
	import sixelSupport from '$lib/assets/img/sixel_support.jpg';
	import sftpSupport from '$lib/assets/img/sftp_support.jpg';
	import textEditor from '$lib/assets/img/text_editor.jpg';
	import sshTunneling from '$lib/assets/img/ssh_tunneling.jpg';
	import commandSnippet from '$lib/assets/img/command_snippet.jpg';
	import customizableKeyPanel from '$lib/assets/img/customizable_key_panel.jpg';
	import sshKeyGen from '$lib/assets/img/ssh_key_gen.jpg';
	import sshKeyImport from '$lib/assets/img/ssh_key_import.jpg';

	let { onComplete, skipped = false }: { onComplete?: () => void; skipped?: boolean } = $props();

	let commandText = $state('');
	let commandDone = $state(false);

	const command = 'ubicode --screenshots';

	const screenshots = [
		{ src: connectScreen, alt: 'Connection screen' },
		{ src: terminal, alt: 'Terminal session' },
		{ src: sixelSupport, alt: 'Sixel graphics support' },
		{ src: sftpSupport, alt: 'SFTP file browser' },
		{ src: textEditor, alt: 'Built-in text editor' },
		{ src: sshTunneling, alt: 'SSH port forwarding' },
		{ src: commandSnippet, alt: 'Command snippets' },
		{ src: customizableKeyPanel, alt: 'Customizable key panel' },
		{ src: sshKeyGen, alt: 'SSH key generation' },
		{ src: sshKeyImport, alt: 'SSH key import' }
	];

	$effect(() => {
		if (skipped) {
			commandText = command;
			commandDone = true;
			const t = setTimeout(() => onComplete?.(), 150);
			return () => clearTimeout(t);
		}

		const signal = { cancelled: false };

		(async () => {
			await typeText(command, 50, (t) => { if (!signal.cancelled) commandText = t; }, signal);
			if (signal.cancelled) return;
			commandDone = true;

			await delay(500);
			if (signal.cancelled) return;
			onComplete?.();
		})();

		return () => { signal.cancelled = true; };
	});
</script>

<section id="screenshots">
	<p>
		<span class="text-term-green">user@ubicode</span><span class="text-term-subtext">:</span><span class="text-term-blue">~</span><span class="text-term-subtext">$</span>
		 {commandText}{#if !commandDone}<BlinkingCursor />{/if}
	</p>

	{#if commandDone}
		<div in:fade={{ duration: 200 }} class="mt-2 sm:mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-4">
			{#each screenshots as screenshot (screenshot.alt)}
				<div class="rounded-lg border border-term-border bg-term-bg overflow-hidden">
					<img
						src={screenshot.src}
						alt={screenshot.alt}
						class="w-full h-auto"
						loading="lazy"
					/>
				</div>
			{/each}
		</div>
	{/if}
</section>
