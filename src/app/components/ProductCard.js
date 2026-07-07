'use client'
import Image from 'next/image'
import { FiShoppingCart, FiHeart, FiPlus } from 'react-icons/fi'
import { useState } from 'react'

export default function ProductCard({ product, onAddToCart }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="group relative bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-emerald-200">
      {/* Image Container with Skeleton */}
      <div className="relative h-80 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
        )}
        
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-105"
          onLoadingComplete={() => setImageLoaded(true)}
        />

        {/* Floating Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`p-3 rounded-full backdrop-blur-xl transition-all duration-300 shadow-lg hover:scale-110 ${
              isFavorite 
                ? 'bg-red-500 text-white' 
                : 'bg-white/90 text-gray-700 hover:bg-white'
            }`}
          >
            <FiHeart className={`text-lg ${isFavorite ? 'fill-current' : ''}`} />
          </button>
          
          <button className="p-3 rounded-full bg-white/90 backdrop-blur-xl text-gray-700 hover:bg-white transition-all duration-300 shadow-lg hover:scale-110">
            <FiPlus className="text-lg" />
          </button>
        </div>

        {/* Discount Badge */}
        {product.discount && (
          <div className="absolute top-4 left-4">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-2xl shadow-lg font-bold text-sm">
              {product.discount}% OFF
            </div>
          </div>
        )}

        {/* Add to Cart Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <button
            onClick={() => onAddToCart(product)}
            className="w-full bg-white text-gray-900 font-bold py-4 rounded-2xl hover:bg-emerald-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-xl"
          >
            <FiShoppingCart className="text-xl" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1 group-hover:text-emerald-600 transition-colors">
              {product.name}
            </h3>
            {product.category && (
              <span className="inline-block text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                {product.category}
              </span>
            )}
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-end justify-between">
          <div>
            {product.originalPrice && (
              <span className="block text-xs text-gray-400 line-through mb-1">
                ${product.originalPrice}
              </span>
            )}
            <span className="text-3xl font-black text-gray-900">
              ${product.price}
            </span>
          </div>
          
          {product.rating && (
            <div className="flex items-center gap-1 bg-yellow-50 px-3 py-2 rounded-xl">
              <span className="text-yellow-500 text-lg">★</span>
              <span className="text-sm font-bold text-gray-900">{product.rating}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}