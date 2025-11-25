import { Container, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <Container sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>AI-Powered Study Notes</Typography>
      <Button variant="contained" onClick={() => router.push('/workspace')}>
        Open Workspace
      </Button>
    </Container>
  );
}