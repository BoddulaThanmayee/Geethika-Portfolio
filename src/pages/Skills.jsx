
import "./Skills.css";

function Skills() {
  const skillGroups = [
    {
      number: "01",
      title: "Programming",
      description: "Languages I use to think, solve problems, and build software.",
      skills: ["Java", "Python", "JavaScript"],
    },
    {
      number: "02",
      title: "Frontend",
      description: "Technologies I use to create interactive digital experiences.",
      skills: ["React.js", "Vite", "HTML", "CSS"],
    },
    {
      number: "03",
      title: "Backend & APIs",
      description: "Tools for building application logic and connecting systems.",
      skills: ["FastAPI", "REST API", "Uvicorn", "JDBC"],
    },
    {
      number: "04",
      title: "AI & Data",
      description: "Technologies I explore for intelligent and data-driven solutions.",
      skills: [
        "YOLO / Ultralytics",
        "OpenCV",
        "Pandas",
        "Power BI",
        "Data Analytics",
      ],
    },
    {
      number: "05",
      title: "Databases",
      description: "Platforms I work with to store and manage application data.",
      skills: ["SQLite", "SQLAlchemy", "MySQL", "Firebase"],
    },
    {
      number: "06",
      title: "Tools",
      description: "Development tools that support my everyday workflow.",
      skills: ["Git", "GitHub", "VS Code", "Postman"],
    },
  ];

  return (
    <main className="skills-page">
      {/* HERO */}
      <section className="skills-hero">
        <div className="skills-label">
          02 / SKILLS
        </div>

        <div className="skills-hero-content">
          <h1>
            My technical
            <br />
            <span>toolkit.</span>
          </h1>

          <p>
            Technologies, languages, and tools I've explored while
            building projects, experimenting with ideas, and learning
            through hands-on development.
          </p>
        </div>
      </section>

      {/* SKILL SHOWCASE */}
      <section className="skills-showcase">
        <div className="skills-section-heading">
          <span>WHAT I WORK WITH</span>
          <p>
            A growing collection of technologies shaped by projects,
            hackathons, and continuous learning.
          </p>
        </div>

        <div className="skills-cards">
          {skillGroups.map((group, index) => (
            <article
              className={`skill-card ${
                index === 0 ? "skill-card-large" : ""
              }`}
              key={group.number}
            >
              <div className="skill-card-top">
                <span className="skill-card-number">
                  {group.number}
                </span>

                <span className="skill-card-arrow">
                  ↗
                </span>
              </div>

              <div className="skill-card-main">
                <div className="skill-card-title">
                  <h2>{group.title}</h2>
                </div>

                <p className="skill-card-description">
                  {group.description}
                </p>
              </div>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

              <div className="skill-card-decoration">
                {group.number}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BOTTOM STATEMENT */}
      <section className="skills-bottom">
        <p>MY APPROACH TO TECHNOLOGY</p>

        <h2>
          Learn.
          <br />
          Build.
          <br />
          <span>Evolve.</span>
        </h2>

        <div className="skills-bottom-line">
          <span>CURIOUS BY DEFAULT</span>
          <span>ALWAYS BUILDING</span>
          <span>ALWAYS LEARNING</span>
        </div>
      </section>
    </main>
  );
}

export default Skills;
