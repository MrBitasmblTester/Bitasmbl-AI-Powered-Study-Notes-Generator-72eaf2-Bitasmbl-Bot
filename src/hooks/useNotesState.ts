import { useState } from 'react';
import { GeneratedNotes } from '../types/notes';

export function useNotesState() {
  const [notes, setNotes] = useState<GeneratedNotes | null>(null);
  const updateSummary = (summary: string) => {
    setNotes(prev => (prev ? { ...prev, summary } : prev));
  };
  return { notes, setNotes, updateSummary };
}