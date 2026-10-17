import React from 'react';
import './ProjectsShowcase.css';

export function ProjectsShowcase({ projects }) {
  return (
    <section id="projetos" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Resultados & Inovação</span>
          <h2 className="section-title">Iniciativas e Cases de Destaque</h2>
          <p className="section-subtitle">
            Projetos estruturados que transformaram eficiência operacional e elevaram padrões de qualidade.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((proj) => (
            <div key={proj.id} className="project-card">
              <div>
                <span className="project-badge">{proj.category}</span>
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-summary">{proj.summary}</p>
              </div>

              <div>
                <div className="project-impact">
                  <span>✦ Impacto: {proj.impact}</span>
                </div>

                <ul className="project-metrics">
                  {proj.metrics.map((m, idx) => (
                    <li key={idx}>{m}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
