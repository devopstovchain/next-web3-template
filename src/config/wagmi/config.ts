import { IconArbitrum, IconBNB, SvgComponent } from 'src/assets/icons';
import { createClient } from 'viem';
import { createConfig, http } from 'wagmi';
import { bscTestnet } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';
import { customArbitrum, customArbitrumSepolia } from './customChains';
import { TAppChainId } from './type';

export const configEvmChain = createConfig({
  chains: [customArbitrum, customArbitrumSepolia, bscTestnet],
  connectors: [injected({ target: 'metaMask' })],
  client({ chain }) {
    return createClient({ chain, transport: http() });
  },
});

export const infoChain: {
  [k in TAppChainId]: { logoChain: SvgComponent; name: string; baseToken: string; url: string };
} = {
  [customArbitrum.id]: {
    logoChain: IconArbitrum,
    name: 'Arbitrum',
    baseToken: 'WETH',
    url: customArbitrum.blockExplorers.default.url,
  },
  [bscTestnet.id]: {
    logoChain: IconBNB,
    name: 'BNBTestnet',
    baseToken: 'WBNB',
    url: bscTestnet.blockExplorers.default.url,
  },
  [customArbitrumSepolia.id]: {
    logoChain: IconArbitrum,
    name: 'Arbitrum Sepolia',
    baseToken: 'WETH',
    url: customArbitrumSepolia.blockExplorers.default.url,
  },
};
export const infoWallet: { [k in string]: { logoWallet: string; name: string; url: string } } = {
  // ! only write id wallet allow for connect on web
  ['metaMask']: { logoWallet: '/images/wallet/MetaMaskLogo.png', name: 'Metamask', url: 'https://metamask.io' },
};
