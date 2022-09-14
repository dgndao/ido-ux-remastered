<script>
	import './../app.css';
	import NetworkIndicator from '../lib/header/NetworkIndicator.svelte';
	import { onMount, setContext, getContext } from 'svelte';
	import { page } from '$app/stores';

	let showModal = false;
	
	setContext('layout.showModal', showModal);
</script>

<header>
	<div class="corner">
		<a href="/">
			<img src="/logo.svg" height=64 width=64 alt="DGN DAO" />
		</a>
	</div>

	<hr/>
	<NetworkIndicator></NetworkIndicator>
	<hr/>

	<nav data-sveltekit-prefetch>
		<ul>
			<li class:active={$page.url.pathname === '/'}>
				<a href="/">Home</a>
			</li>
			<li class:active={$page.url.pathname === '/about'}>
				<a href="/about">About</a>
			</li>
			<li class:active={$page.url.pathname === '/todos'}>
				<a href="/todos">Todos</a>
			</li>
		</ul>
	</nav>

	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<main>
	<slot />
</main>

<footer>
</footer>

<style>
</style>
