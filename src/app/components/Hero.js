import Link from 'next/link';

const SeashellButton = ({ href, label, delay = "0s" }) => {
  return (
    <Link 
      href={href} 
      className="group relative w-56 h-56 flex items-center justify-center transition-all duration-700 hover:scale-110 active:scale-95"
      style={{ animation: `floating 8s ease-in-out infinite ${delay}` }}
    >
      {/* Glow behind the shell */}
      <div className="absolute inset-0 bg-cyan-400/20 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Iridescent Pearl Gradient */}
          <radialGradient id={`pearl-grad-${label}`} cx="50%" cy="35%" r="60%">
            <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
            <stop offset="40%" style={{ stopColor: '#f0fdfa', stopOpacity: 1 }} /> {/* Mint hint */}
            <stop offset="80%" style={{ stopColor: '#e0f2fe', stopOpacity: 1 }} /> {/* Blue hint */}
            <stop offset="100%" style={{ stopColor: '#bae6fd', stopOpacity: 1 }} />
          </radialGradient>
          
          <linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor="white" stopOpacity="0.6" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
            <animate attributeName="x1" from="-100%" to="100%" dur="4s" repeatCount="indefinite" />
          </linearGradient>
        </defs>
        
        {/* Shell Path */}
        <path
          className="transition-all duration-700 group-hover:brightness-110"
          fill={`url(#pearl-grad-${label})`}
          stroke="#0ea5e9"
          strokeWidth="0.2"
          d="M100,180 
             C85,180 78,165 72,160 C65,160 55,165 45,155 
             C20,135 5,100 10,70 C15,35 45,15 75,20 
             C85,10 115,10 125,20 C155,15 185,35 190,70 
             C195,100 180,135 155,155 C145,165 135,160 128,160 
             C122,165 115,180 100,180 Z"
        />

        {/* Moving Shimmer Overlay */}
        <path fill="url(#shimmer)" d="M100,180 C85,180 78,165 72,160 C65,160 55,165 45,155 C20,135 5,100 10,70 C15,35 45,15 75,20 C85,10 115,10 125,20 C155,15 185,35 190,70 C195,100 180,135 155,155 C145,165 135,160 128,160 C122,165 115,180 100,180 Z" />

        {/* Ribbing */}
        <g stroke="#0369a1" strokeWidth="0.2" fill="none" opacity="0.3">
          {[15, 35, 55, 75, 100, 125, 145, 165, 185].map((x, i) => (
             <path key={i} d={`M100,180 Q${x},100 ${x},25`} />
          ))}
        </g>
      </svg>

      <span className="relative z-10 font-serif text-sky-900 group-hover:text-blue-600 font-semibold text-xl tracking-widest pt-4 transition-colors duration-500">
        {label}
      </span>
    </Link>
  );
};

export default function SeaThemeHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#001219] overflow-hidden">
      
      {/* BACKGROUND LAYER 1: Deep Water Caustics */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#005f73] via-[#0a9396] to-[#e9d8a6]/20" />
        {/* Light Rays Effect */}
        <div className="absolute inset-0 opacity-30" 
             style={{ backgroundImage: `radial-gradient(circle at 50% -20%, #ffffff 0%, transparent 60%)` }} />
      </div>

      {/* BACKGROUND LAYER 2: Floating Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="bubble absolute rounded-full border border-white/20 bg-white/5"
            style={{
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
              left: `${Math.random() * 100}%`,
              bottom: `-50px`,
              animation: `rise ${Math.random() * 10 + 10}s infinite linear`,
              animationDelay: `${Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Header / Brand */}
      <div className="z-10 text-center mb-16 space-y-4">
        <h2 className="text-cyan-200/70 uppercase tracking-[0.5em] text-xs font-bold animate-pulse">
          Oceanic Lifestyle
        </h2>
        <h1 className="text-7xl md:text-9xl font-serif text-white tracking-tighter drop-shadow-2xl">
          Tote It<span className="text-cyan-300">.</span>
        </h1>
        <p className="text-cyan-50/80 font-light tracking-wide max-w-lg mx-auto italic">
          "Where the tide meets the treasure."
        </p>
      </div>

      {/* Shell Grid */}
      <div className="z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <SeashellButton href="/shop" label="Collection" delay="0s" />
        <div className="md:-mt-20 transform hover:scale-105 transition-transform">
          <SeashellButton href="/archive" label="The Pearl" delay="0.5s" />
        </div>
        <SeashellButton href="/story" label="Our Sea" delay="1s" />
      </div>

      {/* FOOTER: Moving Waves */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <svg className="waves w-full h-24 min-h-[100px] max-h-[150px]" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
            <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use href="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>

      <style jsx>{`
        @keyframes floating {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(3deg); }
        }
        @keyframes rise {
          0% { transform: translateY(0); opacity: 0; }
          20% { opacity: 0.5; }
          80% { opacity: 0.5; }
          100% { transform: translateY(-100vh); opacity: 0; }
        }
        .parallax > use {
          animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
        }
        .parallax > use:nth-child(1) { animation-delay: -2s; animation-duration: 7s; }
        .parallax > use:nth-child(2) { animation-delay: -3s; animation-duration: 10s; }
        .parallax > use:nth-child(3) { animation-delay: -4s; animation-duration: 13s; }
        .parallax > use:nth-child(4) { animation-delay: -5s; animation-duration: 20s; }
        
        @keyframes move-forever {
          0% { transform: translate3d(-90px,0,0); }
          100% { transform: translate3d(85px,0,0); }
        }
      `}</style>
    </section>
  );
}