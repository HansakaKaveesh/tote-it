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
    name: "Classic Tote Bag",
    price: 29.99,
    originalPrice: 49.99,
    image: "/api/placeholder/400/400",
    description: "Durable canvas tote bag perfect for everyday use",
    category: "Bags",
    rating: 4.8,
    stock: 15,
    isNew: true,
    discount: 40,
    trending: true
  },
  {
    id: 2,
    name: "Leather Wallet",
    price: 49.99,
    originalPrice: 79.99,
    image: "/api/placeholder/400/400",
    description: "Genuine leather wallet with multiple card slots",
    category: "Accessories",
    rating: 4.9,
    stock: 8,
    discount: 37,
  },
  {
    id: 3,
    name: "Water Bottle",
    price: 19.99,
    originalPrice: 29.99,
    image: "/api/placeholder/400/400",
    description: "Stainless steel insulated water bottle",
    category: "Lifestyle",
    rating: 4.7,
    stock: 25,
    discount: 33,
    isNew: true,
  },
  {
    id: 4,
    name: "Backpack",
    price: 59.99,
    originalPrice: 89.99,
    image: "/api/placeholder/400/400",
    description: "Spacious backpack with laptop compartment",
    category: "Bags",
    rating: 4.9,
    stock: 5,
    discount: 33,
    trending: true
  },
  {
    id: 5,
    name: "Sunglasses",
    price: 39.99,
    originalPrice: 69.99,
    image: "/api/placeholder/400/400",
    description: "UV protection polarized sunglasses",
    category: "Accessories",
    rating: 4.6,
    stock: 12,
    discount: 43,
  },
  {
    id: 6,
    name: "Travel Mug",
    price: 24.99,
    originalPrice: 34.99,
    image: "/api/placeholder/400/400",
    description: "Leak-proof travel mug with temperature control",
    category: "Lifestyle",
    rating: 4.8,
    stock: 20,
    discount: 29,
    isNew: true,
  },
  {
    id: 7,
    name: "Laptop Sleeve",
    price: 34.99,
    originalPrice: 54.99,
    image: "/api/placeholder/400/400",
    description: "Protective laptop sleeve with extra pockets",
    category: "Tech",
    rating: 4.7,
    stock: 18,
    discount: 36,
  },
  {
    id: 8,
    name: "Phone Case",
    price: 14.99,
    originalPrice: 24.99,
    image: "/api/placeholder/400/400",
    description: "Shockproof phone case with card holder",
    category: "Tech",
    rating: 4.5,
    stock: 30,
    discount: 40,
    trending: true
  }
]

const categories = [
  { name: "All Products", icon: FiShoppingBag, filter: "all" },
  { name: "Trending", icon: FiTrendingUp, filter: "trending" },
  { name: "New Arrivals", icon: FiZap, filter: "new" },
  { name: "Best Deals", icon: FiAward, filter: "deals" },
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
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
      <Hero />
      

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of premium products
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.filter}
                onClick={() => setSelectedCategory(category.filter)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.filter
                    ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                }`}
              >
                <Icon className="text-lg" />
                <span>{category.name}</span>
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

        {/* No Products Found */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No products found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        )}
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Why Choose <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Tote It?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <FiShoppingBag className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Premium Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                We carefully select only the highest quality products for our customers
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <FiZap className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Fast Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Get your orders delivered quickly with our express shipping options
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <FiAward className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Best Prices</h3>
              <p className="text-gray-600 leading-relaxed">
                Competitive pricing with amazing deals and discounts all year round
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Stay Updated!
          </h2>
          <p className="text-emerald-50 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get exclusive deals and early access to new products
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-emerald-300"
            />
            <button className="bg-white text-emerald-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Add to Cart Notification */}
      {showNotification && addedProduct && (
        <div className="fixed bottom-8 right-8 bg-white rounded-2xl shadow-2xl p-6 flex items-center gap-4 animate-slide-in-right z-50 max-w-sm">
          <div className="bg-emerald-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-gray-900">Added to cart!</h4>
            <p className="text-sm text-gray-600">{addedProduct.name}</p>
          </div>
        </div>
      )}
    </main>
  )
}