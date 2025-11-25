import { Typography, Box } from '@mui/material';

export default function HighlightedSummary({
  text,
  keywords,
}: { text: string; keywords: string[] }) {
  const parts = text.split(/(\s+)/);
  const lower = new Set(keywords.map(k => k.toLowerCase()));
  return (
    <Box>
      <Typography component="div">
        {parts.map((p, i) => {
          const plain = p.replace(/[^a-zA-Z]/g, '').toLowerCase();
          const isKey = lower.has(plain);
          return (
            <span key={i} style={isKey ? { backgroundColor: '#fff59d' } : {}}>
              {p}
            </span>
          );
        })}
      </Typography>
    </Box>
  );
}