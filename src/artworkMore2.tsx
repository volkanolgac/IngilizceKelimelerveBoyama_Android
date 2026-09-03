import React from 'react';
import { ArtworkProps, cursorClass, getF } from './artworkCommon';

// 61. 🦌 DEER (4 Letters)
export const DeerColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Antlers */}
      <path d="M 85 70 L 60 30 M 70 45 L 85 35" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
      <path d="M 155 70 L 180 30 M 170 45 L 155 35" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
      {/* Ears */}
      <ellipse cx="60" cy="85" rx="18" ry="10" transform="rotate(-30 60 85)" fill={getF(parts, 'head', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" />
      <ellipse cx="180" cy="85" rx="18" ry="10" transform="rotate(30 180 85)" fill={getF(parts, 'head', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" />
      {/* Head */}
      <ellipse cx="120" cy="120" rx="52" ry="46" fill={getF(parts, 'head', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('head')} />
      {/* Spots */}
      <circle cx="95" cy="85" r="4" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.5" />
      <circle cx="145" cy="85" r="4" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.5" />
      <circle cx="120" cy="80" r="4" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.5" />
      {/* Eyes */}
      <circle cx="92" cy="115" r="7.5" fill="#1E293B" />
      <circle cx="90" cy="112" r="2.5" fill="white" />
      <circle cx="148" cy="115" r="7.5" fill="#1E293B" />
      <circle cx="146" cy="112" r="2.5" fill="white" />
      {/* Snout */}
      <ellipse cx="120" cy="142" rx="22" ry="15" fill={getF(parts, 'snout', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" className={cc} onClick={() => interactive && onPartClick?.('snout')} />
      <ellipse cx="120" cy="136" rx="6" ry="4" fill="#1E293B" />
      <ellipse cx="80" cy="132" rx="8" ry="5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="1.5" />
      <ellipse cx="160" cy="132" rx="8" ry="5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="1.5" />
    </g>
  );
};

// 62. 🦀 CRAB (4 Letters)
export const CrabColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Claws */}
      <path d="M 60 90 Q 30 50 50 35 Q 75 55 60 90" fill={getF(parts, 'claws', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('claws')} />
      <path d="M 180 90 Q 210 50 190 35 Q 165 55 180 90" fill={getF(parts, 'claws', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('claws')} />
      {/* Legs */}
      <path d="M 50 140 Q 25 150 25 170" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M 60 160 Q 35 175 40 195" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M 190 140 Q 215 150 215 170" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M 180 160 Q 205 175 200 195" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" fill="none" />
      {/* Body */}
      <ellipse cx="120" cy="140" rx="60" ry="42" fill={getF(parts, 'body', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      {/* Eyestalks */}
      <line x1="95" y1="105" x2="95" y2="85" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
      <line x1="145" y1="105" x2="145" y2="85" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
      <circle cx="95" cy="80" r="10" fill="#FFFFFF" stroke="#1E293B" strokeWidth="3.5" />
      <circle cx="95" cy="80" r="4.5" fill="#1E293B" />
      <circle cx="145" cy="80" r="10" fill="#FFFFFF" stroke="#1E293B" strokeWidth="3.5" />
      <circle cx="145" cy="80" r="4.5" fill="#1E293B" />
      {/* Smile */}
      <path d="M 105 145 Q 120 160 135 145" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <ellipse cx="85" cy="145" rx="7" ry="4.5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="1.5" />
      <ellipse cx="155" cy="145" rx="7" ry="4.5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="1.5" />
    </g>
  );
};

// 63. 🐺 WOLF (4 Letters)
export const WolfColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Ears */}
      <polygon points="50,85 75,30 100,75" fill={getF(parts, 'head', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" />
      <polygon points="62,75 75,45 88,75" fill={getF(parts, 'earsInner', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" />
      <polygon points="140,75 165,30 190,85" fill={getF(parts, 'head', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" />
      <polygon points="152,75 165,45 178,75" fill={getF(parts, 'earsInner', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" />
      {/* Head */}
      <circle cx="120" cy="120" r="60" fill={getF(parts, 'head', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('head')} />
      {/* Muzzle */}
      <polygon points="90,125 150,125 120,165" fill={getF(parts, 'snout', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('snout')} />
      <circle cx="120" cy="155" r="7" fill="#1E293B" />
      {/* Eyes */}
      <circle cx="95" cy="108" r="7" fill={getF(parts, 'eyes', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" />
      <circle cx="95" cy="108" r="3.5" fill="#1E293B" />
      <circle cx="145" cy="108" r="7" fill={getF(parts, 'eyes', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" />
      <circle cx="145" cy="108" r="3.5" fill="#1E293B" />
    </g>
  );
};

// 64. 🐐 GOAT (4 Letters) - Clean simplified cute goat
export const GoatColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Curved Horns */}
      <path
        d="M 85 80 C 75 40, 50 35, 45 42 C 55 60, 75 75, 80 88 Z"
        fill={getF(parts, 'horns', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('horns')}
      />
      <path
        d="M 155 80 C 165 40, 190 35, 195 42 C 185 60, 165 75, 160 88 Z"
        fill={getF(parts, 'horns', '#FFFFFF')}
        stroke="#1E293B"
        strokeLinejoin="round"
        strokeWidth="4"
        className={cc}
        onClick={() => interactive && onPartClick?.('horns')}
      />

      {/* Floppy Horizontal Ears */}
      <ellipse cx="50" cy="105" rx="24" ry="12" transform="rotate(-15 50 105)" fill={getF(parts, 'ears', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('ears')} />
      <ellipse cx="190" cy="105" rx="24" ry="12" transform="rotate(15 190 105)" fill={getF(parts, 'ears', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('ears')} />

      {/* Head */}
      <ellipse cx="120" cy="120" rx="50" ry="46" fill={getF(parts, 'head', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('head')} />

      {/* Beard */}
      <path d="M 112 168 Q 120 198 128 168 Z" fill={getF(parts, 'beard', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" className={cc} onClick={() => interactive && onPartClick?.('beard')} />

      {/* Muzzle / Snout */}
      <ellipse cx="120" cy="145" rx="28" ry="18" fill={getF(parts, 'snout', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" className={cc} onClick={() => interactive && onPartClick?.('snout')} />
      <ellipse cx="112" cy="140" rx="3.5" ry="5" fill="#1E293B" />
      <ellipse cx="128" cy="140" rx="3.5" ry="5" fill="#1E293B" />
      <path d="M 112 152 Q 120 158 128 152" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Big Friendly Eyes */}
      <circle cx="90" cy="110" r="7" fill="#1E293B" />
      <circle cx="88" cy="107" r="2.5" fill="white" />
      <circle cx="150" cy="110" r="7" fill="#1E293B" />
      <circle cx="148" cy="107" r="2.5" fill="white" />
    </g>
  );
};

// 65. 🦭 SEAL (4 Letters)
export const SealColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Flippers */}
      <ellipse cx="65" cy="165" rx="28" ry="14" transform="rotate(25 65 165)" fill={getF(parts, 'flippers', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('flippers')} />
      <ellipse cx="175" cy="165" rx="28" ry="14" transform="rotate(-25 175 165)" fill={getF(parts, 'flippers', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('flippers')} />
      {/* Body */}
      <ellipse cx="120" cy="130" rx="55" ry="50" fill={getF(parts, 'body', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      {/* Snout */}
      <ellipse cx="120" cy="145" rx="26" ry="18" fill={getF(parts, 'snout', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" className={cc} onClick={() => interactive && onPartClick?.('snout')} />
      <circle cx="120" cy="138" r="6" fill="#1E293B" />
      <path d="M 112 148 Q 120 156 128 148" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Whiskers */}
      <line x1="85" y1="145" x2="70" y2="142" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="155" y1="145" x2="170" y2="142" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
      {/* Big Eyes */}
      <circle cx="95" cy="115" r="8" fill="#1E293B" />
      <circle cx="92" cy="112" r="3" fill="white" />
      <circle cx="145" cy="115" r="8" fill="#1E293B" />
      <circle cx="142" cy="112" r="3" fill="white" />
    </g>
  );
};

// 66. 🍐 PEAR (4 Letters)
export const PearColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Leaf & Stem */}
      <path d="M 120 60 Q 120 30 135 25" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" fill="none" />
      <ellipse cx="145" cy="45" rx="16" ry="9" transform="rotate(-20 145 45)" fill={getF(parts, 'leaf', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" className={cc} onClick={() => interactive && onPartClick?.('leaf')} />
      {/* Pear Body */}
      <path d="M 120 60 C 85 60, 80 110, 60 140 C 45 170, 70 215, 120 215 C 170 215, 195 170, 180 140 C 160 110, 155 60, 120 60 Z" fill={getF(parts, 'body', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      {/* Face */}
      <circle cx="98" cy="145" r="6.5" fill="#1E293B" />
      <circle cx="96" cy="142" r="2" fill="white" />
      <circle cx="142" cy="145" r="6.5" fill="#1E293B" />
      <circle cx="140" cy="142" r="2" fill="white" />
      <ellipse cx="82" cy="155" rx="7" ry="4.5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="1.5" />
      <ellipse cx="158" cy="155" rx="7" ry="4.5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="1.5" />
      <path d="M 112 158 Q 120 168 128 158" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
    </g>
  );
};

// 67. 🥝 KIWI (4 Letters)
export const KiwiColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Outer Skin */}
      <circle cx="120" cy="120" r="70" fill={getF(parts, 'skin', '#FFFFFF')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('skin')} />
      {/* Green Flesh */}
      <circle cx="120" cy="120" r="58" fill={getF(parts, 'flesh', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('flesh')} />
      {/* White Core */}
      <ellipse cx="120" cy="120" rx="22" ry="18" fill={getF(parts, 'core', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" className={cc} onClick={() => interactive && onPartClick?.('core')} />
      {/* Seeds */}
      <circle cx="120" cy="90" r="3" fill="#1E293B" />
      <circle cx="142" cy="98" r="3" fill="#1E293B" />
      <circle cx="150" cy="120" r="3" fill="#1E293B" />
      <circle cx="142" cy="142" r="3" fill="#1E293B" />
      <circle cx="120" cy="150" r="3" fill="#1E293B" />
      <circle cx="98" cy="142" r="3" fill="#1E293B" />
      <circle cx="90" cy="120" r="3" fill="#1E293B" />
      <circle cx="98" cy="98" r="3" fill="#1E293B" />
    </g>
  );
};

// 68. 🌹 ROSE (4 Letters) - Clean redrawn blooming rose
export const RoseColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Stem */}
      <path d="M 120 145 C 120 180, 115 195, 120 220" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" fill="none" />
      {/* Leaves with Veins */}
      <path
        d="M 120 175 Q 85 160 80 180 Q 105 190 120 175 Z"
        fill={getF(parts, 'leaves', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="3.5"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('leaves')}
      />
      <line x1="80" y1="180" x2="115" y2="176" stroke="#1E293B" strokeWidth="1.5" />
      <path
        d="M 120 190 Q 155 175 160 195 Q 135 205 120 190 Z"
        fill={getF(parts, 'leaves', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="3.5"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('leaves')}
      />
      <line x1="160" y1="195" x2="125" y2="191" stroke="#1E293B" strokeWidth="1.5" />

      {/* Sepals below flower */}
      <path d="M 105 145 Q 120 155 135 145 L 120 135 Z" fill={getF(parts, 'sepals', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" />

      {/* Outer Petals */}
      <path
        d="M 75 110 C 65 75, 100 50, 120 60 C 140 50, 175 75, 165 110 C 160 135, 135 145, 120 145 C 105 145, 80 135, 75 110 Z"
        fill={getF(parts, 'petals', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4.5"
        className={cc}
        onClick={() => interactive && onPartClick?.('petals')}
      />

      {/* Inner Petal Layers (Spiral bloom) */}
      <path
        d="M 90 95 C 90 75, 110 70, 120 78 C 130 70, 150 75, 150 95 C 150 120, 135 128, 120 128 C 105 128, 90 120, 90 95 Z"
        fill={getF(parts, 'center', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="3.5"
        className={cc}
        onClick={() => interactive && onPartClick?.('center')}
      />
      <path
        d="M 105 92 C 105 82, 135 82, 135 92 C 135 106, 105 106, 105 92 Z"
        fill={getF(parts, 'center', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="3"
      />
      <circle cx="120" cy="92" r="7" fill={getF(parts, 'center', '#FFFFFF')} stroke="#1E293B" strokeWidth="2.5" />
    </g>
  );
};

// 69. ⛵ BOAT (4 Letters)
export const BoatColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Waves */}
      <path d="M 30 190 Q 60 175 90 190 T 150 190 T 210 190" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" fill="none" />
      {/* Boat Hull */}
      <path d="M 45 150 L 195 150 L 175 185 L 65 185 Z" fill={getF(parts, 'hull', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('hull')} />
      {/* Mast */}
      <line x1="120" y1="50" x2="120" y2="150" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" />
      {/* Sail */}
      <polygon points="125,55 185,135 125,135" fill={getF(parts, 'sail', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('sail')} />
      <polygon points="115,70 65,135 115,135" fill={getF(parts, 'sail', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('sail')} />
    </g>
  );
};

// 70. 🔔 BELL (4 Letters)
export const BellColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Top Loop */}
      <circle cx="120" cy="55" r="16" fill="none" stroke="#1E293B" strokeWidth="5" />
      {/* Clapper */}
      <circle cx="120" cy="185" r="15" fill={getF(parts, 'clapper', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('clapper')} />
      {/* Bell Body */}
      <path d="M 120 65 C 80 65, 70 140, 50 170 L 190 170 C 170 140, 160 65, 120 65 Z" fill={getF(parts, 'body', '#FFFFFF')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      {/* Bell Rim */}
      <rect x="42" y="165" width="156" height="15" rx="7" fill={getF(parts, 'rim', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('rim')} />
    </g>
  );
};
