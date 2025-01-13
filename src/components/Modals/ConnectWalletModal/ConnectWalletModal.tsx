import { Dialog, DialogContent, DialogTitle, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { toast } from 'react-toastify';
import ErrorExeTransaction from 'src/components/Common/ErrorExeTransaction/ErrorExeTransaction';
import { infoWallet } from 'src/config/wagmi/config';
import { bscTestnet } from 'viem/chains';
import { Connector, useConnect } from 'wagmi';

interface IProps {
  open: boolean;
  onClose: () => void;
}

const ConnectWalletModal = (props: IProps) => {
  const { open, onClose } = props;
  const { connectAsync, connectors } = useConnect();

  const handleConnectAccount = async (connect: Connector) => {
    try {
      await connectAsync({
        chainId: bscTestnet.id,
        connector: connect,
      });

      onClose();
    } catch (error) {
      console.log('🚀 ~ handleConnectAccount ~ error:', error);
      toast.error(<ErrorExeTransaction error={error} />);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle variant="h5" fontWeight={600}>
        Connect Wallet
      </DialogTitle>

      <DialogContent>
        {connectors.map(connector => {
          if (connector.id === 'io.metamask') {
            return null;
          }
          return (
            <Stack
              direction="row"
              key={connector.id}
              sx={{
                borderRadius: '8px',
                p: 1,
                display: 'flex',
                gap: 1.5,
                mb: 1,
                placeItems: 'center',
                cursor: 'pointer',
                '&:hover': { '& > .wallet-name': { color: 'primary.main' } },
                bgcolor: '#3396ff17',
              }}
              onClick={() => handleConnectAccount(connector)}
            >
              <Image
                src={connector.icon || infoWallet[connector.id]?.logoWallet}
                alt={`logo wallet ${connector.name}`}
                style={{ borderRadius: '4px' }}
                width={24}
                height={24}
              />
              <Typography className="wallet-name" variant="body2" fontWeight={600} sx={{ transition: 'color 0.2s' }}>
                {connector.name}
              </Typography>
            </Stack>
          );
        })}
      </DialogContent>
    </Dialog>
  );
};

export default ConnectWalletModal;
