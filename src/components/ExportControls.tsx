import { Button, Stack } from '@mui/material';
import { GeneratedNotes } from '../types/notes';

export default function ExportControls({ notes }: { notes: GeneratedNotes | null }) {
  const handleExport = async (format: 'txt' | 'pdf') => {
    if (!notes) return;
    const res = await fetch('/api/export-notes', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ notes, format }),
    });
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `notes.${format}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
      <Button variant="outlined" onClick={() => handleExport('txt')}>Export TXT</Button>
      <Button variant="outlined" onClick={() => handleExport('pdf')}>Export PDF</Button>
    </Stack>
  );
}