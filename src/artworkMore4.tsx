import React from 'react';
import { ArtworkProps, cursorClass, getF } from './artworkCommon';

// 81. 🦜 PARROT (6 Letters)
export const ParrotColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Long Tail Feathers */}
      <path d="M 140 160 L 165 220 L 145 225 L 125 180 Z" fill={getF(parts, 'tail', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('tail')} />
      <path d="M 125 170 L 140 225 L 130 228 L 115 180 Z" fill={getF(parts, 'tail', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" />
      {/* Body & Head */}
      <ellipse cx="115" cy="120" rx="45" ry="55" fill={getF(parts, 'body', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      {/* Wing */}
      <path d="M 115 105 Q 160 115 140 165 Q 105 160 115 105 Z" fill={getF(parts, 'wing', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('wing')} />
      {/* Hooked Beak */}
      <path d="M 75 95 Q 40 105 50 135 Q 70 120 75 110 Z" fill={getF(parts, 'beak', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('beak')} />
      {/* Eye Patch */}
      <circle cx="95" cy="95" r="14" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2.5" />
      <circle cx="95" cy="95" r="5" fill="#1E293B" />
      <circle cx="93" cy="93" r="1.5" fill="#FFFFFF" />
      {/* Perch */}
      <line x1="85" y1="180" x2="85" y2="200" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
      <line x1="110" y1="180" x2="110" y2="200" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

// 82. 🍅 TOMATO (6 Letters)
export const TomatoColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Tomato Body */}
      <ellipse cx="120" cy="130" rx="68" ry="60" fill={getF(parts, 'body', '#FFFFFF')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      {/* Stem & Calyx Leaves */}
      <path d="M 120 75 L 120 45" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" />
      <g fill={getF(parts, 'calyx', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" className={cc} onClick={() => interactive && onPartClick?.('calyx')}>
        <polygon points="120,75 90,65 105,75" />
        <polygon points="120,75 110,55 120,70" />
        <polygon points="120,75 140,58 130,73" />
        <polygon points="120,75 150,68 135,78" />
        <polygon points="120,75 115,85 105,80" />
      </g>
      {/* Face */}
      <circle cx="95" cy="125" r="7" fill="#1E293B" />
      <circle cx="93" cy="122" r="2.5" fill="white" />
      <circle cx="145" cy="125" r="7" fill="#1E293B" />
      <circle cx="143" cy="122" r="2.5" fill="white" />
      <ellipse cx="78" cy="138" rx="8" ry="5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="1.5" />
      <ellipse cx="162" cy="138" rx="8" ry="5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="1.5" />
      <path d="M 112 138 Q 120 148 128 138" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    </g>
  );
};

// 83. 🥕 CARROT (6 Letters)
export const CarrotColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Green Tops */}
      <path d="M 120 80 Q 90 35 75 45 Q 100 65 115 80" fill={getF(parts, 'leaves', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" className={cc} onClick={() => interactive && onPartClick?.('leaves')} />
      <path d="M 120 80 Q 120 25 130 25 Q 128 60 125 80" fill={getF(parts, 'leaves', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" />
      <path d="M 120 80 Q 150 35 165 45 Q 140 65 125 80" fill={getF(parts, 'leaves', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" />
      {/* Carrot Root */}
      <polygon points="75,85 165,85 120,225" fill={getF(parts, 'root', '#FFFFFF')} stroke="#1E293B" strokeWidth="5" strokeLinejoin="round" className={cc} onClick={() => interactive && onPartClick?.('root')} />
      {/* Texture ridges */}
      <line x1="88" y1="115" x2="110" y2="115" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="130" y1="140" x2="148" y2="140" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="102" y1="170" x2="125" y2="170" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
      {/* Cute Face */}
      <circle cx="106" cy="110" r="6.5" fill="#1E293B" />
      <circle cx="104" cy="107" r="2" fill="white" />
      <circle cx="134" cy="110" r="6.5" fill="#1E293B" />
      <circle cx="132" cy="107" r="2" fill="white" />
      <path d="M 115 122 Q 120 128 125 122" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
    </g>
  );
};

// 84. 🦎 LIZARD (6 Letters)
export const LizardColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Curled Tail Outline */}
      <path d="M 140 160 C 180 180, 210 140, 190 110 C 175 90, 155 100, 160 115" stroke="#1E293B" strokeWidth="24" strokeLinecap="round" fill="none" />
      {/* Curled Tail Fill */}
      <path d="M 140 160 C 180 180, 210 140, 190 110 C 175 90, 155 100, 160 115" stroke={getF(parts, 'body', '#FFFFFF')} strokeWidth="16" strokeLinecap="round" fill="none" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      {/* Legs */}
      <path d="M 85 110 L 55 95 M 55 95 L 45 105" stroke="#1E293B" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M 85 150 L 55 165 M 55 165 L 45 155" stroke="#1E293B" strokeWidth="4.5" strokeLinecap="round" />
      {/* Body */}
      <ellipse cx="115" cy="130" rx="35" ry="48" transform="rotate(-15 115 130)" fill={getF(parts, 'body', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      {/* Head */}
      <ellipse cx="90" cy="80" rx="26" ry="22" fill={getF(parts, 'head', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('head')} />
      {/* Eyes on Top */}
      <circle cx="80" cy="65" r="8" fill={getF(parts, 'eyes', '#FFFFFF')} stroke="#1E293B" strokeWidth="2.5" />
      <circle cx="80" cy="65" r="4" fill="#1E293B" />
      <circle cx="102" cy="68" r="8" fill={getF(parts, 'eyes', '#FFFFFF')} stroke="#1E293B" strokeWidth="2.5" />
      <circle cx="102" cy="68" r="4" fill="#1E293B" />
      {/* Spots */}
      <circle cx="110" cy="120" r="5" fill={getF(parts, 'spots', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" />
      <circle cx="125" cy="140" r="5" fill={getF(parts, 'spots', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" />
    </g>
  );
};

// 85. 🦔 HEDGEHOG (7/8) -> 🦝 BADGER / PIGEON (6 Letters) - PIGEON
export const PigeonColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Body */}
      <ellipse cx="125" cy="135" rx="55" ry="45" fill={getF(parts, 'body', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      {/* Neck Iridescence */}
      <path d="M 85 105 Q 110 95 125 105 Q 110 135 85 105 Z" fill={getF(parts, 'neck', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" className={cc} onClick={() => interactive && onPartClick?.('neck')} />
      {/* Head */}
      <circle cx="85" cy="85" r="26" fill={getF(parts, 'head', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('head')} />
      {/* Beak */}
      <polygon points="62,82 40,88 62,94" fill={getF(parts, 'beak', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" />
      {/* Eye */}
      <circle cx="82" cy="80" r="6" fill={getF(parts, 'eye', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" />
      <circle cx="82" cy="80" r="3" fill="#1E293B" />
      {/* Wing */}
      <path d="M 115 110 C 165 110, 185 145, 175 165 C 150 175, 115 160, 115 110 Z" fill={getF(parts, 'wing', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('wing')} />
      {/* Wing Bars */}
      <line x1="135" y1="135" x2="165" y2="155" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
      <line x1="145" y1="125" x2="175" y2="145" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

// 86. 🐙 OCTOPUS (7 Letters)
export const OctopusColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Tentacles Outline */}
      <g stroke="#1E293B" strokeWidth="24" strokeLinecap="round" fill="none">
        <path d="M 70 140 Q 40 180 45 210 Q 55 220 65 205" />
        <path d="M 95 150 Q 80 190 90 220" />
        <path d="M 120 155 Q 120 195 125 225" />
        <path d="M 145 150 Q 160 190 150 220" />
        <path d="M 170 140 Q 200 180 195 210 Q 185 220 175 205" />
      </g>
      {/* Tentacles Fill */}
      <g stroke={getF(parts, 'body', '#FFFFFF')} strokeWidth="16" strokeLinecap="round" fill="none" className={cc} onClick={() => interactive && onPartClick?.('body')}>
        <path d="M 70 140 Q 40 180 45 210 Q 55 220 65 205" />
        <path d="M 95 150 Q 80 190 90 220" />
        <path d="M 120 155 Q 120 195 125 225" />
        <path d="M 145 150 Q 160 190 150 220" />
        <path d="M 170 140 Q 200 180 195 210 Q 185 220 175 205" />
      </g>
      {/* Head Bulb */}
      <ellipse cx="120" cy="100" rx="60" ry="55" fill={getF(parts, 'body', '#FFFFFF')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      {/* Big Eyes */}
      <circle cx="95" cy="105" r="12" fill="#FFFFFF" stroke="#1E293B" strokeWidth="3.5" />
      <circle cx="95" cy="105" r="6" fill="#1E293B" />
      <circle cx="93" cy="102" r="2" fill="white" />
      <circle cx="145" cy="105" r="12" fill="#FFFFFF" stroke="#1E293B" strokeWidth="3.5" />
      <circle cx="145" cy="105" r="6" fill="#1E293B" />
      <circle cx="143" cy="102" r="2" fill="white" />
      {/* Cheeks */}
      <ellipse cx="78" cy="120" rx="8" ry="5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#CBD5E1" strokeWidth="1.5" />
      <ellipse cx="162" cy="120" rx="8" ry="5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#CBD5E1" strokeWidth="1.5" />
      <path d="M 112 122 Q 120 130 128 122" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    </g>
  );
};

// 87. 🦩 FLAMINGO (8 Letters) -> 7 Letters: GORILLA / AVOCADO (7 Letters) - AVOCADO
export const AvocadoColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Dark Skin */}
      <path d="M 120 40 C 75 40, 50 110, 50 160 C 50 205, 80 220, 120 220 C 160 220, 190 205, 190 160 C 190 110, 165 40, 120 40 Z" fill={getF(parts, 'skin', '#FFFFFF')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('skin')} />
      {/* Light Green Flesh */}
      <path d="M 120 52 C 85 52, 62 115, 62 158 C 62 195, 88 208, 120 208 C 152 208, 178 195, 178 158 C 178 115, 155 52, 120 52 Z" fill={getF(parts, 'flesh', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" className={cc} onClick={() => interactive && onPartClick?.('flesh')} />
      {/* Pit */}
      <circle cx="120" cy="155" r="32" fill={getF(parts, 'pit', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('pit')} />
      {/* Cute Face on Pit */}
      <circle cx="108" cy="150" r="5.5" fill="#FFFFFF" />
      <circle cx="108" cy="150" r="2.5" fill="#1E293B" />
      <circle cx="132" cy="150" r="5.5" fill="#FFFFFF" />
      <circle cx="132" cy="150" r="2.5" fill="#1E293B" />
      <ellipse cx="98" cy="160" rx="5" ry="3.5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="1.5" />
      <ellipse cx="142" cy="160" rx="5" ry="3.5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="1.5" />
      <path d="M 115 162 Q 120 168 125 162" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </g>
  );
};

// 88. 🦍 GORILLA (7 Letters)
export const GorillaColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Massive Shoulders */}
      <ellipse cx="120" cy="170" rx="75" ry="45" fill={getF(parts, 'body', '#FFFFFF')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      {/* Head Crest */}
      <ellipse cx="120" cy="100" rx="45" ry="50" fill={getF(parts, 'body', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" />
      {/* Face Mask */}
      <path d="M 95 85 C 80 85, 80 145, 120 145 C 160 145, 160 85, 145 85 C 135 85, 130 95, 120 95 C 110 95, 105 85, 95 85 Z" fill={getF(parts, 'face', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" className={cc} onClick={() => interactive && onPartClick?.('face')} />
      {/* Eyes */}
      <circle cx="102" cy="98" r="5" fill="#1E293B" />
      <circle cx="138" cy="98" r="5" fill="#1E293B" />
      {/* Nostrils */}
      <ellipse cx="114" cy="120" rx="4" ry="6" fill="#1E293B" />
      <ellipse cx="126" cy="120" rx="4" ry="6" fill="#1E293B" />
      {/* Smile */}
      <path d="M 110 134 Q 120 140 130 134" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
    </g>
  );
};

// 89. 🦔 HEDGEHOG (8 Letters)
export const HedgehogColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Spikes / Quill Fan */}
      <g fill={getF(parts, 'quills', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" className={cc} onClick={() => interactive && onPartClick?.('quills')}>
        <polygon points="120,60 105,80 135,80" />
        <polygon points="150,65 130,85 160,95" />
        <polygon points="175,85 150,105 180,120" />
        <polygon points="185,120 155,130 185,150" />
        <polygon points="90,65 80,95 110,85" />
        <polygon points="65,85 60,120 90,105" />
        <circle cx="125" cy="125" r="60" />
      </g>
      {/* Soft Face */}
      <ellipse cx="85" cy="140" rx="35" ry="25" fill={getF(parts, 'face', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('face')} />
      {/* Nose */}
      <circle cx="55" cy="142" r="7" fill="#1E293B" />
      {/* Eye */}
      <circle cx="85" cy="132" r="6" fill="#1E293B" />
      <circle cx="83" cy="130" r="2" fill="white" />
      {/* Cheek */}
      <ellipse cx="90" cy="146" rx="6" ry="4" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#CBD5E1" strokeWidth="1.5" />
    </g>
  );
};

// 90. 🦩 FLAMINGO (8 Letters)
export const FlamingoColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Long Thin Legs (one bent) */}
      <line x1="125" y1="150" x2="125" y2="225" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
      <polyline points="135,150 160,180 135,185" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Long Curved S-Neck Outline */}
      <path d="M 125 140 C 110 80, 75 90, 75 55 C 75 40, 95 40, 95 55" stroke="#1E293B" strokeWidth="22" strokeLinecap="round" fill="none" />
      {/* Long Curved S-Neck Fill */}
      <path d="M 125 140 C 110 80, 75 90, 75 55 C 75 40, 95 40, 95 55" stroke={getF(parts, 'body', '#FFFFFF')} strokeWidth="14" strokeLinecap="round" fill="none" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      {/* Flamingo Head */}
      <circle cx="95" cy="55" r="16" fill={getF(parts, 'body', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      {/* Beak with black tip */}
      <path d="M 95 62 Q 120 70 120 90 L 105 80 Z" fill={getF(parts, 'beak', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" />
      <path d="M 112 78 Q 120 80 120 90 L 110 83 Z" fill="#1E293B" />
      {/* Eye */}
      <circle cx="92" cy="52" r="3.5" fill="#1E293B" />
      {/* Oval Body */}
      <ellipse cx="140" cy="140" rx="42" ry="28" fill={getF(parts, 'body', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      {/* Wing */}
      <path d="M 130 125 C 165 125, 175 145, 160 160 C 140 165, 125 150, 130 125 Z" fill={getF(parts, 'wing', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" className={cc} onClick={() => interactive && onPartClick?.('wing')} />
    </g>
  );
};
