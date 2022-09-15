<script>
	import './../app.css';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import WalletWidget from './../lib/WalletWidget.svelte';
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
			class="basis-auto capsized_4-4 text-gnosis-carrot">
			Gnosis Auction
		</span>
	</a>
</header>

<main class="-mt-20 pt-20 -mb-20 pb-20 min-h-screen max-w-screen-lg mx-auto">
	<slot />
</main>

<nav class="px-2 bg-gnosis-beige max-w-3xl mx-auto sticky bottom-0 h-20 rounded-t-2xl flex flex-row items-center justify-between">
	<button class="active:text-white active:bg-gnosis-black text-gnosis-black border-gnosis-black capitalize font-sans-bold capsized_4-0 rounded-2xl border border-solid h-12 w-12 mr-2 text-center">
		<span>&#9776;</span>
	</button>
	<WalletWidget></WalletWidget>
</nav>
