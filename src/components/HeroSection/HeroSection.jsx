import React from 'react';
import { Icons } from '../ui/Icons';
import './HeroSection.css';

export function HeroSection({ personal, onStartDeck }) {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge-pill">
            <Icons.Sparkles size={16} />
            <span>Perfil Profissional Interativo</span>
          </div>

          <h1 className="hero-title">
            Legislação Tributária & <span className="gradient-text">Mapeamento de Processos</span>
          </h1>

          <p className="hero-subtitle">{personal.role}</p>

          <p className="hero-description">
            {personal.summary}
          </p>

          <div className="hero-actions">
            <button type="button" className="btn-primary" onClick={onStartDeck}>
              <Icons.Play size={18} />
              <span>Ver Apresentação Interativa</span>
            </button>

            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Icons.ExternalLink size={18} />
              <span>Conectar no LinkedIn</span>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="hero-stats">
            {personal.stats.map((st, idx) => (
              <div key={idx} className="stat-item">
                <span className="stat-value">{st.value}</span>
                <span className="stat-label">{st.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Card Showcase */}
        <div className="hero-card-wrapper">
          <div className="hero-profile-card">
            <div className="profile-avatar-box">
              <span>MD</span>
            </div>

            <div className="profile-meta">
              <h3>{personal.name}</h3>
              <p>{personal.location}</p>
            </div>

            <div className="profile-tags">
              <span className="profile-tag">Legislação Tributária</span>
              <span className="profile-tag">Mapeamento de Processos</span>
              <span className="profile-tag">Savings Tributários</span>
              <span className="profile-tag">Prevenção de Contingências</span>
            </div>

            <div className="live-indicator">
              <div className="indicator-dot"></div>
              <span>Disponível para novos desafios e projetos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
