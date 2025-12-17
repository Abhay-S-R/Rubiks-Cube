import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./Shop.css";
import { ShoppingCart, Zap, Star } from "lucide-react";
import { allProducts } from "../../data/products";
import { filterProductsByPrice, PRICE_RANGES } from "../../utils/filterUtils";
import { useCart } from "../../context/CartContext";
import Toast from "../../components/ui/Toast";

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("3x3");
  const [selectedRange, setSelectedRange] = useState(PRICE_RANGES[0]);
  const [toast, setToast] = useState({ show: false, message: "" });
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const categories = ["2x2", "3x3", "4x4"];

  const showToast = (message) => {
    setToast({ show: true, message });
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    showToast(`Added ${product.name} to cart`);
  };

  // Reset filter when category changes (optional, but good UX)
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setSelectedRange(PRICE_RANGES[0]);
  };

  const handleBuyNow = (product) => {
    addToCart(product);
    navigate("/checkout");
  };

  const filteredProducts = useMemo(() => {
    const products = allProducts[activeCategory];
    return filterProductsByPrice(
      products,
      selectedRange.min,
      selectedRange.max
    );
  }, [activeCategory, selectedRange]);

  return (
    <div className="shop-page">
      <Toast
        message={toast.message}
        isVisible={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
      />
      <div className="container">
        <header className="shop-header">
          <h1 className="section-title">Shop Puzzles</h1>
          <p className="shop-subtitle">
            Discover the elite hardware used by world champions.
          </p>

          <div className="filter-section">
            <div className="category-tabs glass">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`category-tab ${
                    activeCategory === cat ? "active" : ""
                  }`}
                  onClick={() => handleCategoryChange(cat)}
                >
                  {cat} Cube
                </button>
              ))}
            </div>

            <div className="price-filters glass">
              {PRICE_RANGES.map((range, index) => (
                <button
                  key={index}
                  className={`filter-chip ${
                    selectedRange.label === range.label ? "active" : ""
                  }`}
                  onClick={() => setSelectedRange(range)}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </header>

        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-card glass">
                <div className="product-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <div className="product-overlay">
                    <button
                      className="action-btn cart-btn"
                      onClick={() => handleAddToCart(product)}
                      title="Add to Cart"
                    >
                      Add to Cart <ShoppingCart size={18} />
                    </button>
                    <button
                      className="action-btn buy-btn"
                      onClick={() => handleBuyNow(product)}
                      title="Buy Now"
                    >
                      Buy Now <Zap size={16} />
                    </button>
                  </div>
                </div>
                <div className="product-info">
                  <div className="product-header">
                    <h3>{product.name}</h3>
                    <div className="product-rating">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          fill="var(--theme-gold)"
                          stroke="none"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="product-desc">{product.description}</p>
                  <div className="product-price">{product.price}</div>

                  {/* Mobile Actions (Visible only on small screens) */}
                  <div className="product-actions-mobile">
                    <button
                      className="mobile-btn cart-btn"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart <ShoppingCart size={18} />
                    </button>
                    <button
                      className="mobile-btn buy-btn"
                      onClick={() => handleBuyNow(product)}
                    >
                      Buy Now <Zap size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No puzzles found in this price range.</p>
              <button
                className="reset-btn"
                onClick={() => setSelectedRange(PRICE_RANGES[0])}
              >
                View All
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
