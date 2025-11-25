export function splitSentences(text: string): string[] {
  return text.split(/(?<=[.!?])\s+/).filter(s => s.trim().length);
}

export function normalize(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}