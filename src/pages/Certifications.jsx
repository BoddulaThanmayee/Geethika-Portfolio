import "./Certifications.css";

function Certifications() {
  const certifications = [
    {
      number: "01",
      title: "Data Analytics with Python",
      organization: "NPTEL",
      date: "04 / 2026",
      category: "DATA • PYTHON • ANALYTICS",
      file: "/certificates/mahaDataanalytics.pdf",
    },
    {
      number: "02",
      title:
        "AWS Academy Graduate – Machine Learning for Natural Language Processing – Training Badge",
      organization: "AWS Academy",
      date: "12 / 2025",
      category: "AWS • MACHINE LEARNING",
     file: "/certificates/mahaML.pdf",
    },
    {
      number: "03",
      title: "Quantum Computing Virtual Internship",
      organization: "AICTE – EduSkills",
      date: "03 / 2026",
      category: "QUANTUM • INTERNSHIP",
      file: "/certificates/mahaQuantum.pdf",
    },
  ];

  return (
    <main className="certifications-page">
      <section className="certifications-hero">
        <div className="certifications-label">
          04 / CERTIFICATIONS
        </div>

        <div>
          <h1>
            Learning
            <br />
            <span>in progress.</span>
          </h1>

          <p>
            Certifications and learning experiences that reflect
            my continuous growth across software, data,
            cloud, and emerging technologies.
          </p>
        </div>
      </section>

      <section className="certifications-list">
        {certifications.map((certificate) => (
          <article
            className="certificate-card"
            key={certificate.number}
          >
            <div className="certificate-number">
              {certificate.number}
            </div>

            <div className="certificate-content">
              <div className="certificate-info">
                <p className="certificate-category">
                  {certificate.category}
                </p>

                <h2>{certificate.title}</h2>

                <p className="certificate-organization">
                  {certificate.organization}
                </p>

                <p className="certificate-date">
                  {certificate.date}
                </p>

                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Full Certificate ↗
                </a>
              </div>

              <div className="certificate-visual">
                <iframe
                  src={certificate.file}
                  title={`${certificate.title} certificate`}
                />
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="certifications-closing">
        <p>KEEP LEARNING • KEEP BUILDING</p>

        <h2>
          Knowledge
          <br />
          becomes
          <br />
          <span>practice.</span>
        </h2>
      </section>
    </main>
  );
}

export default Certifications;
