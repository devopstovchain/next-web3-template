'use client';
import { Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useToggleThemeMode } from 'src/jotai/theme/hooks';
import { useAccount, useDisconnect } from 'wagmi';
import ErrorExeTransaction from '../Common/ErrorExeTransaction/ErrorExeTransaction';
import ConnectWalletModal from '../Modals/ConnectWalletModal/ConnectWalletModal';

const ConnectButton = () => {
  const { address } = useAccount();
  const { disconnectAsync } = useDisconnect();
  const toggleTheme = useToggleThemeMode();

  const [openDialog, setOpenDialog] = useState(false);

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
          <Typography variant="body1" mb={1}>
            {address}
          </Typography>
          <Button onClick={handleDisconnect} variant="outlined">
            Disconnect
          </Button>
        </Stack>
      ) : (
        <Button onClick={() => setOpenDialog(true)} variant="outlined">
          Connect wallet
        </Button>
      )}
      <Button onClick={toggleTheme} variant="outlined" sx={{ mt: 2 }}>
        Change theme
      </Button>

      <ConnectWalletModal open={openDialog} onClose={() => setOpenDialog(false)} />
    </>
  );
};

export default ConnectButton;
