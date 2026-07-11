import Link from 'next/link';

const SeashellButton = ({ href, label, delay = "0s" }) => {
  return (
    <Link 
      href={href} 
      className="group relative w-64 h-64 flex items-center justify-center transition-all duration-1000"
      style={{ animation: `floating 7s ease-in-out infinite ${delay}` }}
    >
      {/* Dynamic Aura Glow */}
      <div className="absolute inset-0 bg-cyan-300/20 blur-[60px] rounded-full scale-50 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-1000" />

      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-110"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Glass-Pearl Gradient */}
          <radialGradient id={`pearl-grad-${label}`} cx="50%" cy="30%" r="70%">
            <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#e0f7fa', stopOpacity: 0.95 }} />
            <stop offset="90%" style={{ stopColor: '#b2ebf2', stopOpacity: 0.9 }} />
            <stop offset="100%" style={{ stopColor: '#4dd0e1', stopOpacity: 0.8 }} />
          </radialGradient>
          
          {/* Light Reflection Mask */}
          <linearGradient id="glare" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="45%" stopColor="white" stopOpacity="0.4" />
            <stop offset="50%" stopColor="white" stopOpacity="0.8" />
            <stop offset="55%" stopColor="white" stopOpacity="0.4" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
            <animate attributeName="x1" from="-150%" to="150%" dur="7s" repeatCount="indefinite" />
          </linearGradient>
        </defs>
        
        {/* The Scallop Body */}
        <path
          className="transition-all duration-700 group-hover:stroke-cyan-200"
          fill={`url(#pearl-grad-${label})`}
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1"
          d="M100,185 
             C80,185 75,170 70,165 C30,150 5,110 10,70 C15,30 40,10 70,15 
             C85,5 115,5 130,15 C160,10 185,30 190,70 C195,110 170,150 130,165 
             C125,170 120,185 100,185 Z"
        />

        {/* Shimmer Glare Overlay */}
        <path fill="url(#glare)" d="M100,185 C80,185 75,170 70,165 C30,150 5,110 10,70 C15,35 45,15 75,20 C85,10 115,10 125,20 C160,10 185,30 190,70 C195,110 170,150 130,165 C125,170 120,185 100,185 Z" />

        {/* Intricate Golden Ribbing */}
        <g stroke="rgba(255,215,0,0.2)" strokeWidth="0.4" fill="none">
          {[15, 30, 45, 65, 85, 100, 115, 135, 155, 170, 185].map((x, i) => (
             <path key={i} d={`M100,185 Q${x},90 ${x},20`} />
          ))}
        </g>
      </svg>

      {/* Button Text */}
      <span className="relative z-10 font-serif text-cyan-900/80 group-hover:text-cyan-950 font-bold text-lg uppercase tracking-[0.3em] mt-4 transition-all duration-500">
        {label}
      </span>
    </Link>
  );
};

export default function UltraPremiumSeaHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#001E2B] overflow-hidden">
      
      {/* 1. CAUSTIC LIGHTING LAYER (The Shimmering Net) */}
      <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
         <div className="caustics-container absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat" />
      </div>

      {/* 2. GRADIENT DEPTH LAYER */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#005f73] via-[#002b36] to-[#001219]" />
        {/* God Rays */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      </div>

      {/* 3. FLOATING PARTICLES (Marine Snow) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="particle absolute bg-white/20 rounded-full blur-[1px]"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-particle ${Math.random() * 20 + 10}s infinite linear`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* 4. CONTENT */}
      <div className="z-10 text-center mb-12 md:mb-24 px-4">
        <h2 className="text-cyan-400/60 uppercase tracking-[0.6em] text-[10px] md:text-xs font-black mb-6 animate-pulse">
          Crafted by the Tide
        </h2>
        <h1 className="text-8xl md:text-[10rem] font-serif text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-cyan-200/50 tracking-tighter leading-none drop-shadow-2xl">
          Tote It
        </h1>
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-8" />
      </div>

      {/* 5. SHELL NAVIGATION */}
      <div className="z-10 flex flex-col md:flex-row items-center gap-2 md:gap-12">
        <SeashellButton href="/shop" label="Bags" delay="0s" />
        <div className="md:-mt-20 transform">
            <SeashellButton href="/limited" label="Limited" delay="0.6s" />
        </div>
        <SeashellButton href="/ethos" label="Ethos" delay="1.2s" />
      </div>

      {/* 6. BOTTOM WAVES (Glassy Foam) */}
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none backdrop-blur-[2px]">
        <svg className="w-full h-32" viewBox="0 24 150 28" preserveAspectRatio="none">
          <defs>
            <path id="wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax-waves">
            <use href="#wave" x="48" y="0" fill="rgba(255,255,255,0.1)" />
            <use href="#wave" x="48" y="3" fill="rgba(0,180,216,0.1)" />
            <use href="#wave" x="48" y="5" fill="rgba(255,255,255,0.2)" />
            <use href="#wave" x="48" y="7" fill="rgba(255,255,255,0.3)" />
          </g>
        </svg>
      </div>

      <style jsx>{`
        @keyframes floating {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(2deg); }
        }
        @keyframes float-particle {
          0% { transform: translate(0, 0); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translate(100px, -100px); opacity: 0; }
        }
        .caustics-container {
          animation: caustic-shift 20s linear infinite;
          background-size: 400px;
        }
        @keyframes caustic-shift {
          from { background-position: 0 0; }
          to { background-position: 400px 400px; }
        }
        .parallax-waves > use {
          animation: move-wave 20s cubic-bezier(.55,.5,.45,.5) infinite;
        }
        .parallax-waves > use:nth-child(1) { animation-delay: -2s; animation-duration: 7s; }
        .parallax-waves > use:nth-child(2) { animation-delay: -3s; animation-duration: 10s; }
        .parallax-waves > use:nth-child(3) { animation-delay: -4s; animation-duration: 13s; }
        .parallax-waves > use:nth-child(4) { animation-delay: -5s; animation-duration: 20s; }
        @keyframes move-wave {
          0% { transform: translate3d(-90px,0,0); }
          100% { transform: translate3d(85px,0,0); }
        }
      `}</style>
    </section>
  );
}