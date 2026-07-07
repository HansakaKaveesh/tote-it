'use client'
import Link from 'next/link'
import Image from 'next/image'
import { FiShoppingCart, FiMenu, FiX, FiHeart, FiUser, FiSearch } from 'react-icons/fi'
import { useState } from 'react'

export default function Navbar({ cartCount = 0 }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              {/* Animated gradient ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300 animate-gradient-rotate"></div>
              
              {/* Logo container */}
              <div className="relative bg-white p-2 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                {/* Replace with your actual logo */}
                
                {/* Or use an image logo: */}
                <Image 
                  src="/logo.png" 
                  alt="Tote It Logo" 
                  width={40} 
                  height={40}
                  className="rounded-xl"
                />
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-2xl font-black bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Tote It
              </span>
              <span className="text-xs text-gray-500 font-medium -mt-1">Shop Smart</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/" 
              className="px-4 py-2 text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 rounded-lg hover:bg-emerald-50 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/products" 
              className="px-4 py-2 text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 rounded-lg hover:bg-emerald-50 relative group"
            >
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/about" 
              className="px-4 py-2 text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 rounded-lg hover:bg-emerald-50 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/contact" 
              className="px-4 py-2 text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 rounded-lg hover:bg-emerald-50 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Search Button */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all duration-300 relative group"
            >
              <FiSearch className="text-xl" />
            </button>

            {/* Wishlist */}
            <Link 
              href="/wishlist"
              className="p-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all duration-300 relative group"
            >
              <FiHeart className="text-xl" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Link>

            {/* Account */}
            <Link 
              href="/account"
              className="p-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all duration-300"
            >
              <FiUser className="text-xl" />
            </Link>

            {/* Cart */}
            <Link 
              href="/cart"
              className="relative p-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all duration-300 group"
            >
              <FiShoppingCart className="text-xl group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <>
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center shadow-lg animate-bounce">
                    {cartCount}
                  </span>
                  <span className="absolute -top-1 -right-1 bg-red-500 rounded-full h-6 w-6 animate-ping opacity-75"></span>
                </>
              )}
            </Link>

            {/* CTA Button */}
            <Link
              href="/products"
              className="ml-4 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Shop Now
            </Link>
          </div>

          {/* Mobile Menu Button & Cart */}
          <div className="md:hidden flex items-center space-x-3">
            <Link href="/cart" className="relative">
              <FiShoppingCart className="text-2xl text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-2xl text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="hidden md:block pb-4 animate-slide-down">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-6 py-3 pl-12 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-emerald-500 transition-colors"
                autoFocus
              />
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 animate-slide-down">
            <div className="py-4 space-y-1">
              <Link 
                href="/" 
                className="block py-3 px-4 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                🏠 Home
              </Link>
              <Link 
                href="/products" 
                className="block py-3 px-4 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                🛍️ Products
              </Link>
              <Link 
                href="/wishlist" 
                className="block py-3 px-4 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                ❤️ Wishlist
              </Link>
              <Link 
                href="/account" 
                className="block py-3 px-4 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                👤 Account
              </Link>
              <Link 
                href="/cart" 
                className="block py-3 px-4 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                🛒 Cart ({cartCount})
              </Link>
              
              {/* Mobile Search */}
              <div className="pt-4 px-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full px-4 py-3 pl-10 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                  <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 px-4">
                <Link
                  href="/products"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-xl shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Announcement Bar (Optional) */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-center py-2 text-sm font-medium">
        🎉 Free Shipping on Orders Over $50! Limited Time Offer
      </div>
    </nav>
  )
}