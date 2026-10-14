
import "./Projects.css";

import smartcartImage from "../assets/projects/smartcart/smartcart.png";
import spendwiseImage from "../assets/projects/spendwise/spendwise.png";
import smartAmbulanceImage from "../assets/projects/smartambulance/smartambulance.jpeg";

function Projects() {
  const projects = [
    {
      number: "01",
      name: "Smart Cart",
      category: "MOBILE • E-COMMERCE",
      description:
        "A supermarket self-checkout application designed to simplify shopping with cart management, authentication, and digital payments.",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "Firestore",
        "Razorpay",
      ],
      image: smartcartImage,
      imageAlt: "Smart Cart project",
      caseStudy: "/projects/smartcart",
      github: "https://github.com/geethumaha/rescuering.github.io",
      featured: true,
    },
    {
      number: "02",
      name: "Spend Wise",
      category: "JAVA • DESKTOP • DATA MANAGEMENT",
      description:
        "A smart expense analyzer for tracking income, expenses, categories, and financial reports.",
      technologies: ["Java", "Java Swing", "MySQL", "JDBC"],
      image: spendwiseImage,
      imageAlt: "Spend Wise project",
      caseStudy: "/projects/spendwise",
      github:
        "https://github.com/geethumaha/SpendWise-Smart-Expense-Analyzer",
      featured: false,
    },
    {
      number: "03",
      name: "Smart Ambulance Route",
      category: "EMERGENCY RESPONSE • TRAFFIC COORDINATION",
      description:
        "A software project focused on ambulance route coordination to support emergency response and improve communication with traffic authorities.",
      technologies: [
        "Route Coordination",
        "GPS Tracking",
        "Traffic Management",
      ],
      image: smartAmbulanceImage,
      imageAlt: "Smart Ambulance Route project",
      caseStudy: "/projects/smart-ambulance-route",
      github: "https://github.com/geethumaha/SmartAmbulance",
      featured: false,
    },
  ];

  return (
    <main className="projects-page">
      <section className="projects-hero">
        <div className="projects-label">03 / PROJECTS</div>

        <div>
          <h1>
            Things I've
            <br />
            <span>built.</span>
          </h1>

          <p>
            A collection of software projects where I turn ideas,
            problems, and experiments into working solutions.
          </p>
        </div>
      </section>

      <section className="projects-list">
        {projects.map((project) => (
          <article
            className={`project-card ${
              project.featured ? "project-featured" : ""
            }`}
            key={project.number}
          >
            <div className="project-card-number">
              {project.number}
            </div>

            <div className="project-card-content">
              <div className="project-card-info">
                <p className="project-category">
                  {project.category}
                </p>

                <h2>{project.name}</h2>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a href={project.caseStudy}>
                    View Case Study ↗
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    GitHub Repo ↗
                  </a>
                </div>
              </div>

              <div className="project-card-image">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                />
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="projects-closing">
        <p>FROM IDEA TO IMPLEMENTATION</p>

        <h2>
          Build.
          <br />
          Test.
          <br />
          <span>Improve.</span>
        </h2>
      </section>
    </main>
  );
}

export default Projects;
