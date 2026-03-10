const categories = ['Electronics', 'Footwear', 'Accessories', 'Kitchen', 'Home']

const ProductList = ({ products, addToCart, category, setCategory }) => {
  return (
    <div className="product-list-container">
      <div className="filters">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="description">{product.description}</p>
              <p className="price">₹{product.price.toFixed(2)}</p>
              <button onClick={() => addToCart(product)} className="btn-primary">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
        {products.length === 0 && (
          <p className="no-products">No products found matching your criteria.</p>
        )}
      </div>
    </div>
  )
}

export default ProductList
