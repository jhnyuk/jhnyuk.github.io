<script lang="ts">
	import '../app.css';
	import Header from '../components/layout/Header.svelte';
	import Footer from '../components/layout/Footer.svelte';
	import Sidebar from '../components/layout/Sidebar.svelte';
	import { page } from '$app/state';
	import { onNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import Site from '$lib/config/common';
	import BackgroundEffect from '$components/BackgroundEffect.svelte';
	import { BackgroundEnabled } from '$lib/stores/theme';
	import { initCodeBlocks } from '$lib/client/codeblocks';

	const { children } = $props();

	let title = $derived(
		[Site.name, ...page.url.pathname.split('/').slice(1)].filter(Boolean).join(' - ')
	);

	let isSidebarOpen = $state(false);
	function toggleSidebar() {
		isSidebarOpen = !isSidebarOpen;
	}
	function closeSidebar() {
		isSidebarOpen = false;
	}

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	onMount(() => {
		initCodeBlocks();
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={Site.description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={Site.description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={Site.url} />
	<meta property="og:site_name" content={Site.name} />
	<meta name="author" content={Site.seo.author} />
	<meta name="keywords" content={Site.tags.join(', ')} />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href={Site.url + page.url.pathname} />
	{@html `<script type="application/ld+json">
		${JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'Person',
			name: Site.seo.author,
			url: Site.url,
			description: Site.description,
			jobTitle: 'Web Developer & QA Engineer',
			sameAs: [Site.out.github, Site.out.linkedin]
		})}
	</script>`}
</svelte:head>

<div class="text-text mx-auto flex min-h-screen max-w-[90%] flex-col md:max-w-[80%]">
	{#if $BackgroundEnabled}
		<BackgroundEffect />
	{/if}
	<Header {toggleSidebar} />
	<Sidebar isOpen={isSidebarOpen} {closeSidebar} />
	<main class="flex-1 px-0 py-8 md:px-5">
		{@render children?.()}
	</main>
	<Footer />
</div>
