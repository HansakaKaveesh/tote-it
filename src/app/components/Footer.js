import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Tote It</h3>
            <p className="text-gray-400">Your trusted shopping destination</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/products" className="hover:text-white transition">Products</a></li>
              <li><a href="/cart" className="hover:text-white transition">Cart</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <FiFacebook className="text-2xl hover:text-emerald-500 cursor-pointer transition" />
              <FiInstagram className="text-2xl hover:text-emerald-500 cursor-pointer transition" />
              <FiTwitter className="text-2xl hover:text-emerald-500 cursor-pointer transition" />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Tote It. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}