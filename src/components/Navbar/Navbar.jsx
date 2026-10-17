import React from 'react';
import { Icons } from '../ui/Icons';
import './Navbar.css';

export function Navbar({ viewMode, setViewMode, isFullscreen, toggleFullscreen, linkedinUrl }) {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="brand-section">
          <div className="brand-badge">
            <Icons.Presentation size={22} />
          </div>
          <div className="brand-text">
            <span className="brand-title">Mônica Damaceno</span>
            <span className="brand-subtitle">Plataforma Interativa</span>
          </div>
        </a>

        {/* View Mode Switching: Deck Presentation vs Full Scroll */}
        <div className="nav-controls">
          <div className="mode-toggle-group" role="tablist" aria-label="Visualização">
            <button
              type="button"
              className={`mode-btn ${viewMode === 'deck' ? 'active' : ''}`}
              onClick={() => setViewMode('deck')}
              title="Modo Apresentação por Slides"
            >
              <Icons.Slides size={16} />
              <span>Modo Apresentação</span>
            </button>
            <button
              type="button"
              className={`mode-btn ${viewMode === 'scroll' ? 'active' : ''}`}
              onClick={() => setViewMode('scroll')}
              title="Visão Geral Completa em Rolagem"
            >
              <Icons.Layers size={16} />
              <span>Visão Completa</span>
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="nav-actions">
          {viewMode === 'deck' && (
            <button
              type="button"
              className="icon-btn"
              onClick={toggleFullscreen}
              title={isFullscreen ? 'Sair de Tela Cheia' : 'Modo Tela Cheia (F)'}
              aria-label="Tela Cheia"
            >
              {isFullscreen ? <Icons.Minimize size={18} /> : <Icons.Maximize size={18} />}
            </button>
          )}

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-linkedin"
            title="Ver perfil oficial no LinkedIn"
          >
            <Icons.Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </header>
  );
}
