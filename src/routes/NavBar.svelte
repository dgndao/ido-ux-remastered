<script>
    import { defaultEvmStores, connected, chainId, signerAddress } from 'svelte-ethers-store'
    import { onMount, onDestroy, setContext } from 'svelte';
    import { derived } from 'svelte/store';

    import networks from './../lib/configs/networks';

    let isAddressModalVisible, isNetworkModalVisible = false

    // event handling
    function requestAddressModal(event) {
        isAddressModalVisible = true
    }

    function requestNetworkModal(event) {
        isNetworkModalVisible = true
    }
    
    function requestWalletConnection(event) {
        defaultEvmStores.setProvider()
    }

    // data processing
    function chainNameFromId(id) {
        return (networks.find((n) => n.chain_id == id
        )?.name || 'unknown')
    }

    function classesFromChainId(id) {
        let classes = ''
        let handle = networks.find((n) => n.chain_id == id
        )?.handle
        switch(handle) {
            case 'avax':
                classes = 'text-avax-red bg-avax-red/10 border-avax-red';
                break;
            case 'fuji':
                classes = 'text-avax-red bg-avax-red/10 border-avax-red';
                break;
            case 'gnosis':
                classes = 'text-gnosis-green bg-gnosis-green/10 border-gnosis-green';
                break;
            case 'polygon':
                classes = 'text-polygon-purple bg-polygon-purple/10 border-polygon-purple';
                break;
            case 'ethereum':
                classes = 'text-gnosis-black bg-gnosis-black/10 border-gnosis-black';
                break;
            default:
                classes = 'text-gnosis-black bg-gnosis-black/10 border-gnosis-black';
                break;
        }
        return classes;
    }

    function addressLabelFromAddress(address) {
        if(address == undefined) { return ''}
        return address.substring(0, 6) + '...' + address.substring( address.length-4, address.length);
    }

    // derived data
    let chainStyleClasses = derived(
        chainId,
        $chainId => classesFromChainId($chainId)
    )

    let chainName = derived(
        chainId, 
        $chainId => chainNameFromId($chainId)
    )

    let addressLabel = derived(
        signerAddress, 
        $signerAddress => addressLabelFromAddress($signerAddress)
    )
</script>

<nav class="px-2 bg-gnosis-beige max-w-3xl mx-auto rounded-t-2xl flex flex-row items-center justify-between h-full">
	<button class="active:text-white active:bg-gnosis-black text-gnosis-black border-gnosis-black capitalize font-averta text-trim-cap-4-gap-0 capsize rounded-2xl border border-solid h-12 w-12 pt-1 mr-2 text-center">
		<span>&#9776;</span>
	</button>

	<div class="flex flex-row justify-between">
        {#if $connected && $addressLabel}
            <button 
                class="mr-2 h-9 px-2 pt-[3px] {$chainStyleClasses} rounded-2xl border border-solid"
                on:click={requestNetworkModal}>
                <span 
                    class="uppercase font-averta text-trim-cap-3-gap-0 capsize">
                    {$chainName}
                </span>
            </button>
            <button 
                class="h-9 px-2 pt-[3px] leading-none text-gnosis-black border-gnosis-black rounded-2xl border border-solid"
                on:click={requestAddressModal}>
                <span 
                    class="font-averta text-trim-cap-3-gap-0 capsize">
                    {$addressLabel}
                </span>
            </button>
        {:else }
            <button 
                class="h-9 px-2 pt-[3px] leading-none active:text-white active:bg-gnosis-black border-gnosis-black text-gnosis-black rounded-2xl border border-solid"
                on:click={requestWalletConnection}>
                <span 
                    class="uppercase font-averta text-trim-cap-3-gap-0 capsize">
                    Connect wallet
                </span>
            </button>
        {/if}
    </div>
</nav>