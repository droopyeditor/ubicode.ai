<script lang="ts">
	import connectScreen from '$lib/assets/img/connect_screen.jpg';
	import sixelSupport from '$lib/assets/img/sixel_support.jpg';
	import sftpSupport from '$lib/assets/img/sftp_support.jpg';
	import textEditor from '$lib/assets/img/text_editor.jpg';
	import sshTunneling from '$lib/assets/img/ssh_tunneling.jpg';
	import commandSnippet from '$lib/assets/img/command_snippet.jpg';
	import customizableKeyPanel from '$lib/assets/img/customizable_key_panel.jpg';

	const command = 'ubicode --list-features --verbose';

	const features = [
		{
			name: 'Quick Connect',
			desc: 'Save and organize your servers. Connect with a single tap.',
			color: 'text-term-green',
			screenshots: [connectScreen]
		},
		{
			name: 'Terminal Emulator',
			desc: 'Full-featured xterm-compatible terminal with true color, Unicode, and Sixel graphics support.',
			color: 'text-term-cyan',
			screenshots: [sixelSupport]
		},
		{
			name: 'SFTP Browser',
			desc: 'Browse, upload, and download files with a visual file manager.',
			color: 'text-term-peach',
			screenshots: [sftpSupport]
		},
		{
			name: 'Built-in Text Editor',
			desc: 'Edit remote files without leaving the app.',
			color: 'text-term-mauve',
			screenshots: [textEditor]
		},
		{
			name: 'SSH Tunneling',
			desc: 'Local and remote port forwarding made simple.',
			color: 'text-term-blue',
			screenshots: [sshTunneling]
		},
		{
			name: 'Command Snippets',
			desc: 'Save and reuse your most common commands.',
			color: 'text-term-red',
			screenshots: [commandSnippet]
		},
		{
			name: 'Customizable Key Panel',
			desc: 'Tailor your keyboard shortcuts for efficiency.',
			color: 'text-term-cyan',
			screenshots: [customizableKeyPanel]
		}
	];

	const screenshotFrameBase =
		'rounded-2xl border border-term-border bg-term-bg overflow-hidden shadow-lg shadow-black/20';
</script>

<section id="features">
	<p>
		<span class="text-term-green">user@ubicode</span><span class="text-term-subtext">:</span><span class="text-term-blue">~</span><span class="text-term-subtext">$</span>
		 {command}
	</p>

	<div class="mt-2 sm:mt-3">
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
			{#each features as feature (feature.name)}
				<div class="box-card relative border border-term-border p-3 sm:p-4 flex flex-col">
					<span class="corner tl text-term-border">┌</span>
					<span class="corner tr text-term-border">┐</span>
					<span class="corner bl text-term-border">└</span>
					<span class="corner br text-term-border">┘</span>
					<p>
						<span class="{feature.color}">◆</span>
						<span class="{feature.color} font-medium">{feature.name}</span>
					</p>
					<p class="text-term-subtext">{feature.desc}</p>
					<div class="mt-auto pt-3 flex gap-3 justify-center">
						{#each feature.screenshots as src, i (i)}
							<div
								class={`${screenshotFrameBase} ${
									feature.screenshots.length === 1
										? 'w-full'
										: 'w-[calc(50%-0.375rem)] sm:w-44 sm:max-w-[calc(50%-0.375rem)]'
								}`}
							>
								<img {src} alt="{feature.name}" class="w-full h-auto" loading="lazy" />
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<p class="mt-4 text-term-subtext">
			<span class="text-term-green">✓</span> {features.length} features loaded.
		</p>
	</div>
</section>

<style>
	.box-card {
		border-color: transparent;
		background-image:
			linear-gradient(to right, var(--color-term-border) 1px, transparent 1px),
			linear-gradient(to right, var(--color-term-border) 1px, transparent 1px),
			linear-gradient(to bottom, var(--color-term-border) 1px, transparent 1px),
			linear-gradient(to bottom, var(--color-term-border) 1px, transparent 1px);
		background-size:
			calc(100% - 1ch) 1px,
			calc(100% - 1ch) 1px,
			1px calc(100% - 1lh),
			1px calc(100% - 1lh);
		background-position:
			0.5ch 0,
			0.5ch 100%,
			0 0.5lh,
			100% 0.5lh;
		background-repeat: no-repeat;
	}

	.corner {
		position: absolute;
		line-height: 1;
		pointer-events: none;
	}

	.tl { top: 0; left: 0; transform: translate(-15%, -35%); }
	.tr { top: 0; right: 0; transform: translate(15%, -35%); }
	.bl { bottom: 0; left: 0; transform: translate(-15%, 35%); }
	.br { bottom: 0; right: 0; transform: translate(15%, 35%); }
</style>
