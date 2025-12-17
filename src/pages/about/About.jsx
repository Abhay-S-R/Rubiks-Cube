import "./About.css";
import { Target, Users, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        {/* Header */}
        <header className="about-header">
          <h1 className="section-title">Our Story</h1>
          <p className="about-lead">
            Born from a passion for algorithms and speed, CUBIX was founded to
            bring the world's best puzzles to enthusiasts everywhere.
          </p>
        </header>

        {/* Story Section */}
        <section className="about-content glass">
          <div className="story-grid">
            <div className="story-text">
              <h2>More Than Just a Toy</h2>
              <p>
                We believe the Rubik's cube is not just a puzzle, but a tool for
                sharpening the mind, building patience, and connecting people
                across cultures.
              </p>
              <p>
                At CUBIX, we curate only the finest speedcubes, lubricants, and
                accessories. Each product is tested by our team of professional
                speedcubers to ensure it meets our rigorous standards.
              </p>
            </div>
            <div className="story-image">
              <div className="cubes-animation-container">
                <div className="cube-3d cube-2x2 cube-anim-1">
                  <div className="face front"></div>
                  <div className="face back"></div>
                  <div className="face right"></div>
                  <div className="face left"></div>
                  <div className="face top"></div>
                  <div className="face bottom"></div>
                </div>
                <div className="cube-3d cube-3x3 cube-anim-2">
                  <div className="face front"></div>
                  <div className="face back"></div>
                  <div className="face right"></div>
                  <div className="face left"></div>
                  <div className="face top"></div>
                  <div className="face bottom"></div>
                </div>
                <div className="cube-3d cube-4x4 cube-anim-3">
                  <div className="face front"></div>
                  <div className="face back"></div>
                  <div className="face right"></div>
                  <div className="face left"></div>
                  <div className="face top"></div>
                  <div className="face bottom"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Grid */}
        <section className="mission-section">
          <h2 className="section-title text-center">Our Mission</h2>
          <div className="mission-grid">
            <div className="mission-card glass">
              <Target size={40} className="mission-icon" />
              <h3>Precision</h3>
              <p>
                Delivering hardware that responds instantly to your every move.
              </p>
            </div>
            <div className="mission-card glass">
              <Users size={40} className="mission-icon" />
              <h3>Community</h3>
              <p>Fostering a welcoming space for cubers of all skill levels.</p>
            </div>
            <div className="mission-card glass">
              <Heart size={40} className="mission-icon" />
              <h3>Passion</h3>
              <p>
                We love what we do, and we share that excitement in everything
                we create.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
