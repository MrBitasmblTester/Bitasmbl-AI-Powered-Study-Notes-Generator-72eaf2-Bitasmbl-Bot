import { useState } from 'react';
import { Container, Grid, TextField, Button } from '@mui/material';
import NotesViewer from '../src/components/NotesViewer';

export default function Workspace() {
  const [input, setInput] = useState('');
  const [notes, setNotes] = useState(null);

  const handleGenerate = async () => {
    const res = await fetch('/api/generate-notes', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: input }),
    });
    setNotes(await res.json());
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField multiline minRows={12} fullWidth value={input}
            onChange={e => setInput(e.target.value)} label="Paste lecture or article" />
          <Button sx={{ mt: 2 }} variant="contained" onClick={handleGenerate}>
            Generate Notes
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <NotesViewer notes={notes} />
        </Grid>
      </Grid>
    </Container>
  );
}