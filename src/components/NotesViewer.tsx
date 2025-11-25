import { Box, Typography, TextField, Chip, Stack } from '@mui/material';

type Notes = { summary: string; keywords: string[] } | null;

export default function NotesViewer({ notes }: { notes: Notes }) {
  if (!notes) return <Typography variant="body1">No notes yet.</Typography>;
  return (
    <Box>
      <Typography variant="h6" gutterBottom>Summary</Typography>
      <TextField multiline fullWidth minRows={8} defaultValue={notes.summary} />
      <Typography sx={{ mt: 2 }} variant="h6">Keywords</Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {notes.keywords.map(k => <Chip key={k} label={k} />)}
      </Stack>
    </Box>
  );
}