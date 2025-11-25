import type { NextApiRequest, NextApiResponse } from 'next';
import { GeneratedNotes } from '../../src/types/notes';

function toTxt(notes: GeneratedNotes): string {
  return `Summary:\n${notes.summary}\n\nKeywords:\n- ${notes.keywords.join('\n- ')}`;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  const { notes, format } = req.body as { notes: GeneratedNotes; format: 'txt' | 'pdf' };
  if (!notes || !format) return res.status(400).end();
  if (format === 'txt') {
    const content = toTxt(notes);
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Disposition', 'attachment; filename="notes.txt"');
    return res.send(content);
  }
  // Placeholder PDF: respond as txt with pdf mime for now
  const pdfContent = toTxt(notes);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="notes.pdf"');
  return res.send(pdfContent);
}