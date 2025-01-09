import { Container, Paper, Stack, Typography } from '@mui/material';
import ConnectButton from 'src/components/Buttons/ConnectButton';

export default async function Home() {
  return (
    <div>
      <main>
        <Container>
          <Paper
            component="article"
            sx={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <Stack>
              <Typography variant="h3" mb={2}>
                Hello, World
              </Typography>
              <ConnectButton />
            </Stack>
          </Paper>
        </Container>
      </main>
    </div>
  );
}
