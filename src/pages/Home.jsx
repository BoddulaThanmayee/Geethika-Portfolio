import "./Home.css";
import profilePhoto from "../assets/profile/profile.jpeg";
import ScrollReveal from "../components/ScrollReveal";

function Home() {
  return (
    <main className="home">

      {/* Hero Section */}
      <section className="hero">

        <ScrollReveal>
          <div className="hero-left">

            <p className="hero-label">
              COMPUTER SCIENCE • SOFTWARE • AI
            </p>

            <h1>
              GEETHIKA
              <br />
              <span>MAHALAKSHMI</span>
            </h1>

            <p className="hero-description">
              Computer Science Engineering student interested in
              software development, artificial intelligence, and
              building practical digital solutions to real-world problems.
            </p>

            <div className="hero-buttons">

              <a href="/projects" className="primary-button">
                Explore My Work <span>↗</span>
              </a>

              <a
                href="/resume/mahaResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                View Resume <span>↗</span>
              </a>

            </div>

            <div className="hero-meta">

              <div>
                <strong>9.1</strong>
                <span>CGPA / 10</span>
              </div>

              <div>
                <strong>03</strong>
                <span>PROJECTS</span>
              </div>

              <div>
                <strong>2028</strong>
                <span>GRADUATION</span>
              </div>

            </div>

          </div>
        </ScrollReveal>


        <ScrollReveal className="image-reveal">
          <div className="hero-right">

            <div className="hero-image-wrapper">

              <div className="image-label top-label">
                SOFTWARE
              </div>

              <div className="image-label bottom-label">
                BUILD • SOLVE • CREATE
              </div>

              <img
                src={profilePhoto}
                alt="Bandaru Geethika Mahalakshmi"
                className="hero-profile-image"
              />

            </div>

            <div className="floating-tag tag-one">
              CODE
            </div>

            <div className="floating-tag tag-two">
              AI
            </div>

            <div className="floating-tag tag-three">
              DATA
            </div>

          </div>
        </ScrollReveal>

      </section>


      {/* Intro Strip */}
      <ScrollReveal>
        <section className="intro-strip">

          <div>
            <span>01</span>
            <p>ABOUT THE DEVELOPER</p>
          </div>

          <p className="intro-text">
            I enjoy exploring technology, learning new concepts,
            and developing software ideas into practical solutions.
          </p>

        </section>
      </ScrollReveal>


      {/* Closing Statement */}
      <ScrollReveal>
        <section className="home-closing">

          <p>
            CURRENTLY BUILDING
          </p>

          <h2>
            Ideas into
            <br />
            <span>impact.</span>
          </h2>

          <a href="/contact">
            Let's build something meaningful ↗
          </a>

        </section>
      </ScrollReveal>

    </main>
  );
}

export default Home;