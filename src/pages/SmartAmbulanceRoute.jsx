
import "./SmartAmbulanceRoute.css";

function SmartAmbulanceRoute() {
  return (
    <main className="ambulance-page">
      <section className="ambulance-hero">
        <div className="ambulance-label">
          03 / PROJECT CASE STUDY
        </div>

        <div>
          <h1>
            Smart
            <br />
            <span>Ambulance Route.</span>
          </h1>

          <p>
            A project focused on ambulance routing and traffic
            coordination for emergency response.
          </p>
        </div>
      </section>

      <section className="ambulance-overview">
        <p className="ambulance-section-label">
          PROJECT OVERVIEW
        </p>

        <h2>Helping emergency journeys move forward.</h2>

        <p>
          This project explores how route planning and traffic
          coordination can support ambulance movement during
          emergencies. Add the confirmed features and implementation
          details here.
        </p>
      </section>

      <section className="ambulance-details">
        <p className="ambulance-section-label">
          TECHNOLOGY STACK
        </p>

        <p>
          Update this section with the actual technologies used
          in Geethika's project.
        </p>

        <a
          href="https://github.com/geethumaha/SmartAmbulance"
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub Repository ↗
        </a>
      </section>
    </main>
  );
}

export default SmartAmbulanceRoute;
