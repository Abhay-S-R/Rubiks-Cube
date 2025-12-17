import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import "./ThankYou.css";

const ThankYou = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      navigate("/shop");
    }
  }, [countdown, navigate]);

  return (
    <div className="thank-you-page">
      <div className="container">
        <div className="thank-you-content glass">
          <CheckCircle size={80} className="success-icon" />
          <h1 className="thank-you-title">Thank You for Shopping with Us!</h1>
          <p className="thank-you-message">
            Your order has been placed successfully.
          </p>
          <div className="redirect-message">
            Redirecting you to the shop in{" "}
            <span className="countdown">{countdown}s</span>
          </div>
          <button onClick={() => navigate("/shop")} className="redirect-btn">
            Return to Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
