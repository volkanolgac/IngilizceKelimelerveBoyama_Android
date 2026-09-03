import React from 'react';
import { ArtworkProps, cursorClass, getF } from './artworkCommon';

// 91. 🥪 SANDWICH (8 Letters)
export const SandwichColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Top Bread Slice */}
      <path d="M 40 90 L 120 45 L 200 90 L 120 115 Z" fill={getF(parts, 'bread', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" strokeLinejoin="round" className={cc} onClick={() => interactive && onPartClick?.('bread')} />
      {/* Lettuce Outline */}
      <path d="M 35 105 Q 60 120 90 105 Q 120 125 150 105 Q 180 120 205 105" stroke="#1E293B" strokeWidth="16" strokeLinecap="round" fill="none" />
      {/* Lettuce Fill */}
      <path d="M 35 105 Q 60 120 90 105 Q 120 125 150 105 Q 180 120 205 105" stroke={getF(parts, 'lettuce', '#FFFFFF')} strokeWidth="10" strokeLinecap="round" fill="none" className={cc} onClick={() => interactive && onPartClick?.('lettuce')} />
      {/* Tomato Slice */}
      <rect x="50" y="115" width="140" height="15" rx="5" fill={getF(parts, 'tomato', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" className={cc} onClick={() => interactive && onPartClick?.('tomato')} />
      {/* Cheese Slice */}
      <polygon points="45,130 200,130 170,145 70,145" fill={getF(parts, 'cheese', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" />
      {/* Bottom Bread Slice */}
      <path d="M 40 145 L 120 120 L 200 145 L 120 190 Z" fill={getF(parts, 'bread', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" strokeLinejoin="round" className={cc} onClick={() => interactive && onPartClick?.('bread')} />
      {/* Olive on Toothpick */}
      <line x1="120" y1="25" x2="120" y2="70" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
      <circle cx="120" cy="30" r="10" fill={getF(parts, 'olive', '#FFFFFF')} stroke="#1E293B" strokeWidth="2.5" />
      <circle cx="120" cy="30" r="3" fill="#1E293B" />
    </g>
  );
};

// 92. 🐊 CROCODILE (9 Letters) - Friendly, charming, simplified crocodile
export const CrocodileColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Curved Tail with Scutes */}
      <path
        d="M 160 145 C 195 145, 215 125, 210 95 C 200 115, 175 125, 155 125"
        stroke="#1E293B"
        strokeWidth="4"
        fill={getF(parts, 'tail', '#FFFFFF')}
        className={cc}
        onClick={() => interactive && onPartClick?.('tail')}
      />
      {/* Tail spikes */}
      <polygon points="175,130 185,115 190,130" fill={getF(parts, 'scutes', '#FFFFFF')} stroke="#1E293B" strokeWidth="2.5" />
      <polygon points="190,125 198,110 203,122" fill={getF(parts, 'scutes', '#FFFFFF')} stroke="#1E293B" strokeWidth="2.5" />

      {/* Back Scutes (ridges on back) */}
      <polygon points="110,105 118,92 126,105" fill={getF(parts, 'scutes', '#FFFFFF')} stroke="#1E293B" strokeWidth="2.5" className={cc} onClick={() => interactive && onPartClick?.('scutes')} />
      <polygon points="128,107 136,94 144,107" fill={getF(parts, 'scutes', '#FFFFFF')} stroke="#1E293B" strokeWidth="2.5" className={cc} onClick={() => interactive && onPartClick?.('scutes')} />
      <polygon points="146,112 154,100 162,112" fill={getF(parts, 'scutes', '#FFFFFF')} stroke="#1E293B" strokeWidth="2.5" className={cc} onClick={() => interactive && onPartClick?.('scutes')} />

      {/* Feet / Stubby Legs */}
      <ellipse cx="80" cy="172" rx="14" ry="9" fill={getF(parts, 'legs', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" className={cc} onClick={() => interactive && onPartClick?.('legs')} />
      <ellipse cx="140" cy="172" rx="14" ry="9" fill={getF(parts, 'legs', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" className={cc} onClick={() => interactive && onPartClick?.('legs')} />

      {/* Main Body */}
      <ellipse cx="115" cy="138" rx="55" ry="34" fill={getF(parts, 'body', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('body')} />

      {/* Underbelly Stripes/Texture */}
      <path d="M 85 152 Q 115 168 145 152" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Long Rounded Crocodile Snout & Head */}
      <path
        d="M 120 115 C 80 115, 30 125, 25 142 C 25 158, 80 162, 120 162 Z"
        fill={getF(parts, 'head', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4.5"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('head')}
      />

      {/* Cute Nostril */}
      <circle cx="36" cy="135" r="3.5" fill="#1E293B" />

      {/* Crocodile Mouth with Friendly Zig-zag / Teeth */}
      <path d="M 28 146 L 95 146" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
      <polygon points="45,146 51,155 57,146" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2" />
      <polygon points="65,146 71,155 77,146" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2" />
      <polygon points="55,146 61,137 67,146" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2" />

      {/* Big Bubbly Eyes peering on top of head */}
      <circle cx="95" cy="106" r="14" fill={getF(parts, 'eyes', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" className={cc} onClick={() => interactive && onPartClick?.('eyes')} />
      <circle cx="95" cy="106" r="6" fill="#1E293B" />
      <circle cx="92" cy="103" r="2" fill="white" />
      <circle cx="118" cy="109" r="11" fill={getF(parts, 'eyes', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" />
      <circle cx="118" cy="109" r="5" fill="#1E293B" />
      <circle cx="116" cy="107" r="1.5" fill="white" />
    </g>
  );
};

// 93. ☂️ UMBRELLA (8 Letters)
export const UmbrellaColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Canopy Dome */}
      <path d="M 40 130 C 40 50, 200 50, 200 130 Q 173 115 146 130 Q 120 115 94 130 Q 67 115 40 130 Z" fill={getF(parts, 'canopy', '#FFFFFF')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('canopy')} />
      {/* Top Tip */}
      <line x1="120" y1="50" x2="120" y2="35" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" />
      {/* Shaft */}
      <line x1="120" y1="125" x2="120" y2="195" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" />
      {/* Hook Handle */}
      <path d="M 120 195 C 120 220, 95 220, 95 200" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" fill="none" className={cc} onClick={() => interactive && onPartClick?.('handle')} />
      {/* Raindrops */}
      <path d="M 45 160 Q 40 175 45 180 Q 50 175 45 160" fill={getF(parts, 'drops', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" />
      <path d="M 195 160 Q 190 175 195 180 Q 200 175 195 160" fill={getF(parts, 'drops', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" />
    </g>
  );
};

// 94. 🦚 PEACOCK (7 Letters)
export const PeacockColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Fan Tail */}
      <path d="M 40 150 C 30 50, 210 50, 200 150 Z" fill={getF(parts, 'tail', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('tail')} />
      {/* Feather Eyes */}
      <circle cx="70" cy="95" r="10" fill={getF(parts, 'eyes', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" />
      <circle cx="70" cy="95" r="5" fill={getF(parts, 'eyes', '#FFFFFF')} stroke="#1E293B" strokeWidth="1.5" />
      <circle cx="120" cy="70" r="12" fill={getF(parts, 'eyes', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" />
      <circle cx="120" cy="70" r="6" fill={getF(parts, 'eyes', '#FFFFFF')} stroke="#1E293B" strokeWidth="1.5" />
      <circle cx="170" cy="95" r="10" fill={getF(parts, 'eyes', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" />
      <circle cx="170" cy="95" r="5" fill={getF(parts, 'eyes', '#FFFFFF')} stroke="#1E293B" strokeWidth="1.5" />
      {/* Peacock Body */}
      <ellipse cx="120" cy="150" rx="28" ry="40" fill={getF(parts, 'body', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      {/* Crest */}
      <line x1="120" y1="110" x2="110" y2="85" stroke="#1E293B" strokeWidth="3" />
      <circle cx="110" cy="85" r="4" fill={getF(parts, 'crest', '#FFFFFF')} stroke="#1E293B" strokeWidth="1.5" />
      <line x1="120" y1="110" x2="130" y2="85" stroke="#1E293B" strokeWidth="3" />
      <circle cx="130" cy="85" r="4" fill={getF(parts, 'crest', '#FFFFFF')} stroke="#1E293B" strokeWidth="1.5" />
      {/* Beak */}
      <polygon points="120,118 108,124 120,130" fill={getF(parts, 'beak', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" />
      {/* Eyes */}
      <circle cx="114" cy="115" r="3" fill="#1E293B" />
      <circle cx="126" cy="115" r="3" fill="#1E293B" />
    </g>
  );
};

// 95. 🦩 SUBMARINE (9 Letters)
export const SubmarineColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Periscope Tower */}
      <rect x="105" y="65" width="30" height="35" rx="6" fill={getF(parts, 'hull', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" />
      <path d="M 120 65 L 120 40 L 140 40" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" fill="none" />
      {/* Submarine Main Hull */}
      <ellipse cx="120" cy="130" rx="80" ry="42" fill={getF(parts, 'hull', '#FFFFFF')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('hull')} />
      {/* Porthole Windows */}
      <circle cx="85" cy="130" r="14" fill={getF(parts, 'windows', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" className={cc} onClick={() => interactive && onPartClick?.('windows')} />
      <circle cx="120" cy="130" r="14" fill={getF(parts, 'windows', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" className={cc} onClick={() => interactive && onPartClick?.('windows')} />
      <circle cx="155" cy="130" r="14" fill={getF(parts, 'windows', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" className={cc} onClick={() => interactive && onPartClick?.('windows')} />
      {/* Propeller */}
      <polygon points="35,115 45,130 35,145" fill={getF(parts, 'propeller', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" />
    </g>
  );
};

// 96. 🚁 HELICOPTER (10 Letters)
export const HelicopterColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Rotor Blades */}
      <line x1="30" y1="50" x2="210" y2="50" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" />
      <rect x="115" y="50" width="10" height="20" fill={getF(parts, 'rotor', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" />
      {/* Tail Boom */}
      <rect x="140" y="105" width="65" height="15" rx="5" fill={getF(parts, 'cabin', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" />
      {/* Tail Rotor */}
      <line x1="205" y1="90" x2="205" y2="135" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
      {/* Cabin Body */}
      <ellipse cx="100" cy="115" rx="50" ry="38" fill={getF(parts, 'cabin', '#FFFFFF')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('cabin')} />
      {/* Windshield */}
      <path d="M 60 115 C 60 90, 95 90, 110 95 L 110 135 L 65 135 Z" fill={getF(parts, 'window', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" className={cc} onClick={() => interactive && onPartClick?.('window')} />
      {/* Landing Skids */}
      <line x1="75" y1="150" x2="75" y2="170" stroke="#1E293B" strokeWidth="4" />
      <line x1="125" y1="150" x2="125" y2="170" stroke="#1E293B" strokeWidth="4" />
      <line x1="50" y1="170" x2="150" y2="170" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" />
    </g>
  );
};

// 97. 🍓 STRAWBERRY (10 Letters) - Super cute kawaii strawberry
export const StrawberryColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Plump Strawberry Body */}
      <path
        d="M 120 75 C 55 75, 45 145, 80 188 C 100 212, 115 224, 120 224 C 125 224, 140 212, 160 188 C 195 145, 185 75, 120 75 Z"
        fill={getF(parts, 'berry', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="5"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('berry')}
      />

      {/* Stem */}
      <path d="M 120 52 Q 116 28 135 22" stroke="#1E293B" strokeWidth="5.5" strokeLinecap="round" fill="none" />

      {/* Cute Leafy Calyx Crown */}
      <g fill={getF(parts, 'leaves', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" strokeLinejoin="round" className={cc} onClick={() => interactive && onPartClick?.('leaves')}>
        <path d="M 120 75 Q 85 55 75 75 Q 98 85 120 75 Z" />
        <path d="M 120 75 Q 105 45 120 42 Q 135 45 120 75 Z" />
        <path d="M 120 75 Q 155 55 165 75 Q 142 85 120 75 Z" />
        <path d="M 120 75 Q 60 75 62 90 Q 90 92 120 75 Z" />
        <path d="M 120 75 Q 180 75 178 90 Q 150 92 120 75 Z" />
      </g>

      {/* Sparkling Cute Eyes */}
      <circle cx="96" cy="130" r="8" fill="#1E293B" />
      <circle cx="93" cy="127" r="3" fill="white" />
      <circle cx="98" cy="133" r="1.5" fill="white" />
      <circle cx="144" cy="130" r="8" fill="#1E293B" />
      <circle cx="141" cy="127" r="3" fill="white" />
      <circle cx="146" cy="133" r="1.5" fill="white" />

      {/* Blushing Cheeks */}
      <ellipse cx="80" cy="142" rx="8" ry="5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="1.5" className={cc} onClick={() => interactive && onPartClick?.('cheeks')} />
      <ellipse cx="160" cy="142" rx="8" ry="5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="1.5" className={cc} onClick={() => interactive && onPartClick?.('cheeks')} />

      {/* Sweet Smile */}
      <path d="M 112 140 Q 120 152 128 140" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" fill="none" />

      {/* Cute Little Seeds distributed across berry */}
      <ellipse cx="75" cy="112" rx="3" ry="5" fill={getF(parts, 'seeds', '#FFFFFF')} stroke="#1E293B" strokeWidth="1.5" />
      <ellipse cx="120" cy="100" rx="3" ry="5" fill={getF(parts, 'seeds', '#FFFFFF')} stroke="#1E293B" strokeWidth="1.5" />
      <ellipse cx="165" cy="112" rx="3" ry="5" fill={getF(parts, 'seeds', '#FFFFFF')} stroke="#1E293B" strokeWidth="1.5" />
      <ellipse cx="92" cy="172" rx="3" ry="5" fill={getF(parts, 'seeds', '#FFFFFF')} stroke="#1E293B" strokeWidth="1.5" />
      <ellipse cx="148" cy="172" rx="3" ry="5" fill={getF(parts, 'seeds', '#FFFFFF')} stroke="#1E293B" strokeWidth="1.5" />
      <ellipse cx="120" cy="195" rx="3" ry="5" fill={getF(parts, 'seeds', '#FFFFFF')} stroke="#1E293B" strokeWidth="1.5" />
    </g>
  );
};

// 98. 🍍 PINEAPPLE (9 Letters)
export const PineappleColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Spiky Crown Leaves */}
      <g fill={getF(parts, 'crown', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" className={cc} onClick={() => interactive && onPartClick?.('crown')}>
        <polygon points="120,80 80,30 110,65" />
        <polygon points="120,80 120,20 130,65" />
        <polygon points="120,80 160,30 130,65" />
        <polygon points="120,80 95,45 110,75" />
        <polygon points="120,80 145,45 130,75" />
      </g>
      {/* Pineapple Oval */}
      <ellipse cx="120" cy="145" rx="55" ry="65" fill={getF(parts, 'fruit', '#FFFFFF')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('fruit')} />
      {/* Crosshatch Pattern */}
      <line x1="80" y1="110" x2="160" y2="180" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="160" y1="110" x2="80" y2="180" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="90" y1="95" x2="150" y2="195" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="150" y1="95" x2="90" y2="195" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
    </g>
  );
};

// 99. 🚂 LOCOMOTIVE (10 Letters)
export const LocomotiveColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Smoke */}
      <circle cx="75" cy="35" r="10" fill={getF(parts, 'smoke', '#FFFFFF')} stroke="#1E293B" strokeWidth="2.5" />
      <circle cx="65" cy="20" r="14" fill={getF(parts, 'smoke', '#FFFFFF')} stroke="#1E293B" strokeWidth="2.5" />
      {/* Chimney */}
      <polygon points="70,80 60,50 90,50 80,80" fill={getF(parts, 'boiler', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" />
      {/* Cabin */}
      <rect x="130" y="70" width="65" height="90" rx="8" fill={getF(parts, 'body', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      <rect x="145" y="85" width="35" height="30" rx="4" fill={getF(parts, 'window', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" />
      {/* Boiler */}
      <rect x="45" y="80" width="95" height="80" rx="8" fill={getF(parts, 'boiler', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('boiler')} />
      {/* Cowcatcher */}
      <polygon points="45,150 20,170 45,170" fill={getF(parts, 'cowcatcher', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" />
      {/* Wheels */}
      <circle cx="65" cy="170" r="18" fill="#1E293B" stroke="#64748B" strokeWidth="3" />
      <circle cx="105" cy="170" r="18" fill="#1E293B" stroke="#64748B" strokeWidth="3" />
      <circle cx="160" cy="165" r="24" fill="#1E293B" stroke="#64748B" strokeWidth="4" />
      <circle cx="160" cy="165" r="8" fill="#CBD5E1" />
    </g>
  );
};

// 100. 🎆 FIREWORKS (9 Letters)
export const FireworksColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Bursts & Rays Outline */}
      <g stroke="#1E293B" strokeWidth="9" strokeLinecap="round">
        <line x1="120" y1="90" x2="120" y2="40" />
        <line x1="120" y1="150" x2="120" y2="200" />
        <line x1="90" y1="120" x2="40" y2="120" />
        <line x1="150" y1="120" x2="200" y2="120" />
        <line x1="95" y1="95" x2="60" y2="60" />
        <line x1="145" y1="95" x2="180" y2="60" />
        <line x1="95" y1="145" x2="60" y2="180" />
        <line x1="145" y1="145" x2="180" y2="180" />
      </g>
      {/* Bursts & Rays Fill */}
      <g stroke={getF(parts, 'sparks', '#FFFFFF')} strokeWidth="5" strokeLinecap="round" className={cc} onClick={() => interactive && onPartClick?.('sparks')}>
        <line x1="120" y1="90" x2="120" y2="40" />
        <line x1="120" y1="150" x2="120" y2="200" />
        <line x1="90" y1="120" x2="40" y2="120" />
        <line x1="150" y1="120" x2="200" y2="120" />
        <line x1="95" y1="95" x2="60" y2="60" />
        <line x1="145" y1="95" x2="180" y2="60" />
        <line x1="95" y1="145" x2="60" y2="180" />
        <line x1="145" y1="145" x2="180" y2="180" />
      </g>
      {/* Center Sparkle */}
      <circle cx="120" cy="120" r="16" fill={getF(parts, 'core', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" className={cc} onClick={() => interactive && onPartClick?.('core')} />
      {/* Spark Stars */}
      <circle cx="120" cy="35" r="6" fill={getF(parts, 'stars', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" />
      <circle cx="120" cy="205" r="6" fill={getF(parts, 'stars', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" />
      <circle cx="35" cy="120" r="6" fill={getF(parts, 'stars', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" />
      <circle cx="205" cy="120" r="6" fill={getF(parts, 'stars', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" />
      <circle cx="55" cy="55" r="6" fill={getF(parts, 'stars', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" />
      <circle cx="185" cy="55" r="6" fill={getF(parts, 'stars', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" />
      <circle cx="55" cy="185" r="6" fill={getF(parts, 'stars', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" />
      <circle cx="185" cy="185" r="6" fill={getF(parts, 'stars', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" />
    </g>
  );
};
