<script>
	import NetworkLabel from "./NetworkLabel.svelte";
</script>

<svelte:head>
	<title>Gnosis Auction - Home</title>
	<meta name="description" content="Gnosis Auction" />
</svelte:head>

<section class="mt-8 md:mt-8 px-4">
	<h1 class="mb-8 md:mb-16 font-averta-bold text-trim-cap-6-gap-6 md:text-trim-cap-8-gap-8 capsize">
		The fairiest mechanism<br/>
		to launch assets on 

		<NetworkLabel handle={'ethereum'}>Ethereum</NetworkLabel>,
		<NetworkLabel handle={'gnosis'}>Gnosis</NetworkLabel>,
		<NetworkLabel handle={'avax'}>Avalanche</NetworkLabel> and 
		<NetworkLabel handle={'polygon'}>Polygon</NetworkLabel>
	</h1>

	<p class="font-averta text-trim-cap-4-gap-4 md:text-trim-cap-6-gap-6 capsize">
		Gnosis Auction is a platform for conducting
fair, transparent, and decentralized token price discovery.
	</p>
</section>