import React from 'react';
import { Icons } from '../ui/Icons';
import './SkillsMatrix.css';

export function SkillsMatrix({ skills }) {
  return (
    <section id="competencias" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Competências Centrais</span>
          <h2 className="section-title">Matriz de Habilidades</h2>
          <p className="section-subtitle">
            Domínio técnico da legislação tributária brasileira, mapeamento de fluxos de ponta a ponta e identificação de savings fiscais.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((cat, idx) => (
            <div key={idx} className="skill-category-card">
              <h3 className="category-title">
                <span className="category-icon">
                  <Icons.Award size={20} />
                </span>
                <span>{cat.category}</span>
              </h3>

              <div className="skill-list">
                {cat.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{item.name}</span>
                      <span className="skill-percent">{item.level}%</span>
                    </div>
                    <div className="skill-track">
                      <div className="skill-fill" style={{ width: `${item.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
