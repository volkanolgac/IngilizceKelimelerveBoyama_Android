import React from 'react';
import { RenderArtwork } from './artworkComponents';
import { WordItem } from './wordsData';

interface PuzzleArtworkProps {
  word: WordItem;
  revealedIndices: number[];
  activeWordUserColors?: Record<string, string>;
  onPieceClick?: (index: number) => void;
  interactive?: boolean;
}

export interface PieceGeometry {
  index: number;
  x: number;
  y: number;
  w: number;
  h: number;
  centerX: number;
  centerY: number;
  pathD: string;
}

// Precision helper to draw an interlocking horizontal boundary
// When moving from xStart to xEnd along line y:
// dir = 1 (tab points +y / down), dir = -1 (tab points -y / up), dir = 0 (straight line)
function hEdge(xStart: number, xEnd: number, y: number, dir: number): string {
  if (dir === 0) return `L ${xEnd} ${y}`;
  const midX = (xStart + xEnd) / 2;
  const tabW = Math.min(20, Math.abs(xEnd - xStart) * 0.28);
  const tabH = 12 * dir;

  if (xStart < xEnd) {
    // Forward (left to right)
    return `L ${midX - tabW} ${y} C ${midX - tabW + 2} ${y + tabH}, ${midX + tabW - 2} ${y + tabH}, ${midX + tabW} ${y} L ${xEnd} ${y}`;
  } else {
    // Reverse (right to left): exact complementary match
    return `L ${midX + tabW} ${y} C ${midX + tabW - 2} ${y + tabH}, ${midX - tabW + 2} ${y + tabH}, ${midX - tabW} ${y} L ${xEnd} ${y}`;
  }
}

// Precision helper to draw an interlocking vertical boundary
// When moving from yStart to yEnd along line x:
// dir = 1 (tab points +x / right), dir = -1 (tab points -x / left), dir = 0 (straight line)
function vEdge(yStart: number, yEnd: number, x: number, dir: number): string {
  if (dir === 0) return `L ${x} ${yEnd}`;
  const midY = (yStart + yEnd) / 2;
  const tabH = Math.min(20, Math.abs(yEnd - yStart) * 0.28);
  const tabW = 12 * dir;

  if (yStart < yEnd) {
    // Forward (top to bottom)
    return `L ${x} ${midY - tabH} C ${x + tabW} ${midY - tabH + 2}, ${x + tabW} ${midY + tabH - 2}, ${x} ${midY + tabH} L ${x} ${yEnd}`;
  } else {
    // Reverse (bottom to top): exact complementary match
    return `L ${x} ${midY + tabH} C ${x + tabW} ${midY + tabH - 2}, ${x + tabW} ${midY - tabH + 2}, ${x} ${midY - tabH} L ${x} ${yEnd}`;
  }
}

