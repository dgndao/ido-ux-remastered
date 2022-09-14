import { end_hydrating } from "svelte/internal";

const networks = [
    {
        chain_id : 1,
        name : 'ethereum',
        label: 'ethereum mainnet',
        symbol: 'ETH',
        wrapped_symbol: 'WETH',
        contracts: {
            multicall: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
            easy_auction: '0x0b7fFc1f4AD541A4Ed16b40D8c37f0929158D101',
            deposit_and_place_order: '0x10D15DEA67f7C95e2F9Fe4eCC245a8862b9B5B96',
        }
    },
    {
        chain_id : 4,
        name : 'rinkeby',
        label: 'rinkeby testnet',
        symbol: 'ETH',
        wrapped_symbol: 'WETH',
        contracts: {
            multicall: '0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821',
            easy_auction: '0xC5992c0e0A3267C7F75493D0F717201E26BE35f7',
            deposit_and_place_order: '0x8624fbDf455D51B967ff40aaB4019281A855f008',
        }
    },
    {
        chain_id : 100,
        name : 'gnosis',
        label: 'gnosis chain',
        symbol: 'xDAI',
        wrapped_symbol: 'WxDAI',
        contracts: {
            multicall: '0xb5b692a88bdfc81ca69dcb1d924f59f0413a602a',
            easy_auction: '0x0b7fFc1f4AD541A4Ed16b40D8c37f0929158D101',
            deposit_and_place_order: '0x845AbED0734e39614FEC4245F3F3C88E2da98157',
        }
    },
    {
        chain_id : 137,
        name : 'polygon',
        label: 'polygon',
        symbol: 'MATIC',
        wrapped_symbol: 'WMATIC',
        contracts: {
            multicall: '0x3BA9517da78710b8FCF566e303C2530e5AA604f2',
            easy_auction: '0x0b7fFc1f4AD541A4Ed16b40D8c37f0929158D101',
            deposit_and_place_order: '0x93D2BbA07b44e8F2b02F7DA164eE4f7442a3B618',
        }
    },
    {
        chain_id : 43113,
        name : 'fuji',
        label: 'fuji testnet',
        symbol: 'AVAX',
        wrapped_symbol: 'WAVAX',
        contracts: {
            multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
            easy_auction: '0xa5cd8D8effACB7Ad861e3797404924199D1463a5',
            deposit_and_place_order: '0x39cbA0cC28EE67EAa8134C0e80a061c13EBC3603',
        }
    },
    {
        chain_id : 43114,
        name : 'avax',
        label: 'avalanche',
        symbol: 'AVAX',
        wrapped_symbol: 'WAVAX',
        contracts: {
            multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
            easy_auction: '0xb5D00F83680ea5E078e911995c64b43Fbfd1eE61',
            deposit_and_place_order: '0x193c8993480DF4c1dBBdB39dB07511f7D789cedb',
        }
    },
]

//
// export const EASY_AUCTION_NETWORKS: { [chainId in ChainId]: string } = {
//     [ChainId.MAINNET]: '0x0b7fFc1f4AD541A4Ed16b40D8c37f0929158D101',
//     [ChainId.RINKEBY]: '0xC5992c0e0A3267C7F75493D0F717201E26BE35f7',
//     [ChainId.XDAI]: '0x0b7fFc1f4AD541A4Ed16b40D8c37f0929158D101',
//     [ChainId.MATIC]: '0x0b7fFc1f4AD541A4Ed16b40D8c37f0929158D101',
//     [ChainId.FUJI]: '0xa5cd8D8effACB7Ad861e3797404924199D1463a5',
//     [ChainId.AVAX]: '0xb5D00F83680ea5E078e911995c64b43Fbfd1eE61',
//   }

// export const DEPOSIT_AND_PLACE_ORDER: { [chainId in ChainId]: string } = {
//     [ChainId.MAINNET]: '0x10D15DEA67f7C95e2F9Fe4eCC245a8862b9B5B96',
//     [ChainId.RINKEBY]: '0x8624fbDf455D51B967ff40aaB4019281A855f008',
//     [ChainId.XDAI]: '0x845AbED0734e39614FEC4245F3F3C88E2da98157',
//     [ChainId.MATIC]: '0x93D2BbA07b44e8F2b02F7DA164eE4f7442a3B618',
//     [ChainId.FUJI]: '0x39cbA0cC28EE67EAa8134C0e80a061c13EBC3603',
//     [ChainId.AVAX]: '0x193c8993480DF4c1dBBdB39dB07511f7D789cedb',
//   }
  
  


// const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
//     [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
//     [ChainId.RINKEBY]: '0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821',
//     [ChainId.XDAI]: '0xb5b692a88bdfc81ca69dcb1d924f59f0413a602a',
//     [ChainId.MATIC]: '0x3BA9517da78710b8FCF566e303C2530e5AA604f2',
//     //Multicall3
//     [ChainId.FUJI]: '0xcA11bde05977b3631167028862bE2a173976CA11',
//     [ChainId.AVAX]: '0xcA11bde05977b3631167028862bE2a173976CA11',
//   }

export default networks;