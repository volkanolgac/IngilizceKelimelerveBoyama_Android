import React from 'react';
import { type ArtworkProps, cursorClass, getF } from './artworkCommon';
export type { ArtworkProps };
export { cursorClass, getF };

// 1. 🐱 CAT (Matches user's reference: minimalist, cute geometric round face with perky triangle ears, sweet eyes, pink nose, curved cat mouth & blush cheeks)
export const CatColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 8)">
      {/* Outer Ears (Perky Triangle Ears) */}
      <polygon
        points="46,98 72,26 108,68"
        fill={getF(parts, 'ears', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="6"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('ears')}
      />
      {/* Inner Ear Left */}
      <polygon
        points="58,90 73,42 98,70"
        fill={getF(parts, 'earsInner', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="3"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('earsInner')}
      />

      {/* Outer Ear Right */}
      <polygon
        points="132,68 168,26 194,98"
        fill={getF(parts, 'ears', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="6"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('ears')}
      />
      {/* Inner Ear Right */}
      <polygon
        points="142,70 167,42 182,90"
        fill={getF(parts, 'earsInner', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="3"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('earsInner')}
      />

      {/* Main Round Head */}
      <circle
        cx="120"
        cy="130"
        r="68"
        fill={getF(parts, 'head', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="6"
        className={cc}
        onClick={() => interactive && onPartClick?.('head')}
      />

      {/* Cute Big Sparkling Eyes */}
      <circle cx="92" cy="126" r="8.5" fill="#1E293B" />
      <circle cx="90" cy="123" r="3" fill="#FFFFFF" />
      <circle cx="148" cy="126" r="8.5" fill="#1E293B" />
      <circle cx="146" cy="123" r="3" fill="#FFFFFF" />

      {/* Blushing Cheeks */}
      <circle
        cx="74"
        cy="146"
        r="9"
        fill={getF(parts, 'cheeks', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="1.5"
        className={cc}
        onClick={() => interactive && onPartClick?.('cheeks')}
      />
      <circle
        cx="166"
        cy="146"
        r="9"
        fill={getF(parts, 'cheeks', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="1.5"
        className={cc}
        onClick={() => interactive && onPartClick?.('cheeks')}
      />

      {/* Small Pink Nose */}
      <polygon
        points="112,142 128,142 120,150"
        fill={getF(parts, 'nose', '#FB7185')}
        stroke="#1E293B"
        strokeWidth="1.5"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('nose')}
      />

      {/* Cute Curved Cat Mouth */}
      <path
        d="M 102 153 Q 111 163 120 151 Q 129 163 138 153"
        stroke="#1E293B"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </g>
  );
};

// 2. 🐶 DOG
export const DogColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 8)">
      {/* Body */}
      <ellipse cx="120" cy="182" rx="56" ry="40" fill={getF(parts, 'body', '#FFFFFF')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      
      {/* Puppy Paws */}
      <ellipse cx="85" cy="212" rx="20" ry="14" fill={getF(parts, 'paws', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('paws')} />
      <ellipse cx="155" cy="212" rx="20" ry="14" fill={getF(parts, 'paws', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('paws')} />
      {/* Paw toe details */}
      <line x1="80" y1="206" x2="80" y2="218" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
      <line x1="90" y1="206" x2="90" y2="218" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
      <line x1="150" y1="206" x2="150" y2="218" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
      <line x1="160" y1="206" x2="160" y2="218" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />

      {/* Collar & Tag */}
      <path d="M 74 158 Q 120 178 166 158 Q 166 172 120 190 Q 74 172 74 158 Z" fill={getF(parts, 'collar', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('collar')} />
      <circle cx="120" cy="182" r="9" fill={getF(parts, 'collar', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" className={cc} onClick={() => interactive && onPartClick?.('collar')} />
      <circle cx="120" cy="182" r="4" fill={getF(parts, 'collar', '#FFFFFF')} />

      {/* Big Floppy Puppy Ears */}
      <g className={cc} onClick={() => interactive && onPartClick?.('ears')}>
        {/* Left Ear */}
        <path d="M 68 52 C 26 55, 18 120, 36 150 C 44 165, 62 165, 70 142 C 78 122, 74 76, 72 62 Z" fill={getF(parts, 'ears', '#FFFFFF')} stroke="#1E293B" strokeWidth="5" strokeLinejoin="round" />
        {/* Right Ear */}
        <path d="M 172 52 C 214 55, 222 120, 204 150 C 196 165, 178 165, 170 142 C 162 122, 166 76, 168 62 Z" fill={getF(parts, 'ears', '#FFFFFF')} stroke="#1E293B" strokeWidth="5" strokeLinejoin="round" />
      </g>

      {/* Puppy Head */}
      <circle cx="120" cy="100" r="58" fill={getF(parts, 'head', '#FFFFFF')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('head')} />

      {/* Eye Patch on Left Eye - Has outline so visible when uncolored */}
      <ellipse cx="94" cy="92" rx="22" ry="24" fill={getF(parts, 'patch', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" className={cc} onClick={() => interactive && onPartClick?.('patch')} />

      {/* Cute Puppy Snout / Muzzle */}
      <ellipse cx="120" cy="122" rx="36" ry="26" fill={getF(parts, 'snout', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('snout')} />

      {/* Open Mouth with sticking out pink tongue */}
      <path d="M 108 132 Q 120 144 132 132" stroke="#1E293B" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M 112 134 C 112 154, 128 154, 128 134 Z" fill={getF(parts, 'tongue', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" className={cc} onClick={() => interactive && onPartClick?.('tongue')} />
      <line x1="120" y1="135" x2="120" y2="145" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />

      {/* Nose */}
      <path d="M 108 114 C 108 107, 132 107, 132 114 C 132 124, 120 128, 120 128 C 120 128, 108 124, 108 114 Z" fill={getF(parts, 'nose', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" className={cc} onClick={() => interactive && onPartClick?.('nose')} />
      <ellipse cx="116" cy="112" rx="3" ry="1.5" fill={getF(parts, 'nose', '#FFFFFF')} />

      {/* Whiskers dots */}
      <circle cx="98" cy="122" r="1.8" fill="#1E293B" opacity="0.6" />
      <circle cx="93" cy="127" r="1.8" fill="#1E293B" opacity="0.6" />
      <circle cx="142" cy="122" r="1.8" fill="#1E293B" opacity="0.6" />
      <circle cx="147" cy="127" r="1.8" fill="#1E293B" opacity="0.6" />

      {/* Big Puppy Eyes */}
      {/* Left Eye */}
      <circle cx="94" cy="90" r="9" fill="#1E293B" />
      <circle cx="91" cy="87" r="3.5" fill="white" />
      <circle cx="96" cy="92" r="1.5" fill="white" />
      {/* Right Eye */}
      <circle cx="146" cy="90" r="9" fill="#1E293B" />
      <circle cx="143" cy="87" r="3.5" fill="white" />
      <circle cx="148" cy="92" r="1.5" fill="white" />

      {/* Eyebrows */}
      <path d="M 85 75 Q 94 70 103 76" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M 137 76 Q 146 70 155 75" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" fill="none" />

      {/* Rosy Cheeks */}
      <circle cx="76" cy="115" r="8" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#CBD5E1" strokeWidth="1.5" className={cc} onClick={() => interactive && onPartClick?.('cheeks')} />
      <circle cx="164" cy="115" r="8" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#CBD5E1" strokeWidth="1.5" className={cc} onClick={() => interactive && onPartClick?.('cheeks')} />
    </g>
  );
};

// 3. ☀️ SUN
export const SunColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <g className={cc} onClick={() => interactive && onPartClick?.('rays')}>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <polygon key={i} points="110,25 130,25 120,2" fill={getF(parts, 'rays', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" transform={`rotate(${angle}, 120, 120)`} />
        ))}
      </g>
      <circle cx="120" cy="120" r="60" fill={getF(parts, 'body', '#F1F5F9')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      <circle cx="95" cy="115" r="6" fill="#1E293B" />
      <circle cx="145" cy="115" r="6" fill="#1E293B" />
      <circle cx="93" cy="112" r="2" fill="white" />
      <circle cx="143" cy="112" r="2" fill="white" />
      <path d="M 102 135 Q 120 152 138 135" stroke="#1E293B" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      <circle cx="82" cy="130" r="8" fill={getF(parts, 'cheeks', '#E2E8F0')} className={cc} onClick={() => interactive && onPartClick?.('cheeks')} />
      <circle cx="158" cy="130" r="8" fill={getF(parts, 'cheeks', '#E2E8F0')} className={cc} onClick={() => interactive && onPartClick?.('cheeks')} />
    </g>
  );
};

// 4. 🚗 CAR
export const CarColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <path d="M 30 145 L 50 95 Q 65 75 90 75 L 155 75 Q 175 75 190 95 L 210 145 Z" fill={getF(parts, 'body', '#F1F5F9')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      <rect x="25" y="135" width="190" height="35" rx="10" fill={getF(parts, 'body', '#F1F5F9')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      <path d="M 60 95 L 88 95 L 88 130 L 45 130 Z" fill={getF(parts, 'windows', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('windows')} />
      <path d="M 98 95 L 145 95 L 145 130 L 98 130 Z" fill={getF(parts, 'windows', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('windows')} />
      <path d="M 155 95 L 180 95 L 195 130 L 155 130 Z" fill={getF(parts, 'windows', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('windows')} />
      <circle cx="65" cy="170" r="22" fill={getF(parts, 'wheels', '#475569')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('wheels')} />
      <circle cx="65" cy="170" r="10" fill={getF(parts, 'hubcaps', '#E2E8F0')} />
      <circle cx="175" cy="170" r="22" fill={getF(parts, 'wheels', '#475569')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('wheels')} />
      <circle cx="175" cy="170" r="10" fill={getF(parts, 'hubcaps', '#E2E8F0')} />
      <circle cx="212" cy="145" r="7" fill={getF(parts, 'lights', '#E2E8F0')} />
    </g>
  );
};

// 5. 🚌 BUS
export const BusColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <rect x="25" y="65" width="190" height="95" rx="16" fill={getF(parts, 'body', '#F1F5F9')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      <rect x="35" y="80" width="35" height="30" rx="4" fill={getF(parts, 'windows', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('windows')} />
      <rect x="80" y="80" width="35" height="30" rx="4" fill={getF(parts, 'windows', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('windows')} />
      <rect x="125" y="80" width="35" height="30" rx="4" fill={getF(parts, 'windows', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('windows')} />
      <rect x="170" y="80" width="35" height="30" rx="4" fill={getF(parts, 'windows', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('windows')} />
      <circle cx="65" cy="165" r="20" fill={getF(parts, 'wheels', '#475569')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('wheels')} />
      <circle cx="175" cy="165" r="20" fill={getF(parts, 'wheels', '#475569')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('wheels')} />
    </g>
  );
};

// 6. 🦊 FOX
export const FoxColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <polygon points="50,60 70,110 30,110" fill={getF(parts, 'ears', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('ears')} />
      <polygon points="190,60 210,110 170,110" fill={getF(parts, 'ears', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('ears')} />
      <polygon points="40,105 200,105 120,185" fill={getF(parts, 'head', '#F1F5F9')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('head')} />
      <polygon points="40,105 120,185 80,185" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('cheeks')} />
      <polygon points="200,105 120,185 160,185" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('cheeks')} />
      <circle cx="90" cy="125" r="6" fill="#1E293B" />
      <circle cx="150" cy="125" r="6" fill="#1E293B" />
      <circle cx="120" cy="180" r="7" fill={getF(parts, 'nose', '#1E293B')} />
    </g>
  );
};

// 7. 🦉 OWL
export const OwlColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <ellipse cx="120" cy="130" rx="60" ry="68" fill={getF(parts, 'body', '#F1F5F9')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      <ellipse cx="120" cy="145" rx="35" ry="40" fill={getF(parts, 'belly', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('belly')} />
      <circle cx="90" cy="105" r="22" fill={getF(parts, 'eyes', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('eyes')} />
      <circle cx="150" cy="105" r="22" fill={getF(parts, 'eyes', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('eyes')} />
      <circle cx="90" cy="105" r="8" fill="#1E293B" />
      <circle cx="150" cy="105" r="8" fill="#1E293B" />
      <polygon points="114,118 126,118 120,132" fill={getF(parts, 'beak', '#CBD5E1')} stroke="#1E293B" strokeWidth="3" className={cc} onClick={() => interactive && onPartClick?.('beak')} />
    </g>
  );
};

// 8. 🐷 PIG
export const PigColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <circle cx="70" cy="80" r="20" fill={getF(parts, 'ears', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('ears')} />
      <circle cx="170" cy="80" r="20" fill={getF(parts, 'ears', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('ears')} />
      <circle cx="120" cy="120" r="62" fill={getF(parts, 'head', '#F1F5F9')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('head')} />
      <ellipse cx="120" cy="135" rx="28" ry="20" fill={getF(parts, 'snout', '#E2E8F0')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('snout')} />
      <ellipse cx="112" cy="135" rx="4" ry="7" fill="#1E293B" />
      <ellipse cx="128" cy="135" rx="4" ry="7" fill="#1E293B" />
      <circle cx="95" cy="105" r="6" fill="#1E293B" />
      <circle cx="145" cy="105" r="6" fill="#1E293B" />
    </g>
  );
};

// 9. 🦇 BAT
export const BatColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <path d="M 120 120 Q 70 60 20 100 Q 50 140 70 140 Q 100 150 120 120" fill={getF(parts, 'wings', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('wings')} />
      <path d="M 120 120 Q 170 60 220 100 Q 190 140 170 140 Q 140 150 120 120" fill={getF(parts, 'wings', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('wings')} />
      <ellipse cx="120" cy="130" rx="35" ry="42" fill={getF(parts, 'body', '#F1F5F9')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      <polygon points="100,100 105,75 115,95" fill={getF(parts, 'ears', '#CBD5E1')} stroke="#1E293B" strokeWidth="3" />
      <polygon points="140,100 135,75 125,95" fill={getF(parts, 'ears', '#CBD5E1')} stroke="#1E293B" strokeWidth="3" />
      <circle cx="108" cy="120" r="5" fill="#1E293B" />
      <circle cx="132" cy="120" r="5" fill="#1E293B" />
    </g>
  );
};

// 10. ☕ CUP
export const CupColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <path d="M 160 110 Q 200 110 200 135 Q 200 160 160 160" fill="none" stroke={getF(parts, 'handle', '#CBD5E1')} strokeWidth="12" strokeLinecap="round" className={cc} onClick={() => interactive && onPartClick?.('handle')} />
      <path d="M 50 95 L 65 175 Q 70 195 120 195 Q 170 195 175 175 L 190 95 Z" fill={getF(parts, 'cup', '#F1F5F9')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('cup')} />
      <ellipse cx="120" cy="95" rx="70" ry="14" fill="#FFFFFF" stroke="#1E293B" strokeWidth="4" />
      <path d="M 95 70 Q 105 50 95 30 M 120 70 Q 130 50 120 30 M 145 70 Q 155 50 145 30" fill="none" stroke={getF(parts, 'steam', '#CBD5E1')} strokeWidth="4" strokeLinecap="round" className={cc} onClick={() => interactive && onPartClick?.('steam')} />
    </g>
  );
};

// 11. 🐟 FISH
export const FishColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <polygon points="180,120 225,80 225,160" fill={getF(parts, 'tail', '#CBD5E1')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('tail')} />
      <ellipse cx="120" cy="120" rx="70" ry="48" fill={getF(parts, 'body', '#F1F5F9')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      <path d="M 95 85 Q 115 120 95 155" stroke="#1E293B" strokeWidth="4" fill="none" />
      <circle cx="80" cy="110" r="7" fill={getF(parts, 'eyes', '#1E293B')} />
      <circle cx="78" cy="108" r="2.5" fill="white" />
      <ellipse cx="125" cy="130" rx="18" ry="10" fill={getF(parts, 'fins', '#CBD5E1')} stroke="#1E293B" strokeWidth="3" className={cc} onClick={() => interactive && onPartClick?.('fins')} />
    </g>
  );
};

// 12. 🦆 DUCK
export const DuckColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <ellipse cx="130" cy="145" rx="55" ry="38" fill={getF(parts, 'body', '#F1F5F9')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      <circle cx="85" cy="105" r="35" fill={getF(parts, 'head', '#F1F5F9')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('head')} />
      <polygon points="55,108 20,118 55,128" fill={getF(parts, 'beak', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('beak')} />
      <ellipse cx="135" cy="142" rx="30" ry="18" fill={getF(parts, 'wing', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('wing')} />
      <circle cx="78" cy="98" r="6" fill="#1E293B" />
      <circle cx="76" cy="96" r="2" fill="white" />
    </g>
  );
};

// 13. ⭐ STAR
export const StarColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <polygon points="120,15 148,82 220,88 165,135 182,205 120,168 58,205 75,135 20,88 92,82" fill={getF(parts, 'body', '#F1F5F9')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      <circle cx="102" cy="115" r="6" fill="#1E293B" />
      <circle cx="138" cy="115" r="6" fill="#1E293B" />
      <path d="M 110 135 Q 120 145 130 135" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" fill="none" />
    </g>
  );
};

// 14. 🌳 TREE
export const TreeColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <rect x="105" y="130" width="30" height="75" fill={getF(parts, 'trunk', '#CBD5E1')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('trunk')} />
      <circle cx="85" cy="115" r="40" fill={getF(parts, 'leavesBottom', '#E2E8F0')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('leavesBottom')} />
      <circle cx="155" cy="115" r="40" fill={getF(parts, 'leavesBottom', '#E2E8F0')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('leavesBottom')} />
      <circle cx="120" cy="80" r="48" fill={getF(parts, 'leavesTop', '#F1F5F9')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('leavesTop')} />
      <circle cx="95" cy="80" r="7" fill={getF(parts, 'fruits', '#EF4444')} className={cc} onClick={() => interactive && onPartClick?.('fruits')} />
      <circle cx="145" cy="90" r="7" fill={getF(parts, 'fruits', '#EF4444')} className={cc} onClick={() => interactive && onPartClick?.('fruits')} />
    </g>
  );
};

// 15. 🐸 FROG
export const FrogColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <circle cx="75" cy="85" r="22" fill={getF(parts, 'eyesOuter', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('eyesOuter')} />
      <circle cx="165" cy="85" r="22" fill={getF(parts, 'eyesOuter', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('eyesOuter')} />
      <ellipse cx="120" cy="135" rx="65" ry="50" fill={getF(parts, 'head', '#F1F5F9')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('head')} />
      <ellipse cx="120" cy="150" rx="40" ry="25" fill={getF(parts, 'belly', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" className={cc} onClick={() => interactive && onPartClick?.('belly')} />
      <circle cx="75" cy="85" r="8" fill="#1E293B" />
      <circle cx="165" cy="85" r="8" fill="#1E293B" />
      <path d="M 90 135 Q 120 160 150 135" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" fill="none" />
    </g>
  );
};

// 16. 🚢 SHIP
export const ShipColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <rect x="95" y="55" width="25" height="35" fill={getF(parts, 'funnel', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('funnel')} />
      <rect x="65" y="85" width="110" height="40" rx="5" fill={getF(parts, 'deck', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('deck')} />
      <path d="M 30 125 L 210 125 L 185 175 Q 120 185 55 175 Z" fill={getF(parts, 'hull', '#F1F5F9')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('hull')} />
      <circle cx="80" cy="145" r="8" fill={getF(parts, 'portholes', '#CBD5E1')} />
      <circle cx="120" cy="145" r="8" fill={getF(parts, 'portholes', '#CBD5E1')} />
      <circle cx="160" cy="145" r="8" fill={getF(parts, 'portholes', '#CBD5E1')} />
    </g>
  );
};

// 17. 🌙 MOON
export const MoonColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Crescent Moon Body */}
      <path
        d="M 160 25 C 90 35, 45 95, 45 140 C 45 195, 100 230, 175 220 C 115 195, 95 145, 110 85 C 118 55, 140 35, 160 25 Z"
        fill={getF(parts, 'body', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="5"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('body')}
      />
      {/* Sleeping Eyelash */}
      <path d="M 88 128 Q 98 138 108 128" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" fill="none" />
      <line x1="93" y1="134" x2="91" y2="140" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="98" y1="135" x2="98" y2="142" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="103" y1="134" x2="105" y2="140" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
      {/* Gentle Smile */}
      <path d="M 94 152 Q 104 162 116 150" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      {/* Rosy Cheek */}
      <ellipse
        cx="106"
        cy="142"
        rx="9"
        ry="6"
        fill={getF(parts, 'cheeks', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="2.5"
        className={cc}
        onClick={() => interactive && onPartClick?.('cheeks')}
      />
      {/* Soft Moon Craters */}
      <circle
        cx="78"
        cy="80"
        r="10"
        fill={getF(parts, 'craters', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="3"
        className={cc}
        onClick={() => interactive && onPartClick?.('craters')}
      />
      <circle
        cx="72"
        cy="185"
        r="12"
        fill={getF(parts, 'craters', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="3"
        className={cc}
        onClick={() => interactive && onPartClick?.('craters')}
      />
      <circle
        cx="125"
        cy="202"
        r="8"
        fill={getF(parts, 'craters', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="3"
        className={cc}
        onClick={() => interactive && onPartClick?.('craters')}
      />
    </g>
  );
};

// 18. 🦁 LION (Cute, highly recognizable cartoon lion with lush petal mane, round ears, whiskers & happy face)
export const LionColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* 1. Fluffy Petal Mane (Surrounding Head) */}
      <g
        fill={getF(parts, 'mane', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4.5"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('mane')}
      >
        <circle cx="120" cy="50" r="30" />
        <circle cx="165" cy="65" r="30" />
        <circle cx="190" cy="106" r="30" />
        <circle cx="184" cy="152" r="30" />
        <circle cx="152" cy="188" r="30" />
        <circle cx="120" cy="195" r="30" />
        <circle cx="88" cy="188" r="30" />
        <circle cx="56" cy="152" r="30" />
        <circle cx="50" cy="106" r="30" />
        <circle cx="75" cy="65" r="30" />
      </g>

      {/* 2. Round Ears with Inner Pink */}
      <circle cx="75" cy="75" r="22" fill={getF(parts, 'ears', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('ears')} />
      <circle cx="75" cy="75" r="12" fill={getF(parts, 'earsInner', '#FFFFFF')} stroke="#1E293B" strokeWidth="2.5" className={cc} onClick={() => interactive && onPartClick?.('earsInner')} />
      <circle cx="165" cy="75" r="22" fill={getF(parts, 'ears', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('ears')} />
      <circle cx="165" cy="75" r="12" fill={getF(parts, 'earsInner', '#FFFFFF')} stroke="#1E293B" strokeWidth="2.5" className={cc} onClick={() => interactive && onPartClick?.('earsInner')} />

      {/* 3. Main Face */}
      <circle cx="120" cy="125" r="58" fill={getF(parts, 'face', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('face')} />

      {/* 4. Rosy Cheeks */}
      <ellipse cx="82" cy="138" rx="11" ry="7" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="2.5" className={cc} onClick={() => interactive && onPartClick?.('cheeks')} />
      <ellipse cx="158" cy="138" rx="11" ry="7" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="2.5" className={cc} onClick={() => interactive && onPartClick?.('cheeks')} />

      {/* 5. Big Friendly Eyes */}
      <g>
        <ellipse cx="98" cy="112" rx="9" ry="11" fill="#1E293B" />
        <circle cx="95" cy="108" r="3.5" fill="#FFFFFF" />
        <circle cx="102" cy="115" r="1.5" fill="#FFFFFF" />
      </g>
      <g>
        <ellipse cx="142" cy="112" rx="9" ry="11" fill="#1E293B" />
        <circle cx="139" cy="108" r="3.5" fill="#FFFFFF" />
        <circle cx="146" cy="115" r="1.5" fill="#FFFFFF" />
      </g>

      {/* 6. Cute White Snout / Muzzle */}
      <g
        fill={getF(parts, 'snout', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="3.5"
        className={cc}
        onClick={() => interactive && onPartClick?.('snout')}
      >
        <ellipse cx="108" cy="144" rx="17" ry="13" />
        <ellipse cx="132" cy="144" rx="17" ry="13" />
      </g>

      {/* 7. Cute Nose */}
      <polygon
        points="108,132 132,132 120,144"
        fill={getF(parts, 'nose', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="3"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('nose')}
      />

      {/* 8. Happy Smile & Whiskers */}
      <path d="M 120 144 L 120 152 M 108 152 Q 120 160 132 152" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      {/* Whiskers */}
      <line x1="72" y1="140" x2="56" y2="136" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="72" y1="146" x2="56" y2="148" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="168" y1="140" x2="184" y2="136" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="168" y1="146" x2="184" y2="148" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
    </g>
  );
};

// 19. 🐻 BEAR
export const BearColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <circle cx="65" cy="75" r="22" fill={getF(parts, 'ears', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('ears')} />
      <circle cx="175" cy="75" r="22" fill={getF(parts, 'ears', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('ears')} />
      <circle cx="120" cy="125" r="62" fill={getF(parts, 'head', '#F1F5F9')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('head')} />
      <ellipse cx="120" cy="142" rx="30" ry="20" fill={getF(parts, 'snout', '#FEF3C7')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('snout')} />
      <circle cx="95" cy="110" r="7" fill="#1E293B" />
      <circle cx="145" cy="110" r="7" fill="#1E293B" />
      <ellipse cx="120" cy="136" rx="10" ry="7" fill="#1E293B" />
    </g>
  );
};

// 20. 🐦 BIRD (Chubby adorable singing songbird with crest, big shiny eye, cheerful beak & layered wing)
export const BirdColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* 1. Tail Feathers */}
      <path
        d="M 170 135 L 210 120 L 215 140 L 175 155 Z"
        fill={getF(parts, 'tail', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('tail')}
      />
      <path
        d="M 172 145 L 205 148 L 195 165 L 168 158 Z"
        fill={getF(parts, 'tail', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* 2. Little Bird Legs / Perch */}
      <line x1="105" y1="178" x2="105" y2="200" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
      <line x1="105" y1="200" x2="94" y2="205" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
      <line x1="105" y1="200" x2="116" y2="205" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />

      <line x1="135" y1="178" x2="135" y2="200" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
      <line x1="135" y1="200" x2="124" y2="205" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
      <line x1="135" y1="200" x2="146" y2="205" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />

      {/* 3. Main Round Bird Body & Head */}
      <ellipse
        cx="120"
        cy="125"
        rx="62"
        ry="58"
        fill={getF(parts, 'body', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4.5"
        className={cc}
        onClick={() => interactive && onPartClick?.('body')}
      />

      {/* 4. Cute Feather Crest on Top */}
      <path
        d="M 98 72 Q 105 45 115 50 Q 110 65 108 72"
        fill={getF(parts, 'body', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M 112 70 Q 125 48 132 55 Q 125 68 122 72"
        fill={getF(parts, 'body', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* 5. Soft Light Colored Belly / Breast */}
      <path
        d="M 70 120 C 65 145 80 178 125 178 C 95 170 82 145 88 120 Z"
        fill={getF(parts, 'belly', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="3.5"
        className={cc}
        onClick={() => interactive && onPartClick?.('belly')}
      />

      {/* 6. Wing with Cute Feathers */}
      <path
        d="M 115 105 C 150 100 175 125 160 155 C 145 165 120 155 110 135 C 105 120 108 108 115 105 Z"
        fill={getF(parts, 'wings', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4"
        className={cc}
        onClick={() => interactive && onPartClick?.('wings')}
      />

      {/* 7. Cute Beak */}
      <polygon
        points="65,110 25,122 65,134"
        fill={getF(parts, 'beak', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('beak')}
      />

      {/* 8. Big Sparkling Bird Eye */}
      <circle cx="85" cy="104" r="10" fill="#1E293B" />
      <circle cx="82" cy="100" r="3.5" fill="#FFFFFF" />
      <circle cx="88" cy="106" r="1.5" fill="#FFFFFF" />

      {/* 9. Rosy Cheek */}
      <ellipse
        cx="88"
        cy="124"
        rx="8"
        ry="5"
        fill={getF(parts, 'cheeks', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="2.5"
        className={cc}
        onClick={() => interactive && onPartClick?.('cheeks')}
      />
    </g>
  );
};

// 21. 🍎 APPLE
export const AppleColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <rect x="115" y="25" width="10" height="35" rx="4" fill={getF(parts, 'stem', '#CBD5E1')} stroke="#1E293B" strokeWidth="3" className={cc} onClick={() => interactive && onPartClick?.('stem')} />
      <ellipse cx="145" cy="38" rx="22" ry="12" fill={getF(parts, 'leaf', '#CBD5E1')} stroke="#1E293B" strokeWidth="3" transform="rotate(-20, 145, 38)" className={cc} onClick={() => interactive && onPartClick?.('leaf')} />
      <path d="M 120 65 C 70 50 35 90 35 140 C 35 195 85 215 120 200 C 155 215 205 195 205 140 C 205 90 170 50 120 65 Z" fill={getF(parts, 'body', '#F1F5F9')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      <circle cx="95" cy="130" r="6" fill="#1E293B" />
      <circle cx="145" cy="130" r="6" fill="#1E293B" />
    </g>
  );
};

// 22. 🚂 TRAIN
export const TrainColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <rect x="40" y="85" width="95" height="75" rx="8" fill={getF(parts, 'body', '#F1F5F9')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      <rect x="135" y="55" width="75" height="105" rx="8" fill={getF(parts, 'cabin', '#CBD5E1')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('cabin')} />
      <rect x="150" y="70" width="45" height="35" rx="4" fill={getF(parts, 'window', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('window')} />
      <rect x="55" y="55" width="25" height="30" fill={getF(parts, 'chimney', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('chimney')} />
      <circle cx="65" cy="170" r="18" fill={getF(parts, 'wheels', '#475569')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('wheels')} />
      <circle cx="115" cy="170" r="18" fill={getF(parts, 'wheels', '#475569')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('wheels')} />
      <circle cx="175" cy="170" r="22" fill={getF(parts, 'wheels', '#475569')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('wheels')} />
    </g>
  );
};

// 23. 🐴 HORSE (Charming, cute pony/horse with flowing mane, blaze mark, perky ears & big sparkly eyes)
export const HorseColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* 1. Flowing Back Mane */}
      <g
        fill={getF(parts, 'mane', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('mane')}
      >
        <path d="M 68 75 C 45 95 40 135 48 165 C 58 150 68 155 72 170 C 65 140 70 115 80 95 Z" />
        <path d="M 52 140 C 35 158 35 185 45 205 C 55 190 65 195 68 205 C 60 180 62 160 70 145 Z" />
      </g>

      {/* 2. Horse Body / Neck */}
      <path
        d="M 75 90 C 70 130 65 175 75 205 L 155 205 C 150 175 138 145 125 125 Z"
        fill={getF(parts, 'body', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4.5"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('body')}
      />

      {/* 3. Left Ear */}
      <path
        d="M 85 70 L 80 25 C 90 28 105 45 102 70 Z"
        fill={getF(parts, 'ears', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('ears')}
      />
      <path d="M 86 58 L 84 36 C 89 38 97 48 96 60 Z" fill={getF(parts, 'earsInner', '#FFFFFF')} stroke="#1E293B" strokeWidth="2.5" className={cc} onClick={() => interactive && onPartClick?.('earsInner')} />

      {/* 4. Right Ear */}
      <path
        d="M 125 70 L 132 25 C 122 28 108 45 110 70 Z"
        fill={getF(parts, 'ears', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('ears')}
      />
      <path d="M 124 58 L 128 36 C 123 38 115 48 116 60 Z" fill={getF(parts, 'earsInner', '#FFFFFF')} stroke="#1E293B" strokeWidth="2.5" className={cc} onClick={() => interactive && onPartClick?.('earsInner')} />

      {/* 5. Forelock / Front Mane */}
      <path
        d="M 95 55 C 90 35 115 35 110 55 C 120 40 130 50 120 68 C 110 65 105 65 95 55 Z"
        fill={getF(parts, 'mane', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="3.5"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('mane')}
      />

      {/* 6. Main Head Shape */}
      <path
        d="M 80 75 C 75 105 80 135 90 145 C 98 155 105 170 105 185 C 105 195 135 195 135 185 C 135 170 142 155 150 145 C 160 135 165 105 160 75 C 150 65 90 65 80 75 Z"
        fill={getF(parts, 'head', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4.5"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('head')}
      />

      {/* 7. Cute White Blaze Mark on Forehead */}
      <path
        d="M 115 70 C 110 85 112 105 108 125 C 114 125 126 125 132 125 C 128 105 130 85 125 70 Z"
        fill={getF(parts, 'blaze', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="2.5"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('blaze')}
      />

      {/* 8. Rosy Cheeks */}
      <ellipse cx="86" cy="132" rx="9" ry="6" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="2.5" className={cc} onClick={() => interactive && onPartClick?.('cheeks')} />
      <ellipse cx="154" cy="132" rx="9" ry="6" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="2.5" className={cc} onClick={() => interactive && onPartClick?.('cheeks')} />

      {/* 9. Big Friendly Sparkling Eyes */}
      <g>
        <ellipse cx="98" cy="108" rx="8.5" ry="11" fill="#1E293B" />
        <circle cx="95" cy="104" r="3.5" fill="#FFFFFF" />
        <circle cx="101" cy="111" r="1.5" fill="#FFFFFF" />
      </g>
      <g>
        <ellipse cx="142" cy="108" rx="8.5" ry="11" fill="#1E293B" />
        <circle cx="139" cy="104" r="3.5" fill="#FFFFFF" />
        <circle cx="145" cy="111" r="1.5" fill="#FFFFFF" />
      </g>

      {/* 10. Cute Horse Muzzle / Snout */}
      <ellipse
        cx="120"
        cy="172"
        rx="28"
        ry="20"
        fill={getF(parts, 'snout', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4"
        className={cc}
        onClick={() => interactive && onPartClick?.('snout')}
      />

      {/* 11. Nostrils & Happy Smile */}
      <ellipse cx="108" cy="168" rx="3.5" ry="5" fill="#1E293B" />
      <ellipse cx="132" cy="168" rx="3.5" ry="5" fill="#1E293B" />
      <path d="M 112 180 Q 120 187 128 180" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
    </g>
  );
};

// 24. ☁️ CLOUD
export const CloudColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <path d="M 65 145 C 35 145 25 110 55 95 C 45 55 95 45 120 70 C 145 45 195 55 185 95 C 215 110 205 145 175 145 Z" fill={getF(parts, 'cloud', '#F1F5F9')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('cloud')} />
      <circle cx="95" cy="110" r="6" fill="#1E293B" />
      <circle cx="145" cy="110" r="6" fill="#1E293B" />
      <circle cx="70" cy="175" r="7" fill={getF(parts, 'drops', '#CBD5E1')} />
      <circle cx="120" cy="175" r="7" fill={getF(parts, 'drops', '#CBD5E1')} />
      <circle cx="170" cy="175" r="7" fill={getF(parts, 'drops', '#CBD5E1')} />
    </g>
  );
};

// 25. 🏠 HOUSE
export const HouseColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <rect x="155" y="45" width="20" height="40" fill={getF(parts, 'chimney', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('chimney')} />
      <polygon points="120,40 25,110 215,110" fill={getF(parts, 'roof', '#CBD5E1')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('roof')} />
      <rect x="45" y="110" width="150" height="90" fill={getF(parts, 'walls', '#F1F5F9')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('walls')} />
      <rect x="100" y="140" width="40" height="60" rx="4" fill={getF(parts, 'door', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('door')} />
      <rect x="60" y="130" width="25" height="25" rx="3" fill={getF(parts, 'windows', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" className={cc} onClick={() => interactive && onPartClick?.('windows')} />
      <rect x="155" y="130" width="25" height="25" rx="3" fill={getF(parts, 'windows', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" className={cc} onClick={() => interactive && onPartClick?.('windows')} />
    </g>
  );
};

// 26. 🦈 SHARK
export const SharkColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <polygon points="110,85 130,35 155,85" fill={getF(parts, 'fin', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('fin')} />
      <path d="M 30 130 Q 70 85 160 95 Q 215 110 215 140 Q 160 165 80 155 Z" fill={getF(parts, 'body', '#F1F5F9')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      <circle cx="65" cy="115" r="6" fill="#1E293B" />
      <polygon points="70,135 76,145 82,135 88,145 94,135" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2" />
    </g>
  );
};

// 27. 🐋 WHALE
export const WhaleColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <path d="M 110 50 Q 110 25 95 30 M 110 50 Q 120 20 130 30" fill="none" stroke={getF(parts, 'spout', '#CBD5E1')} strokeWidth="5" strokeLinecap="round" className={cc} onClick={() => interactive && onPartClick?.('spout')} />
      <path d="M 40 120 Q 50 65 130 65 Q 190 65 210 110 Q 230 90 235 125 Q 200 135 170 145 Q 120 175 40 120 Z" fill={getF(parts, 'body', '#F1F5F9')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      <ellipse cx="120" cy="135" rx="25" ry="12" fill={getF(parts, 'flippers', '#CBD5E1')} stroke="#1E293B" strokeWidth="3" className={cc} onClick={() => interactive && onPartClick?.('flippers')} />
      <circle cx="75" cy="105" r="6" fill="#1E293B" />
    </g>
  );
};

// 28. 🐼 PANDA
export const PandaColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* Ears */}
      <circle cx="65" cy="72" r="25" fill={getF(parts, 'ears', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('ears')} />
      <circle cx="175" cy="72" r="25" fill={getF(parts, 'ears', '#FFFFFF')} stroke="#1E293B" strokeWidth="4.5" className={cc} onClick={() => interactive && onPartClick?.('ears')} />
      
      {/* Head / Face */}
      <circle cx="120" cy="120" r="62" fill={getF(parts, 'face', '#FFFFFF')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('face')} />
      
      {/* 🌟 Panda Eye Rings / Patches (Göz Halkaları / Lekeleri) */}
      <ellipse
        cx="88"
        cy="114"
        rx="16"
        ry="20"
        fill={getF(parts, 'eyePatches', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="3.5"
        transform="rotate(-15, 88, 114)"
        className={cc}
        onClick={() => interactive && onPartClick?.('eyePatches')}
      />
      <ellipse
        cx="152"
        cy="114"
        rx="16"
        ry="20"
        fill={getF(parts, 'eyePatches', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="3.5"
        transform="rotate(15, 152, 114)"
        className={cc}
        onClick={() => interactive && onPartClick?.('eyePatches')}
      />

      {/* Inner Eyes & Pupils */}
      <circle cx="89" cy="114" r="7" fill={getF(parts, 'eyes', '#FFFFFF')} stroke="#1E293B" strokeWidth="2.5" className={cc} onClick={() => interactive && onPartClick?.('eyes')} />
      <circle cx="89" cy="114" r="3.5" fill="#1E293B" />
      <circle cx="87" cy="112" r="1.5" fill="white" />

      <circle cx="151" cy="114" r="7" fill={getF(parts, 'eyes', '#FFFFFF')} stroke="#1E293B" strokeWidth="2.5" className={cc} onClick={() => interactive && onPartClick?.('eyes')} />
      <circle cx="151" cy="114" r="3.5" fill="#1E293B" />
      <circle cx="149" cy="112" r="1.5" fill="white" />

      {/* Nose & Mouth */}
      <ellipse cx="120" cy="136" rx="11" ry="8" fill={getF(parts, 'nose', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" className={cc} onClick={() => interactive && onPartClick?.('nose')} />
      <path d="M 120 144 L 120 148" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
      <path d="M 112 148 Q 120 155 128 148" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Cheeks */}
      <ellipse cx="68" cy="136" rx="8" ry="5.5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" className={cc} onClick={() => interactive && onPartClick?.('cheeks')} />
      <ellipse cx="172" cy="136" rx="8" ry="5.5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" className={cc} onClick={() => interactive && onPartClick?.('cheeks')} />
    </g>
  );
};

// 29. 🐯 TIGER
export const TigerColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <circle cx="65" cy="75" r="22" fill={getF(parts, 'ears', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('ears')} />
      <circle cx="175" cy="75" r="22" fill={getF(parts, 'ears', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('ears')} />
      <circle cx="120" cy="120" r="62" fill={getF(parts, 'head', '#F1F5F9')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('head')} />
      <path d="M 65 110 L 85 115 L 65 125 M 175 110 L 155 115 L 175 125 M 120 65 L 115 85 L 125 85 Z" fill="none" stroke={getF(parts, 'stripes', '#1E293B')} strokeWidth="5" strokeLinecap="round" className={cc} onClick={() => interactive && onPartClick?.('stripes')} />
      <ellipse cx="120" cy="140" rx="26" ry="18" fill={getF(parts, 'snout', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" />
      <circle cx="92" cy="110" r="6" fill="#1E293B" />
      <circle cx="148" cy="110" r="6" fill="#1E293B" />
      <polygon points="113,132 127,132 120,140" fill="#1E293B" />
    </g>
  );
};

// 30. 🦓 ZEBRA (Cute cartoon zebra with perky ears, spiky mane, bold stripes & friendly eyes)
export const ZebraColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* 1. Spiky Mohawk Mane */}
      <path
        d="M 65 60 C 55 75, 45 110, 52 145 C 58 135, 68 130, 72 140 C 65 115, 70 95, 80 80 Z"
        fill={getF(parts, 'mane', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('mane')}
      />
      <path
        d="M 54 135 C 40 155, 40 178, 50 195 C 60 180, 68 185, 70 195 C 62 170, 65 150, 72 138 Z"
        fill={getF(parts, 'mane', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('mane')}
      />

      {/* 2. Neck & Body */}
      <path
        d="M 75 90 C 70 130 65 175 75 205 L 155 205 C 150 175 138 145 125 125 Z"
        fill={getF(parts, 'body', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4.5"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('body')}
      />

      {/* 3. Neck Stripes */}
      <path
        d="M 72 140 Q 95 142 112 135 M 70 165 Q 100 168 125 155 M 74 190 Q 110 192 140 178"
        stroke={getF(parts, 'stripes', '#1E293B')}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        className={cc}
        onClick={() => interactive && onPartClick?.('stripes')}
      />

      {/* 4. Left Ear */}
      <path
        d="M 85 70 L 80 25 C 90 28 105 45 102 70 Z"
        fill={getF(parts, 'ears', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('ears')}
      />
      <path d="M 86 58 L 84 36 C 89 38 97 48 96 60 Z" fill={getF(parts, 'earsInner', '#FFFFFF')} stroke="#1E293B" strokeWidth="2.5" className={cc} onClick={() => interactive && onPartClick?.('earsInner')} />

      {/* 5. Right Ear */}
      <path
        d="M 125 70 L 132 25 C 122 28 108 45 110 70 Z"
        fill={getF(parts, 'ears', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('ears')}
      />
      <path d="M 124 58 L 128 36 C 123 38 115 48 116 60 Z" fill={getF(parts, 'earsInner', '#FFFFFF')} stroke="#1E293B" strokeWidth="2.5" className={cc} onClick={() => interactive && onPartClick?.('earsInner')} />

      {/* 6. Zebra Head */}
      <path
        d="M 80 75 C 75 105 80 135 90 145 C 98 155 105 170 105 185 C 105 195 135 195 135 185 C 135 170 142 155 150 145 C 160 135 165 105 160 75 C 150 65 90 65 80 75 Z"
        fill={getF(parts, 'head', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4.5"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('head')}
      />

      {/* 7. Head & Cheek Stripes */}
      <g stroke={getF(parts, 'stripes', '#1E293B')} strokeWidth="5" strokeLinecap="round" fill="none" className={cc} onClick={() => interactive && onPartClick?.('stripes')}>
        <path d="M 82 92 Q 95 95 104 90" />
        <path d="M 158 92 Q 145 95 136 90" />
        <path d="M 84 118 Q 98 118 106 114" />
        <path d="M 156 118 Q 142 118 134 114" />
        <path d="M 115 72 L 125 72" />
        <path d="M 114 82 L 126 82" />
      </g>

      {/* 8. Big Friendly Eyes */}
      <g>
        <ellipse cx="98" cy="108" rx="8.5" ry="11" fill="#1E293B" />
        <circle cx="95" cy="104" r="3.5" fill="#FFFFFF" />
        <circle cx="101" cy="111" r="1.5" fill="#FFFFFF" />
      </g>
      <g>
        <ellipse cx="142" cy="108" rx="8.5" ry="11" fill="#1E293B" />
        <circle cx="139" cy="104" r="3.5" fill="#FFFFFF" />
        <circle cx="145" cy="111" r="1.5" fill="#FFFFFF" />
      </g>

      {/* 9. Rosy Cheeks */}
      <ellipse cx="86" cy="132" rx="8" ry="5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" className={cc} onClick={() => interactive && onPartClick?.('cheeks')} />
      <ellipse cx="154" cy="132" rx="8" ry="5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" className={cc} onClick={() => interactive && onPartClick?.('cheeks')} />

      {/* 10. Cute Snout */}
      <ellipse
        cx="120"
        cy="172"
        rx="28"
        ry="20"
        fill={getF(parts, 'snout', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4"
        className={cc}
        onClick={() => interactive && onPartClick?.('snout')}
      />
      <ellipse cx="108" cy="168" rx="3.5" ry="5" fill="#1E293B" />
      <ellipse cx="132" cy="168" rx="3.5" ry="5" fill="#1E293B" />
      <path d="M 112 180 Q 120 187 128 180" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
    </g>
  );
};

// 31. 🍌 BANANA (Half-peeled appetizing cartoon banana with peel curving down)
export const BananaColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* 1. Banana Flesh (Exposed Fruit at Top) */}
      <path
        d="M 105 130 C 100 80, 105 45, 120 30 C 135 45, 140 80, 135 130 Z"
        fill={getF(parts, 'fruit', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4.5"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('fruit')}
      />
      {/* Fruit Segments / Highlights */}
      <path d="M 120 40 L 120 125" stroke="#1E293B" strokeWidth="2.5" strokeDasharray="4 4" fill="none" />

      {/* 2. Left Peel Flap Curving Down */}
      <path
        d="M 105 125 C 95 110, 65 115, 52 145 C 50 160, 65 168, 78 152 C 92 135, 105 138, 106 148 Z"
        fill={getF(parts, 'peel', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('peel')}
      />

      {/* 3. Right Peel Flap Curving Down */}
      <path
        d="M 135 125 C 145 110, 175 115, 188 145 C 190 160, 175 168, 162 152 C 148 135, 135 138, 134 148 Z"
        fill={getF(parts, 'peel', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('peel')}
      />

      {/* 4. Front Peel Flap */}
      <path
        d="M 108 130 C 112 145, 114 165, 120 172 C 126 165, 128 145, 132 130 Z"
        fill={getF(parts, 'peel', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="3.5"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('peel')}
      />

      {/* 5. Lower Banana Body / Base */}
      <path
        d="M 104 142 C 102 175, 112 205, 124 218 L 132 214 C 138 200, 138 175, 136 142 Z"
        fill={getF(parts, 'peel', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4.5"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('peel')}
      />

      {/* 6. Bottom Stem */}
      <path
        d="M 124 218 L 122 232 L 130 230 L 132 214 Z"
        fill={getF(parts, 'stem', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="3.5"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('stem')}
      />
    </g>
  );
};

// 32. 🌸 FLOWER
export const FlowerColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <path d="M 120 120 L 120 205" stroke={getF(parts, 'stem', '#CBD5E1')} strokeWidth="8" strokeLinecap="round" className={cc} onClick={() => interactive && onPartClick?.('stem')} />
      <ellipse cx="145" cy="175" rx="22" ry="12" fill={getF(parts, 'leaves', '#CBD5E1')} stroke="#1E293B" strokeWidth="3" className={cc} onClick={() => interactive && onPartClick?.('leaves')} />
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <circle key={i} cx="120" cy="70" r="30" fill={getF(parts, 'petals', '#F1F5F9')} stroke="#1E293B" strokeWidth="4" transform={`rotate(${deg}, 120, 115)`} className={cc} onClick={() => interactive && onPartClick?.('petals')} />
      ))}
      <circle cx="120" cy="115" r="32" fill={getF(parts, 'center', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('center')} />
    </g>
  );
};

// 33. 🚀 ROCKET
export const RocketColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <polygon points="65,145 35,175 65,170" fill={getF(parts, 'fins', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('fins')} />
      <polygon points="175,145 205,175 175,170" fill={getF(parts, 'fins', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('fins')} />
      <path d="M 70 160 Q 70 70 120 30 Q 170 70 170 160 Z" fill={getF(parts, 'body', '#F1F5F9')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      <path d="M 90 70 Q 120 30 150 70 Z" fill={getF(parts, 'cone', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('cone')} />
      <circle cx="120" cy="110" r="18" fill={getF(parts, 'window', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('window')} />
      <polygon points="100,165 120,205 140,165" fill={getF(parts, 'fire', '#CBD5E1')} stroke="#1E293B" strokeWidth="3" className={cc} onClick={() => interactive && onPartClick?.('fire')} />
    </g>
  );
};

// 34. 🐵 MONKEY
export const MonkeyColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <circle cx="55" cy="110" r="28" fill={getF(parts, 'ears', '#CBD5E1')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('ears')} />
      <circle cx="185" cy="110" r="28" fill={getF(parts, 'ears', '#CBD5E1')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('ears')} />
      <circle cx="120" cy="120" r="62" fill={getF(parts, 'head', '#F1F5F9')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('head')} />
      <ellipse cx="120" cy="135" rx="45" ry="36" fill={getF(parts, 'face', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('face')} />
      <circle cx="100" cy="108" r="6" fill="#1E293B" />
      <circle cx="140" cy="108" r="6" fill="#1E293B" />
    </g>
  );
};

// 35. 🐰 RABBIT
export const RabbitColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <ellipse cx="80" cy="65" rx="16" ry="45" fill={getF(parts, 'ears', '#F1F5F9')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('ears')} />
      <ellipse cx="80" cy="65" rx="8" ry="32" fill={getF(parts, 'earsInner', '#CBD5E1')} />
      <ellipse cx="160" cy="65" rx="16" ry="45" fill={getF(parts, 'ears', '#F1F5F9')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('ears')} />
      <ellipse cx="160" cy="65" rx="8" ry="32" fill={getF(parts, 'earsInner', '#CBD5E1')} />
      <circle cx="120" cy="135" r="55" fill={getF(parts, 'head', '#FFFFFF')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('head')} />
      <circle cx="98" cy="125" r="6" fill="#1E293B" />
      <circle cx="142" cy="125" r="6" fill="#1E293B" />
      <polygon points="114,140 126,140 120,146" fill={getF(parts, 'nose', '#FB7185')} />
    </g>
  );
};

// 36. 🐢 TURTLE
export const TurtleColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <circle cx="50" cy="160" r="16" fill={getF(parts, 'legs', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('legs')} />
      <circle cx="170" cy="160" r="16" fill={getF(parts, 'legs', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('legs')} />
      <path d="M 50 155 Q 110 65 170 155 Z" fill={getF(parts, 'shell', '#F1F5F9')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('shell')} />
      <circle cx="190" cy="135" r="22" fill={getF(parts, 'head', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('head')} />
      <circle cx="195" cy="130" r="5" fill="#1E293B" />
    </g>
  );
};

// 37. 🎸 GUITAR
export const GuitarColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <rect x="112" y="30" width="16" height="90" fill={getF(parts, 'neck', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('neck')} />
      <path d="M 85 120 C 65 120 60 145 80 155 C 60 170 65 200 120 200 C 175 200 180 170 160 155 C 180 145 175 120 155 120 Z" fill={getF(parts, 'body', '#F1F5F9')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      <circle cx="120" cy="155" r="14" fill={getF(parts, 'soundhole', '#1E293B')} />
    </g>
  );
};

// 38. 🏰 CASTLE
export const CastleColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <rect x="40" y="80" width="40" height="110" fill={getF(parts, 'towers', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('towers')} />
      <polygon points="60,40 35,80 85,80" fill={getF(parts, 'roofs', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('roofs')} />
      <rect x="160" y="80" width="40" height="110" fill={getF(parts, 'towers', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('towers')} />
      <polygon points="180,40 155,80 205,80" fill={getF(parts, 'roofs', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('roofs')} />
      <rect x="80" y="110" width="80" height="80" fill={getF(parts, 'walls', '#F1F5F9')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('walls')} />
      <path d="M 105 190 L 105 155 Q 120 145 135 155 L 135 190 Z" fill={getF(parts, 'door', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('door')} />
    </g>
  );
};

// 39. 🍊 ORANGE
export const OrangeColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <ellipse cx="140" cy="50" rx="25" ry="14" fill={getF(parts, 'leaf', '#CBD5E1')} stroke="#1E293B" strokeWidth="3" className={cc} onClick={() => interactive && onPartClick?.('leaf')} />
      <circle cx="120" cy="130" r="70" fill={getF(parts, 'body', '#F1F5F9')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      <circle cx="95" cy="120" r="6" fill="#1E293B" />
      <circle cx="145" cy="120" r="6" fill="#1E293B" />
    </g>
  );
};

// 40. 🍒 CHERRY
export const CherryColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <path d="M 80 140 Q 110 60 130 50 Q 150 60 160 140" fill="none" stroke={getF(parts, 'stems', '#CBD5E1')} strokeWidth="6" strokeLinecap="round" className={cc} onClick={() => interactive && onPartClick?.('stems')} />
      <circle cx="80" cy="145" r="38" fill={getF(parts, 'cherry1', '#F1F5F9')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('cherry1')} />
      <circle cx="160" cy="145" r="38" fill={getF(parts, 'cherry2', '#CBD5E1')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('cherry2')} />
    </g>
  );
};

// 41. 🐧 PENGUIN
export const PenguinColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <ellipse cx="120" cy="130" rx="60" ry="70" fill={getF(parts, 'body', '#1E293B')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      <ellipse cx="120" cy="140" rx="38" ry="52" fill={getF(parts, 'belly', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('belly')} />
      <polygon points="112,118 128,118 120,132" fill={getF(parts, 'beak', '#CBD5E1')} stroke="#1E293B" strokeWidth="3" className={cc} onClick={() => interactive && onPartClick?.('beak')} />
      <circle cx="95" cy="105" r="6" fill="#1E293B" />
      <circle cx="145" cy="105" r="6" fill="#1E293B" />
    </g>
  );
};

// 42. 🐬 DOLPHIN (Joyful leaping cartoon dolphin with sleek body, dorsal fin, flippers & smile)
export const DolphinColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* 1. Tail Flukes */}
      <path
        d="M 45 160 C 25 145, 15 130, 22 120 C 35 125, 45 140, 52 150 C 58 140, 68 125, 80 120 C 88 130, 75 145, 55 160 Z"
        fill={getF(parts, 'tail', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('tail')}
      />

      {/* 2. Dorsal Fin */}
      <path
        d="M 125 78 C 135 45, 160 50, 165 70 C 155 75, 145 80, 138 85 Z"
        fill={getF(parts, 'fin', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('fin')}
      />

      {/* 3. Main Dolphin Body */}
      <path
        d="M 50 155 C 55 125, 85 85, 135 75 C 185 65, 215 90, 225 115 C 228 122, 222 128, 205 130 C 185 132, 175 125, 165 135 C 135 165, 95 175, 50 155 Z"
        fill={getF(parts, 'body', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4.5"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('body')}
      />

      {/* 4. White Underbelly */}
      <path
        d="M 75 156 C 115 165, 145 150, 165 135 C 180 125, 195 130, 205 130 C 180 145, 140 168, 75 156 Z"
        fill={getF(parts, 'belly', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="3.5"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('belly')}
      />

      {/* 5. Pectoral Flipper */}
      <path
        d="M 135 125 C 145 145, 150 165, 135 172 C 125 165, 128 145, 130 130 Z"
        fill={getF(parts, 'flipper', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="3.5"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('flipper')}
      />

      {/* 6. Sparkling Eye */}
      <circle cx="188" cy="105" r="7" fill="#1E293B" />
      <circle cx="186" cy="102" r="2.5" fill="#FFFFFF" />

      {/* 7. Cheerful Smile */}
      <path d="M 195 120 Q 205 126 215 120" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* 8. Rosy Cheek */}
      <ellipse cx="178" cy="116" rx="7" ry="5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" className={cc} onClick={() => interactive && onPartClick?.('cheeks')} />

      {/* 9. Water Splash Droplets */}
      <ellipse cx="50" cy="100" rx="5" ry="8" fill={getF(parts, 'splash', '#FFFFFF')} stroke="#1E293B" strokeWidth="2.5" className={cc} onClick={() => interactive && onPartClick?.('splash')} />
      <ellipse cx="75" cy="80" rx="4" ry="6" fill={getF(parts, 'splash', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" className={cc} onClick={() => interactive && onPartClick?.('splash')} />
    </g>
  );
};

// 43. 🌈 RAINBOW
export const RainbowColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <path d="M 30 170 A 90 90 0 0 1 210 170" fill="none" stroke={getF(parts, 'redArc', '#FFFFFF')} strokeWidth="14" className={cc} onClick={() => interactive && onPartClick?.('redArc')} />
      <path d="M 44 170 A 76 76 0 0 1 196 170" fill="none" stroke={getF(parts, 'orangeArc', '#FFFFFF')} strokeWidth="14" className={cc} onClick={() => interactive && onPartClick?.('orangeArc')} />
      <path d="M 58 170 A 62 62 0 0 1 182 170" fill="none" stroke={getF(parts, 'yellowArc', '#FFFFFF')} strokeWidth="14" className={cc} onClick={() => interactive && onPartClick?.('yellowArc')} />
      <path d="M 72 170 A 48 48 0 0 1 168 170" fill="none" stroke={getF(parts, 'greenArc', '#FFFFFF')} strokeWidth="14" className={cc} onClick={() => interactive && onPartClick?.('greenArc')} />
      <circle cx="35" cy="170" r="22" fill={getF(parts, 'clouds', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" />
      <circle cx="205" cy="170" r="22" fill={getF(parts, 'clouds', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" />
    </g>
  );
};

// 44. 🦒 GIRAFFE (Adorable tall cartoon giraffe with horns, ears, spots & smiling muzzle)
export const GiraffeColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* 1. Long Neck & Chest */}
      <path
        d="M 92 215 L 102 95 C 102 90, 138 90, 138 95 L 148 215 Z"
        fill={getF(parts, 'neck', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4.5"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('neck')}
      />

      {/* 2. Mane along back of neck */}
      <path
        d="M 138 100 L 148 105 L 140 115 L 150 125 L 142 135 L 152 145 L 144 155 L 154 165 L 146 175 L 156 185 L 148 195"
        stroke="#1E293B"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      {/* 3. Spots on Neck */}
      <g fill={getF(parts, 'spots', '#FFFFFF')} stroke="#1E293B" strokeWidth="3" className={cc} onClick={() => interactive && onPartClick?.('spots')}>
        <ellipse cx="120" cy="115" rx="12" ry="9" />
        <ellipse cx="116" cy="142" rx="14" ry="10" />
        <ellipse cx="124" cy="170" rx="15" ry="11" />
        <ellipse cx="118" cy="198" rx="16" ry="12" />
      </g>

      {/* 4. Cute Horns (Ossicones) */}
      <g fill={getF(parts, 'horns', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" className={cc} onClick={() => interactive && onPartClick?.('horns')}>
        <path d="M 105 60 L 102 38" />
        <circle cx="102" cy="35" r="7" />
        <path d="M 135 60 L 138 38" />
        <circle cx="138" cy="35" r="7" />
      </g>

      {/* 5. Sideways Perky Ears */}
      <path
        d="M 95 65 C 65 60, 60 75, 88 78 Z"
        fill={getF(parts, 'ears', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="3.5"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('ears')}
      />
      <path
        d="M 145 65 C 175 60, 180 75, 152 78 Z"
        fill={getF(parts, 'ears', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="3.5"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('ears')}
      />

      {/* 6. Giraffe Head */}
      <ellipse
        cx="120"
        cy="72"
        rx="32"
        ry="25"
        fill={getF(parts, 'head', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4"
        className={cc}
        onClick={() => interactive && onPartClick?.('head')}
      />

      {/* 7. Big Shiny Eyes */}
      <circle cx="105" cy="66" r="6.5" fill="#1E293B" />
      <circle cx="103" cy="64" r="2" fill="#FFFFFF" />
      <circle cx="135" cy="66" r="6.5" fill="#1E293B" />
      <circle cx="133" cy="64" r="2" fill="#FFFFFF" />

      {/* 8. Snout / Muzzle */}
      <ellipse
        cx="120"
        cy="88"
        rx="26"
        ry="18"
        fill={getF(parts, 'snout', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="3.5"
        className={cc}
        onClick={() => interactive && onPartClick?.('snout')}
      />
      <circle cx="112" cy="85" r="3" fill="#1E293B" />
      <circle cx="128" cy="85" r="3" fill="#1E293B" />
      <path d="M 114 94 Q 120 99 126 94" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* 9. Rosy Cheeks */}
      <circle cx="98" cy="78" r="5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" className={cc} onClick={() => interactive && onPartClick?.('cheeks')} />
      <circle cx="142" cy="78" r="5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" className={cc} onClick={() => interactive && onPartClick?.('cheeks')} />
    </g>
  );
};

// 45. ✈️ AIRPLANE
export const AirplaneColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <path d="M 30 120 Q 90 95 190 100 Q 220 115 220 125 Q 220 135 190 150 Q 90 155 30 130 Z" fill={getF(parts, 'body', '#FFFFFF')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('body')} />
      <polygon points="110,110 145,45 175,110" fill={getF(parts, 'wings', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('wings')} />
      <polygon points="110,140 145,205 175,140" fill={getF(parts, 'wings', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('wings')} />
      <polygon points="35,120 15,75 55,115" fill={getF(parts, 'tail', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('tail')} />
    </g>
  );
};

// 46. 🐘 ELEPHANT (Cute baby cartoon elephant with big floppy ears, curved upward trunk & little tusks)
export const ElephantColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* 1. Chubby Body */}
      <ellipse
        cx="120"
        cy="155"
        rx="68"
        ry="55"
        fill={getF(parts, 'body', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4.5"
        className={cc}
        onClick={() => interactive && onPartClick?.('body')}
      />

      {/* 2. Left Floppy Ear */}
      <path
        d="M 85 95 C 40 85, 30 135, 45 165 C 55 180, 75 175, 85 145 Z"
        fill={getF(parts, 'ears', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4.5"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('ears')}
      />
      <path
        d="M 82 105 C 55 100, 48 135, 58 155 C 65 165, 76 160, 82 140 Z"
        fill={getF(parts, 'earsInner', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="2.5"
        className={cc}
        onClick={() => interactive && onPartClick?.('earsInner')}
      />

      {/* 3. Right Floppy Ear */}
      <path
        d="M 155 95 C 200 85, 210 135, 195 165 C 185 180, 165 175, 155 145 Z"
        fill={getF(parts, 'ears', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4.5"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('ears')}
      />
      <path
        d="M 158 105 C 185 100, 192 135, 182 155 C 175 165, 164 160, 158 140 Z"
        fill={getF(parts, 'earsInner', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="2.5"
        className={cc}
        onClick={() => interactive && onPartClick?.('earsInner')}
      />

      {/* 4. Head */}
      <circle
        cx="120"
        cy="115"
        r="52"
        fill={getF(parts, 'head', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4.5"
        className={cc}
        onClick={() => interactive && onPartClick?.('head')}
      />

      {/* 5. Baby Tusks */}
      <path d="M 98 138 C 92 148, 88 155, 96 158 C 104 152, 102 142, 100 138 Z" fill={getF(parts, 'tusks', '#FFFFFF')} stroke="#1E293B" strokeWidth="2.5" className={cc} onClick={() => interactive && onPartClick?.('tusks')} />
      <path d="M 142 138 C 148 148, 152 155, 144 158 C 136 152, 138 142, 140 138 Z" fill={getF(parts, 'tusks', '#FFFFFF')} stroke="#1E293B" strokeWidth="2.5" className={cc} onClick={() => interactive && onPartClick?.('tusks')} />

      {/* 6. Curved Trunk (Curling upward for good luck) */}
      <path
        d="M 110 130 C 110 160, 115 178, 130 178 C 145 178, 152 165, 148 152 C 144 142, 134 145, 136 154 C 138 160, 132 165, 126 162 C 122 155, 122 145, 128 130 Z"
        fill={getF(parts, 'trunk', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('trunk')}
      />
      {/* Trunk wrinkle lines */}
      <line x1="114" y1="140" x2="124" y2="140" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
      <line x1="115" y1="148" x2="125" y2="148" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />

      {/* 7. Eyes */}
      <circle cx="102" cy="105" r="7" fill="#1E293B" />
      <circle cx="100" cy="103" r="2.5" fill="#FFFFFF" />
      <circle cx="138" cy="105" r="7" fill="#1E293B" />
      <circle cx="136" cy="103" r="2.5" fill="#FFFFFF" />

      {/* 8. Rosy Cheeks */}
      <ellipse cx="88" cy="120" rx="8" ry="5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" className={cc} onClick={() => interactive && onPartClick?.('cheeks')} />
      <ellipse cx="152" cy="120" rx="8" ry="5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" className={cc} onClick={() => interactive && onPartClick?.('cheeks')} />

      {/* 9. Feet Toes */}
      <circle cx="95" cy="205" r="14" fill={getF(parts, 'feet', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('feet')} />
      <circle cx="145" cy="205" r="14" fill={getF(parts, 'feet', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('feet')} />
    </g>
  );
};

// 47. 🦖 DINOSAUR (Cute baby cartoon dinosaur with friendly smile, little arms, chubby tail & spikes)
export const DinosaurColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      {/* 1. Tail */}
      <path
        d="M 85 165 C 55 175, 30 160, 22 135 C 32 145, 55 152, 85 145 Z"
        fill={getF(parts, 'tail', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('body')}
      />

      {/* 2. Dorsal Spikes down back and tail */}
      <g fill={getF(parts, 'spikes', '#FFFFFF')} stroke="#1E293B" strokeWidth="3.5" strokeLinejoin="round" className={cc} onClick={() => interactive && onPartClick?.('spikes')}>
        <polygon points="32,138 24,124 38,132" />
        <polygon points="50,146 45,130 58,142" />
        <polygon points="72,135 68,118 82,128" />
        <polygon points="98,90 92,72 108,82" />
        <polygon points="120,62 116,45 132,56" />
        <polygon points="146,55 146,38 158,52" />
      </g>

      {/* 3. Main Dino Body */}
      <path
        d="M 80 155 C 75 110, 95 65, 140 60 C 185 55, 205 75, 205 105 C 205 125, 185 135, 175 135 C 172 145, 168 175, 145 195 C 120 205, 85 195, 80 155 Z"
        fill={getF(parts, 'body', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="4.5"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('body')}
      />

      {/* 4. Cute Underbelly */}
      <path
        d="M 125 125 C 155 125, 168 145, 155 185 C 135 195, 115 185, 115 155 C 115 135, 120 128, 125 125 Z"
        fill={getF(parts, 'belly', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="3.5"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('belly')}
      />

      {/* 5. Little Dinosaur Arm */}
      <path
        d="M 152 135 C 165 138, 172 146, 166 152 C 158 154, 150 146, 148 140 Z"
        fill={getF(parts, 'arms', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="3"
        strokeLinejoin="round"
        className={cc}
        onClick={() => interactive && onPartClick?.('arms')}
      />

      {/* 6. Chubby Foot */}
      <path
        d="M 105 185 C 105 175, 125 175, 128 185 C 130 205, 95 208, 105 185 Z"
        fill={getF(parts, 'legs', '#FFFFFF')}
        stroke="#1E293B"
        strokeWidth="3.5"
        className={cc}
        onClick={() => interactive && onPartClick?.('legs')}
      />

      {/* 7. Big Friendly Sparkling Eye */}
      <circle cx="165" cy="85" r="9" fill="#1E293B" />
      <circle cx="162" cy="82" r="3.5" fill="#FFFFFF" />
      <circle cx="168" cy="88" r="1.5" fill="#FFFFFF" />

      {/* 8. Sweet Smile with tiny tooth */}
      <path d="M 175 115 Q 188 122 198 110" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
      <polygon points="184,116 188,122 192,117" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.5" />

      {/* 9. Rosy Cheek */}
      <ellipse cx="155" cy="105" rx="8" ry="5" fill={getF(parts, 'cheeks', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" className={cc} onClick={() => interactive && onPartClick?.('cheeks')} />

      {/* 10. Cute Spots */}
      <circle cx="108" cy="118" r="6" fill={getF(parts, 'spots', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" className={cc} onClick={() => interactive && onPartClick?.('spots')} />
      <circle cx="122" cy="100" r="4.5" fill={getF(parts, 'spots', '#FFFFFF')} stroke="#1E293B" strokeWidth="2" className={cc} onClick={() => interactive && onPartClick?.('spots')} />
    </g>
  );
};

// 48. 🦋 BUTTERFLY
export const ButterflyColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <path d="M 120 100 Q 60 40 40 85 Q 30 135 120 125" fill={getF(parts, 'topWings', '#F1F5F9')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('topWings')} />
      <path d="M 120 100 Q 180 40 200 85 Q 210 135 120 125" fill={getF(parts, 'topWings', '#F1F5F9')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('topWings')} />
      <path d="M 120 125 Q 70 140 60 180 Q 95 205 120 155" fill={getF(parts, 'bottomWings', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('bottomWings')} />
      <path d="M 120 125 Q 170 140 180 180 Q 145 205 120 155" fill={getF(parts, 'bottomWings', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('bottomWings')} />
      <ellipse cx="120" cy="130" rx="10" ry="38" fill={getF(parts, 'body', '#1E293B')} />
    </g>
  );
};

// 49. 👨‍🚀 ASTRONAUT
export const AstronautColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <rect x="75" y="145" width="90" height="60" rx="16" fill={getF(parts, 'suit', '#FFFFFF')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('suit')} />
      <circle cx="120" cy="100" r="50" fill={getF(parts, 'helmet', '#F1F5F9')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('helmet')} />
      <ellipse cx="120" cy="100" rx="34" ry="24" fill={getF(parts, 'visor', '#CBD5E1')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('visor')} />
      <circle cx="120" cy="165" r="8" fill={getF(parts, 'badge', '#EF4444')} />
    </g>
  );
};

// 50. 🍉 WATERMELON
export const WatermelonColorableSVG: React.FC<ArtworkProps> = ({ parts, onPartClick, interactive = true }) => {
  const cc = cursorClass(interactive);
  return (
    <g transform="translate(10, 10)">
      <path d="M 30 90 Q 120 215 210 90 Z" fill={getF(parts, 'rindGreen', '#CBD5E1')} stroke="#1E293B" strokeWidth="5" className={cc} onClick={() => interactive && onPartClick?.('rindGreen')} />
      <path d="M 42 90 Q 120 195 198 90 Z" fill={getF(parts, 'rindWhite', '#FFFFFF')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('rindWhite')} />
      <path d="M 52 90 Q 120 180 188 90 Z" fill={getF(parts, 'flesh', '#F1F5F9')} stroke="#1E293B" strokeWidth="4" className={cc} onClick={() => interactive && onPartClick?.('flesh')} />
      <circle cx="85" cy="115" r="4" fill="#1E293B" />
      <circle cx="120" cy="130" r="4" fill="#1E293B" />
      <circle cx="155" cy="115" r="4" fill="#1E293B" />
    </g>
  );
};

import {
  AntColorableSVG, BeeColorableSVG, CowColorableSVG, CapColorableSVG, EggColorableSVG,
  CubColorableSVG, BoxColorableSVG, BedColorableSVG, KeyColorableSVG, NutColorableSVG
} from './artworkMore1';
import {
  DeerColorableSVG, CrabColorableSVG, WolfColorableSVG, GoatColorableSVG, SealColorableSVG,
  PearColorableSVG, KiwiColorableSVG, RoseColorableSVG, BoatColorableSVG, BellColorableSVG
} from './artworkMore2';
import {
  LemonColorableSVG, MelonColorableSVG, CrownColorableSVG, SheepColorableSVG, SnakeColorableSVG,
  TruckColorableSVG, BreadColorableSVG, PizzaColorableSVG, GrapeColorableSVG, ChairColorableSVG
} from './artworkMore3';
import {
  ParrotColorableSVG, TomatoColorableSVG, CarrotColorableSVG, LizardColorableSVG, PigeonColorableSVG,
  OctopusColorableSVG, AvocadoColorableSVG, GorillaColorableSVG, HedgehogColorableSVG, FlamingoColorableSVG
} from './artworkMore4';
import {
  SandwichColorableSVG, CrocodileColorableSVG, UmbrellaColorableSVG, PeacockColorableSVG,
  SubmarineColorableSVG, HelicopterColorableSVG, StrawberryColorableSVG, PineappleColorableSVG,
  LocomotiveColorableSVG, FireworksColorableSVG
} from './artworkMore5';

// Master Artwork Router
export const RenderArtwork: React.FC<{
  wordId: string;
  parts: Record<string, string>;
  onPartClick?: (key: string) => void;
  interactive?: boolean;
}> = ({ wordId, parts, onPartClick, interactive = true }) => {
  switch (wordId) {
    case 'cat': return <CatColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'dog': return <DogColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'sun': return <SunColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'car': return <CarColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'bus': return <BusColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'fox': return <FoxColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'owl': return <OwlColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'pig': return <PigColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'bat': return <BatColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'cup': return <CupColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;

    case 'fish': return <FishColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'duck': return <DuckColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'star': return <StarColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'tree': return <TreeColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'frog': return <FrogColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'ship': return <ShipColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'moon': return <MoonColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'lion': return <LionColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'bear': return <BearColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'bird': return <BirdColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;

    case 'apple': return <AppleColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'train': return <TrainColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'horse': return <HorseColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'cloud': return <CloudColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'house': return <HouseColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'shark': return <SharkColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'whale': return <WhaleColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'panda': return <PandaColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'tiger': return <TigerColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'zebra': return <ZebraColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;

    case 'banana': return <BananaColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'flower': return <FlowerColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'rocket': return <RocketColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'monkey': return <MonkeyColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'rabbit': return <RabbitColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'turtle': return <TurtleColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'guitar': return <GuitarColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'castle': return <CastleColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'orange': return <OrangeColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'cherry': return <CherryColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;

    case 'penguin': return <PenguinColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'dolphin': return <DolphinColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'rainbow': return <RainbowColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'giraffe': return <GiraffeColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'airplane': return <AirplaneColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'elephant': return <ElephantColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'dinosaur': return <DinosaurColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'butterfly': return <ButterflyColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'astronaut': return <AstronautColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'watermelon': return <WatermelonColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;

    // --- 51-60 ---
    case 'ant': return <AntColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'bee': return <BeeColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'cow': return <CowColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'cap': return <CapColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'egg': return <EggColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'cub': return <CubColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'box': return <BoxColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'bed': return <BedColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'key': return <KeyColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'nut': return <NutColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;

    // --- 61-70 ---
    case 'deer': return <DeerColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'crab': return <CrabColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'wolf': return <WolfColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'goat': return <GoatColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'seal': return <SealColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'pear': return <PearColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'kiwi': return <KiwiColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'rose': return <RoseColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'boat': return <BoatColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'bell': return <BellColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;

    // --- 71-80 ---
    case 'lemon': return <LemonColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'melon': return <MelonColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'crown': return <CrownColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'sheep': return <SheepColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'snake': return <SnakeColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'truck': return <TruckColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'bread': return <BreadColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'pizza': return <PizzaColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'grape': return <GrapeColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'chair': return <ChairColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;

    // --- 81-90 ---
    case 'parrot': return <ParrotColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'tomato': return <TomatoColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'carrot': return <CarrotColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'lizard': return <LizardColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'pigeon': return <PigeonColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'octopus': return <OctopusColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'avocado': return <AvocadoColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'gorilla': return <GorillaColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'hedgehog': return <HedgehogColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'flamingo': return <FlamingoColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;

    // --- 91-100 ---
    case 'sandwich': return <SandwichColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'crocodile': return <CrocodileColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'umbrella': return <UmbrellaColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'peacock': return <PeacockColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'submarine': return <SubmarineColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'helicopter': return <HelicopterColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'strawberry': return <StrawberryColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'pineapple': return <PineappleColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'locomotive': return <LocomotiveColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
    case 'fireworks': return <FireworksColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;

    default: return <CatColorableSVG parts={parts} onPartClick={onPartClick} interactive={interactive} />;
  }
};
