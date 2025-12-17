import { Link } from "react-router-dom";
import "./Home.css";
import { ArrowRight, Box, Clock, Trophy } from "lucide-react";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Master the <span className="highlight">Cube</span>
          </h1>
          <p>
            Experience precision, speed, and elegance with our premium
            collection of puzzles and professional coaching.
          </p>
          <Link to="/shop" className="cta-button primary">
            Shop Now <ArrowRight size={20} />
          </Link>
        </div>
        <div className="hero-visual">
          <div className="cube-wrapper">
            <div className="cube-face front"></div>
            <div className="cube-face back"></div>
            <div className="cube-face right"></div>
            <div className="cube-face left"></div>
            <div className="cube-face top"></div>
            <div className="cube-face bottom"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features container">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card glass">
            <Box className="feature-icon" size={48} />
            <h3>Premium Puzzles</h3>
            <p>
              Hand-lubricated and tensioned for maximum performance out of the
              box.
            </p>
          </div>
          <div className="feature-card glass">
            <Clock className="feature-icon" size={48} />
            <h3>Speedcubing</h3>
            <p>
              Advanced tutorials and coaching to help you shatter your personal
              bests.
            </p>
          </div>
          <div className="feature-card glass">
            <Trophy className="feature-icon" size={48} />
            <h3>Competitions</h3>
            <p>
              Join our community events and compete with cubers around the
              globe.
            </p>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="showcase">
        <div className="container">
          <h2 className="section-title">Latest Arrivals</h2>
          <div className="showcase-grid">
            <div className="showcase-item">
              <img
                src="https://www.cubelelo.com/cdn/shop/files/60606389SqV_600x.jpg?v=1761569549"
                alt="Gan 13 Maglev"
                className="product-img"
              />
              <h4>Gan 13 Maglev</h4>
            </div>
            <div className="showcase-item">
              <img
                src="https://www.cubelelo.com/cdn/shop/files/6128019603Z_600x.png?v=1762001605"
                alt="MoYu RS3M V5"
                className="product-img"
              />
              <h4>MoYu RS3M V5</h4>
            </div>
            <div className="showcase-item">
              <img
                src="https://www.cubelelo.com/cdn/shop/files/AI-_-1_600x.jpg?v=1757761762"
                alt="Tornado V3 Flagship"
                className="product-img"
              />
              <h4>Tornado V3 Flagship</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
