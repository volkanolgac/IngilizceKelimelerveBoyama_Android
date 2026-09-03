import React from 'react';
import { ArtworkProps, cursorClass, getF } from './artworkCommon';

// 71. 🍋 LEMON (5 Letters)
export const LemonColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Leaf */}
      <ellipse cx="150" cy="55" rx="20" ry="10" transform="rotate(-30 150 55)" fill={getF(parts, 'leaf', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" className={cc} onClick={() => interactive && onPartClick?.('leaf')} />
      {/* Lemon Body with tips */}
      <path d="M 45 120 C 45 70, 95 65, 120 65 C 145 65, 195 70, 195 120 C 195 170, 145 175, 120 175 C 95 175, 45 170, 45 120 Z" fill={getF(parts, 'body', '#FFFFFF')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      {/* Tips */}
      <polygon points="45,120 32,120 42,128" fill={getF(parts, 'body', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" />
      <polygon points="195,120 208,120 198,128" fill={getF(parts, 'body', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" />
      {/* Face */}
      <circle cx="98" cy="115" r="7" fill="#1E293B" />
      <circle cx="96" cy="112" r="2.5" fill="white" />
      <circle cx="142" cy="115" r="7" fill="#1E293B" />
      <circle cx="140" cy="112" r="2.5" fill="white" />
      <ellipse cx="80" cy="126" rx="8" ry="5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="1.5" />
      <ellipse cx="160" cy="126" rx="8" ry="5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="1.5" />
      <path d="M 112 128 Q 120 138 128 128" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    </g>
  );
};

// 72. 🍈 MELON (5 Letters)
export const MelonColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Stem */}
      <path d="M 120 55 Q 115 30 135 25" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" fill="none" />
      {/* Melon Body */}
      <circle cx="120" cy="125" r="68" fill={getF(parts, 'rind', '#FFFFFF')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('rind')} />
      {/* Stripes */}
      <path d="M 120 57 Q 75 125 120 193" stroke={getF(parts, 'stripes', '#1E293B')} strokeWidth="5" strokeLinecap="round" fill="none" className={cc} onClick={() => interactive && onPartClick?.('stripes')} />
      <path d="M 120 57 Q 165 125 120 193" stroke={getF(parts, 'stripes', '#1E293B')} strokeWidth="5" strokeLinecap="round" fill="none" className={cc} onClick={() => interactive && onPartClick?.('stripes')} />
      {/* Face */}
      <circle cx="98" cy="122" r="7" fill="#1E293B" />
      <circle cx="96" cy="119" r="2.5" fill="white" />
      <circle cx="142" cy="122" r="7" fill="#1E293B" />
      <circle cx="140" cy="119" r="2.5" fill="white" />
      <ellipse cx="80" cy="135" rx="8" ry="5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="1.5" />
      <ellipse cx="160" cy="135" rx="8" ry="5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="1.5" />
      <path d="M 112 136 Q 120 146 128 136" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    </g>
  );
};

// 73. 👑 CROWN (5 Letters)
export const CrownColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Crown base and spikes */}
      <polygon points="40,165 40,90 80,125 120,65 160,125 200,90 200,165" fill={getF(parts, 'gold', '#FFFFFF')} stroke="#1E293B" strokeWidth="5" strokeLinejoin="round" className={cc} onClick={() => interactive && onPartClick?.('gold')} />
      {/* Base Band */}
      <rect x="35" y="160" width="170" height="20" rx="6" fill={getF(parts, 'band', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('band')} />
      {/* Jewels on Tips */}
      <circle cx="40" cy="85" r="9" fill={getF(parts, 'ruby', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" className={cc} onClick={() => interactive && onPartClick?.('ruby')} />
      <circle cx="120" cy="60" r="11" fill={getF(parts, 'diamond', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" className={cc} onClick={() => interactive && onPartClick?.('diamond')} />
      <circle cx="200" cy="85" r="9" fill={getF(parts, 'emerald', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" className={cc} onClick={() => interactive && onPartClick?.('emerald')} />
      {/* Jewels on Band */}
      <circle cx="70" cy="170" r="5" fill={getF(parts, 'ruby', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" />
      <circle cx="120" cy="170" r="6" fill={getF(parts, 'diamond', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" />
      <circle cx="170" cy="170" r="5" fill={getF(parts, 'emerald', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" />
    </g>
  );
};

// 74. 🚂 TRAIN (already exists, word 12) -> 🐑 SHEEP (5 Letters)
export const SheepColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Little Legs */}
      <rect x="85" y="170" width="14" height="30" rx="6" fill="#1E293B" />
      <rect x="141" y="170" width="14" height="30" rx="6" fill="#1E293B" />
      {/* Fluffy Wool Body */}
      <g fill={getF(parts, 'wool', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('wool')}>
        <circle cx="85" cy="120" r="32" />
        <circle cx="120" cy="100" r="34" />
        <circle cx="155" cy="120" r="32" />
        <circle cx="140" cy="150" r="32" />
        <circle cx="100" cy="150" r="32" />
        <circle cx="120" cy="130" r="40" stroke="none" />
      </g>
      {/* Sheep Head */}
      <ellipse cx="120" cy="120" rx="26" ry="32" fill={getF(parts, 'face', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('face')} />
      {/* Floppy Ears */}
      <ellipse cx="88" cy="105" rx="16" ry="8" transform="rotate(25 88 105)" fill={getF(parts, 'face', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" />
      <ellipse cx="152" cy="105" rx="16" ry="8" transform="rotate(-25 152 105)" fill={getF(parts, 'face', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" />
      {/* Head Wool Tuft */}
      <circle cx="120" cy="90" r="14" fill={getF(parts, 'wool', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" />
      {/* Eyes */}
      <circle cx="108" cy="115" r="4.5" fill="#1E293B" />
      <circle cx="106" cy="113" r="1.5" fill="white" />
      <circle cx="132" cy="115" r="4.5" fill="#1E293B" />
      <circle cx="130" cy="113" r="1.5" fill="white" />
      <ellipse cx="100" cy="128" rx="6" ry="4" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="1.5" />
      <ellipse cx="140" cy="128" rx="6" ry="4" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="1.5" />
    </g>
  );
};

// 75. 🐍 SNAKE (5 Letters) - Clean cute coiled cartoon snake
export const SnakeColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Forked Tongue */}
      <path d="M 68 85 L 42 85 M 42 85 L 34 78 M 42 85 L 34 92" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />

      {/* Coiled Body Lower Loop */}
      <ellipse
        cx="125"
        cy="175"
        rx="65"
        ry="32"
        fill={getF(parts, 'body', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4.5"
        className={cc}
        onClick={() => interactive && onPartClick?.('body')}
      />

      {/* Inner Coil hole / underbelly */}
      <ellipse
        cx="125"
        cy="175"
        rx="35"
        ry="15"
        fill="#FFFFFF"
        stroke="#1E293B"
        strokeWidth="4"
      />

      {/* Body Upper Loop & Neck */}
      <path
        d="M 85 155 C 80 120, 110 95, 125 95 C 150 95, 175 125, 160 155 Z"
        fill={getF(parts, 'body', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4.5"
        className={cc}
        onClick={() => interactive && onPartClick?.('body')}
      />

      {/* Cute Head */}
      <ellipse
        cx="85"
        cy="80"
        rx="28"
        ry="22"
        fill={getF(parts, 'head', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4.5"
        className={cc}
        onClick={() => interactive && onPartClick?.('head')}
      />

      {/* Tail Tip (rattle / cute point) */}
      <path d="M 185 165 C 205 155, 205 185, 185 185 Z" fill={getF(parts, 'body', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" />

      {/* Back Pattern Spots */}
      <circle cx="120" cy="115" r="5" fill={getF(parts, 'spots', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" className={cc} onClick={() => interactive && onPartClick?.('spots')} />
      <circle cx="140" cy="130" r="6" fill={getF(parts, 'spots', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" className={cc} onClick={() => interactive && onPartClick?.('spots')} />
      <circle cx="160" cy="175" r="6" fill={getF(parts, 'spots', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" className={cc} onClick={() => interactive && onPartClick?.('spots')} />
      <circle cx="90" cy="175" r="6" fill={getF(parts, 'spots', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" className={cc} onClick={() => interactive && onPartClick?.('spots')} />

      {/* Eyes on Head */}
      <circle cx="82" cy="72" r="7" fill="#1E293B" />
      <circle cx="80" cy="70" r="2.5" fill="white" />
      <circle cx="102" cy="72" r="5.5" fill="#1E293B" />
      <circle cx="100" cy="70" r="2" fill="white" />

      {/* Smiling Mouth */}
      <path d="M 70 88 Q 80 96 90 88" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </g>
  );
};

// 76. 🚀 PLANE / TRUCK (5 Letters) - TRUCK
export const TruckColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Cargo Box */}
      <rect x="35" y="70" width="105" height="90" rx="8" fill={getF(parts, 'cargo', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('cargo')} />
      {/* Cab */}
      <path d="M 140 100 L 175 100 L 195 130 L 195 160 L 140 160 Z" fill={getF(parts, 'cab', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('cab')} />
      {/* Windshield */}
      <polygon points="148,106 172,106 186,128 148,128" fill={getF(parts, 'window', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" />
      {/* Headlight */}
      <circle cx="192" cy="145" r="5" fill={getF(parts, 'light', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" />
      {/* Wheels */}
      <circle cx="70" cy="165" r="20" fill="#1E293B" stroke="#64748B" strokeWidth="3" />
      <circle cx="70" cy="165" r="8" fill="#CBD5E1" />
      <circle cx="165" cy="165" r="20" fill="#1E293B" stroke="#64748B" strokeWidth="3" />
      <circle cx="165" cy="165" r="8" fill="#CBD5E1" />
    </g>
  );
};

// 77. 🍞 BREAD (5 Letters)
export const BreadColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Crust Top */}
      <path d="M 50 110 C 40 70, 200 70, 190 110 L 175 180 L 65 180 Z" fill={getF(parts, 'crust', '#FFFFFF')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('crust')} />
      {/* Bread Slice Face */}
      <path d="M 60 110 C 52 80, 188 80, 180 110 L 168 170 L 72 170 Z" fill={getF(parts, 'crumb', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" className={cc} onClick={() => interactive && onPartClick?.('crumb')} />
      {/* Cute Face */}
      <circle cx="102" cy="125" r="7" fill="#1E293B" />
      <circle cx="100" cy="122" r="2.5" fill="white" />
      <circle cx="138" cy="125" r="7" fill="#1E293B" />
      <circle cx="136" cy="122" r="2.5" fill="white" />
      <ellipse cx="85" cy="138" rx="8" ry="5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="1.5" />
      <ellipse cx="155" cy="138" rx="8" ry="5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="1.5" />
      <path d="M 114 138 Q 120 146 126 138" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    </g>
  );
};

// 78. 🍕 PIZZA (5 Letters)
export const PizzaColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Crust Arc */}
      <path d="M 50 65 Q 120 35 190 65" stroke={getF(parts, 'crust', '#FFFFFF')} strokeWidth="18" strokeLinecap="round" fill="none" className={cc} onClick={() => interactive && onPartClick?.('crust')} />
      <path d="M 50 65 Q 120 35 190 65" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Pizza Slice */}
      <polygon points="50,75 190,75 120,205" fill={getF(parts, 'cheese', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" strokeLinejoin="round" className={cc} onClick={() => interactive && onPartClick?.('cheese')} />
      {/* Pepperonis */}
      <circle cx="100" cy="105" r="14" fill={getF(parts, 'pepperoni', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" className={cc} onClick={() => interactive && onPartClick?.('pepperoni')} />
      <circle cx="140" cy="105" r="14" fill={getF(parts, 'pepperoni', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" className={cc} onClick={() => interactive && onPartClick?.('pepperoni')} />
      <circle cx="120" cy="150" r="14" fill={getF(parts, 'pepperoni', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" className={cc} onClick={() => interactive && onPartClick?.('pepperoni')} />
    </g>
  );
};

// 79. 🍇 GRAPE (5 Letters)
export const GrapeColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Stem & Leaf */}
      <path d="M 120 55 Q 120 30 140 25" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" fill="none" />
      <ellipse cx="145" cy="45" rx="16" ry="9" transform="rotate(-20 145 45)" fill={getF(parts, 'leaf', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" className={cc} onClick={() => interactive && onPartClick?.('leaf')} />
      {/* Grape Cluster */}
      <g fill={getF(parts, 'grapes', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('grapes')}>
        {/* Top row */}
        <circle cx="85" cy="75" r="20" />
        <circle cx="120" cy="70" r="20" />
        <circle cx="155" cy="75" r="20" />
        {/* 2nd row */}
        <circle cx="70" cy="110" r="20" />
        <circle cx="105" cy="105" r="20" />
        <circle cx="140" cy="105" r="20" />
        <circle cx="170" cy="110" r="20" />
        {/* 3rd row */}
        <circle cx="90" cy="140" r="20" />
        <circle cx="125" cy="140" r="20" />
        <circle cx="155" cy="140" r="20" />
        {/* 4th row */}
        <circle cx="105" cy="170" r="20" />
        <circle cx="140" cy="170" r="20" />
        {/* Bottom */}
        <circle cx="122" cy="195" r="18" />
      </g>
    </g>
  );
};

// 80. 🪑 CHAIR (5 Letters)
export const ChairColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Backrest */}
      <rect x="70" y="45" width="20" height="90" rx="6" fill={getF(parts, 'wood', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" />
      <rect x="70" y="45" width="100" height="25" rx="6" fill={getF(parts, 'wood', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('wood')} />
      <rect x="150" y="45" width="20" height="90" rx="6" fill={getF(parts, 'wood', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" />
      {/* Cushion */}
      <rect x="55" y="130" width="130" height="25" rx="8" fill={getF(parts, 'cushion', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('cushion')} />
      {/* Legs */}
      <rect x="65" y="155" width="14" height="50" rx="4" fill={getF(parts, 'wood', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" />
      <rect x="160" y="155" width="14" height="50" rx="4" fill={getF(parts, 'wood', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" />
    </g>
  );
};
