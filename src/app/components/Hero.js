import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight, FiShoppingBag, FiTruck, FiStar, FiHeart } from 'react-icons/fi'

export default function Hero() {
  return (
    <div className="relative min-h-[100vh] sm:min-h-[90vh] lg:min-h-[85vh] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/95 via-emerald-700/90 to-teal-600/95 z-10"></div>
      
      {/* Decorative elements - Hidden on mobile for performance */}
      <div className="absolute inset-0 z-0 hidden sm:block">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.3),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(20,184,166,0.3),transparent_50%)]"></div>
      </div>

      {/* Floating shapes - Optimized for mobile */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-emerald-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-20 sm:top-40 right-5 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-teal-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-emerald-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Premium Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-200 px-3 sm:px-4 py-2 rounded-full shadow-lg animate-fade-in">
              <FiStar className="text-emerald-900 text-sm sm:text-base" />
              <span className="text-xs sm:text-sm font-bold text-emerald-900">Premium Quality Products</span>
            </div>

            {/* Main Heading - Responsive font sizes */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight">
              <span className="block text-white drop-shadow-2xl mb-2 sm:mb-3">
                Shop With
              </span>
              <span className="block bg-gradient-to-r from-yellow-200 via-yellow-100 to-emerald-100 bg-clip-text text-transparent drop-shadow-lg">
                Tote It
              </span>
            </h1>

            {/* Description - Responsive text */}
            <p className="text-base sm:text-lg md:text-xl text-emerald-50 max-w-xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0">
              Experience the joy of premium shopping. Curated collections, 
              unbeatable prices, and exceptional service - all in one place.
            </p>

            {/* CTA Buttons - Stack on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0">
              <Link 
                href="/products" 
                className="group relative inline-flex items-center justify-center space-x-2 sm:space-x-3 bg-white text-emerald-700 font-bold px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-emerald-300/50 active:scale-95 sm:hover:scale-105 transition-all duration-300 overflow-hidden touch-manipulation"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-emerald-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <FiShoppingBag className="text-xl sm:text-2xl relative z-10 group-hover:rotate-12 transition-transform" />
                <span className="relative z-10 text-base sm:text-lg">Start Shopping</span>
                <FiArrowRight className="text-xl sm:text-2xl relative z-10 group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <Link 
                href="/products" 
                className="inline-flex items-center justify-center space-x-2 sm:space-x-3 bg-transparent text-white font-bold px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl border-2 sm:border-3 border-white/50 hover:bg-white/10 active:bg-white/20 hover:border-white transition-all duration-300 backdrop-blur-sm touch-manipulation"
              >
                <FiHeart className="text-lg sm:text-xl" />
                <span className="text-base sm:text-lg">View Favorites</span>
              </Link>
            </div>

            {/* Stats - Responsive grid */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-lg mx-auto lg:mx-0 pt-4 sm:pt-6">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-yellow-300 mb-1">10K+</div>
                <div className="text-xs sm:text-sm text-emerald-100">Happy Customers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-yellow-300 mb-1">500+</div>
                <div className="text-xs sm:text-sm text-emerald-100">Products</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-yellow-300 mb-1">4.9★</div>
                <div className="text-xs sm:text-sm text-emerald-100">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards - Hidden on mobile, show on tablet+ */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {/* Feature Card 1 */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl lg:rounded-3xl p-4 lg:p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-float">
                <div className="bg-yellow-400 w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center mb-3 lg:mb-4">
                  <FiTruck className="text-xl lg:text-2xl text-emerald-900" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-white mb-2">Fast Delivery</h3>
                <p className="text-emerald-100 text-xs lg:text-sm">Get your orders delivered quickly and safely</p>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl lg:rounded-3xl p-4 lg:p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-float animation-delay-2000 mt-6 lg:mt-8">
                <div className="bg-yellow-400 w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center mb-3 lg:mb-4">
                  <FiStar className="text-xl lg:text-2xl text-emerald-900" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-white mb-2">Top Quality</h3>
                <p className="text-emerald-100 text-xs lg:text-sm">Only the best products make it to our store</p>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl lg:rounded-3xl p-4 lg:p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-float animation-delay-4000">
                <div className="bg-yellow-400 w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center mb-3 lg:mb-4">
                  <svg className="w-6 h-6 lg:w-8 lg:h-8 text-emerald-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-white mb-2">Best Prices</h3>
                <p className="text-emerald-100 text-xs lg:text-sm">Competitive pricing on all our products</p>
              </div>

              {/* Feature Card 4 */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl lg:rounded-3xl p-4 lg:p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-float mt-6 lg:mt-8">
                <div className="bg-yellow-400 w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center mb-3 lg:mb-4">
                  <FiHeart className="text-xl lg:text-2xl text-emerald-900" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-white mb-2">24/7 Support</h3>
                <p className="text-emerald-100 text-xs lg:text-sm">We're here to help whenever you need us</p>
              </div>
            </div>
          </div>

          {/* Mobile Feature Icons - Show only on mobile */}
          <div className="md:hidden grid grid-cols-2 gap-3 px-4 mt-4">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 text-center">
              <FiTruck className="text-3xl text-yellow-300 mx-auto mb-2" />
              <p className="text-white text-xs font-semibold">Fast Delivery</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 text-center">
              <FiStar className="text-3xl text-yellow-300 mx-auto mb-2" />
              <p className="text-white text-xs font-semibold">Top Quality</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 text-center">
              <svg className="w-8 h-8 text-yellow-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-white text-xs font-semibold">Best Prices</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 text-center">
              <FiHeart className="text-3xl text-yellow-300 mx-auto mb-2" />
              <p className="text-white text-xs font-semibold">24/7 Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave - Responsive */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="rgb(249, 250, 251)"
          />
        </svg>
      </div>
    </div>
  )
}