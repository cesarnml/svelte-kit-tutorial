<script lang="ts">
	import { page } from '$app/stores'
	import ErrorTestButton from '$lib/components/ErrorTestButton.svelte'
</script>

<svelte:head>
	<title>Cesar's Web Portfolio</title>
	<meta
		name="description"
		content="Explore my web portfolio and tech blog for insights on the latest trends in technology. Discover my creative designs and development skills in the portfolio, while the blog features in-depth analysis and expert tips on various tech topics. Join me on a journey of innovation and inspiration."
	/>
	<link rel="canonical" href={$page.url.href} />
</svelte:head>

<div class="flex h-full w-full flex-col items-center justify-center">
	<h2><span>🚧</span> site under construction <span>🚧</span></h2>
	<ErrorTestButton />
</div>