// Generate puzzle pieces for word length N (3 to 10) on a 260x260 viewBox
export function generatePuzzlePieces(count: number, width = 260, height = 260): PieceGeometry[] {
  const pieces: PieceGeometry[] = [];
  const W = width;
  const H = height;

  if (count === 3) {
    const colW = W / 3;
    const x1 = colW;
    const x2 = colW * 2;

    // Piece 0 (Left Column)
    pieces.push({
      index: 0,
      x: 0,
      y: 0,
      w: colW,
      h: H,
      centerX: colW / 2,
      centerY: H / 2,
      pathD: `M 0 0 L ${x1} 0 ${vEdge(0, H, x1, 1)} L 0 ${H} Z`,
    });

    // Piece 1 (Middle Column)
    pieces.push({
      index: 1,
      x: x1,
      y: 0,
      w: colW,
      h: H,
      centerX: x1 + colW / 2,
      centerY: H / 2,
      pathD: `M ${x1} 0 L ${x2} 0 ${vEdge(0, H, x2, -1)} L ${x1} ${H} ${vEdge(H, 0, x1, 1)} Z`,
    });

    // Piece 2 (Right Column)
    pieces.push({
      index: 2,
      x: x2,
      y: 0,
      w: colW,
      h: H,
      centerX: x2 + colW / 2,
      centerY: H / 2,
      pathD: `M ${x2} 0 L ${W} 0 L ${W} ${H} L ${x2} ${H} ${vEdge(H, 0, x2, -1)} Z`,
    });
  } else if (count === 4) {
    const halfW = W / 2;
    const halfH = H / 2;

    // Piece 0 (Top-Left)
    pieces.push({
      index: 0,
      x: 0,
      y: 0,
      w: halfW,
      h: halfH,
      centerX: halfW / 2,
      centerY: halfH / 2,
      pathD: `M 0 0 L ${halfW} 0 ${vEdge(0, halfH, halfW, 1)} ${hEdge(halfW, 0, halfH, 1)} Z`,
    });

    // Piece 1 (Top-Right)
    pieces.push({
      index: 1,
      x: halfW,
      y: 0,
      w: halfW,
      h: halfH,
      centerX: halfW + halfW / 2,
      centerY: halfH / 2,
      pathD: `M ${halfW} 0 L ${W} 0 L ${W} ${halfH} ${hEdge(W, halfW, halfH, -1)} ${vEdge(halfH, 0, halfW, 1)} Z`,
    });

    // Piece 2 (Bottom-Left)
    pieces.push({
      index: 2,
      x: 0,
      y: halfH,
      w: halfW,
      h: halfH,
      centerX: halfW / 2,
      centerY: halfH + halfH / 2,
      pathD: `M 0 ${halfH} ${hEdge(0, halfW, halfH, 1)} ${vEdge(halfH, H, halfW, -1)} L 0 ${H} Z`,
    });

    // Piece 3 (Bottom-Right)
    pieces.push({
      index: 3,
      x: halfW,
      y: halfH,
      w: halfW,
      h: halfH,
      centerX: halfW + halfW / 2,
      centerY: halfH + halfH / 2,
      pathD: `M ${halfW} ${halfH} ${hEdge(halfW, W, halfH, -1)} L ${W} ${H} L ${halfW} ${H} ${vEdge(H, halfH, halfW, -1)} Z`,
    });
  } else if (count === 5) {
    const halfH = H / 2;
    const topW = W / 2;
    const btmW = W / 3;

    // Top Row (2 pieces)
    pieces.push({
      index: 0,
      x: 0,
      y: 0,
      w: topW,
      h: halfH,
      centerX: topW / 2,
      centerY: halfH / 2,
      pathD: `M 0 0 L ${topW} 0 ${vEdge(0, halfH, topW, 1)} L 0 ${halfH} Z`,
    });

    pieces.push({
      index: 1,
      x: topW,
      y: 0,
      w: topW,
      h: halfH,
      centerX: topW + topW / 2,
      centerY: halfH / 2,
      pathD: `M ${topW} 0 L ${W} 0 L ${W} ${halfH} L ${topW} ${halfH} ${vEdge(halfH, 0, topW, 1)} Z`,
    });

    // Bottom Row (3 pieces)
    for (let c = 0; c < 3; c++) {
      const bx0 = c * btmW;
      const bx1 = c === 2 ? W : (c + 1) * btmW;
      let path = '';
      if (c === 0) {
        path = `M 0 ${halfH} L ${bx1} ${halfH} ${vEdge(halfH, H, bx1, 1)} L 0 ${H} Z`;
      } else if (c === 1) {
        path = `M ${bx0} ${halfH} L ${bx1} ${halfH} ${vEdge(halfH, H, bx1, -1)} L ${bx0} ${H} ${vEdge(H, halfH, bx0, 1)} Z`;
      } else {
        path = `M ${bx0} ${halfH} L ${W} ${halfH} L ${W} ${H} L ${bx0} ${H} ${vEdge(H, halfH, bx0, -1)} Z`;
      }

      pieces.push({
        index: 2 + c,
        x: bx0,
        y: halfH,
        w: bx1 - bx0,
        h: halfH,
        centerX: bx0 + (bx1 - bx0) / 2,
        centerY: halfH + halfH / 2,
        pathD: path,
      });
    }
  } else if (count === 6) {
    const halfH = H / 2;
    const colW = W / 3;

    // 2 Rows of 3 Columns (clean jigsaw interlocking)
    for (let r = 0; r < 2; r++) {
      const y0 = r * halfH;
      const y1 = (r + 1) * halfH;
      for (let c = 0; c < 3; c++) {
        const x0 = c * colW;
        const x1 = c === 2 ? W : (c + 1) * colW;
        const idx = r * 3 + c;
        const hDir = c === 1 ? -1 : 1;
        const vDir = r === 0 ? (c === 0 ? 1 : -1) : (c === 0 ? -1 : 1);

        let path = `M ${x0} ${y0} `;
        // Top edge
        if (r === 0) {
          path += `L ${x1} ${y0} `;
        } else {
          path += `${hEdge(x0, x1, halfH, hDir)} `;
        }

        // Right edge
        if (c === 2) {
          path += `L ${W} ${y1} `;
        } else {
          path += `${vEdge(y0, y1, x1, vDir)} `;
        }

        // Bottom edge
        if (r === 1) {
          path += `L ${x0} ${H} `;
        } else {
          path += `${hEdge(x1, x0, halfH, hDir)} `;
        }

        // Left edge
        if (c === 0) {
          path += `L 0 ${y0} `;
        } else {
          const leftVDir = r === 0 ? (c === 1 ? 1 : -1) : (c === 1 ? -1 : 1);
          path += `${vEdge(y1, y0, x0, leftVDir)} `;
        }
        path += 'Z';

        pieces.push({
          index: idx,
          x: x0,
          y: y0,
          w: x1 - x0,
          h: halfH,
          centerX: x0 + (x1 - x0) / 2,
          centerY: y0 + halfH / 2,
          pathD: path,
        });
      }
    }
  } else if (count === 7) {
    const halfH = H / 2;
    const topW = W / 3;
    const btmW = W / 4;

    for (let c = 0; c < 3; c++) {
      const x0 = c * topW;
      const x1 = c === 2 ? W : (c + 1) * topW;
      const vDir = c === 0 ? 1 : -1;
      let path = `M ${x0} 0 L ${x1} 0 `;
      if (c === 2) path += `L ${W} ${halfH} `;
      else path += `${vEdge(0, halfH, x1, vDir)} `;
      path += `L ${x0} ${halfH} `;
      if (c === 0) path += `L 0 0 `;
      else path += `${vEdge(halfH, 0, x0, 1)} `;
      path += 'Z';

      pieces.push({
        index: c,
        x: x0,
        y: 0,
        w: x1 - x0,
        h: halfH,
        centerX: x0 + (x1 - x0) / 2,
        centerY: halfH / 2,
        pathD: path,
      });
    }

    for (let c = 0; c < 4; c++) {
      const x0 = c * btmW;
      const x1 = c === 3 ? W : (c + 1) * btmW;
      const vDir = c % 2 === 0 ? 1 : -1;
      let path = `M ${x0} ${halfH} L ${x1} ${halfH} `;
      if (c === 3) path += `L ${W} ${H} `;
      else path += `${vEdge(halfH, H, x1, vDir)} `;
      path += `L ${x0} ${H} `;
      if (c === 0) path += `L 0 ${halfH} `;
      else {
        const prevVDir = (c - 1) % 2 === 0 ? 1 : -1;
        path += `${vEdge(H, halfH, x0, prevVDir)} `;
      }
      path += 'Z';

      pieces.push({
        index: 3 + c,
        x: x0,
        y: halfH,
        w: x1 - x0,
        h: halfH,
        centerX: x0 + (x1 - x0) / 2,
        centerY: halfH + halfH / 2,
        pathD: path,
      });
    }
  } else if (count === 8) {
    const halfH = H / 2;
    const colW = W / 4;

    for (let r = 0; r < 2; r++) {
      const y0 = r * halfH;
      const y1 = (r + 1) * halfH;
      for (let c = 0; c < 4; c++) {
        const x0 = c * colW;
        const x1 = c === 3 ? W : (c + 1) * colW;
        const idx = r * 4 + c;
        const hDir = c % 2 === 0 ? 1 : -1;
        const vDir = (r + c) % 2 === 0 ? 1 : -1;

        let path = `M ${x0} ${y0} `;
        if (r === 0) path += `L ${x1} ${y0} `;
        else path += `${hEdge(x0, x1, halfH, hDir)} `;

        if (c === 3) path += `L ${W} ${y1} `;
        else path += `${vEdge(y0, y1, x1, vDir)} `;

        if (r === 1) path += `L ${x0} ${H} `;
        else path += `${hEdge(x1, x0, halfH, hDir)} `;

        if (c === 0) path += `L 0 ${y0} `;
        else {
          const leftVDir = (r + c - 1) % 2 === 0 ? 1 : -1;
          path += `${vEdge(y1, y0, x0, leftVDir)} `;
        }
        path += 'Z';

        pieces.push({
          index: idx,
          x: x0,
          y: y0,
          w: x1 - x0,
          h: halfH,
          centerX: x0 + (x1 - x0) / 2,
          centerY: y0 + halfH / 2,
          pathD: path,
        });
      }
    }
  } else if (count === 9) {
    const rowH = H / 3;
    const colW = W / 3;

    for (let r = 0; r < 3; r++) {
      const y0 = r * rowH;
      const y1 = r === 2 ? H : (r + 1) * rowH;
      for (let c = 0; c < 3; c++) {
        const x0 = c * colW;
        const x1 = c === 2 ? W : (c + 1) * colW;
        const idx = r * 3 + c;

        pieces.push({
          index: idx,
          x: x0,
          y: y0,
          w: x1 - x0,
          h: y1 - y0,
          centerX: x0 + (x1 - x0) / 2,
          centerY: y0 + (y1 - y0) / 2,
          pathD: `M ${x0} ${y0} L ${x1} ${y0} L ${x1} ${y1} L ${x0} ${y1} Z`,
        });
      }
    }
  } else {
    // 10
    const halfH = H / 2;
    const colW = W / 5;

    for (let r = 0; r < 2; r++) {
      const y0 = r * halfH;
      const y1 = (r + 1) * halfH;
      for (let c = 0; c < 5; c++) {
        const x0 = c * colW;
        const x1 = c === 4 ? W : (c + 1) * colW;
        const idx = r * 5 + c;

        pieces.push({
          index: idx,
          x: x0,
          y: y0,
          w: x1 - x0,
          h: halfH,
          centerX: x0 + (x1 - x0) / 2,
          centerY: y0 + halfH / 2,
          pathD: `M ${x0} ${y0} L ${x1} ${y0} L ${x1} ${y1} L ${x0} ${y1} Z`,
        });
      }
    }
  }

  return pieces;
}

