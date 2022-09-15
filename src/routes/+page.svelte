<script>
	import NetworkLabel from "../lib/NetworkLabel.svelte";
</script>

<svelte:head>
	<title>Gnosis Auction - Home</title>
	<meta name="description" content="Gnosis Auction" />
</svelte:head>

<section class="mt-2 md:mt-4 px-4">
	<h1 class="mb-8 md:mb-16">
		<span class="capsized_6-6 md:capsized_8-8">
		The fairiest mechanism<br/>
		to launch assets on 

		<NetworkLabel handle={'ethereum'}>Ethereum</NetworkLabel>,
		<NetworkLabel handle={'gnosis'}>Gnosis</NetworkLabel>,
		<NetworkLabel handle={'avax'}>Avalanche</NetworkLabel> and 
		<NetworkLabel handle={'polygon'}>Polygon</NetworkLabel>
		</span>
	</h1>

	<p class="capsized_4-4 md:capsized_6-6">
		Gnosis Auction is a platform for conducting
fair, transparent, and decentralized token price discovery.
	</p>
</section>

<style>
	h1 {
		font-family: 'Averta Bold';
		font-style: bold;
	}
</style>