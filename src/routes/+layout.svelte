<script lang="ts">
	import '@fontsource/jetbrains-mono/400.css';
	import '@fontsource/jetbrains-mono/500.css';
	import '@fontsource/jetbrains-mono/700.css';
	import './layout.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>ubicode — SSH Client for iOS</title>
	<meta name="description" content="The SSH client your iPhone deserves. Multi-session tabs, SFTP browser, port forwarding, and more." />
	<meta name="theme-color" content="#1e1e2e" />
	<meta property="og:title" content="ubicode — SSH Client for iOS" />
	<meta property="og:description" content="The SSH client your iPhone deserves." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://ubicode.ai" />
	<link rel="icon" href="/favicon.svg" />
</svelte:head>

<div class="min-h-screen">
	{@render children()}
</div>
