'use client'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'
import { FiTrendingUp, FiShoppingBag, FiZap, FiAward } from 'react-icons/fi'

const featuredProducts = [
  {
    id: 1,
    name: "Ocean Wave Tote",
    price: 29.99,
    originalPrice: 49.99,
    image: "/api/placeholder/400/400",
    description: "Durable canvas tote with ocean-inspired design",
    category: "Bags",
    rating: 4.8,
    stock: 15,
    isNew: true,
    discount: 40,
    trending: true
  },
  {
    id: 2,
    name: "Coral Leather Wallet",
    price: 49.99,
    originalPrice: 79.99,
    image: "/api/placeholder/400/400",
    description: "Premium leather wallet with sea-inspired texture",
    category: "Accessories",
    rating: 4.9,
    stock: 8,
    discount: 37,
  },
  {
    id: 3,
    name: "Turtle Water Bottle",
    price: 19.99,
    originalPrice: 29.99,
    image: "/api/placeholder/400/400",
    description: "Eco-friendly insulated bottle with turtle design",
    category: "Lifestyle",
    rating: 4.7,
    stock: 25,
    discount: 33,
    isNew: true,
  },
  {
    id: 4,
    name: "Deep Sea Backpack",
    price: 59.99,
    originalPrice: 89.99,
    image: "/api/placeholder/400/400",
    description: "Waterproof backpack with ocean blue finish",
    category: "Bags",
    rating: 4.9,
    stock: 5,
    discount: 33,
    trending: true
  },
  {
    id: 5,
    name: "Wave Rider Sunglasses",
    price: 39.99,
    originalPrice: 69.99,
    image: "/api/placeholder/400/400",
    description: "UV protection polarized ocean-view sunglasses",
    category: "Accessories",
    rating: 4.6,
    stock: 12,
    discount: 43,
  },
  {
    id: 6,
    name: "Jellyfish Travel Mug",
    price: 24.99,
    originalPrice: 34.99,
    image: "/api/placeholder/400/400",
    description: "Leak-proof mug with bioluminescent design",
    category: "Lifestyle",
    rating: 4.8,
    stock: 20,
    discount: 29,
    isNew: true,
  },
  {
    id: 7,
    name: "Ocean Laptop Sleeve",
    price: 34.99,
    originalPrice: 54.99,
    image: "/api/placeholder/400/400",
    description: "Protective sleeve with underwater scene",
    category: "Tech",
    rating: 4.7,
    stock: 18,
    discount: 36,
  },
  {
    id: 8,
    name: "Coral Reef Phone Case",
    price: 14.99,
    originalPrice: 24.99,
    image: "/api/placeholder/400/400",
    description: "Shockproof case with vibrant coral pattern",
    category: "Tech",
    rating: 4.5,
    stock: 30,
    discount: 40,
    trending: true
  }
]

const categories = [
  { name: "All Treasures", icon: FiShoppingBag, filter: "all" },
  { name: "Trending Waves", icon: FiTrendingUp, filter: "trending" },
  { name: "New Discoveries", icon: FiZap, filter: "new" },
  { name: "Ocean Deals", icon: FiAward, filter: "deals" },
]

