'use client'
import Link from 'next/link'
import Image from 'next/image'
import { FiShoppingCart, FiMenu, FiX, FiHeart, FiUser, FiSearch } from 'react-icons/fi'
import { useState } from 'react'

export default function Navbar({ cartCount = 0 }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <nav className="bg-gradient-to-r from-blue-50/95 via-cyan-50/95 to-blue-50/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b-2 border-cyan-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              {/* Animated ocean gradient ring with wave effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300 animate-ocean-pulse"></div>
              
              {/* Logo container with bubble effect */}
              <div className="relative bg-gradient-to-br from-white to-cyan-50 p-2 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-cyan-200/50">
                
                
                {/* Or use an image logo: */}
                 <Image 
                  src="/logo.png" 
                  alt="Tote It Logo" 
                  width={40} 
                  height={40}
                  className="rounded-xl"
                /> 
              </div>

              {/* Floating bubbles around logo */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-300 rounded-full animate-bubble-float opacity-60"></div>
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-300 rounded-full animate-bubble-float animation-delay-1000 opacity-50"></div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-2xl font-black bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
                Tote It
              </span>
              <span className="text-xs text-blue-600/70 font-semibold -mt-1 tracking-wide">Dive into Shopping</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/" 
              className="px-4 py-2 text-blue-700 hover:text-cyan-600 font-semibold transition-all duration-300 rounded-lg hover:bg-cyan-50/80 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-100/0 via-cyan-100/50 to-cyan-100/0 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity blur-xl"></span>
            </Link>
            <Link 
              href="/products" 
              className="px-4 py-2 text-blue-700 hover:text-cyan-600 font-semibold transition-all duration-300 rounded-lg hover:bg-cyan-50/80 relative group"
            >
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-100/0 via-cyan-100/50 to-cyan-100/0 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity blur-xl"></span>
            </Link>
            <Link 
              href="/about" 
              className="px-4 py-2 text-blue-700 hover:text-cyan-600 font-semibold transition-all duration-300 rounded-lg hover:bg-cyan-50/80 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-100/0 via-cyan-100/50 to-cyan-100/0 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity blur-xl"></span>
            </Link>
            <Link 
              href="/contact" 
              className="px-4 py-2 text-blue-700 hover:text-cyan-600 font-semibold transition-all duration-300 rounded-lg hover:bg-cyan-50/80 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-100/0 via-cyan-100/50 to-cyan-100/0 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity blur-xl"></span>
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Search Button */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-3 text-blue-700 hover:text-cyan-600 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 rounded-xl transition-all duration-300 relative group shadow-sm hover:shadow-md"
            >
              <FiSearch className="text-xl group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-200/0 via-cyan-200/30 to-cyan-200/0 opacity-0 group-hover:opacity-100 rounded-xl blur transition-opacity"></div>
            </button>

            {/* Wishlist */}
            <Link 
              href="/wishlist"
              className="p-3 text-blue-700 hover:text-pink-600 hover:bg-gradient-to-br hover:from-pink-50 hover:to-purple-50 rounded-xl transition-all duration-300 relative group shadow-sm hover:shadow-md"
            >
              <FiHeart className="text-xl group-hover:scale-110 transition-transform" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full animate-pulse shadow-lg"></span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-200/0 via-pink-200/30 to-pink-200/0 opacity-0 group-hover:opacity-100 rounded-xl blur transition-opacity"></div>
            </Link>

            {/* Account */}
            <Link 
              href="/account"
              className="p-3 text-blue-700 hover:text-purple-600 hover:bg-gradient-to-br hover:from-purple-50 hover:to-blue-50 rounded-xl transition-all duration-300 relative group shadow-sm hover:shadow-md"
            >
              <FiUser className="text-xl group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-200/0 via-purple-200/30 to-purple-200/0 opacity-0 group-hover:opacity-100 rounded-xl blur transition-opacity"></div>
            </Link>

            {/* Cart */}
            <Link 
              href="/cart"
              className="relative p-3 text-blue-700 hover:text-cyan-600 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 rounded-xl transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <FiShoppingCart className="text-xl group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <>
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center shadow-lg animate-bounce-subtle border-2 border-white">
                    {cartCount}
                  </span>
                  <span className="absolute -top-1 -right-1 bg-pink-400 rounded-full h-6 w-6 animate-ping-slow opacity-75"></span>
                </>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-200/0 via-cyan-200/30 to-cyan-200/0 opacity-0 group-hover:opacity-100 rounded-xl blur transition-opacity"></div>
            </Link>

            {/* CTA Button - Ocean Wave Style */}
            <Link
              href="/products"
              className="ml-4 px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10">Explore Ocean</span>
              {/* Wave effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              {/* Bubble effects */}
              <div className="absolute bottom-0 left-1/4 w-1 h-1 bg-white/40 rounded-full group-hover:animate-bubble-rise-fast"></div>
              <div className="absolute bottom-0 right-1/4 w-1 h-1 bg-white/40 rounded-full group-hover:animate-bubble-rise-fast animation-delay-500"></div>
            </Link>
          </div>

          {/* Mobile Menu Button & Cart */}
          <div className="md:hidden flex items-center space-x-3">
            <Link href="/cart" className="relative">
              <FiShoppingCart className="text-2xl text-blue-700" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg border border-white">
                  {cartCount}
                </span>
              )}
            </Link>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-2xl text-blue-700 p-2 hover:bg-cyan-100/50 rounded-lg transition-colors"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Search Bar - Enhanced */}
        {isSearchOpen && (
          <div className="hidden md:block pb-4 animate-slide-down">
            <div className="relative">
              <input
                type="text"
                placeholder="Search the ocean of products..."
                className="w-full px-6 py-4 pl-12 bg-gradient-to-r from-cyan-50/80 to-blue-50/80 border-2 border-cyan-300/50 rounded-2xl focus:outline-none focus:border-cyan-500 focus:shadow-lg focus:shadow-cyan-200/50 transition-all backdrop-blur-sm placeholder:text-blue-400/60 text-blue-900 font-medium"
                autoFocus
              />
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-500 text-xl" />
              {/* Search icon bubble effect */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-cyan-200/30 rounded-full blur-md"></div>
            </div>
          </div>
        )}

        {/* Mobile Menu - Enhanced */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t-2 border-cyan-200/50 animate-slide-down bg-gradient-to-b from-transparent to-cyan-50/30">
            <div className="py-4 space-y-1">
              <Link 
                href="/" 
                className="block py-3 px-4 text-blue-700 hover:text-cyan-600 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 rounded-lg font-semibold transition-all group"
                onClick={() => setIsOpen(false)}
              >
                <span className="inline-flex items-center gap-2">
                  🏠 Home
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">🌊</span>
                </span>
              </Link>
              <Link 
                href="/products" 
                className="block py-3 px-4 text-blue-700 hover:text-cyan-600 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 rounded-lg font-semibold transition-all group"
                onClick={() => setIsOpen(false)}
              >
                <span className="inline-flex items-center gap-2">
                  🛍️ Products
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">🐠</span>
                </span>
              </Link>
              <Link 
                href="/wishlist" 
                className="block py-3 px-4 text-blue-700 hover:text-pink-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 rounded-lg font-semibold transition-all group"
                onClick={() => setIsOpen(false)}
              >
                <span className="inline-flex items-center gap-2">
                  ❤️ Wishlist
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">🐚</span>
                </span>
              </Link>
              <Link 
                href="/account" 
                className="block py-3 px-4 text-blue-700 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 rounded-lg font-semibold transition-all group"
                onClick={() => setIsOpen(false)}
              >
                <span className="inline-flex items-center gap-2">
                  👤 Account
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">🐢</span>
                </span>
              </Link>
              <Link 
                href="/cart" 
                className="block py-3 px-4 text-blue-700 hover:text-cyan-600 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 rounded-lg font-semibold transition-all group"
                onClick={() => setIsOpen(false)}
              >
                <span className="inline-flex items-center gap-2">
                  🛒 Cart ({cartCount})
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">🫧</span>
                </span>
              </Link>
              
              {/* Mobile Search */}
              <div className="pt-4 px-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full px-4 py-3 pl-10 bg-gradient-to-r from-cyan-50/80 to-blue-50/80 border-2 border-cyan-300/50 rounded-xl focus:outline-none focus:border-cyan-500 transition-all placeholder:text-blue-400/60 text-blue-900"
                  />
                  <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-500" />
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 px-4">
                <Link
                  href="/products"
                  className="block w-full text-center px-6 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative z-10">Dive Into Products 🌊</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-active:translate-x-[100%] transition-transform duration-700"></div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Announcement Bar - Ocean Theme 
      <div className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white text-center py-2.5 text-sm font-semibold relative overflow-hidden">
        <div className="relative z-10 flex items-center justify-center gap-2">
          <span className="animate-wave-hand inline-block">🌊</span>
          <span>Free Shipping on Orders Over $50! Ride the Wave of Savings</span>
          <span className="animate-wave-hand inline-block animation-delay-1000">🐚</span>
        </div>
    
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDUwIFEgMjUgNDAgNTAgNTAgVCAxMDAgNTAiIHN0cm9rZT0iI2ZmZiIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIwLjMiLz48L3N2Zz4=')] animate-wave-scroll"></div>
        </div>
        
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white/60 rounded-full animate-bubble-float-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white/60 rounded-full animate-bubble-float-slow animation-delay-1500"></div>
      </div>*/}
    </nav>
  )
}