'use client'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi'
import { sendToWhatsApp } from '../utils/whatsapp'

export default function CartPage() {
  const [cart, setCart] = useState([])
  const [customerName, setCustomerName] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')

  const updateQuantity = (id, change) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    ))
  }

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleCheckout = () => {
    if (!customerName || !customerPhone) {
      alert('Please enter your name and phone number')
      return
    }
    if (cart.length === 0) {
      alert('Your cart is empty')
      return
    }
    sendToWhatsApp(cart, customerName, customerPhone)
  }

  return (
    <main className="min-h-screen">
      <Navbar cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
        
        {cart.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-8">
              {cart.map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                    <div>
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-emerald-600 font-bold">${item.price}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                      >
                        <FiMinus />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                      >
                        <FiPlus />
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FiTrash2 className="text-xl" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Customer Details</h2>
              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-semibold">Total:</span>
                <span className="text-3xl font-bold text-emerald-600">${total.toFixed(2)}</span>
              </div>
              
              <button
                onClick={handleCheckout}
                className="w-full btn-primary text-lg py-3"
              >
                Order via WhatsApp
              </button>
            </div>
          </>
        )}
      </div>

      <Footer />
    </main>
  )
}