export const PuzzleArtwork: React.FC<PuzzleArtworkProps> = ({
  word,
  revealedIndices,
  activeWordUserColors = {},
  onPieceClick,
  interactive = true,
}) => {
  const count = word.english.length;
  const pieces = React.useMemo(() => generatePuzzlePieces(count, 260, 260), [count]);
  const isFullyCompleted = revealedIndices.length >= count;

  // Fully colored artwork
  const fullColoredParts = React.useMemo(() => {
    return { ...word.defaultParts, ...activeWordUserColors };
  }, [word.defaultParts, activeWordUserColors]);

  // Clean uncolored sketch outlines for unrevealed artwork parts
  const sketchParts = React.useMemo(() => {
    const res: Record<string, string> = {};
    Object.keys(word.defaultParts).forEach((k) => {
      res[k] = '#FFFFFF';
    });
    return res;
  }, [word.defaultParts]);

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      <svg
        key={word.id}
        viewBox="0 0 260 260"
        className="w-full h-full overflow-hidden rounded-2xl"
        style={{ touchAction: 'none' }}
      >
        <defs>
          {/* Clip path for each puzzle piece */}
          {pieces.map((p) => (
            <clipPath key={`pzclip-${word.id}-${p.index}`} id={`pzclip-${word.id}-${p.index}`}>
              <path d={p.pathD} />
            </clipPath>
          ))}
        </defs>

        {/* 1. Base Layer: Sketch Drawing (shown when puzzle is not yet fully completed) */}
        {!isFullyCompleted && (
          <g key={`sketch-${word.id}`} opacity="0.32">
            <RenderArtwork
              wordId={word.id}
              parts={sketchParts}
              interactive={false}
            />
          </g>
        )}

        {/* 2. Artwork Display */}
        {isFullyCompleted ? (
          /* When solved: One pristine, flawless vector layer — zero seams, zero clip lag */
          <g key={`completed-${word.id}`} className="animate-pop">
            <RenderArtwork
              wordId={word.id}
              parts={fullColoredParts}
              interactive={false}
            />
          </g>
        ) : (
          /* During gameplay: Each revealed slice is clipped cleanly to its exact puzzle piece */
          pieces.map((piece) => {
            const isRevealed = revealedIndices.includes(piece.index);
            const clipId = `pzclip-${word.id}-${piece.index}`;

            return (
              <g
                key={`piece-${word.id}-${piece.index}`}
                onClick={() => {
                  if (interactive && onPieceClick) {
                    onPieceClick(piece.index);
                  }
                }}
                className={`transition-opacity duration-200 ${
                  interactive && !isRevealed ? 'cursor-pointer hover:opacity-90 active:opacity-75' : ''
                }`}
              >
                {/* Invisible hit-area fill to ensure touch clicks reliably trigger on unrevealed pieces */}
                {!isRevealed && (
                  <path
                    d={piece.pathD}
                    fill="rgba(255, 255, 255, 0.01)"
                    className="cursor-pointer"
                  />
                )}

                {/* Colored artwork clipped to this puzzle piece */}
                {isRevealed && (
                  <g key={`rev-art-${word.id}-${piece.index}`} clipPath={`url(#${clipId})`}>
                    <RenderArtwork
                      wordId={word.id}
                      parts={fullColoredParts}
                      interactive={false}
                    />
                  </g>
                )}

                {/* Subtle, clean puzzle division borders */}
                <path
                  d={piece.pathD}
                  fill="none"
                  stroke={isRevealed ? '#F59E0B' : '#94A3B8'}
                  strokeWidth={isRevealed ? 1.5 : 1.2}
                  strokeDasharray={!isRevealed ? '4,3' : undefined}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="pointer-events-none"
                  opacity={isRevealed ? 0.6 : 0.45}
                />
              </g>
            );
          })
        )}
      </svg>
    </div>
  );
};
