import React from 'react';
import { ArtworkProps, cursorClass, getF } from './artworkCommon';

// 51. 🐜 ANT (3 Letters)
export const AntColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Legs */}
      <line x1="85" y1="130" x2="60" y2="165" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
      <line x1="120" y1="135" x2="120" y2="175" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
      <line x1="155" y1="130" x2="180" y2="165" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
      {/* Abdomen */}
      <ellipse cx="170" cy="120" rx="35" ry="28" fill={getF(parts, 'abdomen', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('abdomen')} />
      {/* Thorax */}
      <ellipse cx="120" cy="120" rx="20" ry="18" fill={getF(parts, 'thorax', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('thorax')} />
      {/* Head */}
      <circle cx="70" cy="115" r="26" fill={getF(parts, 'head', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('head')} />
      {/* Antennae */}
      <path d="M 65 90 Q 55 60 40 65" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M 75 90 Q 85 60 100 65" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      {/* Big Cute Eye */}
      <circle cx="62" cy="108" r="6" fill="#1E293B" />
      <circle cx="60" cy="106" r="2" fill="white" />
      {/* Smile */}
      <path d="M 52 122 Q 62 130 68 122" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
    </g>
  );
};

// 52. 🐝 BEE (3 Letters)
export const BeeColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Wings */}
      <ellipse cx="95" cy="70" rx="25" ry="35" transform="rotate(-25 95 70)" fill={getF(parts, 'wings', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('wings')} />
      <ellipse cx="145" cy="70" rx="25" ry="35" transform="rotate(25 145 70)" fill={getF(parts, 'wings', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('wings')} />
      {/* Body */}
      <ellipse cx="120" cy="135" rx="55" ry="42" fill={getF(parts, 'body', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      {/* Stripes */}
      <path d="M 105 95 Q 108 135 105 175" stroke={getF(parts, 'stripes', '#1E293B')} strokeWidth="10" strokeLinecap="round" className={cc} onClick={() => interactive && onPartClick?.('stripes')} />
      <path d="M 135 95 Q 138 135 135 175" stroke={getF(parts, 'stripes', '#1E293B')} strokeWidth="10" strokeLinecap="round" className={cc} onClick={() => interactive && onPartClick?.('stripes')} />
      {/* Stinger */}
      <polygon points="175,130 195,135 175,140" fill="#1E293B" />
      {/* Cheeks */}
      <ellipse cx="75" cy="145" rx="7" ry="5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" className={cc} onClick={() => interactive && onPartClick?.('cheeks')} />
      {/* Eye */}
      <circle cx="82" cy="125" r="7" fill="#1E293B" />
      <circle cx="80" cy="122" r="2.5" fill="white" />
      {/* Smile */}
      <path d="M 70 148 Q 78 156 86 148" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Antennae */}
      <path d="M 80 95 Q 65 75 60 80" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <circle cx="58" cy="80" r="3.5" fill="#1E293B" />
    </g>
  );
};

// 53. 🐮 COW (3 Letters)
export const CowColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Horns */}
      <path d="M 75 75 Q 60 45 70 40 Q 85 55 85 75" fill={getF(parts, 'horns', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" className={cc} onClick={() => interactive && onPartClick?.('horns')} />
      <path d="M 165 75 Q 180 45 170 40 Q 155 55 155 75" fill={getF(parts, 'horns', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" className={cc} onClick={() => interactive && onPartClick?.('horns')} />
      {/* Ears */}
      <ellipse cx="55" cy="90" rx="20" ry="12" transform="rotate(-20 55 90)" fill={getF(parts, 'head', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" />
      <ellipse cx="185" cy="90" rx="20" ry="12" transform="rotate(20 185 90)" fill={getF(parts, 'head', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" />
      {/* Head */}
      <ellipse cx="120" cy="115" rx="55" ry="48" fill={getF(parts, 'head', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('head')} />
      {/* Black Spots */}
      <path d="M 80 80 Q 95 75 105 95 Q 85 110 80 80 Z" fill={getF(parts, 'spots', '#1E293B')} className={cc} onClick={() => interactive && onPartClick?.('spots')} />
      {/* Eyes */}
      <circle cx="92" cy="105" r="7" fill="#1E293B" />
      <circle cx="90" cy="102" r="2.5" fill="white" />
      <circle cx="148" cy="105" r="7" fill="#1E293B" />
      <circle cx="146" cy="102" r="2.5" fill="white" />
      {/* Snout */}
      <ellipse cx="120" cy="148" rx="42" ry="26" fill={getF(parts, 'snout', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('snout')} />
      <circle cx="106" cy="145" r="5" fill="#1E293B" />
      <circle cx="134" cy="145" r="5" fill="#1E293B" />
      <path d="M 112 158 Q 120 164 128 158" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
    </g>
  );
};

// 54. 🧢 CAP / HAT (3 Letters) - Clean redrawn baseball cap
export const CapColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 15)">
      {/* Dome of Cap */}
      <path
        d="M 60 145 C 55 65, 185 65, 180 145 Z"
        fill={getF(parts, 'dome', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="5"
        className={cc}
        onClick={() => interactive && onPartClick?.('dome')}
      />
      {/* Panel Seam Lines */}
      <path d="M 120 65 L 120 145" stroke="#1E293B" strokeWidth="2.5" strokeDasharray="4 3" />
      <path d="M 120 65 Q 90 95 70 145" stroke="#1E293B" strokeWidth="2.5" strokeDasharray="4 3" fill="none" />
      <path d="M 120 65 Q 150 95 170 145" stroke="#1E293B" strokeWidth="2.5" strokeDasharray="4 3" fill="none" />

      {/* Visor / Brim */}
      <path
        d="M 50 145 Q 115 130 185 145 C 225 158, 205 185, 160 180 C 110 175, 65 170, 50 145 Z"
        fill={getF(parts, 'visor', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4.5"
        className={cc}
        onClick={() => interactive && onPartClick?.('visor')}
      />
      {/* Visor Stitching Detail */}
      <path d="M 68 155 Q 120 145 178 158" stroke="#1E293B" strokeWidth="2" strokeDasharray="4 3" fill="none" />

      {/* Top Button */}
      <ellipse cx="120" cy="65" rx="8" ry="6" fill={getF(parts, 'button', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" className={cc} onClick={() => interactive && onPartClick?.('button')} />

      {/* Front Logo / Star Badge */}
      <polygon
        points="120,90 124,102 136,102 126,110 130,122 120,114 110,122 114,110 104,102 116,102"
        fill={getF(parts, 'logo', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="2.5"
        className={cc}
        onClick={() => interactive && onPartClick?.('logo')}
      />
    </g>
  );
};

// 55. 🥚 EGG (3 Letters) - Clean simple egg in an eggcup (no eyes, simple & elegant)
export const EggColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Egg Shell (Simple clean oval, no eyes) */}
      <path
        d="M 120 30 C 70 30, 58 115, 58 155 C 58 185, 80 195, 120 195 C 160 195, 182 185, 182 155 C 182 115, 170 30, 120 30 Z"
        fill={getF(parts, 'shell', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="5"
        className={cc}
        onClick={() => interactive && onPartClick?.('shell')}
      />

      {/* Eggcup Cup Holding Egg */}
      <path
        d="M 68 150 C 66 185, 85 200, 110 200 L 130 200 C 155 200, 174 185, 172 150 Z"
        fill={getF(parts, 'cup', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4.5"
        className={cc}
        onClick={() => interactive && onPartClick?.('cup')}
      />
      {/* Cup Rim Highlight */}
      <line x1="68" y1="150" x2="172" y2="150" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" />

      {/* Eggcup Stem & Base */}
      <path
        d="M 110 200 L 105 215 L 85 225 L 155 225 L 135 215 L 130 200 Z"
        fill={getF(parts, 'base', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4.5"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('base')}
      />
    </g>
  );
};

// 56. 🦁 CUB / LION CUB (3 Letters)
export const CubColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <circle cx="70" cy="80" r="22" fill={getF(parts, 'head', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" />
      <circle cx="70" cy="80" r="12" fill={getF(parts, 'earsInner', '#FFFFFF')} stroke="#1E293B" strokeWidth="2.5" className={cc} onClick={() => interactive && onPartClick?.('earsInner')} />
      <circle cx="170" cy="80" r="22" fill={getF(parts, 'head', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" />
      <circle cx="170" cy="80" r="12" fill={getF(parts, 'earsInner', '#FFFFFF')} stroke="#1E293B" strokeWidth="2.5" className={cc} onClick={() => interactive && onPartClick?.('earsInner')} />
      <circle cx="120" cy="125" r="58" fill={getF(parts, 'head', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('head')} />
      <circle cx="94" cy="115" r="7.5" fill="#1E293B" />
      <circle cx="92" cy="112" r="2.5" fill="white" />
      <circle cx="146" cy="115" r="7.5" fill="#1E293B" />
      <circle cx="144" cy="112" r="2.5" fill="white" />
      <ellipse cx="120" cy="142" rx="22" ry="14" fill={getF(parts, 'snout', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" className={cc} onClick={() => interactive && onPartClick?.('snout')} />
      <polygon points="113,134 127,134 120,142" fill="#1E293B" />
      <path d="M 120 142 L 120 148 M 112 148 Q 120 155 128 148" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
      <ellipse cx="80" cy="138" rx="8" ry="5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" className={cc} onClick={() => interactive && onPartClick?.('cheeks')} />
      <ellipse cx="160" cy="138" rx="8" ry="5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" className={cc} onClick={() => interactive && onPartClick?.('cheeks')} />
    </g>
  );
};

// 57. 📦 BOX (3 Letters)
export const BoxColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Box base */}
      <polygon points="40,90 120,50 200,90 120,130" fill={getF(parts, 'top', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('top')} />
      <polygon points="40,90 120,130 120,210 40,170" fill={getF(parts, 'leftSide', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('leftSide')} />
      <polygon points="200,90 120,130 120,210 200,170" fill={getF(parts, 'rightSide', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('rightSide')} />
      {/* Ribbon */}
      <path d="M 120 50 L 120 130 L 120 210" stroke="#1E293B" strokeWidth="18" strokeLinecap="round" />
      <path d="M 120 50 L 120 130 L 120 210" stroke={getF(parts, 'ribbon', '#FFFFFF')} strokeWidth="12" strokeLinecap="round" className={cc} onClick={() => interactive && onPartClick?.('ribbon')} />
      <circle cx="120" cy="70" r="14" fill={getF(parts, 'ribbon', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" className={cc} onClick={() => interactive && onPartClick?.('ribbon')} />
    </g>
  );
};

// 58. 🛏️ BED (3 Letters)
export const BedColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 15)">
      {/* Headboard */}
      <rect x="40" y="70" width="25" height="110" rx="8" fill={getF(parts, 'frame', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('frame')} />
      {/* Footboard */}
      <rect x="185" y="110" width="20" height="70" rx="6" fill={getF(parts, 'frame', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" />
      {/* Mattress */}
      <rect x="65" y="125" width="120" height="35" rx="6" fill={getF(parts, 'sheet', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('sheet')} />
      {/* Blanket */}
      <rect x="100" y="120" width="85" height="42" rx="6" fill={getF(parts, 'blanket', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('blanket')} />
      {/* Pillow */}
      <ellipse cx="80" cy="115" rx="16" ry="12" fill={getF(parts, 'pillow', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" className={cc} onClick={() => interactive && onPartClick?.('pillow')} />
    </g>
  );
};

// 59. 🦊 FOX CUB / TOY / KEY (3 Letters) - KEY
export const KeyColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 15)">
      {/* Key Bow (Head) */}
      <circle cx="80" cy="120" r="38" fill={getF(parts, 'keyHead', '#FFFFFF')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('keyHead')} />
      <circle cx="80" cy="120" r="18" fill="#FFFFFF" stroke="#1E293B" strokeWidth="4" />
      {/* Key Shaft */}
      <rect x="115" y="112" width="75" height="16" rx="4" fill={getF(parts, 'keyShaft', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('keyShaft')} />
      {/* Key Teeth */}
      <rect x="160" y="128" width="14" height="22" rx="3" fill={getF(parts, 'keyShaft', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" />
      <rect x="180" y="128" width="10" height="15" rx="3" fill={getF(parts, 'keyShaft', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" />
    </g>
  );
};

// 60. 🌰 NUT (3 Letters)
export const NutColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Acorn Cap */}
      <path d="M 60 100 C 60 65, 180 65, 180 100 Z" fill={getF(parts, 'cap', '#FFFFFF')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('cap')} />
      {/* Stem */}
      <path d="M 120 70 Q 120 40 135 35" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" fill="none" />
      {/* Nut Body */}
      <path d="M 65 100 C 65 180, 120 215, 120 215 C 120 215, 175 180, 175 100 Z" fill={getF(parts, 'body', '#FFFFFF')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      {/* Cute Face */}
      <circle cx="95" cy="135" r="7" fill="#1E293B" />
      <circle cx="93" cy="132" r="2.5" fill="white" />
      <circle cx="145" cy="135" r="7" fill="#1E293B" />
      <circle cx="143" cy="132" r="2.5" fill="white" />
      <ellipse cx="80" cy="148" rx="8" ry="5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="1.5" />
      <ellipse cx="160" cy="148" rx="8" ry="5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="1.5" />
      <path d="M 112 148 Q 120 156 128 148" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    </g>
  );
};
