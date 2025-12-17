import "./Checkout.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { parsePrice } from "../../utils/filterUtils";
import { Trash2, ShoppingBag } from "lucide-react";

const Checkout = () => {
  const { cartItems, updateQuantity, updateDeliveryOption, removeFromCart } =
    useCart();

  const getDeliveryDate = (daysToAdd) => {
    const date = new Date();
    date.setDate(date.getDate() + daysToAdd);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const todayDate = getDeliveryDate(0);
  const standardDate = getDeliveryDate(2);

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => {
      const itemPrice = parsePrice(item.price);
      const deliveryCost = item.deliveryDate === "express" ? 50 : 0;
      return acc + itemPrice * item.quantity + deliveryCost;
    }, 0);
  };

  const formatPrice = (amount) => {
    return "₹" + amount.toLocaleString("en-IN");
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-page empty-state">
        <div className="container">
          <ShoppingBag size={64} className="empty-icon" />
          <h2>Your cart is empty</h2>
          <p>Time to add some puzzles!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <h1 className="section-title">Checkout</h1>

        <div className="checkout-grid">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item glass">
                <img src={item.image} alt={item.name} className="item-image" />

                <div className="item-details">
                  <div className="item-header">
                    <h3>{item.name}</h3>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <p className="item-price">{item.price}</p>

                  <div className="quantity-controls">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  <div className="delivery-options">
                    <p className="delivery-label">Delivery Option:</p>
                    <div className="options-group">
                      <label
                        className={`option ${
                          item.deliveryDate === "express" ? "selected" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name={`delivery-${item.id}`}
                          checked={item.deliveryDate === "express"}
                          onChange={() =>
                            updateDeliveryOption(item.id, "express")
                          }
                        />
                        <div className="option-content">
                          <span className="option-title">Express (Today)</span>
                          <span className="option-date">{todayDate}</span>
                          <span className="option-cost">+₹50</span>
                        </div>
                      </label>

                      <label
                        className={`option ${
                          item.deliveryDate === "standard" || !item.deliveryDate
                            ? "selected"
                            : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name={`delivery-${item.id}`}
                          checked={
                            item.deliveryDate === "standard" ||
                            !item.deliveryDate
                          }
                          onChange={() =>
                            updateDeliveryOption(item.id, "standard")
                          }
                        />
                        <div className="option-content">
                          <span className="option-title">Standard</span>
                          <span className="option-date">{standardDate}</span>
                          <span className="option-cost free">Free</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="order-summary glass">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>
                Items ({cartItems.reduce((a, c) => a + c.quantity, 0)})
              </span>
              <span>
                {formatPrice(
                  cartItems.reduce(
                    (acc, item) => acc + parsePrice(item.price) * item.quantity,
                    0
                  )
                )}
              </span>
            </div>

            <div className="summary-row">
              <span>Delivery Charges</span>
              <span>
                {formatPrice(
                  cartItems.reduce(
                    (acc, item) =>
                      acc + (item.deliveryDate === "express" ? 50 : 0),
                    0
                  )
                )}
              </span>
            </div>

            <div className="divider"></div>

            <div className="summary-row total">
              <span>Total Amount</span>
              <span>{formatPrice(calculateTotal())}</span>
            </div>

            <Link to="/payment" className="checkout-btn">
              Proceed to Pay
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
