<script>
	import './../app.css';
	import NetworkIndicator from '../lib/header/NetworkIndicator.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	

</script>

<header class="px-4 py-2">
	<a href="/"
		class="flex flex-row justify-start items-center content-center">
		<img
			class="basis-16"
			src="/logo.svg" 
			height=64 
			width=64 
			alt="Gnosis Auction" 
		/>

		<span 
			class="basis-auto capsized_6-6 text-gnosis-carrot pl-4">
			Gnosis Auction
		</span>
	</a>
</header>

<main class="mt-8 px-4">
	<slot />
</main>

<footer class="px-4 capsized_4-4">
	<nav data-sveltekit-prefetch>
		<ul>
			<li class:active={$page.url.pathname === '/'}>
				<a href="/">Forum</a>
			</li>
			<li class:active={$page.url.pathname === '/'}>
				<a href="/">Terms</a>
			</li>
			<li class:active={$page.url.pathname === '/'}>
				<a href="/">Analytics</a>
			</li>
			<li class:active={$page.url.pathname === '/'}>
				<a href="/">Support</a>
			</li>
		</ul>
</footer>

<nav class="px-4 capsized_4-4 bg-gnosis-beige">
	<a class="wallet">
		Connect wallet
	</a>
</nav>

<style>
</style>
