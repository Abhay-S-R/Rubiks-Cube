import { useEffect, useState } from "react";
import "./Toast.css";
import { Check, X } from "lucide-react";

/**
 * Toast Component
 * @param {string} message - The message to display
 * @param {boolean} isVisible - Controls visibility
 * @param {function} onClose - Callback when toast closes
 * @param {string} type - 'success' or 'error' (default: 'success')
 */
const Toast = ({ message, isVisible, onClose, type = "success" }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        setTimeout(onClose, 300); // Wait for exit animation
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible && !show) return null;

  return (
    <div className={`toast ${show ? "show" : ""} ${type}`}>
      <div className="toast-content">
        {type === "success" ? <Check size={20} /> : <X size={20} />}
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
