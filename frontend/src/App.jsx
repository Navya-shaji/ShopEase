import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import toast, { Toaster } from 'react-hot-toast'
import './index.css'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [view, setView] = useState('home')
  const [searchQuery, setSearchQuery] = useState('')
  const [category, setCategory] = useState('')

  const fetchProducts = async () => {
    try {
      let url = `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/products?`
      if (searchQuery) url += `search=${searchQuery}&`
      if (category) url += `category=${category}`
      const response = await fetch(url)
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.error('Failed to fetch products', error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [searchQuery, category])

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product._id === product._id)
      if (existingItem) {
        return prevCart.map((item) =>
          item.product._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.product._id !== productId))
  }

  const handleCheckout = () => {
    toast.success('Booking completed!')
    setCart([])
  }

  return (
    <div className="app-container">
      <Toaster position="top-center" />
      <Navbar
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        setView={setView}
        setSearchQuery={setSearchQuery}
      />
      <main className="main-content">
        {view === 'home' ? (
          <ProductList
            products={products}
            addToCart={addToCart}
            category={category}
            setCategory={setCategory}
          />
        ) : (
          <Cart cart={cart} removeFromCart={removeFromCart} handleCheckout={handleCheckout} />
        )}
      </main>
    </div>
  )
}

export default App
