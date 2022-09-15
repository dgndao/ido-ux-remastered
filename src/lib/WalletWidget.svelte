<script>
    import { defaultEvmStores, connected, chainId, signerAddress } from 'svelte-ethers-store'
    import { onMount, onDestroy, setContext } from 'svelte';
    import { derived } from 'svelte/store';

    import networks from './configs/networks';

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
                classes = 'text-ethereum-gray bg-ethereum-gray/10 border-ethereum-gray';
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

<div class="flex flex-row justify-between">
    {#if $connected && $addressLabel}
        <button 
            class="{$chainStyleClasses} uppercase font-sans-bold mr-2 capsized_3-0 p-3 rounded-2xl border border-solid"
            on:click={requestNetworkModal}>
            {$chainName}
        </button>
        <button 
            class="text-gnosis-black border-gnosis-black font-sans capsized_3-0 p-3 rounded-2xl border border-solid"
            on:click={requestAddressModal}>
            {$addressLabel}
        </button>
    {:else }
        <button 
            class="active:text-white active:bg-gnosis-black border-gnosis-black text-gnosis-black uppercase font-sans-bold capsized_3-0 p-3 rounded-2xl border border-solid"
            on:click={requestWalletConnection}>
            Connect wallet
        </button>
    {/if}
</div>