export default function Home() {
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showNotification, setShowNotification] = useState(false)
  const [addedProduct, setAddedProduct] = useState(null)

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id)
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
    
    // Show notification
    setAddedProduct(product)
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 3000)
  }

  // Filter products based on category
  const filteredProducts = featuredProducts.filter(product => {
    if (selectedCategory === "all") return true
    if (selectedCategory === "trending") return product.trending
    if (selectedCategory === "new") return product.isNew
    if (selectedCategory === "deals") return product.discount > 35
    return true
  })

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50/50 via-cyan-50/30 to-white relative overflow-hidden">
      {/* Underwater ambient bubbles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-300/40 rounded-full animate-bubble-float-ambient"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-300/30 rounded-full animate-bubble-float-ambient animation-delay-2000"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-purple-300/30 rounded-full animate-bubble-float-ambient animation-delay-4000"></div>
        <div className="absolute bottom-60 right-1/3 w-1.5 h-1.5 bg-cyan-200/40 rounded-full animate-bubble-float-ambient animation-delay-1000"></div>
      </div>

      <Navbar cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
      <Hero />
      
      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Section Header with ocean theme */}
        <div className="text-center mb-12 relative">
          {/* Decorative elements */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-6xl opacity-20 animate-float">
            🐚
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 relative">
            Featured{' '}
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
              Ocean Treasures
            </span>
          </h2>
          <p className="text-blue-700/70 text-lg max-w-2xl mx-auto font-medium">
            Dive into our handpicked collection of premium sea-inspired products
          </p>
          
          {/* Decorative wave line */}
          <div className="flex justify-center mt-6">
            <svg width="100" height="20" viewBox="0 0 100 20" className="opacity-30">
              <path d="M0 10 Q 25 5, 50 10 T 100 10" stroke="url(#waveGradient)" strokeWidth="2" fill="none"/>
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Category Filter - Ocean themed */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon
            const isActive = selectedCategory === category.filter
            return (
              <button
                key={category.filter}
                onClick={() => setSelectedCategory(category.filter)}
                className={`group relative flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 overflow-hidden ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white shadow-lg shadow-cyan-500/50 scale-105'
                    : 'bg-white/80 backdrop-blur-sm text-blue-700 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 shadow-md hover:shadow-lg border-2 border-cyan-200/50'
                }`}
              >
                {/* Wave effect on hover */}
                {!isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/0 via-cyan-100/50 to-cyan-100/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                )}
                
                <Icon className={`text-lg relative z-10 ${isActive ? 'animate-bounce-gentle' : ''}`} />
                <span className="relative z-10">{category.name}</span>
                
                {/* Bubble decoration for active */}
                {isActive && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-white/60 rounded-full animate-ping"></div>
                )}
              </button>
            )
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard
                product={product}
                onAddToCart={addToCart}
              />
            </div>
          ))}
        </div>

        {/* No Products Found - Ocean themed */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-8xl mb-6 animate-float">🔍</div>
            <div className="text-6xl mb-4 opacity-50">🌊</div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              No treasures found in these waters
            </h3>
            <p className="text-blue-600/70 font-medium">Try exploring a different ocean category</p>
          </div>
        )}
      </section>

      {/* Why Choose Us Section - Ocean themed */}
      <section className="relative bg-gradient-to-br from-cyan-100/50 via-blue-100/30 to-purple-100/50 py-20 overflow-hidden">
        {/* Decorative waves background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,50 Q250,30 500,50 T1000,50 T1500,50 L1500,200 L0,200 Z" fill="url(#bgWave1)"/>
            <path d="M0,80 Q300,60 600,80 T1200,80 T1800,80 L1800,200 L0,200 Z" fill="url(#bgWave2)"/>
            <defs>
              <linearGradient id="bgWave1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
              <linearGradient id="bgWave2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="text-5xl mb-4 animate-wave-hand">🌊</div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Why Navigate{' '}
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Ocean?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-cyan-200/50 relative overflow-hidden">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating bubble decoration */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-cyan-300/40 rounded-full group-hover:animate-bubble-float-slow"></div>
              
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <FiShoppingBag className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                  Pearl Quality
                </h3>
                <p className="text-blue-700/70 leading-relaxed font-medium">
                  We dive deep to select only the finest treasures from the ocean of products
                </p>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 text-6xl opacity-5 group-hover:opacity-10 transition-opacity">
                🐚
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-blue-200/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute top-4 right-4 w-3 h-3 bg-blue-300/40 rounded-full group-hover:animate-bubble-float-slow animation-delay-1000"></div>
              
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <FiZap className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Swift Currents
                </h3>
                <p className="text-blue-700/70 leading-relaxed font-medium">
                  Ride the fast delivery waves straight to your shore with express shipping
                </p>
              </div>
              
              <div className="absolute bottom-0 right-0 text-6xl opacity-5 group-hover:opacity-10 transition-opacity">
                🐠
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-purple-200/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute top-4 right-4 w-3 h-3 bg-purple-300/40 rounded-full group-hover:animate-bubble-float-slow animation-delay-2000"></div>
              
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-purple-500 to-cyan-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <FiAward className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  Treasure Prices
                </h3>
                <p className="text-blue-700/70 leading-relaxed font-medium">
                  Discover golden deals and coral-reef discounts throughout the year
                </p>
              </div>
              
              <div className="absolute bottom-0 right-0 text-6xl opacity-5 group-hover:opacity-10 transition-opacity">
                🐢
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,10 Q300,0 600,10 T1200,10 T1800,10 L1800,80 L0,80 Z" fill="white" opacity="0.5"/>
          </svg>
        </div>
      </section>

      {/* Newsletter Section - Ocean themed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="relative bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-3xl p-12 md:p-16 text-center shadow-2xl overflow-hidden">
          {/* Animated wave background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDUwIFEgMjUgNDAgNTAgNTAgVCAxMDAgNTAiIHN0cm9rZT0iI2ZmZiIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIwLjMiLz48L3N2Zz4=')] animate-wave-scroll"></div>
          </div>

          {/* Floating elements */}
          <div className="absolute top-8 left-8 text-4xl opacity-30 animate-float">🐚</div>
          <div className="absolute bottom-8 right-8 text-4xl opacity-30 animate-float animation-delay-2000">🐠</div>
          <div className="absolute top-1/2 left-12 text-3xl opacity-20 animate-float animation-delay-1000">🫧</div>
          <div className="absolute top-1/4 right-16 text-3xl opacity-20 animate-float animation-delay-3000">⭐</div>
          
          <div className="relative z-10">
            <div className="text-5xl mb-4 animate-wave-hand">🌊</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Ride the Wave of Updates!
            </h2>
            <p className="text-cyan-50 text-lg mb-8 max-w-2xl mx-auto font-medium">
              Subscribe to catch exclusive ocean deals and be the first to discover new treasures
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Drop your message in a bottle..."
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-cyan-300 shadow-lg placeholder:text-blue-400"
              />
              <button className="group bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:bg-cyan-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden">
                <span className="relative z-10">Set Sail</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/0 via-cyan-100 to-cyan-100/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Add to Cart Notification - Ocean themed */}
      {showNotification && addedProduct && (
        <div className="fixed bottom-8 right-8 bg-gradient-to-br from-white to-cyan-50/50 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-cyan-200/50 p-6 flex items-center gap-4 animate-slide-in-right z-50 max-w-sm">
          {/* Success icon with ocean gradient */}
          <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {/* Ripple effect */}
            <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
          </div>
          
          <div className="flex-1">
            <h4 className="font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Caught a treasure! 🐚
            </h4>
            <p className="text-sm text-blue-700/70 font-medium">{addedProduct.name}</p>
          </div>

          {/* Decorative bubble */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-300/60 rounded-full animate-ping"></div>
        </div>
      )}
    </main>
  )
}