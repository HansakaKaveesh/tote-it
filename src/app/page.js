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

      
      <Hero />
    </main>
  )
}