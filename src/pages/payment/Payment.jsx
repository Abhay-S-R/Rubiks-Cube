import { useState } from "react";
import "./Payment.css";
import {
  CreditCard,
  Truck,
  User,
  MapPin,
  Phone,
  Info,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { useCart } from "../../context/cartContext";
import { parsePrice } from "../../utils/filterUtils";
import { saveOrder } from "../../services/orderService";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    door: "",
    city: "",
    pin: "",
    state: "",
  });

  const [errors, setErrors] = useState({});

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => {
      const itemPrice = parsePrice(item.price);
      const deliveryCost = item.deliveryDate === "express" ? 50 : 0;
      return acc + itemPrice * item.quantity + deliveryCost;
    }, 0);
  };

  const finalAmount = "₹" + calculateTotal().toLocaleString("en-IN");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Phone Validation: 10 digits, starts with 6-9
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone =
        "Phone number must be 10 digits and start with 6, 7, 8, or 9.";
    }

    // PIN Validation: Exactly 6 digits
    const pinRegex = /^\d{6}$/;
    if (!pinRegex.test(formData.pin)) {
      newErrors.pin = "PIN code must be exactly 6 digits.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors((prev) => ({ ...prev, submit: "" })); // Clear previous submit errors

    if (validateForm()) {
      setIsProcessing(true);

      const orderData = {
        customer: formData,
        items: cartItems,
        totalAmount: finalAmount,
      };

      try {
        await saveOrder(orderData);
        clearCart();
        setIsProcessing(false);
        navigate("/thank-you");
      } catch (err) {
        console.error(err);
        setIsProcessing(false);
        setErrors((prev) => ({
          ...prev,
          submit: "Failed to connect to server. Ensure backend is running.",
        }));
      }
    }
  };

  return (
    <div className="payment-page">
      <div className="container">
        <h1 className="section-title">Secure Payment</h1>

        <div className="payment-container glass">
          <div className="payment-header">
            <CreditCard size={48} className="payment-icon" />
            <h2>Enter Shipping Details</h2>
            <p>Please provide your delivery information to proceed.</p>
          </div>

          <form className="payment-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                <User size={18} /> Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label>
                <Phone size={18} /> Mobile Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                required
              />
              {errors.phone && (
                <span className="error-msg">{errors.phone}</span>
              )}
            </div>

            <div className="address-section">
              <h3 className="section-subtitle">
                <MapPin size={18} /> Delivery Address
              </h3>

              <div className="form-group">
                <label>Door / Apartment No. & Name</label>
                <input
                  type="text"
                  name="door"
                  value={formData.door}
                  onChange={handleChange}
                  placeholder="Flat 4B, Green Apts"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Mumbai"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>PIN Code</label>
                  <input
                    type="text"
                    name="pin"
                    value={formData.pin}
                    onChange={handleChange}
                    placeholder="560001"
                    required
                  />
                  {errors.pin && (
                    <span className="error-msg">{errors.pin}</span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label>State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Maharashtra"
                  required
                />
              </div>
            </div>

            <div className="payment-summary">
              <span>Total Amount to Pay:</span>
              <span className="final-price">{finalAmount}</span>
            </div>

            <div className="cod-note">
              <Info size={16} />
              <span>
                Note: Payment will be collected via{" "}
                <strong>Cash on Delivery</strong>.
              </span>
            </div>

            {errors.submit && (
              <div
                className="error-banner"
                style={{
                  color: "var(--color-red)",
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <AlertCircle size={16} />
                <span>{errors.submit}</span>
              </div>
            )}

            <button
              type="submit"
              className={`confirm-btn ${isProcessing ? "disabled" : ""}`}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  Processing <Loader2 size={20} className="animate-spin" />
                </>
              ) : (
                <>
                  Confirm Payment <Truck size={20} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
