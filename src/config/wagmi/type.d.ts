import { configEvmChain } from './config';

declare module 'wagmi' {
  interface Register {
    config: typeof configEvmChain;
  }
}

export type TAppChainId = (typeof configEvmChain)['chains'][number]['id'];
