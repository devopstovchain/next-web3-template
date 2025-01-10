'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type ReactNode, useState } from 'react';
import { WagmiProvider } from 'wagmi';
import { ToastContainer } from 'react-toastify';
import { configEvmChain } from 'src/config/wagmi/config';

const Providers = (props: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={configEvmChain}>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="light"
        style={{ width: 'max-content', minWidth: '220px', maxWidth: '90%' }}
        pauseOnHover={true}
      />
      <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
    </WagmiProvider>
  );
};

export default Providers;
