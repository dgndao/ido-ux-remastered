<script>
	import './../app.css';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import NavBar from './NavBar.svelte';
</script>

<header class="px-4 py-4 max-w-screen-lg mx-auto">
	<a href="/"
		class="flex flex-row justify-start items-center content-center">
		<img
			class="basis-12 mr-4"
			src="/logo.svg" 
			height="48px"
			width="48px" 
			alt="Gnosis Auction" 
		/>

		<span 
			class="basis-auto text-trim-cap-4-gap-0 md:text-trim-cap-6-gap-0 text-gnosis-carrot">
			Gnosis Auction
		</span>
	</a>
</header>

<main class="-mt-20 pt-20 -mb-16 pb-16 min-h-screen max-w-screen-lg mx-auto">
	<slot />
</main>

<footer class="sticky bottom-0 max-w-3xl mx-auto h-[64px]">
	<NavBar></NavBar>
</footer>
