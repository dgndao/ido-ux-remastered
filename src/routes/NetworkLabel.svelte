<script>
    import { defaultEvmStores, connected, chainId, signerAddress } from 'svelte-ethers-store'
    import { onMount, onDestroy, setContext } from 'svelte';
    import { derived } from 'svelte/store';

    import networks from '../lib/configs/networks'

    export let handle;

    let networkId = (networks.find((n) => n.handle == handle)?.chain_id)

    let networkClass
    let activeClass = 'before:block before:absolute before:-inset-y-0 before:-inset-x-2 '
    let selectedClass = ''
    
    switch(handle) {
        case 'avax': 
            networkClass = 'text-avax-red'
            selectedClass = 'before:bg-avax-red/25'
            break;
        case 'ethereum': 
            networkClass = 'text-ethereum-gray'
            selectedClass = 'before:bg-ethereum-gray/25'
            break;
        case 'gnosis': 
            networkClass = 'text-gnosis-green'
            selectedClass = 'before:bg-gnosis-green/25'
            break;
        case 'polygon': 
            networkClass = 'text-polygon-purple'
            selectedClass = 'before:bg-polygon-purple/25'
            break;
    };

    let selectedNetworkClass = derived(
        chainId,
        $chainId => {return ($chainId == networkId) ? selectedClass : ''}
    )
</script>

<a href="/#" class="border-style-dashed relative inline-block active:text-white {networkClass} {activeClass} {$selectedNetworkClass}">
    <slot></slot>
</a>

<style>
    a {
		text-decoration-line: underline;
		text-decoration-style: dashed;
		text-decoration-thickness: 4px;
		text-underline-offset: 0.25rem;
    }
</style>