const Navbar = ({ cartCount, setView, setSearchQuery }) => {
  return (
    <nav className="navbar">
      <div className="nav-brand" onClick={() => setView('home')}>
        <span className="logo">🛒 ShopEase</span>
      </div>
      <div className="nav-search">
        <input 
          type="text" 
          placeholder="Search products..." 
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="nav-links">
        <button className="nav-link" onClick={() => setView('home')}>Home</button>
        <button className="nav-btn-cart" onClick={() => setView('cart')}>
          Cart <span className="cart-badge">{cartCount}</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
