import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Trophy, 
  ArrowLeft, 
  Play, 
  RotateCcw, 
  HelpCircle, 
  Star, 
  CheckCircle2, 
  Check, 
  Palette, 
  Puzzle as PuzzleIcon, 
  PaintBucket, 
  Eraser, 
  Eye, 
  Undo2, 
  Lightbulb, 
  Award, 
  ChevronLeft, 
  ChevronRight,
  Mic,
  Settings2,
  X,
  ZoomIn,
  ZoomOut,
  Maximize2
} from 'lucide-react';

import { WORDS_DATA, WordItem } from './wordsData';
import { RenderArtwork } from './artworkComponents';
import { PuzzleArtwork } from './PuzzleArtwork';

// ==========================================
// 1. TYPES & PALETTE
// ==========================================
export type CategoryType = 'all' | 'animals' | 'fruits' | 'vehicles' | 'nature' | 'objects';
export type DifficultyLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export const ALL_DIFFICULTY_LEVELS: DifficultyLevel[] = [1, 2, 3, 4, 5, 6, 7, 8];

export const DIFFICULTY_LABELS: Record<DifficultyLevel, string> = {
  1: '⭐ 1 (3 Harf)',
  2: '⭐⭐ 2 (4 Harf)',
  3: '⭐⭐⭐ 3 (5 Harf)',
  4: '⭐⭐⭐⭐ 4 (6 Harf)',
  5: '🌟 5 (7 Harf)',
  6: '🚀 6 (8 Harf)',
  7: '👑 7 (9 Harf)',
  8: '🏆 8 (10 Harf)',
};

export interface ColorOption {
  nameEn: string;
  nameTr: string;
  hex: string;
}

export const PALETTE_COLORS: ColorOption[] = [
  { nameEn: 'Red', nameTr: 'Kırmızı', hex: '#EF4444' },
  { nameEn: 'Orange', nameTr: 'Turuncu', hex: '#F97316' },
  { nameEn: 'Yellow', nameTr: 'Sarı', hex: '#FACC15' },
  { nameEn: 'Green', nameTr: 'Yeşil', hex: '#22C55E' },
  { nameEn: 'Sky Blue', nameTr: 'Açık Mavi', hex: '#38BDF8' },
  { nameEn: 'Blue', nameTr: 'Mavi', hex: '#3B82F6' },
  { nameEn: 'Purple', nameTr: 'Mor', hex: '#A855F7' },
  { nameEn: 'Pink', nameTr: 'Pembe', hex: '#EC4899' },
  { nameEn: 'Brown', nameTr: 'Kahverengi', hex: '#854D0E' },
  { nameEn: 'White', nameTr: 'Beyaz', hex: '#FFFFFF' },
  { nameEn: 'Gray', nameTr: 'Gri', hex: '#94A3B8' },
  { nameEn: 'Black', nameTr: 'Siyah', hex: '#1E293B' },
  { nameEn: 'Gold', nameTr: 'Altın', hex: '#FDE047' },
];

// ==========================================
// 2. AUDIO SERVICE (BUILT-IN SELECTABLE FEMALE VOICES & AUDIO ENGINE)
// ==========================================
export interface BuiltinFemaleVoice {
  id: string;
  name: string;
  displayName: string;
  avatar: string;
  desc: string;
  accent: 'US' | 'UK';
  lang: string;
  pitch: number;
  rate: number;
  isRecommended?: boolean;
  priorityKeywords: string[];
}

// Backwards compatibility alias
export type VoiceOptionInfo = BuiltinFemaleVoice;

export const BUILTIN_FEMALE_VOICES: BuiltinFemaleVoice[] = [
  {
    id: 'voice_emma',
    name: 'Emma',
    displayName: 'Emma (Öğretmen Sesi)',
    avatar: '👩‍🏫',
    desc: 'Sıcak, tane tane ve anlaşılır telaffuz',
    accent: 'US',
    lang: 'en-US',
    pitch: 1.15,
    rate: 0.82,
    isRecommended: true,
    priorityKeywords: ['google uk english female', 'jenny', 'samantha', 'aria', 'female']
  },
  {
    id: 'voice_olivia',
    name: 'Olivia',
    displayName: 'Olivia (Neşeli & Enerjik)',
    avatar: '🌟',
    desc: 'Canlı, neşeli ve motive edici ton',
    accent: 'US',
    lang: 'en-US',
    pitch: 1.25,
    rate: 0.88,
    isRecommended: true,
    priorityKeywords: ['aria', 'victoria', 'zoe', 'female']
  },
  {
    id: 'voice_sophia',
    name: 'Sophia',
    displayName: 'Sophia (Tatlı & Masalsı)',
    avatar: '🎀',
    desc: 'Yumuşak, sakin ve sevimli ton',
    accent: 'US',
    lang: 'en-US',
    pitch: 1.10,
    rate: 0.78,
    priorityKeywords: ['samantha', 'serena', 'allison', 'female']
  },
  {
    id: 'voice_lily',
    name: 'Lily',
    displayName: 'Lily (Çocuk Dostu)',
    avatar: '👧',
    desc: '2-5 yaş için özel, sevecen ve tatlı ton',
    accent: 'US',
    lang: 'en-US',
    pitch: 1.32,
    rate: 0.85,
    isRecommended: true,
    priorityKeywords: ['girl', 'ava', 'jenny', 'female']
  },
  {
    id: 'voice_ava',
    name: 'Ava',
    displayName: 'Ava (Kristal Netlik)',
    avatar: '💎',
    desc: 'Kusursuz ve berrak telaffuz',
    accent: 'US',
    lang: 'en-US',
    pitch: 1.18,
    rate: 0.84,
    priorityKeywords: ['ava', 'libby', 'fiona', 'female']
  },
  {
    id: 'voice_mia',
    name: 'Mia',
    displayName: 'Mia (İngiliz Aksanı)',
    avatar: '👑',
    desc: 'Zarif ve kibar British English aksanı',
    accent: 'UK',
    lang: 'en-GB',
    pitch: 1.20,
    rate: 0.80,
    priorityKeywords: ['google uk english female', 'libby', 'sonia', 'female']
  }
];

class SoundService {
  private soundEnabled: boolean = true;
  private audioCtx: AudioContext | null = null;
  private selectedVoiceId: string = 'voice_emma';
  private systemVoices: SpeechSynthesisVoice[] = [];
  private selectedTrVoice: SpeechSynthesisVoice | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      try {
        const savedId = localStorage.getItem('lp_selected_voice_id');
        if (savedId && BUILTIN_FEMALE_VOICES.some(v => v.id === savedId)) {
          this.selectedVoiceId = savedId;
        }
      } catch {
        // ignore
      }
      this.initVoices();
    }
  }

  private initVoices() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const updateVoices = () => {
      try {
        this.systemVoices = window.speechSynthesis.getVoices() || [];
        const trVoices = this.systemVoices.filter(v => v.lang.startsWith('tr'));
        this.selectedTrVoice = trVoices.find(v => {
          const n = v.name.toLowerCase();
          return n.includes('filiz') || n.includes('yelda') || n.includes('emel') || n.includes('female') || n.includes('google');
        }) || trVoices[0] || null;
      } catch {
        // ignore
      }
    };
    updateVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }
  }

  public getAvailableFemaleVoices(): BuiltinFemaleVoice[] {
    return BUILTIN_FEMALE_VOICES;
  }

  public getSelectedVoice(): BuiltinFemaleVoice {
    return BUILTIN_FEMALE_VOICES.find(v => v.id === this.selectedVoiceId) || BUILTIN_FEMALE_VOICES[0];
  }

  public getSelectedVoiceId(): string {
    return this.selectedVoiceId;
  }

  public getSelectedVoiceURI(): string {
    return this.selectedVoiceId;
  }

  public getSelectedVoiceName(): string {
    const voice = this.getSelectedVoice();
    return `${voice.name} ${voice.avatar}`;
  }

  public setFemaleVoice(voiceId: string) {
    if (BUILTIN_FEMALE_VOICES.some(v => v.id === voiceId)) {
      this.selectedVoiceId = voiceId;
      try {
        localStorage.setItem('lp_selected_voice_id', voiceId);
      } catch {
        // ignore
      }
    }
  }

  private findMatchingSystemVoice(voice: BuiltinFemaleVoice): SpeechSynthesisVoice | null {
    if (!this.systemVoices || this.systemVoices.length === 0) {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        this.systemVoices = window.speechSynthesis.getVoices() || [];
      }
    }
    const matchingLangVoices = this.systemVoices.filter(v => v.lang.toLowerCase().startsWith(voice.accent === 'UK' ? 'en-gb' : 'en'));
    for (const kw of voice.priorityKeywords) {
      const match = matchingLangVoices.find(v => v.name.toLowerCase().includes(kw));
      if (match) return match;
    }
    return matchingLangVoices.find(v => v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('woman')) || matchingLangVoices[0] || null;
  }

  private getAudioContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.audioCtx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) this.audioCtx = new AudioCtx();
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume().catch(() => {});
    }
    return this.audioCtx;
  }

  public setSoundEnabled(enabled: boolean) {
    this.soundEnabled = enabled;
  }

  public isSoundEnabled(): boolean {
    return this.soundEnabled;
  }

  public playSuccessTone() {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.18, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } catch {
      // fallback
    }
  }

  public playPaintSplash() {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(340, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(680, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.22, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch {
      // fallback
    }
  }

  public playPopTone() {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(660, ctx.currentTime + 0.06);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.06);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.06);
    } catch {
      // fallback
    }
  }

  public playWrongTone() {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch {
      // fallback
    }
  }

  public playHintTone() {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch {
      // fallback
    }
  }

  public playCelebrationTone() {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.value = freq;
        const startTime = ctx.currentTime + idx * 0.08;
        gain.gain.setValueAtTime(0.18, startTime);
        gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + 0.3);
      });
    } catch {
      // fallback
    }
  }

  public speakTestVoice(voiceId?: string, onEnd?: () => void) {
    if (!this.soundEnabled) {
      onEnd?.();
      return;
    }
    const voice = BUILTIN_FEMALE_VOICES.find(v => v.id === (voiceId || this.selectedVoiceId)) || this.getSelectedVoice();
    this.speakText('Hello! Apple, Lion, Rainbow! Great job!', 'en', voice, onEnd);
  }

  public speakWord(word: string, onEnd?: () => void) {
    if (!this.soundEnabled) {
      onEnd?.();
      return;
    }
    const voice = this.getSelectedVoice();
    this.speakText(word, 'en', voice, onEnd);
  }

  public speakTurkish(word: string, onEnd?: () => void) {
    if (!this.soundEnabled) {
      onEnd?.();
      return;
    }
    this.speakText(word, 'tr', this.getSelectedVoice(), onEnd);
  }

  public speakColor(en: string, tr: string) {
    this.speakWordPair(en, tr);
  }

  private speakText(text: string, lang: 'en' | 'tr', voice: BuiltinFemaleVoice, onEnd?: () => void) {
    let completed = false;
    const finish = () => {
      if (!completed) {
        completed = true;
        onEnd?.();
      }
    };

    const timer = setTimeout(() => {
      finish();
    }, 4500);

    const androidTTS = typeof window !== 'undefined' ? (window as unknown as { AndroidTTS?: { isAvailable?: () => boolean; isReady?: () => boolean; speak?: (t: string, l: string, r: number, p: number) => void } }).AndroidTTS : undefined;
    const isNativeReady = !!(androidTTS && typeof androidTTS.speak === 'function' && ((typeof androidTTS.isReady === 'function' && androidTTS.isReady()) || (typeof androidTTS.isAvailable === 'function' && androidTTS.isAvailable())));

    if (isNativeReady) {
      (window as unknown as { __onAndroidTTSEnd?: () => void }).__onAndroidTTSEnd = () => {
        clearTimeout(timer);
        (window as unknown as { __onAndroidTTSEnd?: () => void }).__onAndroidTTSEnd = undefined;
        finish();
      };
      const rate = lang === 'tr' ? 0.85 : voice.rate;
      const pitch = lang === 'tr' ? 1.05 : voice.pitch;
      androidTTS.speak!(text, lang, rate, pitch);
      return;
    }

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(text.toLowerCase());
        if (lang === 'tr') {
          if (this.selectedTrVoice) {
            utter.voice = this.selectedTrVoice;
            utter.lang = this.selectedTrVoice.lang;
          } else {
            utter.lang = 'tr-TR';
          }
          utter.rate = 0.85;
          utter.pitch = 1.05;
        } else {
          const matchedVoice = this.findMatchingSystemVoice(voice);
          if (matchedVoice) {
            utter.voice = matchedVoice;
            utter.lang = matchedVoice.lang;
          } else {
            utter.lang = voice.lang;
          }
          utter.rate = voice.rate;
          utter.pitch = voice.pitch;
        }
        utter.onend = () => {
          clearTimeout(timer);
          finish();
        };
        utter.onerror = () => {
          clearTimeout(timer);
          finish();
        };
        window.speechSynthesis.speak(utter);
        return;
      } catch {
        clearTimeout(timer);
        finish();
      }
    } else {
      clearTimeout(timer);
      finish();
    }
  }

  public speakWordPair(english: string, turkish: string, onEnd?: () => void) {
    if (!this.soundEnabled) {
      onEnd?.();
      return;
    }
    const voice = this.getSelectedVoice();
    let completed = false;
    const finish = () => {
      if (!completed) {
        completed = true;
        onEnd?.();
      }
    };

    const timer = setTimeout(() => {
      finish();
    }, 5500);

    const androidTTS = typeof window !== 'undefined' ? (window as unknown as { AndroidTTS?: { isAvailable?: () => boolean; isReady?: () => boolean; speakWordPair?: (e: string, t: string, r: number, p: number) => void } }).AndroidTTS : undefined;
    const isNativeReady = !!(androidTTS && typeof androidTTS.speakWordPair === 'function' && ((typeof androidTTS.isReady === 'function' && androidTTS.isReady()) || (typeof androidTTS.isAvailable === 'function' && androidTTS.isAvailable())));

    if (isNativeReady) {
      (window as unknown as { __onAndroidTTSEnd?: () => void }).__onAndroidTTSEnd = () => {
        clearTimeout(timer);
        (window as unknown as { __onAndroidTTSEnd?: () => void }).__onAndroidTTSEnd = undefined;
        finish();
      };
      androidTTS.speakWordPair!(english, turkish, voice.rate, voice.pitch);
      return;
    }

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
        const utterEn = new SpeechSynthesisUtterance(english.toLowerCase());
        const matchedVoice = this.findMatchingSystemVoice(voice);
        if (matchedVoice) {
          utterEn.voice = matchedVoice;
          utterEn.lang = matchedVoice.lang;
        } else {
          utterEn.lang = voice.lang;
        }
        utterEn.rate = voice.rate;
        utterEn.pitch = voice.pitch;

        utterEn.onend = () => {
          setTimeout(() => {
            try {
              const utterTr = new SpeechSynthesisUtterance(turkish.toLowerCase());
              if (this.selectedTrVoice) {
                utterTr.voice = this.selectedTrVoice;
                utterTr.lang = this.selectedTrVoice.lang;
              } else {
                utterTr.lang = 'tr-TR';
              }
              utterTr.rate = 0.85;
              utterTr.pitch = 1.05;
              utterTr.onend = () => {
                clearTimeout(timer);
                finish();
              };
              utterTr.onerror = () => {
                clearTimeout(timer);
                finish();
              };
              window.speechSynthesis.speak(utterTr);
            } catch {
              clearTimeout(timer);
              finish();
            }
          }, 200);
        };

        utterEn.onerror = () => {
          clearTimeout(timer);
          finish();
        };

        window.speechSynthesis.speak(utterEn);
        return;
      } catch {
        clearTimeout(timer);
        finish();
      }
    } else {
      clearTimeout(timer);
      finish();
    }
  }
}

