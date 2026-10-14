
import "./Contact.css";

function Contact() {
  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <p className="contact-label">
          06 / CONTACT
        </p>

        <h1>
          Let's build
          <br />
          something <span>together.</span>
        </h1>

        <p className="contact-intro">
          Have a project idea, collaboration opportunity, or
          simply want to connect? I'd be happy to hear from you.
        </p>
      </section>

      {/* CONTACT DETAILS */}
      <section className="contact-details">
        <div className="contact-detail">
          <p className="contact-detail-label">
            EMAIL
          </p>

          <a href="mailto:geethikamaha105@gmail.com">
            geethikamaha105@gmail.com ↗
          </a>
        </div>

        <div className="contact-detail">
          <p className="contact-detail-label">
            PHONE
          </p>

          <a href="tel:+919160546049">
            +91 9160546049 ↗
          </a>
        </div>

        <div className="contact-detail">
          <p className="contact-detail-label">
            AVAILABILITY
          </p>

          <p>
            Open to opportunities,
            <br />
            collaborations &amp; projects.
          </p>
        </div>
      </section>

      {/* SOCIAL LINKS */}
      <section className="contact-social">
        <p className="contact-social-label">
          FIND ME ONLINE
        </p>

        <div className="contact-social-links">
          <a
            href="https://www.linkedin.com/in/bandaru-geethika-mahalakshmi-195702326"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/geethumaha"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </section>

      {/* CLOSING */}
      <section className="contact-closing">
        <p>
          BANDARU GEETHIKA MAHALAKSHMI
        </p>

        <h2>
          Software
          <br />
          <span>Engineer.</span>
        </h2>

        <a href="/">
          ← Back to Home
        </a>
      </section>
    </main>
  );
}

export default Contact;
