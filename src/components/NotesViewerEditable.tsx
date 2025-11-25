import { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import HighlightedSummary from './HighlightedSummary';
import { GeneratedNotes } from '../types/notes';

export default function NotesViewerEditable({ initial }: { initial: GeneratedNotes | null }) {
  const [summary, setSummary] = useState(initial?.summary ?? '');
  const [keywords] = useState(initial?.keywords ?? []);

  if (!initial) return <Typography>No notes yet.</Typography>;
  return (
    <Box>
      <Typography variant="h6">Editable Summary</Typography>
      <TextField multiline fullWidth minRows={6} value={summary}
        onChange={e => setSummary(e.target.value)} sx={{ mb: 2 }} />
      <HighlightedSummary text={summary} keywords={keywords} />
    </Box>
  );
}