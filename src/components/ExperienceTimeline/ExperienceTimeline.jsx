import React, { useState } from 'react';
import { Icons } from '../ui/Icons';
import './ExperienceTimeline.css';

export function ExperienceTimeline({ experiences }) {
  const [selectedTag, setSelectedTag] = useState('Todos');

  // Collect all unique tags
  const allTags = ['Todos', ...new Set(experiences.flatMap((e) => e.tags))];

  const filteredExperiences = selectedTag === 'Todos'
    ? experiences
    : experiences.filter((e) => e.tags.includes(selectedTag));

  return (
    <section id="trajetoria" className="timeline-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Carreira & Impacto</span>
          <h2 className="section-title">Trajetória Profissional</h2>
          <p className="section-subtitle">
            Marcos de atuação tributária, mapeamento de rotinas operacionais e prevenção ativa de contingências fiscais.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '2.5rem' }}>
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(tag)}
              style={{
                padding: '6px 14px',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                fontWeight: 600,
                border: '1px solid var(--border-subtle)',
                background: selectedTag === tag ? 'var(--accent-primary)' : 'var(--bg-secondary)',
                color: selectedTag === tag ? '#ffffff' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Timeline Tree */}
        <div className="timeline-tree">
          {filteredExperiences.map((exp) => (
            <div key={exp.id} className="timeline-card">
              <div className="timeline-node"></div>
              <div className="timeline-content-box">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="role-title">{exp.role}</h3>
                    <p className="company-badge">{exp.company}</p>
                  </div>
                  <span className="period-pill">{exp.period}</span>
                </div>

                <p className="timeline-desc">{exp.description}</p>

                <ul className="timeline-achievements">
                  {exp.achievements.map((ach, idx) => (
                    <li key={idx}>
                      <span className="achievement-bullet">
                        <Icons.CheckCircle2 size={16} />
                      </span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                <div className="timeline-tags">
                  {exp.tags.map((t, idx) => (
                    <span key={idx} className="exp-tag">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