const sound = new SoundService();

// ==========================================
// 3. COMMON SUB-COMPONENTS & THEMES
// ==========================================

export type ThemeId = 'honey' | 'pink' | 'blue' | 'nature' | 'purple' | 'peach' | 'night';

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  tag: string;
  icon: string;
  iconBg: string;
  dotColor: string;
  tagBg: string;
  tagText: string;
  tagBorder: string;
  bgGradient: string;
  accentBorder: string;
  accentRing: string;
  primaryBtn: string;
  badgeBg: string;
  badgeText: string;
  heroBg: string;
  navActiveBg: string;
  textColor: string;
  subTextColor: string;
}

export const APP_THEMES: ThemeConfig[] = [
  {
    id: 'honey',
    name: 'Güneş & Bal',
    tag: 'Varsayılan 🍯',
    icon: '☀️',
    iconBg: 'bg-amber-500 text-slate-950',
    dotColor: '#F59E0B',
    tagBg: 'bg-amber-100',
    tagText: 'text-amber-900',
    tagBorder: 'border-amber-300',
    bgGradient: 'bg-gradient-to-b from-amber-100 via-orange-50 to-yellow-100',
    accentBorder: 'border-amber-300',
    accentRing: 'ring-amber-400',
    primaryBtn: 'bg-amber-400 hover:bg-amber-500 text-slate-950 border-amber-600',
    badgeBg: 'bg-amber-200/90 text-amber-950 border-amber-300',
    badgeText: 'text-amber-600',
    heroBg: 'bg-gradient-to-tr from-amber-400 to-yellow-300',
    navActiveBg: 'bg-amber-500 text-white',
    textColor: 'text-slate-800',
    subTextColor: 'text-slate-600',
  },
  {
    id: 'pink',
    name: 'Masalsı Pembe',
    tag: 'Kızlar İçin Özel 🌸',
    icon: '🌸',
    iconBg: 'bg-pink-500 text-white',
    dotColor: '#EC4899',
    tagBg: 'bg-pink-100',
    tagText: 'text-pink-900',
    tagBorder: 'border-pink-300',
    bgGradient: 'bg-gradient-to-b from-pink-100 via-rose-50 to-fuchsia-100',
    accentBorder: 'border-pink-300',
    accentRing: 'ring-pink-400',
    primaryBtn: 'bg-pink-400 hover:bg-pink-500 text-white border-pink-600',
    badgeBg: 'bg-pink-200/90 text-pink-950 border-pink-300',
    badgeText: 'text-pink-600',
    heroBg: 'bg-gradient-to-tr from-pink-400 to-rose-300',
    navActiveBg: 'bg-pink-500 text-white',
    textColor: 'text-slate-800',
    subTextColor: 'text-slate-600',
  },
  {
    id: 'blue',
    name: 'Gökyüzü Mavi',
    tag: 'Erkekler için Özel 🚀',
    icon: '🚀',
    iconBg: 'bg-sky-500 text-white',
    dotColor: '#0EA5E9',
    tagBg: 'bg-sky-100',
    tagText: 'text-sky-900',
    tagBorder: 'border-sky-300',
    bgGradient: 'bg-gradient-to-b from-sky-100 via-blue-50 to-cyan-100',
    accentBorder: 'border-sky-300',
    accentRing: 'ring-sky-400',
    primaryBtn: 'bg-sky-400 hover:bg-sky-500 text-white border-sky-600',
    badgeBg: 'bg-sky-200/90 text-sky-950 border-sky-300',
    badgeText: 'text-sky-600',
    heroBg: 'bg-gradient-to-tr from-sky-400 to-cyan-300',
    navActiveBg: 'bg-sky-500 text-white',
    textColor: 'text-slate-800',
    subTextColor: 'text-slate-600',
  },
  {
    id: 'nature',
    name: 'Zümrüt Doğa',
    tag: 'Doğa & Macera 🍀',
    icon: '🍀',
    iconBg: 'bg-emerald-500 text-white',
    dotColor: '#10B981',
    tagBg: 'bg-emerald-100',
    tagText: 'text-emerald-900',
    tagBorder: 'border-emerald-300',
    bgGradient: 'bg-gradient-to-b from-emerald-100 via-green-50 to-teal-100',
    accentBorder: 'border-emerald-300',
    accentRing: 'ring-emerald-400',
    primaryBtn: 'bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-700',
    badgeBg: 'bg-emerald-200/90 text-emerald-950 border-emerald-300',
    badgeText: 'text-emerald-600',
    heroBg: 'bg-gradient-to-tr from-emerald-400 to-teal-300',
    navActiveBg: 'bg-emerald-500 text-white',
    textColor: 'text-slate-800',
    subTextColor: 'text-slate-600',
  },
  {
    id: 'purple',
    name: 'Sihirli Mor',
    tag: 'Lavanta & Büyü 🔮',
    icon: '🔮',
    iconBg: 'bg-purple-500 text-white',
    dotColor: '#A855F7',
    tagBg: 'bg-purple-100',
    tagText: 'text-purple-900',
    tagBorder: 'border-purple-300',
    bgGradient: 'bg-gradient-to-b from-purple-100 via-violet-50 to-fuchsia-100',
    accentBorder: 'border-purple-300',
    accentRing: 'ring-purple-400',
    primaryBtn: 'bg-purple-500 hover:bg-purple-600 text-white border-purple-700',
    badgeBg: 'bg-purple-200/90 text-purple-950 border-purple-300',
    badgeText: 'text-purple-600',
    heroBg: 'bg-gradient-to-tr from-purple-500 to-fuchsia-400',
    navActiveBg: 'bg-purple-500 text-white',
    textColor: 'text-slate-800',
    subTextColor: 'text-slate-600',
  },
  {
    id: 'peach',
    name: 'Tatlı Şeftali',
    tag: 'Mercan & Enerji 🍑',
    icon: '🍑',
    iconBg: 'bg-orange-500 text-white',
    dotColor: '#F97316',
    tagBg: 'bg-orange-100',
    tagText: 'text-orange-900',
    tagBorder: 'border-orange-300',
    bgGradient: 'bg-gradient-to-b from-orange-100 via-rose-50 to-amber-100',
    accentBorder: 'border-orange-300',
    accentRing: 'ring-orange-400',
    primaryBtn: 'bg-orange-400 hover:bg-orange-500 text-white border-orange-600',
    badgeBg: 'bg-orange-200/90 text-orange-950 border-orange-300',
    badgeText: 'text-orange-600',
    heroBg: 'bg-gradient-to-tr from-orange-400 to-amber-300',
    navActiveBg: 'bg-orange-500 text-white',
    textColor: 'text-slate-800',
    subTextColor: 'text-slate-600',
  },
  {
    id: 'night',
    name: 'Gece Macerası',
    tag: 'Uzay & Yıldızlar 🌙',
    icon: '🌙',
    iconBg: 'bg-indigo-700 text-amber-300',
    dotColor: '#6366F1',
    tagBg: 'bg-indigo-900/60',
    tagText: 'text-indigo-200',
    tagBorder: 'border-indigo-700',
    bgGradient: 'bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-950 text-slate-100',
    accentBorder: 'border-indigo-400',
    accentRing: 'ring-indigo-500',
    primaryBtn: 'bg-amber-400 hover:bg-amber-300 text-slate-950 border-amber-600',
    badgeBg: 'bg-indigo-900/90 text-indigo-100 border-indigo-700',
    badgeText: 'text-indigo-300',
    heroBg: 'bg-gradient-to-tr from-indigo-700 to-purple-800',
    navActiveBg: 'bg-indigo-600 text-white',
    textColor: 'text-slate-100',
    subTextColor: 'text-slate-300',
  },
];

const ThemeSelectButton: React.FC<{
  currentTheme: ThemeConfig;
  onClick: () => void;
}> = ({ currentTheme, onClick }) => (
  <button
    onClick={onClick}
    aria-label="Renk Teması Seç"
    title={`Renk Teması: ${currentTheme.name}`}
    className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white shadow-sm border-2 border-amber-300 flex items-center justify-center text-amber-900 active:scale-90 transition-transform hover:bg-amber-50 cursor-pointer text-lg sm:text-xl"
  >
    <span>{currentTheme.icon}</span>
  </button>
);

const ThemeSettingsModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  selectedThemeId: ThemeId;
  onSelectTheme: (id: ThemeId) => void;
}> = ({ isOpen, onClose, selectedThemeId, onSelectTheme }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 select-none">
      <div className="bg-white rounded-3xl sm:rounded-4xl p-5 sm:p-6 w-full max-w-md text-left shadow-2xl border-4 border-amber-300 relative overflow-hidden mx-auto flex flex-col max-h-[90vh]">
        {/* Modal Başlık */}
        <div className="flex items-center justify-between pb-3 border-b border-amber-200 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-xl">
              🎨
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                Renk Teması Seç
              </h2>
              <p className="text-xs font-bold text-amber-600">
                Oyunu dilediğin renkle süsle!
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-transform active:scale-90 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Temalar Listesi */}
        <div className="overflow-y-auto pr-1 flex-1 flex flex-col gap-2.5 my-3">
          {APP_THEMES.map((theme) => {
            const isSelected = selectedThemeId === theme.id;
            return (
              <div
                key={theme.id}
                onClick={() => {
                  onSelectTheme(theme.id);
                  sound.playPopTone();
                }}
                className={`p-3 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-2.5 ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-amber-400'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-amber-300 hover:bg-slate-50'
                }`}
              >
                {/* Sol İkon & İsim & Etiket */}
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0 ${theme.iconBg} shadow-sm`}>
                    {theme.icon}
                  </div>
                  <div className="min-w-0 flex items-center gap-2 flex-wrap">
                    <span className={`font-black text-sm sm:text-base truncate ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                      {theme.name}
                    </span>
                    <span className={`text-[10px] sm:text-[11px] font-extrabold px-2 py-0.5 rounded-full border shrink-0 ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950 border-amber-300'
                        : `${theme.tagBg} ${theme.tagText} ${theme.tagBorder}`
                    }`}>
                      {theme.tag}
                    </span>
                  </div>
                </div>

                {/* Sağ Seçim İndikatörü */}
                <div className="shrink-0 flex items-center justify-center">
                  {isSelected ? (
                    <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                      <Check className="w-4 h-4 stroke-[3.5]" />
                    </div>
                  ) : (
                    <div
                      className="w-4 h-4 rounded-full border-2 border-white shadow-xs"
                      style={{ backgroundColor: theme.dotColor }}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Alt Onay Butonu */}
        <div className="pt-2 border-t border-slate-100 shrink-0">
          <button
            onClick={onClose}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 active:scale-98 text-slate-950 font-black text-sm sm:text-base shadow-md border-b-4 border-amber-600 transition-all cursor-pointer text-center"
          >
            Tamamla & Devam Et
          </button>
        </div>
      </div>
    </div>
  );
};

const VoiceSelectButton: React.FC<{
  voiceName: string;
  onClick: () => void;
}> = ({ voiceName, onClick }) => (
  <button
    onClick={onClick}
    aria-label="İngilizce Kadın Sesi Seçimi"
    title={`Seslendirici: ${voiceName}`}
    className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white shadow-sm border-2 border-amber-300 flex items-center justify-center text-amber-900 active:scale-90 transition-transform hover:bg-amber-50 cursor-pointer text-lg sm:text-xl"
  >
    <span>👩</span>
  </button>
);

const VoiceSettingsModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onVoiceSelected: (name: string) => void;
}> = ({ isOpen, onClose, onVoiceSelected }) => {
  const [voices, setVoices] = useState<BuiltinFemaleVoice[]>([]);
  const [selectedVoiceId, setSelectedVoiceId] = useState<string>(sound.getSelectedVoiceId());
  const [isPlayingTest, setIsPlayingTest] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      const avail = sound.getAvailableFemaleVoices();
      setVoices(avail);
      setSelectedVoiceId(sound.getSelectedVoiceId());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSelect = (v: BuiltinFemaleVoice) => {
    sound.setFemaleVoice(v.id);
    setSelectedVoiceId(v.id);
    onVoiceSelected(sound.getSelectedVoiceName());
    sound.playPopTone();
    sound.speakTestVoice(v.id);
  };

  const handleTest = (v: BuiltinFemaleVoice, e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlayingTest(v.id);
    sound.speakTestVoice(v.id, () => {
      setIsPlayingTest(null);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 select-none">
      <div className="bg-white rounded-3xl sm:rounded-4xl p-5 sm:p-6 w-full max-w-md text-left shadow-2xl border-4 border-amber-300 relative overflow-hidden mx-auto flex flex-col max-h-[85vh]">
        {/* Başlık */}
        <div className="flex items-center justify-between pb-3 border-b border-amber-200 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-xl">
              👩
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                İngilizce Kadın Seslendirici
              </h2>
              <p className="text-xs font-bold text-amber-600">
                Kelimeleri okuyan kadın sesini seç
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-transform active:scale-90 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Bilgilendirme */}
        <div className="bg-amber-50/80 rounded-2xl p-2.5 my-3 border border-amber-200 text-xs font-bold text-amber-900 shrink-0 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
          <span>Her sesin yanındaki 🔊 butonuna basarak ses örneğini dinleyebilirsin.</span>
        </div>

        {/* Ses Listesi */}
        <div className="overflow-y-auto pr-1 flex-1 flex flex-col gap-2 my-1">
          {voices.map((v) => {
            const isSelected = selectedVoiceId === v.id;
            return (
              <div
                key={v.id}
                onClick={() => handleSelect(v)}
                className={`p-3 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-2 ${
                  isSelected
                    ? 'bg-amber-50 border-amber-400 ring-2 ring-amber-300 shadow-sm'
                    : 'bg-white border-slate-200 hover:border-amber-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 shrink-0 ${
                    isSelected ? 'bg-amber-500 border-amber-500 text-white' : 'border-slate-300 bg-white'
                  }`}>
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-base">{v.avatar}</span>
                      <span className="font-extrabold text-xs sm:text-sm text-slate-900 truncate">
                        {v.displayName}
                      </span>
                      <span className="bg-slate-100 text-slate-700 text-[10px] font-black px-1.5 py-0.2 rounded-md">
                        {v.accent}
                      </span>
                      {v.isRecommended && (
                        <span className="bg-amber-200 text-amber-950 text-[10px] font-black px-1.5 py-0.2 rounded-md">
                          Önerilen ⭐
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 block truncate">
                      {v.desc}
                    </span>
                  </div>
                </div>

                <button
                  onClick={(e) => handleTest(v, e)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1 shrink-0 transition-transform active:scale-90 border shadow-xs cursor-pointer ${
                    isPlayingTest === v.id
                      ? 'bg-amber-500 text-white border-amber-600 animate-pulse'
                      : 'bg-slate-100 hover:bg-amber-200 text-slate-800 border-slate-200'
                  }`}
                  title="Bu sesi dinle"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Dinle</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Kapat Butonu */}
        <div className="pt-3 border-t border-slate-100 shrink-0 mt-2">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 active:scale-98 text-slate-950 font-black text-sm sm:text-base shadow-md border-b-4 border-amber-600 transition-all cursor-pointer text-center"
          >
            Seçimi Kaydet & Devam Et ✨
          </button>
        </div>
      </div>
    </div>
  );
};

const SoundToggle: React.FC<{ soundOn: boolean; onToggle: () => void }> = ({ soundOn, onToggle }) => (
  <button
    onClick={onToggle}
    aria-label="Ses Ayarı"
    title={soundOn ? 'Sesi Kapat' : 'Sesi Aç'}
    className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white shadow-sm border-2 border-slate-200 flex items-center justify-center text-slate-700 active:scale-90 transition-transform hover:bg-slate-50 cursor-pointer"
  >
    {soundOn ? <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" /> : <VolumeX className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400" />}
  </button>
);

const ColorPaletteBar: React.FC<{
  selectedColor: string;
  onSelectColor: (color: ColorOption) => void;
}> = ({ selectedColor, onSelectColor }) => {
  const row1 = PALETTE_COLORS.slice(0, 7);
  const row2 = PALETTE_COLORS.slice(7);
  const activeColorObj = PALETTE_COLORS.find(c => c.hex.toLowerCase() === selectedColor.toLowerCase());

  return (
    <div className="w-full bg-white rounded-2xl p-2 sm:p-3 border-2 border-amber-200 shadow-sm text-center">
      <div className="flex items-center justify-between mb-1.5 px-2 text-center">
        <span className="text-xs sm:text-sm font-black text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
          <Palette className="w-4 h-4 text-amber-500" />
          <span>Boya Seç / Color:</span>
        </span>
        <span className="text-xs sm:text-sm font-black text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
          {activeColorObj ? `${activeColorObj.nameTr} (${activeColorObj.nameEn})` : ''}
        </span>
      </div>

      {/* 2 SATIRLI BÜYÜK RENK SEÇİM SIKALASI (2 Yaş İçin +%100 Büyütülmüş) */}
      <div className="flex flex-col gap-1.5 sm:gap-2 items-center justify-center">
        {/* 1. Satır: 7 Renk */}
        <div className="flex gap-2 sm:gap-3 items-center justify-center flex-wrap">
          {row1.map((c) => {
            const isSelected = c.hex.toLowerCase() === selectedColor.toLowerCase();
            return (
              <button
                key={c.hex}
                onClick={() => onSelectColor(c)}
                title={`${c.nameTr} (${c.nameEn})`}
                className={`w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-full flex-shrink-0 transition-all duration-150 cursor-pointer relative border-3 ${
                  isSelected 
                    ? 'scale-115 ring-4 ring-amber-400 ring-offset-2 shadow-lg border-white' 
                    : 'border-white/90 shadow-md hover:scale-105 active:scale-95'
                }`}
                style={{ backgroundColor: c.hex }}
              >
                {isSelected && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full shadow-xs ${c.hex === '#FFFFFF' || c.hex === '#FDE047' || c.hex === '#FACC15' ? 'bg-slate-900' : 'bg-white'}`} />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* 2. Satır: 6 Renk */}
        <div className="flex gap-2 sm:gap-3 items-center justify-center flex-wrap">
          {row2.map((c) => {
            const isSelected = c.hex.toLowerCase() === selectedColor.toLowerCase();
            return (
              <button
                key={c.hex}
                onClick={() => onSelectColor(c)}
                title={`${c.nameTr} (${c.nameEn})`}
                className={`w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-full flex-shrink-0 transition-all duration-150 cursor-pointer relative border-3 ${
                  isSelected 
                    ? 'scale-115 ring-4 ring-amber-400 ring-offset-2 shadow-lg border-white' 
                    : 'border-white/90 shadow-md hover:scale-105 active:scale-95'
                }`}
                style={{ backgroundColor: c.hex }}
              >
                {isSelected && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full shadow-xs ${c.hex === '#FFFFFF' || c.hex === '#FDE047' ? 'bg-slate-900' : 'bg-white'}`} />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const LetterButton: React.FC<{
  letter: string;
  onClick: () => void;
  isShaking: boolean;
  isHinted?: boolean;
  isFound?: boolean;
  sizeClass?: string;
}> = ({ letter, onClick, isShaking, isHinted, isFound, sizeClass }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full ${sizeClass || 'h-11 sm:h-13 md:h-15 text-xl sm:text-2xl md:text-3xl'} rounded-2xl border-b-3 sm:border-b-4 shadow-sm font-black flex items-center justify-center active:scale-95 active:translate-y-0.5 select-none touch-manipulation transition-transform cursor-pointer ${
        isShaking
          ? 'animate-wiggle bg-red-100 border-red-400 text-red-700'
          : isFound
          ? 'bg-amber-100 border-amber-500 text-amber-950 shadow-xs hover:bg-amber-200'
          : isHinted
          ? 'ring-4 ring-amber-400 ring-offset-1 animate-pulse bg-amber-50 border-amber-400 text-amber-900'
          : 'bg-white border-slate-300 text-slate-800 hover:border-amber-400 hover:bg-amber-50/60'
      }`}
    >
      {letter}
    </button>
  );
};

// ==========================================
// 4. COLORING STUDIO (KENDİN BOYA ATÖLYESİ)
// ==========================================
const ColoringStudio: React.FC<{
  onBack: () => void;
  onGoToGame: (word: WordItem) => void;
  initialWordId?: string;
}> = ({ onBack, onGoToGame, initialWordId }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [selectedWordIndex, setSelectedWordIndex] = useState<number>(() => {
    if (initialWordId) {
      const idx = WORDS_DATA.findIndex((w) => w.id === initialWordId);
      if (idx !== -1) return idx;
    }
    return 0;
  });
  const [selectedColor, setSelectedColor] = useState<string>(PALETTE_COLORS[0].hex);
  const [userColors, setUserColors] = useState<Record<string, Record<string, string>>>({});
  const [history, setHistory] = useState<Array<{ wordId: string; parts: Record<string, string> }>>([]);
  const [showOriginalGuide, setShowOriginalGuide] = useState<boolean>(false);
  const [toolMode, setToolMode] = useState<'bucket' | 'eraser'>('bucket');

  // 🔍 ZOOM & PAN STATE (İki parmakla yakınlaştırma & kaydırma)
  const [zoom, setZoom] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const currentWordBtnRef = useRef<HTMLButtonElement | null>(null);

  // Touch & Gesture Tracking Refs
  const isPinchingRef = useRef<boolean>(false);
  const isInteractingWithZoomRef = useRef<boolean>(false);
  const touchStartDistRef = useRef<number>(0);
  const touchStartZoomRef = useRef<number>(1);
  const touchStartMidRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const touchStartPanRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const singleTouchStartRef = useRef<{ x: number; y: number } | null>(null);
  const hasMovedRef = useRef<boolean>(false);

  // Belirli bir kelime ile geçiş yapıldığında (ör. oyunda DOG bilinip tıklandığında) doğrudan o kelimeye ve 'all' moduna geç
  useEffect(() => {
    if (initialWordId) {
      const idx = WORDS_DATA.findIndex((w) => w.id === initialWordId);
      if (idx !== -1) {
        setSelectedCategory('all');
        setSelectedWordIndex(idx);
      }
    }
  }, [initialWordId]);

  // Seçilen kelimeyi üst yatay şeritte otomatik olarak ortala
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentWordBtnRef.current) {
        currentWordBtnRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }, 80);
    return () => clearTimeout(timer);
  }, [selectedWordIndex, selectedCategory, initialWordId]);

  const filteredWords = useMemo(() => {
    return WORDS_DATA.filter((w) => selectedCategory === 'all' || w.category === selectedCategory);
  }, [selectedCategory]);

  const currentWord = filteredWords[selectedWordIndex] || filteredWords[0] || WORDS_DATA[0];
  const currentParts = userColors[currentWord.id] || {};

  // Kelime değiştiğinde zoom ve kaydırmayı sıfırla
  useEffect(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, [currentWord.id]);

  const handleZoomIn = () => {
    sound.playPopTone();
    setZoom(prev => Math.min(3.2, +(prev + 0.4).toFixed(2)));
  };

  const handleZoomOut = () => {
    sound.playPopTone();
    setZoom(prev => {
      const next = Math.max(1, +(prev - 0.4).toFixed(2));
      if (next <= 1.05) {
        setPan({ x: 0, y: 0 });
        return 1;
      }
      const maxPan = (next - 1) * 110;
      setPan(p => ({
        x: Math.max(-maxPan, Math.min(maxPan, p.x)),
        y: Math.max(-maxPan, Math.min(maxPan, p.y))
      }));
      return next;
    });
  };

  const handleResetZoom = () => {
    sound.playPopTone();
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      isPinchingRef.current = true;
      isInteractingWithZoomRef.current = true;
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      touchStartDistRef.current = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
      touchStartZoomRef.current = zoom;
      touchStartMidRef.current = {
        x: (t1.clientX + t2.clientX) / 2,
        y: (t1.clientY + t2.clientY) / 2
      };
      touchStartPanRef.current = { ...pan };
    } else if (e.touches.length === 1 && zoom > 1.05) {
      const t = e.touches[0];
      singleTouchStartRef.current = { x: t.clientX, y: t.clientY };
      touchStartPanRef.current = { ...pan };
      hasMovedRef.current = false;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && isPinchingRef.current) {
      if (e.cancelable) e.preventDefault();
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      const dist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
      if (touchStartDistRef.current > 0) {
        const factor = dist / touchStartDistRef.current;
        const newZoom = Math.min(3.2, Math.max(1, +(touchStartZoomRef.current * factor).toFixed(2)));

        const midX = (t1.clientX + t2.clientX) / 2;
        const midY = (t1.clientY + t2.clientY) / 2;
        const deltaX = midX - touchStartMidRef.current.x;
        const deltaY = midY - touchStartMidRef.current.y;

        const maxPan = (newZoom - 1) * 110;
        const newPanX = Math.max(-maxPan, Math.min(maxPan, touchStartPanRef.current.x + deltaX));
        const newPanY = Math.max(-maxPan, Math.min(maxPan, touchStartPanRef.current.y + deltaY));

        setZoom(newZoom);
        setPan({ x: newPanX, y: newPanY });
      }
    } else if (e.touches.length === 1 && singleTouchStartRef.current && zoom > 1.05) {
      const t = e.touches[0];
      const dx = t.clientX - singleTouchStartRef.current.x;
      const dy = t.clientY - singleTouchStartRef.current.y;
      if (Math.hypot(dx, dy) > 8) {
        hasMovedRef.current = true;
        isInteractingWithZoomRef.current = true;
        const maxPan = (zoom - 1) * 110;
        const newPanX = Math.max(-maxPan, Math.min(maxPan, touchStartPanRef.current.x + dx));
        const newPanY = Math.max(-maxPan, Math.min(maxPan, touchStartPanRef.current.y + dy));
        setPan({ x: newPanX, y: newPanY });
      }
    }
  };

  const handleTouchEnd = () => {
    isPinchingRef.current = false;
    singleTouchStartRef.current = null;
    if (isInteractingWithZoomRef.current) {
      setTimeout(() => {
        isInteractingWithZoomRef.current = false;
        hasMovedRef.current = false;
      }, 150);
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    const zoomDelta = e.deltaY < 0 ? 0.25 : -0.25;
    setZoom(prev => {
      const next = Math.min(3.2, Math.max(1, +(prev + zoomDelta).toFixed(2)));
      if (next <= 1.05) {
        setPan({ x: 0, y: 0 });
        return 1;
      }
      const maxPan = (next - 1) * 110;
      setPan(p => ({
        x: Math.max(-maxPan, Math.min(maxPan, p.x)),
        y: Math.max(-maxPan, Math.min(maxPan, p.y))
      }));
      return next;
    });
  };

  const handlePartColor = (partKey: string) => {
    if (isInteractingWithZoomRef.current || hasMovedRef.current) {
      return;
    }
    sound.playPaintSplash();
    setHistory(prev => [...prev, { wordId: currentWord.id, parts: { ...currentParts } }]);
    const newColor = toolMode === 'eraser' ? '#FFFFFF' : selectedColor;

    setUserColors(prev => ({
      ...prev,
      [currentWord.id]: {
        ...(prev[currentWord.id] || {}),
        [partKey]: newColor
      }
    }));
  };

  const handleSelectColor = (color: ColorOption) => {
    setSelectedColor(color.hex);
    if (toolMode === 'eraser') setToolMode('bucket');
    sound.playPopTone();
    sound.speakColor(color.nameEn, color.nameTr);
  };

  const handleUndo = () => {
    if (history.length === 0) return;
    const last = history[history.length - 1];
    setHistory(prev => prev.slice(0, -1));
    setUserColors(prev => ({
      ...prev,
      [last.wordId]: last.parts
    }));
    sound.playPopTone();
  };

  const handleReset = () => {
    sound.playPopTone();
    setUserColors(prev => ({
      ...prev,
      [currentWord.id]: {}
    }));
  };

  const handleMagicColor = () => {
    sound.playCelebrationTone();
    confetti({ particleCount: 45, spread: 70, origin: { y: 0.6 } });
    setUserColors(prev => ({
      ...prev,
      [currentWord.id]: { ...currentWord.defaultParts }
    }));
  };

  return (
    <div className="flex flex-col h-full max-h-[100dvh] w-full max-w-5xl mx-auto px-3 sm:px-6 py-2 sm:py-3 justify-between select-none overflow-hidden text-center">
      {/* Üst Bar */}
      <div className="flex items-center justify-between shrink-0 mb-1 w-full">
        <button
          onClick={onBack}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white shadow-sm border-2 border-slate-200 flex items-center justify-center text-slate-700 active:scale-90 hover:bg-slate-50 cursor-pointer"
          title="Ana Menüye Dön"
        >
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white font-black px-4 py-1.5 rounded-full text-xs sm:text-sm shadow-sm flex items-center justify-center gap-2 mx-auto">
          <Palette className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>BOYAMA ATÖLYESİ (100 ÇİZİM)</span>
        </div>

        <button
          onClick={() => setShowOriginalGuide(!showOriginalGuide)}
          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl border-2 shadow-sm flex items-center justify-center transition-all cursor-pointer ${
            showOriginalGuide ? 'bg-amber-400 border-amber-500 text-slate-900 ring-2 ring-amber-300' : 'bg-white border-slate-200 text-slate-700'
          }`}
          title="Orijinal Renk Rehberi"
        >
          <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Kategori Seçici */}
      <div className="flex gap-1.5 overflow-x-auto py-1 px-1 scrollbar-none items-center shrink-0 w-full justify-start sm:justify-center">
        {(['all', 'animals', 'fruits', 'vehicles', 'nature', 'objects'] as CategoryType[]).map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setSelectedWordIndex(0);
              sound.playPopTone();
            }}
            className={`px-3 py-1 sm:py-1.5 rounded-xl text-xs sm:text-sm font-black whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-slate-900 text-white shadow-sm scale-105'
                : 'bg-white text-slate-700 border-2 border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat === 'all' ? 'Tümü (100)' : cat === 'animals' ? 'Hayvanlar 🐾' : cat === 'fruits' ? 'Meyveler 🍎' : cat === 'vehicles' ? 'Araçlar 🚗' : cat === 'nature' ? 'Doğa 🌳' : 'Eşyalar 🏠'}
          </button>
        ))}
      </div>

      {/* Karakter / Kelime Seçici Şerit */}
      <div className="flex gap-2 overflow-x-auto py-1 px-1 scrollbar-none items-center shrink-0 w-full justify-start">
        {filteredWords.map((w, idx) => {
          const isCurrent = idx === selectedWordIndex;
          return (
            <button
              key={w.id}
              ref={isCurrent ? currentWordBtnRef : null}
              onClick={() => {
                setSelectedWordIndex(idx);
                sound.playPopTone();
                sound.speakWordPair(w.english, w.turkish);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-2xl font-black text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
                isCurrent 
                  ? 'bg-amber-400 text-slate-950 shadow-md scale-105 border-2 border-amber-600' 
                  : 'bg-white text-slate-700 border-2 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span className="text-base sm:text-lg">{w.emoji}</span>
              <span>{w.turkish}</span>
            </button>
          );
        })}
      </div>

      {/* 🌟 DENGELİ ÇİZİM / BOYAMA ALANI (%20 Küçültülmüş, Üst üste gelmeyen ergonomik alan) */}
      <div className="relative my-auto flex items-center justify-center shrink min-h-0 py-1 w-full text-center">
        {/* Önceki Nesne Oku */}
        <button
          onClick={() => {
            const prevIdx = selectedWordIndex > 0 ? selectedWordIndex - 1 : filteredWords.length - 1;
            setSelectedWordIndex(prevIdx);
            sound.playPopTone();
            sound.speakWordPair(filteredWords[prevIdx].english, filteredWords[prevIdx].turkish);
          }}
          className="w-10 h-10 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full bg-white hover:bg-amber-100 text-amber-950 border-2 sm:border-3 border-amber-300 shadow-md flex items-center justify-center cursor-pointer transition-all active:scale-90 shrink-0 mr-2 sm:mr-3"
          title="Önceki Çizim"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        {/* %20 Küçültülmüş Dengeli Çizim Tuvali (İki Parmakla Yakınlaştırma & Sürükleme) */}
        <div 
          className="relative w-auto h-56 sm:h-72 max-h-[34vh] sm:max-h-[38vh] aspect-square p-2.5 sm:p-3.5 bg-white rounded-3xl border-3 border-amber-300 shadow-lg flex items-center justify-center overflow-hidden touch-none select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
          onWheel={handleWheel}
        >
          {/* Zoomlanabilir ve Gezilebilir Çizim İçeriği */}
          <div
            className="w-full h-full flex items-center justify-center pointer-events-auto"
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              transformOrigin: 'center center',
              transition: isPinchingRef.current || hasMovedRef.current ? 'none' : 'transform 160ms ease-out'
            }}
          >
            <svg key={currentWord.id} viewBox="0 0 260 260" className="w-full h-full drop-shadow-md">
              <RenderArtwork
                wordId={currentWord.id}
                parts={showOriginalGuide ? currentWord.defaultParts : currentParts}
                onPartClick={handlePartColor}
                interactive={!showOriginalGuide}
              />
            </svg>
          </div>

          {/* Tuval Üzeri Zoom / Büyütme Kontrol Rozeti */}
          <div className="absolute top-2 right-2 z-20 flex items-center gap-1 bg-white/95 border-2 border-amber-300 shadow-md rounded-2xl p-1">
            <button
              onClick={handleZoomIn}
              disabled={zoom >= 3.2}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-amber-100 hover:bg-amber-200 active:scale-90 flex items-center justify-center text-amber-950 transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
              title="Büyüt (+)"
            >
              <ZoomIn className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </button>

            <button
              onClick={handleResetZoom}
              className={`px-1.5 py-0.5 rounded-lg text-[11px] sm:text-xs font-black transition-all cursor-pointer ${
                zoom > 1.05 ? 'bg-amber-400 text-slate-950 ring-1 ring-amber-500' : 'text-slate-500 hover:bg-slate-100'
              }`}
              title="Varsayılan Boyut (1x)"
            >
              {Math.round(zoom * 100)}%
            </button>

            <button
              onClick={handleZoomOut}
              disabled={zoom <= 1.05}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-90 flex items-center justify-center text-slate-800 transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
              title="Küçült (-)"
            >
              <ZoomOut className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </button>
          </div>

          {/* İpucu Rozetleri */}
          {zoom > 1.05 ? (
            <div className="absolute bottom-2.5 bg-amber-500 text-white font-extrabold text-[10px] sm:text-xs px-3 py-0.5 rounded-full shadow-md animate-fade-in flex items-center gap-1 pointer-events-none">
              <span>✌️ İki parmakla kaydır & boya</span>
            </div>
          ) : (
            !showOriginalGuide && Object.keys(currentParts).length === 0 && (
              <div className="absolute bottom-2.5 bg-amber-400 text-slate-950 font-black text-xs sm:text-sm px-3.5 py-0.5 rounded-full shadow-md animate-bounce pointer-events-none">
                👆 Rengine dokun, boya! (✌️ İki parmakla büyüt)
              </div>
            )
          )}
        </div>

        {/* Sonraki Nesne Oku */}
        <button
          onClick={() => {
            const nextIdx = (selectedWordIndex + 1) % filteredWords.length;
            setSelectedWordIndex(nextIdx);
            sound.playPopTone();
            sound.speakWordPair(filteredWords[nextIdx].english, filteredWords[nextIdx].turkish);
          }}
          className="w-10 h-10 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full bg-amber-400 hover:bg-amber-500 text-amber-950 border-2 sm:border-3 border-amber-600 shadow-md flex items-center justify-center cursor-pointer transition-all active:scale-90 shrink-0 ml-2 sm:mr-3"
          title="Sonraki Çizim"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </div>

      {/* Araç Çubuğu (2 Yaş İçin Büyük & Kolay Dokunmatik Butonlar) */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 my-1 shrink-0 mx-auto flex-wrap">
        <button
          onClick={() => setToolMode('bucket')}
          className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer ${
            toolMode === 'bucket' ? 'bg-amber-400 text-slate-950 ring-3 ring-amber-500 border-2 border-amber-600 scale-105' : 'bg-white text-slate-700 border-2 border-slate-200'
          }`}
        >
          <PaintBucket className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Boya Fırçası</span>
        </button>

        <button
          onClick={() => setToolMode('eraser')}
          className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer ${
            toolMode === 'eraser' ? 'bg-rose-500 text-white ring-3 ring-rose-600 border-2 border-rose-700 scale-105' : 'bg-white text-slate-700 border-2 border-slate-200'
          }`}
        >
          <Eraser className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Silgi</span>
        </button>

        <button
          onClick={handleUndo}
          disabled={history.length === 0}
          className={`px-3 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl border-2 bg-white text-slate-700 shadow-sm transition-all cursor-pointer flex items-center gap-1 font-bold text-xs sm:text-sm ${
            history.length === 0 ? 'opacity-40 cursor-not-allowed border-slate-200' : 'active:scale-95 hover:bg-slate-50 border-slate-300'
          }`}
          title="Geri Al"
        >
          <Undo2 className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Geri Al</span>
        </button>

        <button
          onClick={handleMagicColor}
          className="px-3 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl border-2 border-amber-400 bg-amber-100 text-amber-950 shadow-sm active:scale-95 hover:bg-amber-200 transition-all cursor-pointer flex items-center gap-1 font-black text-xs sm:text-sm"
          title="Sihirli Tam Boyama"
        >
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
          <span>Sihirli Boya ✨</span>
        </button>

        <button
          onClick={handleReset}
          className="px-3 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl border-2 border-slate-300 bg-slate-100 text-slate-700 shadow-sm active:scale-95 hover:bg-slate-200 transition-all cursor-pointer flex items-center gap-1 font-bold text-xs sm:text-sm"
          title="Temizle"
        >
          <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Temizle</span>
        </button>
      </div>

      {/* 🌟 2 SATIRLI JUMBO RENK PALETİ VE EYLEM BUTONLARI */}
      <div className="space-y-1.5 shrink-0 pb-1 w-full text-center">
        <ColorPaletteBar
          selectedColor={selectedColor}
          onSelectColor={handleSelectColor}
        />

        <div className="flex gap-2 sm:gap-4 justify-center">
          <button
            onClick={() => sound.speakWordPair(currentWord.english, currentWord.turkish)}
            className="flex-1 py-2.5 sm:py-3 rounded-2xl bg-white hover:bg-slate-50 active:scale-95 text-slate-900 font-black text-sm sm:text-base border-2 border-slate-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer text-center"
          >
            <Volume2 className="w-5 h-5 text-emerald-600" />
            <span>{currentWord.english} / {currentWord.turkish} (Dinle)</span>
          </button>

          <button
            onClick={() => onGoToGame(currentWord)}
            className="py-2.5 sm:py-3 px-5 sm:px-8 rounded-2xl bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-black text-sm sm:text-base shadow-md border-b-3 border-emerald-700 flex items-center justify-center gap-2 cursor-pointer text-center"
          >
            <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
            <span>Kelimeyi Oyna</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 5. COMPLETION MODAL & COLLECTION
// ==========================================

const CompletionModal: React.FC<{
  word: WordItem;
  isLastWordInSection?: boolean;
  nextLevelNum?: number;
  onContinue: () => void;
  onReplay: () => void;
  onGoToStudio: (word: WordItem) => void;
}> = ({ word, isLastWordInSection, nextLevelNum, onContinue, onReplay, onGoToStudio }) => {
  useEffect(() => {
    confetti({
      particleCount: isLastWordInSection ? 90 : 50,
      spread: isLastWordInSection ? 80 : 60,
      origin: { y: 0.6 }
    });
  }, [isLastWordInSection]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 select-none">
      <div className="bg-white rounded-3xl sm:rounded-4xl p-5 sm:p-7 w-full max-w-sm sm:max-w-md text-center shadow-2xl border-4 border-amber-300 animate-pop relative overflow-hidden mx-auto">
        {isLastWordInSection ? (
          <div className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 text-slate-900 font-black text-sm sm:text-base py-1.5 px-4 rounded-full mb-2 shadow-sm animate-pulse inline-block">
            🌟 BÖLÜM TAMAMLANDI! 🚀
          </div>
        ) : (
          <div className="text-3xl sm:text-4xl mb-1 text-center">🎉</div>
        )}

        <div className="text-6xl sm:text-7xl my-2 drop-shadow-md text-center">{word.emoji}</div>
        
        <div className="flex items-center justify-center gap-2 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-wider text-center">{word.english}</h2>
          <button 
            onClick={() => sound.speakWordPair(word.english, word.turkish)} 
            className="p-1.5 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-900 active:scale-95 transition-transform cursor-pointer border border-amber-300"
            title="Dinle"
          >
            <Volume2 className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-1 mt-0.5 mb-2 text-center">
          <p className="text-xl sm:text-2xl font-extrabold text-amber-500 text-center">{word.turkish}</p>
        </div>

        {word.funFactTr && (
          <div className="bg-amber-50 rounded-2xl p-2.5 mb-3 border border-amber-200 text-center">
            <p className="text-xs font-black text-amber-900 flex items-center justify-center gap-1 mb-1 text-center">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Biliyor musun?</span>
            </p>
            <p className="text-xs text-slate-700 font-semibold leading-relaxed text-center px-1">{word.funFactTr}</p>
          </div>
        )}

        <div className="flex flex-col gap-2 w-full text-center">
          <button
            onClick={() => onGoToStudio(word)}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 active:scale-95 text-slate-950 font-black text-sm sm:text-base shadow-md border-b-3 border-amber-600 transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
          >
            <Palette className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>KENDİN BOYAMAK İSTER MİSİN? 🎨</span>
          </button>

          <div className="flex gap-2 justify-center">
            <button
              onClick={onReplay}
              className="flex-1 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-800 font-extrabold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 border-2 border-slate-200 cursor-pointer text-center"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Tekrar</span>
            </button>
            
            <button
              onClick={onContinue}
              className="flex-2 py-2.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-black text-sm sm:text-base shadow-md border-b-3 border-emerald-700 transition-all flex items-center justify-center gap-1.5 cursor-pointer text-center"
            >
              <span>{isLastWordInSection ? `SONRAKİ BÖLÜME GEÇ (${nextLevelNum || 1}. SEVİYE)` : 'DEVAM ET'}</span>
              <span>➜</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CollectionScreen: React.FC<{
  completedIds: string[];
  onBack: () => void;
  onPlayWord: (word: WordItem) => void;
  onColorWord: (word: WordItem) => void;
  isNightTheme?: boolean;
}> = ({ completedIds, onBack, onPlayWord, onColorWord, isNightTheme }) => {
  const [selectedFilter, setSelectedFilter] = useState<CategoryType>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | 0>(0);

  const filteredWords = useMemo(() => {
    return WORDS_DATA.filter((w) => {
      const matchCat = selectedFilter === 'all' || w.category === selectedFilter;
      const matchDiff = selectedDifficulty === 0 || w.difficulty === selectedDifficulty;
      return matchCat && matchDiff;
    });
  }, [selectedFilter, selectedDifficulty]);

  const totalCompleted = completedIds.length;
  const progressPercent = Math.round((totalCompleted / WORDS_DATA.length) * 100);

  return (
    <div className="flex flex-col h-full max-h-[100dvh] w-full max-w-5xl mx-auto px-3 sm:px-6 py-2 sm:py-3 justify-between select-none overflow-hidden text-center">
      <div className="overflow-y-auto pr-0.5 pb-2 flex-1 min-h-0 scrollbar-none w-full">
        {/* Üst Başlık */}
        <div className="flex items-center justify-between mb-2 w-full">
          <button
            onClick={onBack}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white shadow-sm border-2 border-slate-200 flex items-center justify-center text-slate-700 active:scale-90 hover:bg-slate-50 cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <div className="flex items-center justify-center gap-2 mx-auto">
            <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
            <h1 className={`text-lg sm:text-2xl font-black text-center ${isNightTheme ? 'text-white' : 'text-slate-900'}`}>
              Sticker Koleksiyonum
            </h1>
          </div>
          <div className="w-10 sm:w-12" />
        </div>

        {/* İlerleme Çubuğu */}
        <div className="bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl p-3 sm:p-4 text-white shadow-md mb-2.5 text-center">
          <div className="flex items-center justify-between mb-1.5 px-1">
            <span className="font-extrabold text-xs sm:text-sm uppercase tracking-wide">100 Kelime Sticker Albümü</span>
            <span className="font-black text-sm sm:text-base">{totalCompleted} / {WORDS_DATA.length} ⭐ ({progressPercent}%)</span>
          </div>
          <div className="w-full bg-black/20 rounded-full h-3 sm:h-4 overflow-hidden p-0.5">
            <div
              className="bg-white h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Zorluk Seviyesi Filtre Butonları (1'den 8'e) */}
        <div className="flex gap-1.5 overflow-x-auto pb-1.5 mb-1.5 scrollbar-none justify-start sm:justify-center px-0.5">
          <button
            onClick={() => setSelectedDifficulty(0)}
            className={`px-3 py-1 rounded-full text-xs font-black whitespace-nowrap transition-all cursor-pointer ${
              selectedDifficulty === 0
                ? 'bg-amber-500 text-white shadow-sm scale-105'
                : 'bg-white text-slate-700 border-2 border-slate-200 hover:bg-slate-50'
            }`}
          >
            Tüm Seviyeler (100)
          </button>
          {ALL_DIFFICULTY_LEVELS.map((lvl) => (
            <button
              key={lvl}
              onClick={() => setSelectedDifficulty(lvl)}
              className={`px-3 py-1 rounded-full text-xs font-black whitespace-nowrap transition-all cursor-pointer ${
                selectedDifficulty === lvl
                  ? 'bg-amber-500 text-white shadow-sm scale-105'
                  : 'bg-white text-slate-700 border-2 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {DIFFICULTY_LABELS[lvl]}
            </button>
          ))}
        </div>

        {/* Kategori Filtre Butonları */}
        <div className="flex gap-1.5 overflow-x-auto pb-1.5 mb-3 scrollbar-none justify-start sm:justify-center px-0.5">
          {(['all', 'animals', 'fruits', 'vehicles', 'nature', 'objects'] as CategoryType[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3.5 py-1 rounded-full text-xs sm:text-sm font-extrabold capitalize whitespace-nowrap transition-all cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-slate-900 text-white shadow-sm scale-105'
                  : 'bg-white text-slate-700 border-2 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat === 'all' ? 'Tümü' : cat === 'animals' ? 'Hayvanlar 🐾' : cat === 'fruits' ? 'Meyveler 🍎' : cat === 'vehicles' ? 'Araçlar 🚗' : cat === 'nature' ? 'Doğa 🌳' : 'Eşyalar 🏠'}
            </button>
          ))}
        </div>

        {/* Kelime Kartları - Genişletilmiş Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-3.5 text-center">
          {filteredWords.map((w) => {
            const isUnlocked = completedIds.includes(w.id);
            return (
              <div
                key={w.id}
                className={`p-3 rounded-2xl border-2 text-center flex flex-col items-center justify-between transition-all relative overflow-hidden group shadow-sm ${
                  isUnlocked
                    ? 'bg-white border-amber-300 hover:border-amber-400 hover:shadow-md'
                    : 'bg-slate-100/90 border-slate-200 opacity-75'
                }`}
              >
                <div className="w-full flex justify-between items-center text-[10px] font-black uppercase text-slate-400 mb-1 px-1">
                  <span>{'⭐'.repeat(w.difficulty)}</span>
                  {isUnlocked && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                </div>

                <div 
                  onClick={() => {
                    if (isUnlocked) {
                      sound.speakWordPair(w.english, w.turkish);
                    }
                  }}
                  className="text-4xl sm:text-5xl my-1.5 cursor-pointer group-hover:scale-110 transition-transform text-center mx-auto"
                >
                  {isUnlocked ? w.emoji : '🔒'}
                </div>

                <div className="w-full mb-2 text-center">
                  <div className="font-black text-sm sm:text-base text-slate-900 text-center">
                    {isUnlocked ? w.english : '???'}
                  </div>
                  <div className="text-xs font-bold text-slate-500 text-center">
                    {isUnlocked ? w.turkish : 'Kilitli'}
                  </div>
                </div>

                <div className="w-full flex gap-1.5 justify-center">
                  <button
                    onClick={() => onPlayWord(w)}
                    className="flex-1 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-1 active:scale-95 cursor-pointer shadow-sm text-center"
                  >
                    <Play className="w-3 h-3 fill-slate-950" /> Oyna
                  </button>
                  <button
                    onClick={() => onColorWord(w)}
                    className="p-1.5 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold text-xs flex items-center justify-center active:scale-95 cursor-pointer shadow-sm text-center"
                    title="Kendin Boya"
                  >
                    <Palette className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pt-2 shrink-0 w-full max-w-md mx-auto">
        <button
          onClick={onBack}
          className="w-full py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-500 active:scale-95 text-slate-950 font-black text-sm sm:text-base shadow-md border-b-3 border-amber-600 transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
        >
          <Play className="w-4 h-4 fill-slate-950" />
          <span>ANA MENÜYE DÖN</span>
        </button>
      </div>
    </div>
  );
};

// ==========================================
// 6. MAIN APP COMPONENT
// ==========================================
export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'game' | 'collection' | 'studio'>('home');
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [revealedIndices, setRevealedIndices] = useState<number[]>([]);
  const [completedWordIds, setCompletedWordIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('lp_completed_words');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isCompletedModalOpen, setIsCompletedModalOpen] = useState<boolean>(false);
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState<boolean>(false);
  const [selectedVoiceName, setSelectedVoiceName] = useState<string>(() => sound.getSelectedVoiceName());
  const [isThemeModalOpen, setIsThemeModalOpen] = useState<boolean>(false);
  const [selectedThemeId, setSelectedThemeId] = useState<ThemeId>(() => {
    try {
      const saved = localStorage.getItem('lp_theme_id') as ThemeId;
      if (saved && APP_THEMES.some((t) => t.id === saved)) {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'honey';
  });
  const [isPronouncingCompleted, setIsPronouncingCompleted] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [shakingLetter, setShakingLetter] = useState<string | null>(null);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | 0>(0);
  const [studioInitialWordId, setStudioInitialWordId] = useState<string | null>(null);
  const [previousScreen, setPreviousScreen] = useState<'home' | 'game' | 'collection'>('home');

  const openColoringStudio = (wordId?: string, fromScreen: 'home' | 'game' | 'collection' = 'home') => {
    if (wordId) {
      setStudioInitialWordId(wordId);
    }
    setPreviousScreen(fromScreen);
    setCurrentScreen('studio');
  };
  
  // Custom user colors for active word in game mode
  const [activeWordUserColors, setActiveWordUserColors] = useState<Record<string, string>>({});
  const [selectedPaintColor, setSelectedPaintColor] = useState<string>(PALETTE_COLORS[0].hex);

  const currentTheme = useMemo(() => {
    return APP_THEMES.find((t) => t.id === selectedThemeId) || APP_THEMES[0];
  }, [selectedThemeId]);

  const handleSelectTheme = (id: ThemeId) => {
    setSelectedThemeId(id);
    try {
      localStorage.setItem('lp_theme_id', id);
    } catch {
      // ignore
    }
  };

  // Active word list based on category & difficulty
  const activeWordList = useMemo(() => {
    return WORDS_DATA.filter((w) => {
      const matchCat = selectedCategory === 'all' || w.category === selectedCategory;
      const matchDiff = selectedDifficulty === 0 || w.difficulty === selectedDifficulty;
      return matchCat && matchDiff;
    });
  }, [selectedCategory, selectedDifficulty]);

  const currentWord = activeWordList[currentWordIndex] || WORDS_DATA[0];

  // First unrevealed index in current word
  const firstUnrevealedIndex = useMemo(() => {
    for (let i = 0; i < currentWord.english.length; i++) {
      if (!revealedIndices.includes(i)) return i;
    }
    return -1;
  }, [currentWord.english, revealedIndices]);

  const isAllRevealed = revealedIndices.length >= currentWord.english.length;
  const nextHintChar = firstUnrevealedIndex !== -1 ? currentWord.english[firstUnrevealedIndex] : '';

  // Save completed words
  useEffect(() => {
    try {
      localStorage.setItem('lp_completed_words', JSON.stringify(completedWordIds));
    } catch {
      // ignore
    }
  }, [completedWordIds]);

  // Android Back Button handler for native WebView wrapper
  useEffect(() => {
    if (typeof window === 'undefined') return;

    (window as unknown as { handleAndroidBack?: () => boolean }).handleAndroidBack = () => {
      if (isThemeModalOpen) {
        setIsThemeModalOpen(false);
        return true;
      }
      if (isVoiceModalOpen) {
        setIsVoiceModalOpen(false);
        return true;
      }
      if (isCompletedModalOpen) {
        setIsCompletedModalOpen(false);
        return true;
      }
      if (currentScreen !== 'home') {
        if (currentScreen === 'studio' && previousScreen === 'game') {
          setCurrentScreen('game');
          return true;
        }
        if (currentScreen === 'studio' && previousScreen === 'collection') {
          setCurrentScreen('collection');
          return true;
        }
        setCurrentScreen('home');
        return true;
      }
      return false;
    };

    return () => {
      delete (window as unknown as { handleAndroidBack?: () => boolean }).handleAndroidBack;
    };
  }, [isThemeModalOpen, isVoiceModalOpen, isCompletedModalOpen, currentScreen, previousScreen]);

  // Surface invalidation & layer cleanup on screen changes to prevent ghost frames
  useEffect(() => {
    window.requestAnimationFrame(() => {
      const w = window as unknown as { AndroidTTS?: { invalidateScreen?: () => void } };
      if (w.AndroidTTS && typeof w.AndroidTTS.invalidateScreen === 'function') {
        w.AndroidTTS.invalidateScreen();
      }
    });
  }, [currentScreen]);

  // Sound toggle
  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sound.setSoundEnabled(next);
  };

  // Setup word
  const startWord = useCallback((index: number) => {
    const validIdx = Math.max(0, Math.min(index, activeWordList.length - 1));
    setCurrentWordIndex(validIdx);
    setRevealedIndices([]);
    setShowHint(false);
    setIsPronouncingCompleted(false);
    setActiveWordUserColors({});
    sound.playPopTone();
  }, [activeWordList]);

  // Generate dynamic keyboard letters based on word difficulty (Progression!)
  const keyboardLetters = useMemo(() => {
    const lettersInWord = currentWord.english.split('');
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const pool = new Set<string>(lettersInWord);

    // Seviyeye göre klavye harf sayısı:
    // 1-2 (3-4 harf): 8 buton (4x2)
    // 3 (5 harf): 10 buton (5x2)
    // 4 (6 harf): 12 buton (6x2)
    // 5-8 (7-10 harf): 14 buton (7x2)
    const targetKeyCount = currentWord.difficulty >= 5 ? 14 : currentWord.difficulty === 4 ? 12 : currentWord.difficulty === 3 ? 10 : 8;

    while (pool.size < targetKeyCount) {
      const rand = alphabet[Math.floor(Math.random() * alphabet.length)];
      pool.add(rand);
    }

    const arr = Array.from(pool);
    // Fisher-Yates shuffle
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [currentWord]);

  // Harf veya İpucu İlerlemesi Mantığı: Her harf açıldığında çizim parça parça boyanır!
  const applyRevealedIndices = (nextRevealed: number[], isHint = false, targetLetter?: string) => {
    setRevealedIndices(nextRevealed);

    // Parça parça orantılı renklendirme efekti
    const totalLetters = currentWord.english.length;
    const partKeys = Object.keys(currentWord.defaultParts);
    if (partKeys.length > 0) {
      const targetCount = nextRevealed.length === totalLetters
        ? partKeys.length
        : Math.min(partKeys.length, Math.max(1, Math.round((nextRevealed.length / totalLetters) * partKeys.length)));
      
      const keysToColor = partKeys.slice(0, targetCount);
      setActiveWordUserColors((prev) => {
        const next = { ...prev };
        keysToColor.forEach((k) => {
          next[k] = currentWord.defaultParts[k];
        });
        return next;
      });
    }

    // KELİME TAMAMLANDI!
    if (nextRevealed.length >= totalLetters) {
      setActiveWordUserColors({ ...currentWord.defaultParts });
      setIsPronouncingCompleted(true);

      // Başarı sesi ve konfeti
      sound.playCelebrationTone();
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 }
      });

      // Koleksiyona ekle
      if (!completedWordIds.includes(currentWord.id)) {
        setCompletedWordIds((prev) => [...prev, currentWord.id]);
      }

      // 1. İngilizce konuş -> 2. Hemen ardından Türkçe konuş -> 3. Modal aç!
      sound.speakWordPair(currentWord.english, currentWord.turkish, () => {
        setTimeout(() => {
          setIsCompletedModalOpen(true);
        }, 500);
      });
    } else {
      if (isHint) {
        sound.playHintTone();
        if (targetLetter) {
          sound.speakWord(targetLetter);
        }
      } else {
        sound.playSuccessTone();
      }
    }
  };

  // Harf Tıklama Mantığı: Sıra gözetmeksizin, kelimenin içinde varsa ilgili tüm pozisyonları açar!
  const handleLetterClick = (letter: string) => {
    if (isPronouncingCompleted || isCompletedModalOpen) return;
    if (revealedIndices.length >= currentWord.english.length) return;

    // Kelimedeki bu harfe sahip tüm indeksleri bul
    const matchingIndices: number[] = [];
    currentWord.english.split('').forEach((char, idx) => {
      if (char === letter) {
        matchingIndices.push(idx);
      }
    });

    const newIndices = matchingIndices.filter((idx) => !revealedIndices.includes(idx));

    if (newIndices.length > 0) {
      // Doğru harf bulundu! Hangi pozisyonda olursa olsun açılır
      const nextRevealed = [...revealedIndices, ...newIndices];
      applyRevealedIndices(nextRevealed, false, letter);
    } else if (matchingIndices.length > 0) {
      // Bu harf zaten tamamen açılmış
      sound.playPopTone();
    } else {
      // Yanlış harf!
      sound.playWrongTone();
      setShakingLetter(letter);
      setTimeout(() => setShakingLetter(null), 350);
    }
  };

  // İpucu Butonu: Sıradaki açılmamış harfi ve kelimedeki tüm eşlerini açar!
  const handleHintClick = () => {
    if (isPronouncingCompleted || isCompletedModalOpen) return;
    if (firstUnrevealedIndex === -1) return;

    const targetLetter = currentWord.english[firstUnrevealedIndex];
    const matchingIndices: number[] = [];
    currentWord.english.split('').forEach((char, idx) => {
      if (char === targetLetter) {
        matchingIndices.push(idx);
      }
    });

    const nextRevealed = Array.from(new Set([...revealedIndices, ...matchingIndices]));
    applyRevealedIndices(nextRevealed, true, targetLetter);
  };

  // Belirli bir harf kutusuna tıklandığında o pozisyondaki harfi açar
  const handleSlotClick = (index: number) => {
    if (isPronouncingCompleted || isCompletedModalOpen) return;
    if (revealedIndices.includes(index)) {
      sound.speakWordPair(currentWord.english, currentWord.turkish);
      return;
    }

    const targetLetter = currentWord.english[index];
    const matchingIndices: number[] = [];
    currentWord.english.split('').forEach((char, idx) => {
      if (char === targetLetter) {
        matchingIndices.push(idx);
      }
    });

    const nextRevealed = Array.from(new Set([...revealedIndices, ...matchingIndices]));
    applyRevealedIndices(nextRevealed, true, targetLetter);
  };

  const handlePrevWord = () => {
    setIsCompletedModalOpen(false);
    sound.playPopTone();
    if (currentWordIndex > 0) {
      startWord(currentWordIndex - 1);
    } else {
      startWord(activeWordList.length - 1);
    }
  };

  const handleNextWord = () => {
    setIsCompletedModalOpen(false);
    sound.playPopTone();
    if (currentWordIndex < activeWordList.length - 1) {
      startWord(currentWordIndex + 1);
    } else {
      // Bu bölümün (seviyenin) tüm kelimeleri tamamlandı!
      // Otomatik olarak sıradaki bölüme / seviyeye geçiş yap:
      if (selectedDifficulty > 0 && selectedDifficulty < 8) {
        const nextDiff = (selectedDifficulty + 1) as DifficultyLevel;
        setSelectedDifficulty(nextDiff);
        setTimeout(() => {
          startWord(0);
          sound.playCelebrationTone();
        }, 150);
      } else if (selectedDifficulty === 8) {
        // En son seviye (8. Seviye - 10 Harf) bitti, 1. seviyeye dön
        setSelectedDifficulty(1);
        setTimeout(() => {
          startWord(0);
          sound.playCelebrationTone();
        }, 150);
      } else {
        // Kategori veya tüm kelimeler modunda ilk kelimeye dön
        startWord(0);
      }
    }
  };

  const handleGamePartColor = (partKey: string) => {
    sound.playPaintSplash();
    setActiveWordUserColors((prev) => ({
      ...prev,
      [partKey]: selectedPaintColor
    }));
  };

  // Harf kutusu responsive boyut sınıfı
  const slotSizeClass = useMemo(() => {
    const len = currentWord.english.length;
    if (len <= 4) return 'w-10 h-11 sm:w-11 sm:h-12 text-xl sm:text-2xl min-w-0 shrink';
    if (len <= 6) return 'w-8.5 h-9.5 sm:w-9.5 sm:h-10.5 text-lg sm:text-xl min-w-0 shrink';
    if (len <= 8) return 'w-7.5 h-8.5 sm:w-8.5 sm:h-9.5 text-base sm:text-lg min-w-0 shrink';
    return 'w-6 h-7 sm:w-7 sm:h-8 text-xs sm:text-sm min-w-0 shrink';
  }, [currentWord.english.length]);

  return (
    <div className={`h-[100dvh] max-h-[100dvh] w-full overflow-hidden ${currentTheme.bgGradient} flex flex-col justify-between select-none ${currentTheme.textColor}`}>
      
      {/* 1. HOME SCREEN */}
      {currentScreen === 'home' && (
        <div key="screen-home" className="flex flex-col h-full max-h-[100dvh] max-w-4xl w-full mx-auto px-4 sm:px-6 py-3 sm:py-5 justify-between select-none overflow-hidden text-center">
          {/* Header */}
          <div className="flex items-center justify-between shrink-0 w-full">
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl">{currentTheme.icon}</span>
              <span className={`font-black text-sm sm:text-base tracking-tight ${selectedThemeId === 'night' ? 'text-white' : 'text-slate-900'}`}>
                Boya ve Öğren
              </span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Koleksiyon Butonu (Üst Çubukta Sadece İkon) */}
              <button
                onClick={() => setCurrentScreen('collection')}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white shadow-sm border-2 border-amber-300 flex items-center justify-center text-amber-500 active:scale-90 hover:bg-amber-50 cursor-pointer"
                title="Koleksiyon"
                aria-label="Koleksiyon"
              >
                <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 fill-amber-300" />
              </button>

              <VoiceSelectButton 
                voiceName={selectedVoiceName} 
                onClick={() => setIsVoiceModalOpen(true)} 
              />

              <ThemeSelectButton
                currentTheme={currentTheme}
                onClick={() => setIsThemeModalOpen(true)}
              />

              <SoundToggle soundOn={soundEnabled} onToggle={toggleSound} />
            </div>
          </div>

          {/* Hero Banner */}
          <div className="my-auto py-2 shrink min-h-0 text-center">
            <div className="relative inline-block mx-auto mb-2">
              <div className={`w-28 h-28 sm:w-36 sm:h-36 rounded-4xl ${currentTheme.heroBg} shadow-lg flex items-center justify-center border-4 border-white text-6xl sm:text-7xl animate-bounce-short`}>
                🦁
              </div>
              <div className="absolute -top-2 -right-3 bg-emerald-500 text-white font-black text-[11px] sm:text-xs px-3 py-1 rounded-full shadow-md uppercase">
                100 Kelime
              </div>
            </div>

            <h1 className={`text-2xl sm:text-4xl font-black tracking-tight mb-1 ${selectedThemeId === 'night' ? 'text-white drop-shadow-md' : 'text-slate-900'}`}>
              İngilizce Kelime & Boyama
            </h1>
            <p className={`text-xs sm:text-base font-bold max-w-md mx-auto leading-relaxed ${selectedThemeId === 'night' ? 'text-indigo-200' : 'text-slate-600'}`}>
              Harflere bas, doğru yerlerinde aç, çizimleri boya ve 100 kelimeyi tamamla!
            </p>
          </div>

          {/* Seviye Seçimi (Zorluk Kademesi: 1'den 8'e - 3 Harften 10 Harfe) */}
          <div className="bg-white/95 rounded-2xl sm:rounded-3xl p-2.5 sm:p-3.5 border-2 border-amber-200 shadow-sm mb-2 shrink-0 text-center">
            <div className="flex items-center justify-between mb-1.5 px-1">
              <span className="text-xs font-black uppercase text-slate-500 tracking-wide flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-500" /> Seviye (Harf Sayısına Göre):
              </span>
              <span className="text-xs sm:text-sm font-black text-amber-600">
                {selectedDifficulty === 0 ? 'Tümü (100 Kelime)' : `${selectedDifficulty}. Seviye`}
              </span>
            </div>
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none justify-start sm:justify-center px-0.5">
              <button
                onClick={() => setSelectedDifficulty(0)}
                className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all cursor-pointer ${
                  selectedDifficulty === 0
                    ? 'bg-slate-900 text-white shadow-sm scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Tümü (100)
              </button>
              {ALL_DIFFICULTY_LEVELS.map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedDifficulty(lvl)}
                  className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all cursor-pointer ${
                    selectedDifficulty === lvl
                      ? 'bg-amber-500 text-white shadow-sm scale-105'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {DIFFICULTY_LABELS[lvl]}
                </button>
              ))}
            </div>
          </div>

          {/* Kategori Seçici */}
          <div className="bg-white/95 rounded-2xl sm:rounded-3xl p-2.5 sm:p-3.5 border-2 border-amber-200 shadow-sm mb-2.5 shrink-0 text-center">
            <div className="flex items-center justify-between mb-1.5 px-1">
              <span className="text-xs font-black uppercase text-slate-500 tracking-wide">
                Kategori Seç:
              </span>
              <span className="text-xs sm:text-sm font-black text-slate-700">
                {activeWordList.length} Kelime
              </span>
            </div>
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none justify-start sm:justify-center px-0.5">
              {(['all', 'animals', 'fruits', 'vehicles', 'nature', 'objects'] as CategoryType[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-slate-900 text-white shadow-sm scale-105'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat === 'all' ? 'Tümü' : cat === 'animals' ? 'Hayvanlar 🐾' : cat === 'fruits' ? 'Meyveler 🍎' : cat === 'vehicles' ? 'Araçlar 🚗' : cat === 'nature' ? 'Doğa 🌳' : 'Eşyalar 🏠'}
                </button>
              ))}
            </div>
          </div>

          {/* Eylem Butonları: Oyuna Başla & Boyama Atölyesi (Aynı Büyüklükte Tam Boy Butonlar) */}
          <div className="w-full space-y-2.5 pb-1 shrink-0 text-center max-w-lg mx-auto">
            <button
              onClick={() => {
                startWord(0);
                setCurrentScreen('game');
              }}
              className={`w-full py-3.5 sm:py-4 rounded-2xl ${currentTheme.primaryBtn} border-b-4 active:scale-95 font-black text-base sm:text-lg shadow-md transition-transform flex items-center justify-center gap-2 cursor-pointer text-center`}
            >
              <Play className="w-5 h-5 fill-current" />
              <span>OYUNA BAŞLA ({activeWordList.length} Kelime)</span>
            </button>

            <button
              onClick={() => openColoringStudio(currentWord?.id, 'home')}
              className="w-full py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 hover:from-purple-600 hover:to-pink-600 active:scale-95 text-white font-black text-base sm:text-lg shadow-md border-b-4 border-purple-700 transition-transform flex items-center justify-center gap-2 cursor-pointer text-center"
            >
              <Palette className="w-5 h-5" />
              <span>🎨 BOYAMA ATÖLYESİ</span>
            </button>
          </div>
        </div>
      )}

      {/* 2. BOYAMA ATÖLYESİ */}
      {currentScreen === 'studio' && (
        <ColoringStudio
          key="screen-studio"
          initialWordId={studioInitialWordId || undefined}
          onBack={() => {
            if (previousScreen === 'game') {
              setCurrentScreen('game');
            } else if (previousScreen === 'collection') {
              setCurrentScreen('collection');
            } else {
              setCurrentScreen('home');
            }
          }}
          onGoToGame={(w) => {
            const idx = activeWordList.findIndex((x) => x.id === w.id);
            if (idx !== -1) {
              startWord(idx);
              setCurrentScreen('game');
            } else {
              const allIdx = WORDS_DATA.findIndex((x) => x.id === w.id);
              setSelectedCategory('all');
              setSelectedDifficulty(0);
              setTimeout(() => {
                startWord(allIdx !== -1 ? allIdx : 0);
                setCurrentScreen('game');
              }, 50);
            }
          }}
        />
      )}

      {/* 3. GAME SCREEN - 🌟 TAM EKRAN, BÜYÜTÜLMÜŞ ÇİZİM & 2 SATIRLI RENK PALETİ */}
      {currentScreen === 'game' && (
        <div key="screen-game" className="flex flex-col h-full max-h-[100dvh] max-w-4xl w-full mx-auto px-3 sm:px-6 py-1.5 sm:py-2.5 justify-between select-none overflow-hidden text-center">
          {/* Üst Bar */}
          <div className="flex items-center justify-between shrink-0 w-full">
            <button
              onClick={() => setCurrentScreen('home')}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white shadow-sm border-2 border-slate-200 flex items-center justify-center text-slate-700 active:scale-90 hover:bg-slate-50 cursor-pointer"
              title="Ana Menü"
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="bg-white px-3.5 py-1 rounded-full border-2 border-slate-200 shadow-sm font-black text-slate-800 text-xs sm:text-sm flex items-center justify-center gap-2 mx-auto">
              <span>{currentWordIndex + 1} / {activeWordList.length}</span>
              <span className="text-amber-500">{'⭐'.repeat(currentWord.difficulty)}</span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => setCurrentScreen('collection')}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white shadow-sm border-2 border-amber-300 flex items-center justify-center text-amber-500 active:scale-90 hover:bg-amber-50 cursor-pointer"
                title="Koleksiyon"
              >
                <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 fill-amber-300" />
              </button>
              <VoiceSelectButton 
                voiceName={selectedVoiceName} 
                onClick={() => setIsVoiceModalOpen(true)} 
              />
              <ThemeSelectButton
                currentTheme={currentTheme}
                onClick={() => setIsThemeModalOpen(true)}
              />
              <button
                onClick={() => openColoringStudio(currentWord.id, 'game')}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-purple-100 border-2 border-purple-200 shadow-sm flex items-center justify-center text-purple-800 active:scale-90 hover:bg-purple-200 cursor-pointer"
                title="Boyama Atölyesi"
              >
                <Palette className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={handleHintClick}
                disabled={isAllRevealed || isPronouncingCompleted}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl border-2 shadow-sm flex items-center justify-center transition-all cursor-pointer ${
                  !isAllRevealed
                    ? 'bg-amber-100 border-amber-300 text-amber-900 active:scale-90 hover:bg-amber-200'
                    : 'bg-slate-100 border-slate-200 text-slate-400 opacity-50 cursor-not-allowed'
                }`}
                title="İpucu: 1 Harf Aç"
              >
                <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 fill-amber-400" />
              </button>
              <SoundToggle soundOn={soundEnabled} onToggle={toggleSound} />
            </div>
          </div>

          {/* Seviye Rozeti & Türkçe Ses Butonu */}
          <div className="text-center flex items-center justify-center gap-2 shrink-0 my-0.5 w-full">
            <span
              className={`px-3 py-0.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1 ${
                currentWord.gameType === 'puzzle'
                  ? 'bg-blue-100 text-blue-800 border border-blue-200'
                  : 'bg-amber-100 text-amber-800 border border-amber-200'
              }`}
            >
              {currentWord.gameType === 'puzzle' ? <PuzzleIcon className="w-3 h-3" /> : <Palette className="w-3 h-3" />}
              <span>{currentWord.difficultyLabel}</span>
            </span>

            <button
              onClick={() => sound.speakTurkish(currentWord.turkish)}
              className="bg-emerald-100 hover:bg-emerald-200 text-emerald-900 px-3 py-0.5 rounded-full text-xs sm:text-sm font-black flex items-center justify-center gap-1.5 transition-colors active:scale-95 cursor-pointer shadow-sm border border-emerald-200 text-center"
              title="Türkçe İpucu Dinle"
            >
              <span>{currentWord.turkish}</span>
              <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700" />
            </button>
          </div>

          {/* 🌟 DENGELİ GÖRSEL & PUZZLE ALANI (%20 Küçültülmüş, Üst üste gelmeyen ergonomik alan) */}
          <div className="relative my-auto flex items-center justify-center shrink min-h-0 py-0.5 sm:py-1 w-full text-center">
            {/* Önceki Nesne Oku */}
            <button
              onClick={handlePrevWord}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white hover:bg-amber-100 text-amber-950 border-2 sm:border-3 border-amber-300 shadow-md flex items-center justify-center cursor-pointer transition-transform active:scale-90 shrink-0 mr-1.5 sm:mr-3"
              title="Önceki Nesneye Geç"
            >
              <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
            </button>

            {/* Sabit Kare Alan & Görsel Tuvali */}
            <div className={`relative w-auto h-52 sm:h-64 md:h-72 max-h-[29vh] sm:max-h-[33vh] aspect-square p-2 sm:p-3 bg-white rounded-3xl border-3 transition-colors flex items-center justify-center ${
              isPronouncingCompleted
                ? 'border-amber-400 shadow-2xl bg-amber-50 ring-4 ring-amber-300/60'
                : 'border-amber-200 shadow-lg'
            }`}>
              <PuzzleArtwork
                word={currentWord}
                revealedIndices={revealedIndices}
                activeWordUserColors={activeWordUserColors}
                onPieceClick={(pieceIndex) => {
                  handleSlotClick(pieceIndex);
                }}
                interactive={true}
              />

              {/* Tamamlanınca Seslendirme Bildirim Rozeti - Görsel üzerinde sabit bindirme, layout kayması yapmaz */}
              {isPronouncingCompleted && (
                <div className="absolute -bottom-3 z-20 animate-pop bg-gradient-to-r from-amber-400 to-emerald-400 text-slate-950 font-black text-xs sm:text-sm px-4 py-1 rounded-full shadow-lg border-2 border-white flex items-center gap-1.5 whitespace-nowrap">
                  <Volume2 className="w-4 h-4 animate-pulse" />
                  <span>{currentWord.english} — {currentWord.turkish} 🎉</span>
                </div>
              )}
            </div>

            {/* Sonraki Nesne Oku */}
            <button
              onClick={handleNextWord}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-amber-400 hover:bg-amber-500 text-amber-950 border-2 sm:border-3 border-amber-600 shadow-md flex items-center justify-center cursor-pointer transition-transform active:scale-90 shrink-0 ml-1.5 sm:ml-3"
              title="Sonraki Nesneye Geç"
            >
              <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
            </button>
          </div>

          {/* 🌟 2 SATIRLI JUMBO RENK PALETİ (2 Yaş İçin +%50 Büyütülmüş Butonlar) */}
          <div className="flex flex-col items-center justify-center gap-1 px-3 py-1.5 bg-white rounded-2xl border-2 border-amber-200 mx-auto shrink-0 my-0.5 shadow-sm text-center">
            <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-xs font-black text-slate-600 uppercase">
              <PaintBucket className="w-3.5 h-3.5 text-amber-500" />
              <span>Boya Seç / Choose Color</span>
            </div>
            
            {/* 1. Satır: 7 Renk */}
            <div className="flex gap-1.5 sm:gap-2.5 items-center justify-center">
              {PALETTE_COLORS.slice(0, 7).map((c) => {
                const isSelected = selectedPaintColor.toLowerCase() === c.hex.toLowerCase();
                return (
                  <button
                    key={c.hex}
                    onClick={() => {
                      setSelectedPaintColor(c.hex);
                      sound.playPopTone();
                      sound.speakColor(c.nameEn, c.nameTr);
                    }}
                    title={`${c.nameTr} (${c.nameEn})`}
                    className={`w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full transition-all cursor-pointer relative border-2 ${
                      isSelected ? 'scale-120 ring-3 ring-amber-400 shadow-md border-white' : 'border-white/80 shadow-xs hover:scale-110 active:scale-95'
                    }`}
                    style={{ backgroundColor: c.hex }}
                  />
                );
              })}
            </div>

            {/* 2. Satır: 6 Renk */}
            <div className="flex gap-1.5 sm:gap-2.5 items-center justify-center">
              {PALETTE_COLORS.slice(7).map((c) => {
                const isSelected = selectedPaintColor.toLowerCase() === c.hex.toLowerCase();
                return (
                  <button
                    key={c.hex}
                    onClick={() => {
                      setSelectedPaintColor(c.hex);
                      sound.playPopTone();
                      sound.speakColor(c.nameEn, c.nameTr);
                    }}
                    title={`${c.nameTr} (${c.nameEn})`}
                    className={`w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full transition-all cursor-pointer relative border-2 ${
                      isSelected ? 'scale-120 ring-3 ring-amber-400 shadow-md border-white' : 'border-white/80 shadow-xs hover:scale-110 active:scale-95'
                    }`}
                    style={{ backgroundColor: c.hex }}
                  />
                );
              })}
            </div>
          </div>

          {/* Harf İlerleme Göstergesi (A _ _ _ _) - Her harf bağımsız sırasıyla açılır */}
          <div className="flex flex-nowrap justify-center items-center gap-1 sm:gap-2 my-1 shrink-0 w-full mx-auto max-w-full px-1">
            {currentWord.english.split('').map((char, index) => {
              const isFound = revealedIndices.includes(index);
              return (
                <div
                  key={index}
                  onClick={() => {
                    if (isFound) {
                      sound.speakWordPair(currentWord.english, currentWord.turkish);
                    } else {
                      handleSlotClick(index);
                    }
                  }}
                  title={isFound ? `${char} (Dinle)` : `Bu harfi aç: "${char}"`}
                  className={`${slotSizeClass} rounded-2xl flex items-center justify-center font-black border-b-3 sm:border-b-4 transition-all text-center select-none ${
                    isFound
                      ? 'bg-amber-400 border-amber-600 text-slate-950 animate-pop shadow-sm cursor-pointer hover:scale-105'
                      : 'bg-white border-slate-300 text-slate-300 border-dashed shadow-inner cursor-pointer hover:border-amber-400 hover:text-amber-400 hover:scale-105'
                  }`}
                >
                  {isFound ? char : '_'}
                </div>
              );
            })}
          </div>

          {/* 💡 İPUCU BUTONU: Sıradaki açılmamış harfi doğrudan açar */}
          <div className="w-full flex items-center justify-center shrink-0 my-0.5 px-1 max-w-md mx-auto">
            <button
              onClick={handleHintClick}
              disabled={isAllRevealed || isPronouncingCompleted}
              className={`w-full py-1.5 sm:py-2 px-3 rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm border-2 transition-all cursor-pointer select-none ${
                !isAllRevealed
                  ? 'bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-500 active:scale-95 text-slate-950 border-amber-500 shadow-amber-200/50'
                  : 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed opacity-60'
              }`}
              title="Bulamadığın harfi aç"
            >
              <Lightbulb className="w-4 h-4 text-amber-900 fill-amber-600" />
              <span>
                {isAllRevealed
                  ? '✨ Harika! Kelime Tamamlandı'
                  : `İPUCU: "${nextHintChar}" Harfini Aç (${revealedIndices.length + 1}/${currentWord.english.length}) 💡`}
              </span>
            </button>
          </div>

          {/* Klavye Harf Butonları (Dinamik Izgara: 4x2, 5x2, 6x2 veya 7x2) */}
          <div className={`grid gap-1.5 sm:gap-2 pb-1 shrink-0 w-full mx-auto max-w-2xl ${
            keyboardLetters.length === 14
              ? 'grid-cols-7'
              : keyboardLetters.length === 12
              ? 'grid-cols-6'
              : keyboardLetters.length === 10
              ? 'grid-cols-5'
              : 'grid-cols-4'
          }`}>
            {keyboardLetters.map((l, i) => {
              const isHintTarget = showHint && l === nextHintChar;
              const isFullyFound = currentWord.english.includes(l) && currentWord.english.split('').every((char, idx) => char !== l || revealedIndices.includes(idx));
              return (
                <LetterButton
                  key={i}
                  letter={l}
                  onClick={() => handleLetterClick(l)}
                  isShaking={shakingLetter === l}
                  isHinted={isHintTarget}
                  isFound={isFullyFound}
                  sizeClass={
                    keyboardLetters.length === 14
                      ? 'h-9 sm:h-12 text-base sm:text-xl'
                      : keyboardLetters.length === 12
                      ? 'h-10 sm:h-13 text-lg sm:text-2xl'
                      : keyboardLetters.length === 10
                      ? 'h-11 sm:h-14 text-xl sm:text-2xl'
                      : 'h-12 sm:h-15 text-2xl sm:text-3xl'
                  }
                />
              );
            })}
          </div>
        </div>
      )}

      {/* 4. COLLECTION SCREEN */}
      {currentScreen === 'collection' && (
        <CollectionScreen
          key="screen-collection"
          completedIds={completedWordIds}
          isNightTheme={selectedThemeId === 'night'}
          onBack={() => setCurrentScreen('home')}
          onPlayWord={(w) => {
            const idx = activeWordList.findIndex((x) => x.id === w.id);
            if (idx !== -1) {
              startWord(idx);
              setCurrentScreen('game');
            } else {
              const allIdx = WORDS_DATA.findIndex((x) => x.id === w.id);
              setSelectedCategory('all');
              setSelectedDifficulty(0);
              setTimeout(() => {
                startWord(allIdx !== -1 ? allIdx : 0);
                setCurrentScreen('game');
              }, 50);
            }
          }}
          onColorWord={(w) => {
            openColoringStudio(w.id, 'collection');
          }}
        />
      )}

      {/* 5. SUCCESS / COMPLETION MODAL */}
      {isCompletedModalOpen && (
        <CompletionModal
          word={currentWord}
          isLastWordInSection={currentWordIndex >= activeWordList.length - 1}
          nextLevelNum={selectedDifficulty > 0 && selectedDifficulty < 8 ? selectedDifficulty + 1 : 1}
          onContinue={handleNextWord}
          onReplay={() => {
            setIsCompletedModalOpen(false);
            startWord(currentWordIndex);
          }}
          onGoToStudio={(w) => {
            setIsCompletedModalOpen(false);
            openColoringStudio(w.id, 'game');
          }}
        />
      )}

      {/* 6. FEMALE VOICE SETTINGS MODAL */}
      <VoiceSettingsModal
        isOpen={isVoiceModalOpen}
        onClose={() => setIsVoiceModalOpen(false)}
        onVoiceSelected={(name) => setSelectedVoiceName(name)}
      />

      {/* 7. THEME SETTINGS MODAL */}
      <ThemeSettingsModal
        isOpen={isThemeModalOpen}
        onClose={() => setIsThemeModalOpen(false)}
        selectedThemeId={selectedThemeId}
        onSelectTheme={handleSelectTheme}
      />
    </div>
  );
}
