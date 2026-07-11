import Link from 'next/link';

const SeashellButton = ({ href, label, delay = "0s" }) => {
  return (
    <Link 
      href={href} 
      className="group relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 flex items-center justify-center transition-all duration-1000"
      style={{ 
        animation: `floating 7s ease-in-out infinite ${delay}`,
        WebkitBackfaceVisibility: 'hidden' // Improves mobile performance
      }}
    >
      {/* Dynamic Aura Glow */}
      <div className="absolute inset-0 bg-cyan-300/20 blur-[40px] md:blur-[60px] rounded-full scale-50 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-1000" />

      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full drop-shadow-[0_10px_15px_rgba(0,0,0,0.4)] md:drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-110"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id={`pearl-grad-${label}`} cx="50%" cy="30%" r="70%">
            <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#e0f7fa', stopOpacity: 0.95 }} />
            <stop offset="100%" style={{ stopColor: '#4dd0e1', stopOpacity: 0.8 }} />
          </radialGradient>
          
          <linearGradient id="glare" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor="white" stopOpacity="0.6" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
            <animate attributeName="x1" from="-150%" to="150%" dur="7s" repeatCount="indefinite" />
          </linearGradient>
        </defs>
        
        <path
          fill={`url(#pearl-grad-${label})`}
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1"
          d="M100,185 C80,185 75,170 70,165 C30,150 5,110 10,70 C15,30 40,10 70,15 C85,5 115,5 130,15 C160,10 185,30 190,70 C195,110 170,150 130,165 C125,170 120,185 100,185 Z"
        />

        <path fill="url(#glare)" d="M100,185 C80,185 75,170 70,165 C30,150 5,110 10,70 C15,30 40,10 70,15 C85,5 115,5 130,15 C160,10 185,30 190,70 C195,110 170,150 130,165 C125,170 120,185 100,185 Z" />

        <g stroke="rgba(255,215,0,0.15)" strokeWidth="0.4" fill="none">
          {[30, 65, 100, 135, 170].map((x, i) => (
             <path key={i} d={`M100,185 Q${x},90 ${x},20`} />
          ))}
        </g>
      </svg>

      <span className="relative z-10 font-serif text-cyan-900/90 group-hover:text-cyan-950 font-bold text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] md:tracking-[0.3em] mt-2 transition-all duration-500">
        {label}
      </span>
    </Link>
  );
};

export default function MobileFriendlySeaHero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#001E2B] overflow-hidden px-4 py-20 md:py-0">
      
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#005f73] via-[#002b36] to-[#001219]" />
        
        {/* Animated Caustics - Optimized for mobile */}
        <div className="caustics-container absolute inset-0 opacity-30 mix-blend-screen opacity-20" 
             style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/cubes.png')`, backgroundSize: '250px' }} />
        
        {/* God Rays */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08)_0%,transparent_50%)]" />
      </div>

      {/* Title Area */}
      <div className="z-10 text-center mb-10 md:mb-20">
        <h2 className="text-cyan-400/70 uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-4 animate-pulse">
          Crafted by the Tide
        </h2>
        <h1 className="text-5xl sm:text-7xl md:text-[9rem] font-serif text-white tracking-tighter leading-none drop-shadow-2xl">
          Tote It
        </h1>
        <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-6" />
      </div>

      {/* Shell Grid - Responsive Stack */}
      <div className="z-10 flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-12 w-full max-w-5xl">
        
        {/* Mobile: Left Aligned / Desktop: Horizontal */}
        <div className="md:order-1 -translate-x-10 md:translate-x-0">
          <SeashellButton href="/shop" label="Bags" delay="0s" />
        </div>

        {/* Mobile: Right Aligned / Desktop: Elevated Center */}
        <div className="md:order-2 md:-mt-24 translate-x-10 md:translate-x-0">
          <SeashellButton href="/limited" label="Luxury" delay="0.6s" />
        </div>

        {/* Mobile: Left Aligned / Desktop: Horizontal */}
        <div className="md:order-3 -translate-x-10 md:translate-x-0">
          <SeashellButton href="/ethos" label="Ethos" delay="1.2s" />
        </div>
      </div>

      {/* Bottom Waves - Height adjusted for mobile */}
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
        <svg className="w-full h-20 sm:h-32 md:h-40" viewBox="0 24 150 28" preserveAspectRatio="none">
          <defs>
            <path id="wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax-waves">
            <use href="#wave" x="48" y="0" fill="rgba(255,255,255,0.05)" />
            <use href="#wave" x="48" y="3" fill="rgba(0,180,216,0.1)" />
            <use href="#wave" x="48" y="5" fill="rgba(255,255,255,0.1)" />
            <use href="#wave" x="48" y="7" fill="rgba(255,255,255,0.2)" />
          </g>
        </svg>
      </div>

      <style jsx>{`
        @keyframes floating {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(0, -15px, 0) rotate(2deg); }
        }
        @media (min-width: 768px) {
          @keyframes floating {
            0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
            50% { transform: translate3d(0, -30px, 0) rotate(2deg); }
          }
        }
        .caustics-container {
          animation: caustic-shift 30s linear infinite;
        }
        @keyframes caustic-shift {
          from { background-position: 0 0; }
          to { background-position: 500px 500px; }
        }
        .parallax-waves > use {
          animation: move-wave 20s cubic-bezier(.55,.5,.45,.5) infinite;
        }
        @keyframes move-wave {
          0% { transform: translate3d(-90px,0,0); }
          100% { transform: translate3d(85px,0,0); }
        }
      `}</style>
    </section>
  );
}