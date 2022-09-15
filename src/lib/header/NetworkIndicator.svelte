<script>
    import { defaultEvmStores, connected, chainId, signerAddress } from 'svelte-ethers-store'
    import { onMount } from 'svelte';
    import { derived } from 'svelte/store';
    
    import Modal from './../modal/Modal.svelte'
    import networks from './../configs/networks'

    networkContext = getContext('Metamask')

    let connected = networkContext.connected
    let chainId = networkContext.chainId
    let signerAddress = networkContext.signerAddress

    let showNetworkSelectionModal = false
    let showWalletConnectionModal = false
    
    let chainLabel = derived(
        chainId, 
        $chainId => chainLabelFromId($chainId)
    )

    let chainKnown = derived(
        chainId, 
        $chainId => isNetworkKnown($chainId)
    )

    function isNetworkKnown(id) {
        return !!networks.find((n) => n.chain_id == id
        );
    }

    function chainLabelFromId(id) {
        return networks.find((n) => n.chain_id == id
        )?.label
    }

</script>

<div>
    Connected:      {$connected}<br/>
    <hr/>
    Address:        {$signerAddress}<br/>
    <hr/>
    Chain id:       {$chainId}<br/>
    Chain known?:   {$chainKnown}<br/>
    Chain name:     {$chainLabel}<br/>
</div>

{#if showWalletConnectionModal}
    <Modal on:close="{() => showWalletConnectionModal = false}">
    </Modal>
{/if}

{#if showNetworkSelectionModal}
    <Modal on:close="{() => showNetworkSelectionModal = false}">
    </Modal>
{/if}