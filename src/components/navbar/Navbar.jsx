import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Box } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Checkout", path: "/checkout" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="navbar glass">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <Box className="logo-icon" size={32} />
          <span>CUBIX</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={location.pathname === link.path ? "active" : ""}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button className="nav-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={location.pathname === link.path ? "active" : ""}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
