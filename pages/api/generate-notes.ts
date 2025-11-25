import type { NextApiRequest, NextApiResponse } from 'next';
import { GeneratedNotes } from '../../src/types/notes';

function summarize(text: string): string {
  const sentences = text.split(/(?<=[.!?])\s+/).slice(0, 5);
  return sentences.join(' ');
}

function extractKeywords(text: string): string[] {
  const words = text.toLowerCase().match(/[a-zA-Z]{5,}/g) || [];
  const freq: Record<string, number> = {};
  words.forEach(w => { freq[w] = (freq[w] || 0) + 1; });
  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([w]) => w);
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GeneratedNotes | { error: string }>
) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { text } = req.body || {};
  if (!text || typeof text !== 'string') return res.status(400).json({ error: 'Invalid text' });
  const summary = summarize(text);
  const keywords = extractKeywords(text);
  res.status(200).json({ summary, keywords });
}