'use client';
import { Button, Stack, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import { bscTestnet } from 'viem/chains';
import { injected, useAccount, useConnect, useDisconnect } from 'wagmi';
import ErrorExeTransaction from '../Common/ErrorExeTransaction/ErrorExeTransaction';
import { useToggleThemeMode } from 'src/jotai/theme/hooks';

const ConnectButton = () => {
  const { connectAsync } = useConnect();
  const { address } = useAccount();
  const { disconnectAsync } = useDisconnect();
  const toggleTheme = useToggleThemeMode();

  const handleConnectAccount = async () => {
    try {
      await connectAsync({
        chainId: bscTestnet.id,
        connector: injected(),
      });
    } catch (error) {
      console.log('🚀 ~ handleConnectAccount ~ error:', error);
      toast.error(<ErrorExeTransaction error={error} />);
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnectAsync();
    } catch (error) {
      console.log('🚀 ~ handleDisconnect ~ error:', error);
      toast.error(<ErrorExeTransaction error={error} />);
    }
  };

  return (
    <>
      {address ? (
        <Stack>
          <Typography variant="body1">{address}</Typography>
          <Button onClick={handleDisconnect} variant="outlined">
            Disconnect
          </Button>
        </Stack>
      ) : (
        <Button onClick={handleConnectAccount} variant="outlined">
          Connect wallet
        </Button>
      )}
      <Button onClick={toggleTheme} variant="outlined" sx={{ mt: 2 }}>
        Change theme
      </Button>
    </>
  );
};

export default ConnectButton;
