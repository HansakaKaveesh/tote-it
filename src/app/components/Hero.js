import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight, FiShoppingBag, FiTruck, FiStar, FiHeart } from 'react-icons/fi'

export default function Hero() {
  return (
    <div className="relative min-h-[100vh] sm:min-h-[90vh] lg:min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-b from-blue-950 to-blue-900">
      {/* Layered Ocean Background with depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-blue-800/90 to-cyan-700/95 z-10"></div>
      
      {/* Animated water caustics effect */}
      <div className="absolute inset-0 z-5 opacity-30">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJjYXVzdGljcyIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjMwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2NhdXN0aWNzKSIvPjwvc3ZnPg==')] animate-water-flow"></div>
      </div>
      
      {/* Underwater volumetric light rays - Enhanced */}
      <div className="absolute inset-0 z-0 hidden sm:block opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-[conic-gradient(from_45deg_at_30%_10%,rgba(139,92,246,0.3)_0deg,transparent_60deg,transparent_300deg,rgba(139,92,246,0.3)_360deg)] animate-light-ray-1"></div>
        <div className="absolute top-0 left-1/3 w-full h-full bg-[conic-gradient(from_90deg_at_50%_5%,rgba(96,165,250,0.4)_0deg,transparent_50deg,transparent_310deg,rgba(96,165,250,0.4)_360deg)] animate-light-ray-2"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[conic-gradient(from_120deg_at_70%_15%,rgba(34,211,238,0.3)_0deg,transparent_70deg,transparent_290deg,rgba(34,211,238,0.3)_360deg)] animate-light-ray-3"></div>
      </div>

      {/* Magical floating particles and bubbles */}
      <div className="absolute inset-0 z-12 overflow-hidden pointer-events-none">
        {/* Large glowing bubbles */}
        <div className="absolute top-[20%] left-[10%] w-3 h-3 bg-cyan-200/60 rounded-full blur-[1px] animate-bubble-rise"></div>
        <div className="absolute top-[80%] left-[25%] w-4 h-4 bg-blue-200/50 rounded-full blur-[1px] animate-bubble-rise animation-delay-1000"></div>
        <div className="absolute top-[60%] right-[15%] w-2 h-2 bg-purple-200/60 rounded-full blur-[1px] animate-bubble-rise animation-delay-2000"></div>
        <div className="absolute top-[90%] right-[30%] w-5 h-5 bg-cyan-300/40 rounded-full blur-[1px] animate-bubble-rise-slow animation-delay-3000"></div>
        <div className="absolute top-[50%] left-[40%] w-3 h-3 bg-indigo-200/50 rounded-full blur-[1px] animate-bubble-rise animation-delay-4000"></div>
        <div className="absolute top-[70%] right-[45%] w-2 h-2 bg-sky-200/60 rounded-full blur-[1px] animate-bubble-rise-slow"></div>
        
        {/* Sparkles */}
        <div className="absolute top-[15%] left-[20%] w-1 h-1 bg-white rounded-full animate-sparkle"></div>
        <div className="absolute top-[40%] right-[25%] w-1 h-1 bg-cyan-100 rounded-full animate-sparkle animation-delay-2000"></div>
        <div className="absolute bottom-[30%] left-[60%] w-1 h-1 bg-purple-100 rounded-full animate-sparkle animation-delay-4000"></div>
      </div>

      {/* Enhanced floating color orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-radial from-cyan-400/30 via-blue-500/20 to-transparent rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute top-20 sm:top-40 right-5 sm:right-10 w-72 sm:w-[30rem] h-72 sm:h-[30rem] bg-gradient-radial from-purple-400/30 via-indigo-500/20 to-transparent rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-radial from-teal-400/30 via-cyan-500/20 to-transparent rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/4 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-radial from-sky-400/20 via-blue-500/15 to-transparent rounded-full mix-blend-screen filter blur-3xl animate-blob-reverse animation-delay-1000"></div>
      </div>

      {/* Animated Sea Turtles - Enhanced with more detail */}
      <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden">
        {/* Turtle 1 - Large, detailed, swimming right */}
        <div className="absolute top-[12%] -left-40 animate-swim-slow">
          <svg width="140" height="120" viewBox="0 0 140 120" className="drop-shadow-2xl hidden lg:block filter">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <radialGradient id="shellGradient1" cx="50%" cy="40%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="1"/>
                <stop offset="100%" stopColor="#047857" stopOpacity="0.8"/>
              </radialGradient>
            </defs>
            <g className="animate-gentle-bob" filter="url(#glow)">
              {/* Shadow */}
              <ellipse cx="72" cy="65" rx="38" ry="30" fill="#000" opacity="0.15" blur="4"/>
              
              {/* Back flippers */}
              <ellipse cx="38" cy="48" rx="18" ry="10" fill="#14b8a6" opacity="0.9" transform="rotate(-25 38 48)"/>
              <ellipse cx="38" cy="68" rx="18" ry="10" fill="#0d9488" opacity="0.9" transform="rotate(25 38 68)"/>
              
              {/* Shell - main */}
              <ellipse cx="70" cy="58" rx="40" ry="32" fill="url(#shellGradient1)" opacity="0.95"/>
              <ellipse cx="70" cy="58" rx="35" ry="27" fill="#059669" opacity="0.9"/>
              
              {/* Shell pattern - detailed */}
              <circle cx="70" cy="50" r="10" fill="#047857" opacity="0.8"/>
              <circle cx="58" cy="62" r="7" fill="#065f46" opacity="0.7"/>
              <circle cx="82" cy="62" r="7" fill="#065f46" opacity="0.7"/>
              <circle cx="70" cy="68" r="6" fill="#064e3b" opacity="0.6"/>
              <circle cx="62" cy="55" r="5" fill="#064e3b" opacity="0.5"/>
              <circle cx="78" cy="55" r="5" fill="#064e3b" opacity="0.5"/>
              
              {/* Shell highlights */}
              <ellipse cx="65" cy="48" rx="8" ry="6" fill="#6ee7b7" opacity="0.3"/>
              <ellipse cx="75" cy="52" rx="6" ry="4" fill="#6ee7b7" opacity="0.2"/>
              
              {/* Head */}
              <ellipse cx="102" cy="55" rx="14" ry="12" fill="#14b8a6" opacity="0.95"/>
              <circle cx="108" cy="52" r="2.5" fill="#1e293b"/>
              <circle cx="109" cy="51" r="1" fill="#fff" opacity="0.8"/>
              
              {/* Mouth */}
              <path d="M 108 58 Q 110 60, 112 58" stroke="#0d9488" strokeWidth="1.5" fill="none" opacity="0.6"/>
              
              {/* Front flippers */}
              <ellipse cx="92" cy="46" rx="14" ry="7" fill="#14b8a6" opacity="0.9" transform="rotate(-20 92 46)"/>
              <ellipse cx="92" cy="70" rx="14" ry="7" fill="#0d9488" opacity="0.9" transform="rotate(20 92 70)"/>
              
              {/* Flipper details */}
              <line x1="88" y1="46" x2="96" y2="46" stroke="#0d9488" strokeWidth="1" opacity="0.4"/>
              <line x1="88" y1="70" x2="96" y2="70" stroke="#0d9488" strokeWidth="1" opacity="0.4"/>
            </g>
          </svg>
        </div>

        {/* Turtle 2 - Medium, swimming left with slight angle */}
        <div className="absolute top-[58%] -right-32 animate-swim-medium">
          <svg width="100" height="85" viewBox="0 0 100 85" className="drop-shadow-xl hidden md:block transform scale-x-[-1]">
            <defs>
              <radialGradient id="shellGradient2" cx="50%" cy="40%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="1"/>
                <stop offset="100%" stopColor="#0369a1" stopOpacity="0.8"/>
              </radialGradient>
            </defs>
            <g className="animate-gentle-bob animation-delay-2000">
              {/* Back flippers */}
              <ellipse cx="27" cy="34" rx="13" ry="7" fill="#06b6d4" opacity="0.9" transform="rotate(-25 27 34)"/>
              <ellipse cx="27" cy="51" rx="13" ry="7" fill="#0891b2" opacity="0.9" transform="rotate(25 27 51)"/>
              
              {/* Shell */}
              <ellipse cx="50" cy="42" rx="28" ry="22" fill="url(#shellGradient2)" opacity="0.95"/>
              <ellipse cx="50" cy="42" rx="24" ry="19" fill="#0284c7"/>
              
              {/* Shell pattern */}
              <circle cx="50" cy="38" r="7" fill="#0369a1" opacity="0.8"/>
              <circle cx="42" cy="46" r="5" fill="#075985" opacity="0.7"/>
              <circle cx="58" cy="46" r="5" fill="#075985" opacity="0.7"/>
              <circle cx="50" cy="48" r="4" fill="#0c4a6e" opacity="0.6"/>
              
              {/* Highlight */}
              <ellipse cx="46" cy="36" rx="6" ry="4" fill="#7dd3fc" opacity="0.3"/>
              
              {/* Head */}
              <ellipse cx="72" cy="40" rx="11" ry="9" fill="#06b6d4" opacity="0.95"/>
              <circle cx="77" cy="38" r="2" fill="#1e293b"/>
              <circle cx="78" cy="37" r="0.8" fill="#fff" opacity="0.8"/>
              
              {/* Front flippers */}
              <ellipse cx="65" cy="33" rx="11" ry="5" fill="#06b6d4" opacity="0.9" transform="rotate(-20 65 33)"/>
              <ellipse cx="65" cy="52" rx="11" ry="5" fill="#0891b2" opacity="0.9" transform="rotate(20 65 52)"/>
            </g>
          </svg>
        </div>

        {/* Turtle 3 - Small, swimming right */}
        <div className="absolute top-[75%] left-[15%] animate-swim-slow-delayed hidden xl:block">
          <svg width="70" height="60" viewBox="0 0 70 60" className="drop-shadow-lg opacity-80">
            <g className="animate-gentle-bob animation-delay-4000">
              <ellipse cx="35" cy="30" rx="20" ry="16" fill="#10b981" opacity="0.9"/>
              <ellipse cx="35" cy="30" rx="17" ry="13" fill="#059669"/>
              <circle cx="35" cy="27" r="5" fill="#047857" opacity="0.7"/>
              <circle cx="30" cy="32" r="3" fill="#065f46" opacity="0.6"/>
              <circle cx="40" cy="32" r="3" fill="#065f46" opacity="0.6"/>
              <ellipse cx="50" cy="28" rx="8" ry="6" fill="#14b8a6"/>
              <circle cx="54" cy="27" r="1.5" fill="#1e293b"/>
              <ellipse cx="45" cy="24" rx="8" ry="4" fill="#14b8a6" transform="rotate(-20 45 24)"/>
              <ellipse cx="45" cy="36" rx="8" ry="4" fill="#14b8a6" transform="rotate(20 45 36)"/>
            </g>
          </svg>
        </div>
      </div>

      {/* Enhanced Jellyfish with bioluminescence */}
      <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden">
        {/* Jellyfish 1 - Large purple with glow */}
        <div className="absolute top-[20%] right-[12%] animate-float-jellyfish hidden lg:block">
          <svg width="80" height="130" viewBox="0 0 80 130" className="drop-shadow-2xl filter">
            <defs>
              <radialGradient id="jelly1" cx="50%" cy="30%">
                <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.95"/>
                <stop offset="70%" stopColor="#e879f9" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#d946ef" stopOpacity="0.3"/>
              </radialGradient>
              <radialGradient id="jelly1glow" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#f0abfc" stopOpacity="0"/>
              </radialGradient>
              <filter id="jellyGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Outer glow */}
            <ellipse cx="40" cy="30" rx="38" ry="28" fill="url(#jelly1glow)" opacity="0.6"/>
            
            {/* Bell */}
            <ellipse cx="40" cy="30" rx="30" ry="24" fill="url(#jelly1)" filter="url(#jellyGlow)"/>
            <ellipse cx="40" cy="30" rx="25" ry="20" fill="#f0abfc" opacity="0.4"/>
            <ellipse cx="40" cy="28" rx="20" ry="16" fill="#fde4ff" opacity="0.3"/>
            
            {/* Inner membrane details */}
            <path d="M 25 35 Q 30 42, 40 43 T 55 35" fill="#e879f9" opacity="0.3"/>
            <circle cx="35" cy="28" r="4" fill="#fff" opacity="0.4"/>
            <circle cx="45" cy="30" r="3" fill="#fff" opacity="0.3"/>
            
            {/* Tentacles with gradient */}
            <path d="M 20 45 Q 18 70, 15 95 Q 14 110, 12 125" stroke="#f0abfc" strokeWidth="3" fill="none" opacity="0.7" className="animate-sway" strokeLinecap="round"/>
            <path d="M 30 48 Q 29 75, 27 100 Q 26 115, 24 128" stroke="#f0abfc" strokeWidth="2.5" fill="none" opacity="0.7" className="animate-sway animation-delay-1000" strokeLinecap="round"/>
            <path d="M 40 50 Q 40 78, 40 105 Q 40 118, 40 130" stroke="#e879f9" strokeWidth="2.5" fill="none" opacity="0.8" className="animate-sway animation-delay-500" strokeLinecap="round"/>
            <path d="M 50 48 Q 51 75, 53 100 Q 54 115, 56 128" stroke="#e879f9" strokeWidth="2.5" fill="none" opacity="0.7" className="animate-sway animation-delay-1500" strokeLinecap="round"/>
            <path d="M 60 45 Q 62 70, 65 95 Q 66 110, 68 125" stroke="#d946ef" strokeWidth="3" fill="none" opacity="0.7" className="animate-sway animation-delay-750" strokeLinecap="round"/>
            
            {/* Bioluminescent spots */}
            <circle cx="30" cy="26" r="3" fill="#fde4ff" opacity="0.8" className="animate-pulse-glow"/>
            <circle cx="45" cy="28" r="2.5" fill="#fde4ff" opacity="0.7" className="animate-pulse-glow animation-delay-1000"/>
            <circle cx="38" cy="35" r="2" fill="#fff" opacity="0.6" className="animate-pulse-glow animation-delay-2000"/>
          </svg>
        </div>

        {/* Jellyfish 2 - Medium cyan */}
        <div className="absolute top-[42%] left-[8%] animate-float-jellyfish-slow animation-delay-3000 hidden md:block">
          <svg width="65" height="105" viewBox="0 0 65 105" className="drop-shadow-xl opacity-85">
            <defs>
              <radialGradient id="jelly2" cx="50%" cy="30%">
                <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.9"/>
                <stop offset="70%" stopColor="#22d3ee" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3"/>
              </radialGradient>
              <radialGradient id="jelly2glow" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.7"/>
                <stop offset="100%" stopColor="#67e8f9" stopOpacity="0"/>
              </radialGradient>
            </defs>
            
            {/* Glow */}
            <ellipse cx="32.5" cy="25" rx="30" ry="22" fill="url(#jelly2glow)" opacity="0.6"/>
            
            {/* Bell */}
            <ellipse cx="32.5" cy="25" rx="24" ry="19" fill="url(#jelly2)"/>
            <ellipse cx="32.5" cy="25" rx="20" ry="16" fill="#67e8f9" opacity="0.4"/>
            <ellipse cx="32.5" cy="23" rx="16" ry="13" fill="#cffafe" opacity="0.3"/>
            
            {/* Tentacles */}
            <path d="M 15 38 Q 13 58, 10 78 Q 9 88, 7 98" stroke="#67e8f9" strokeWidth="2.5" fill="none" opacity="0.7" className="animate-sway animation-delay-500" strokeLinecap="round"/>
            <path d="M 24 40 Q 23 62, 21 82 Q 20 91, 18 100" stroke="#67e8f9" strokeWidth="2" fill="none" opacity="0.7" className="animate-sway animation-delay-1500" strokeLinecap="round"/>
            <path d="M 32.5 42 Q 32.5 64, 32.5 86 Q 32.5 94, 32.5 102" stroke="#22d3ee" strokeWidth="2" fill="none" opacity="0.8" className="animate-sway animation-delay-1000" strokeLinecap="round"/>
            <path d="M 41 40 Q 42 62, 44 82 Q 45 91, 47 100" stroke="#22d3ee" strokeWidth="2" fill="none" opacity="0.7" className="animate-sway animation-delay-2000" strokeLinecap="round"/>
            <path d="M 50 38 Q 52 58, 55 78 Q 56 88, 58 98" stroke="#06b6d4" strokeWidth="2.5" fill="none" opacity="0.7" className="animate-sway animation-delay-250" strokeLinecap="round"/>
            
            {/* Spots */}
            <circle cx="28" cy="22" r="2.5" fill="#ecfeff" opacity="0.8" className="animate-pulse-glow animation-delay-500"/>
            <circle cx="37" cy="24" r="2" fill="#ecfeff" opacity="0.7" className="animate-pulse-glow animation-delay-1500"/>
          </svg>
        </div>

        {/* Jellyfish 3 - Small indigo */}
        <div className="absolute top-[68%] right-[22%] animate-float-jellyfish animation-delay-5000 hidden lg:block">
          <svg width="55" height="90" viewBox="0 0 55 90" className="drop-shadow-lg opacity-75">
            <defs>
              <radialGradient id="jelly3" cx="50%" cy="30%">
                <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.9"/>
                <stop offset="70%" stopColor="#8b5cf6" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.3"/>
              </radialGradient>
            </defs>
            
            {/* Bell */}
            <ellipse cx="27.5" cy="22" rx="22" ry="17" fill="url(#jelly3)"/>
            <ellipse cx="27.5" cy="22" rx="18" ry="14" fill="#a78bfa" opacity="0.4"/>
            <ellipse cx="27.5" cy="20" rx="14" ry="11" fill="#ddd6fe" opacity="0.3"/>
            
            {/* Tentacles */}
            <path d="M 13 33 Q 11 50, 8 67 Q 7 75, 5 83" stroke="#a78bfa" strokeWidth="2" fill="none" opacity="0.7" className="animate-sway" strokeLinecap="round"/>
            <path d="M 20 35 Q 19 53, 17 70 Q 16 77, 14 85" stroke="#a78bfa" strokeWidth="1.8" fill="none" opacity="0.7" className="animate-sway animation-delay-1000" strokeLinecap="round"/>
            <path d="M 27.5 36 Q 27.5 55, 27.5 73 Q 27.5 80, 27.5 87" stroke="#8b5cf6" strokeWidth="1.8" fill="none" opacity="0.8" className="animate-sway animation-delay-500" strokeLinecap="round"/>
            <path d="M 35 35 Q 36 53, 38 70 Q 39 77, 41 85" stroke="#8b5cf6" strokeWidth="1.8" fill="none" opacity="0.7" className="animate-sway animation-delay-1500" strokeLinecap="round"/>
            <path d="M 42 33 Q 44 50, 47 67 Q 48 75, 50 83" stroke="#7c3aed" strokeWidth="2" fill="none" opacity="0.7" className="animate-sway animation-delay-750" strokeLinecap="round"/>
            
            {/* Spots */}
            <circle cx="24" cy="20" r="2" fill="#ede9fe" opacity="0.8" className="animate-pulse-glow"/>
            <circle cx="31" cy="21" r="1.5" fill="#ede9fe" opacity="0.7" className="animate-pulse-glow animation-delay-1000"/>
          </svg>
        </div>

        {/* Mobile-friendly smaller jellyfish */}
        <div className="absolute top-[30%] right-[5%] animate-float-jellyfish md:hidden">
          <svg width="35" height="60" viewBox="0 0 35 60" className="drop-shadow-md opacity-60">
            <defs>
              <radialGradient id="jellyMobile" cx="50%" cy="30%">
                <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#e879f9" stopOpacity="0.3"/>
              </radialGradient>
            </defs>
            <ellipse cx="17.5" cy="14" rx="14" ry="11" fill="url(#jellyMobile)"/>
            <ellipse cx="17.5" cy="14" rx="11" ry="9" fill="#f0abfc" opacity="0.3"/>
            <path d="M 8 20 Q 6 35, 4 50" stroke="#f0abfc" strokeWidth="1.5" fill="none" opacity="0.6" className="animate-sway" strokeLinecap="round"/>
            <path d="M 13 22 Q 12 37, 10 52" stroke="#f0abfc" strokeWidth="1.2" fill="none" opacity="0.6" className="animate-sway animation-delay-1000" strokeLinecap="round"/>
            <path d="M 17.5 23 Q 17.5 39, 17.5 54" stroke="#e879f9" strokeWidth="1.2" fill="none" opacity="0.7" className="animate-sway animation-delay-500" strokeLinecap="round"/>
            <path d="M 22 22 Q 23 37, 25 52" stroke="#e879f9" strokeWidth="1.2" fill="none" opacity="0.6" className="animate-sway animation-delay-1500" strokeLinecap="round"/>
            <path d="M 27 20 Q 29 35, 31 50" stroke="#d946ef" strokeWidth="1.5" fill="none" opacity="0.6" className="animate-sway animation-delay-750" strokeLinecap="round"/>
            <circle cx="15" cy="13" r="1.5" fill="#fde4ff" opacity="0.7" className="animate-pulse-glow"/>
          </svg>
        </div>

        {/* Additional small jellyfish for depth */}
        <div className="absolute top-[15%] left-[35%] animate-float-jellyfish-slow hidden xl:block opacity-50">
          <svg width="40" height="65" viewBox="0 0 40 65">
            <ellipse cx="20" cy="15" rx="16" ry="12" fill="#22d3ee" opacity="0.6"/>
            <path d="M 10 22 Q 8 38, 6 54" stroke="#22d3ee" strokeWidth="1.5" fill="none" opacity="0.5" className="animate-sway"/>
            <path d="M 20 24 Q 20 40, 20 56" stroke="#06b6d4" strokeWidth="1.5" fill="none" opacity="0.6" className="animate-sway animation-delay-1000"/>
            <path d="M 30 22 Q 32 38, 34 54" stroke="#0891b2" strokeWidth="1.5" fill="none" opacity="0.5" className="animate-sway animation-delay-500"/>
          </svg>
        </div>
      </div>

      {/* Coral silhouettes at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-14 pointer-events-none hidden sm:block">
        <svg width="100%" height="120" viewBox="0 0 1440 120" preserveAspectRatio="none" className="opacity-20">
          <path d="M0,80 Q120,60 240,75 T480,70 T720,80 T960,75 T1200,70 T1440,80 L1440,120 L0,120 Z" fill="#0c4a6e"/>
          <circle cx="150" cy="85" r="15" fill="#0e7490"/>
          <circle cx="180" cy="95" r="10" fill="#0e7490"/>
          <circle cx="600" cy="80" r="20" fill="#0e7490"/>
          <circle cx="630" cy="90" r="12" fill="#0e7490"/>
          <circle cx="1100" cy="85" r="18" fill="#0e7490"/>
          <circle cx="1130" cy="95" r="11" fill="#0e7490"/>
        </svg>
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8">
          

            {/* Main Heading - Enhanced with gradient */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight">
              <span className="block text-white drop-shadow-2xl mb-2 sm:mb-3 animate-fade-in-up">
                Dive Into
              </span>
              <span className="block bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl animate-fade-in-up animation-delay-500 filter brightness-125">
                Tote It
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cyan-100/90 mt-2 font-semibold animate-fade-in-up animation-delay-1000">
                Ocean of Possibilities
              </span>
            </h1>

            {/* Description - Enhanced */}
            <p className="text-base sm:text-lg md:text-xl text-cyan-50/95 max-w-xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0 drop-shadow-lg animate-fade-in-up animation-delay-1500">
              Explore the depths of premium shopping. Discover curated treasures, 
              unbeatable values, and waves of exceptional service.
            </p>

            {/* CTA Buttons - Enhanced with better effects */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0 animate-fade-in-up animation-delay-2000">
              <Link 
                href="/products" 
                className="group relative inline-flex items-center justify-center space-x-2 sm:space-x-3 bg-gradient-to-r from-white to-cyan-50 text-blue-700 font-bold px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-300/60 active:scale-95 sm:hover:scale-105 transition-all duration-300 overflow-hidden touch-manipulation border border-cyan-100"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-100 via-blue-100 to-purple-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <FiShoppingBag className="text-xl sm:text-2xl relative z-10 group-hover:rotate-12 transition-transform" />
                <span className="relative z-10 text-base sm:text-lg">Explore Collection</span>
                <FiArrowRight className="text-xl sm:text-2xl relative z-10 group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <Link 
                href="/products" 
                className="group inline-flex items-center justify-center space-x-2 sm:space-x-3 bg-white/10 text-white font-bold px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl border-2 sm:border-3 border-cyan-300/50 hover:bg-white/20 hover:border-cyan-200 active:bg-white/30 transition-all duration-300 backdrop-blur-md touch-manipulation shadow-xl"
              >
                <FiHeart className="text-lg sm:text-xl group-hover:scale-110 transition-transform" />
                <span className="text-base sm:text-lg">View Treasures</span>
              </Link>
            </div>

            {/* Stats - Enhanced styling */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-lg mx-auto lg:mx-0 pt-4 sm:pt-6 animate-fade-in-up animation-delay-2500">
              <div className="text-center lg:text-left group hover:scale-105 transition-transform">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-1 drop-shadow-lg">10K+</div>
                <div className="text-xs sm:text-sm text-cyan-100/90 font-medium">Ocean Explorers</div>
              </div>
              <div className="text-center lg:text-left group hover:scale-105 transition-transform">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-1 drop-shadow-lg">500+</div>
                <div className="text-xs sm:text-sm text-cyan-100/90 font-medium">Treasures</div>
              </div>
              <div className="text-center lg:text-left group hover:scale-105 transition-transform">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-1 drop-shadow-lg">4.9★</div>
                <div className="text-xs sm:text-sm text-cyan-100/90 font-medium">Dive Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards - Enhanced with ocean theme */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {/* Feature Card 1 */}
              <div className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/30 rounded-2xl lg:rounded-3xl p-4 lg:p-6 hover:from-white/25 hover:to-white/10 hover:border-cyan-300/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 animate-float">
                <div className="bg-gradient-to-br from-cyan-400 to-blue-500 w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center mb-3 lg:mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <FiTruck className="text-xl lg:text-2xl text-white" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors">Swift Currents</h3>
                <p className="text-cyan-100/90 text-xs lg:text-sm leading-relaxed">Ride the fast delivery waves to your shore</p>
              </div>

              {/* Feature Card 2 */}
              <div className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/30 rounded-2xl lg:rounded-3xl p-4 lg:p-6 hover:from-white/25 hover:to-white/10 hover:border-purple-300/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 animate-float animation-delay-2000 mt-6 lg:mt-8">
                <div className="bg-gradient-to-br from-purple-400 to-pink-500 w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center mb-3 lg:mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <FiStar className="text-xl lg:text-2xl text-white" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-purple-100 transition-colors">Pearl Quality</h3>
                <p className="text-cyan-100/90 text-xs lg:text-sm leading-relaxed">Only the finest treasures from the deep</p>
              </div>

              {/* Feature Card 3 */}
              <div className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/30 rounded-2xl lg:rounded-3xl p-4 lg:p-6 hover:from-white/25 hover:to-white/10 hover:border-blue-300/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 animate-float animation-delay-4000">
                <div className="bg-gradient-to-br from-blue-400 to-cyan-500 w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center mb-3 lg:mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">Tide-level Prices</h3>
                <p className="text-cyan-100/90 text-xs lg:text-sm leading-relaxed">Competitive values that won't sink your budget</p>
              </div>

              {/* Feature Card 4 */}
              <div className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/30 rounded-2xl lg:rounded-3xl p-4 lg:p-6 hover:from-white/25 hover:to-white/10 hover:border-pink-300/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 animate-float mt-6 lg:mt-8">
                <div className="bg-gradient-to-br from-pink-400 to-rose-500 w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center mb-3 lg:mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <FiHeart className="text-xl lg:text-2xl text-white" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-pink-100 transition-colors">Endless Depths</h3>
                <p className="text-cyan-100/90 text-xs lg:text-sm leading-relaxed">24/7 support as constant as the tides</p>
              </div>
            </div>
          </div>

          {/* Mobile Feature Icons - Enhanced */}
          <div className="md:hidden grid grid-cols-2 gap-3 px-4 mt-4">
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/30 rounded-xl p-4 text-center hover:scale-105 transition-transform">
              <div className="bg-gradient-to-br from-cyan-400 to-blue-500 w-12 h-12 rounded-lg mx-auto mb-2 flex items-center justify-center shadow-lg">
                <FiTruck className="text-2xl text-white" />
              </div>
              <p className="text-white text-xs font-semibold">Swift Delivery</p>
            </div>
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/30 rounded-xl p-4 text-center hover:scale-105 transition-transform">
              <div className="bg-gradient-to-br from-purple-400 to-pink-500 w-12 h-12 rounded-lg mx-auto mb-2 flex items-center justify-center shadow-lg">
                <FiStar className="text-2xl text-white" />
              </div>
              <p className="text-white text-xs font-semibold">Pearl Quality</p>
            </div>
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/30 rounded-xl p-4 text-center hover:scale-105 transition-transform">
              <div className="bg-gradient-to-br from-blue-400 to-cyan-500 w-12 h-12 rounded-lg mx-auto mb-2 flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-white text-xs font-semibold">Best Prices</p>
            </div>
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/30 rounded-xl p-4 text-center hover:scale-105 transition-transform">
              <div className="bg-gradient-to-br from-pink-400 to-rose-500 w-12 h-12 rounded-lg mx-auto mb-2 flex items-center justify-center shadow-lg">
                <FiHeart className="text-2xl text-white" />
              </div>
              <p className="text-white text-xs font-semibold">24/7 Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced ocean waves at bottom with multiple layers */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          {/* Wave layer 1 - darkest */}
          <path 
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="rgba(8, 51, 68, 0.9)"
            className="animate-wave-slow"
          />
          {/* Wave layer 2 - medium */}
          <path 
            d="M0 120L48 112.5C96 105 192 90 288 82.5C384 75 480 75 576 78.8C672 82.5 768 90 864 93.8C960 97.5 1056 97.5 1152 93.8C1248 90 1344 82.5 1392 78.8L1440 75V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" 
            fill="rgba(12, 74, 110, 0.7)"
            className="animate-wave"
          />
          {/* Wave layer 3 - lightest */}
          <path 
            d="M0 120L40 115C80 110 160 100 240 95C320 90 400 90 480 92.5C560 95 640 100 720 102.5C800 105 880 105 960 102.5C1040 100 1120 95 1200 92.5C1280 90 1360 90 1400 90L1440 90V120H1400C1360 120 1280 120 1200 120C1120 120 1040 120 960 120C880 120 800 120 720 120C640 120 560 120 480 120C400 120 320 120 240 120C160 120 80 120 40 120H0Z" 
            fill="rgb(249, 250, 251)"
            className="animate-wave-fast"
          />
        </svg>
      </div>
    </div>
  )
}