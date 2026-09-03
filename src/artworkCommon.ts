import React from 'react';

export interface ArtworkProps {
  parts: Record<string, string>;
  onPartClick?: (key: string) => void;
  interactive?: boolean;
}

export const cursorClass = (interactive: boolean) =>
  interactive ? 'cursor-pointer hover:opacity-85 hover:stroke-amber-400 hover:stroke-[3px] transition-all' : '';

// Helper for coloring studio:
// If the user has painted the part (or hint/guide is active), use that color.
// Otherwise, the canvas must be completely uncolored (white #FFFFFF) for kids to color.
export const getF = (parts: Record<string, string>, key: string, _fallback?: string) => {
  if (parts && parts[key]) {
    return parts[key];
  }
  // Pure uncolored canvas (clean white #FFFFFF with black outlines) for kids to color
  return '#FFFFFF';
};
