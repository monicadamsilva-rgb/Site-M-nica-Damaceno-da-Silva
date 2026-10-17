import React, { useState, useEffect, useCallback } from 'react';
import { Icons } from '../ui/Icons';
import './PresentationDeck.css';

export function PresentationDeck({ slides, isFullscreen, toggleFullscreen }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  const totalSlides = slides.length;
  const currentSlide = slides[currentIndex];
  const progressPercent = ((currentIndex + 1) / totalSlides) * 100;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1 < totalSlides ? prev + 1 : 0));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : totalSlides - 1));
  }, [totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        prevSlide();
      } else if (e.key.toLowerCase() === 'f') {
        toggleFullscreen();
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((p) => !p);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, toggleFullscreen]);

  // Autoplay timer
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  return (
    <section id="apresentacao" className={`deck-container ${isFullscreen ? 'fullscreen' : ''}`}>
      <div className="container">
        <div className="deck-shell">
          {/* Progress Bar */}
          <div className="deck-progress-track">
            <div className="deck-progress-fill" style={{ width: `${progressPercent}%` }}></div>
          </div>

          {/* Deck Top Header */}
          <div className="deck-header">
            <div className="deck-info">
              <span className="slide-counter">
                SLIDE {currentSlide.number} / 0{totalSlides}
              </span>
              <span className="slide-badge">{currentSlide.badge}</span>
            </div>

            <div className="deck-toolbar">
              <button
                type="button"
                className={`toolbar-btn ${isPlaying ? 'active' : ''}`}
                onClick={() => setIsPlaying(!isPlaying)}
                title={isPlaying ? 'Pausar apresentação automática' : 'Iniciar apresentação contínua'}
              >
                {isPlaying ? <Icons.Pause size={14} /> : <Icons.Play size={14} />}
                <span>{isPlaying ? 'Pausar' : 'Auto-Play'}</span>
              </button>

              <button
                type="button"
                className={`toolbar-btn ${showNotes ? 'active' : ''}`}
                onClick={() => setShowNotes(!showNotes)}
                title="Alternar notas e insights do slide"
              >
                <Icons.FileText size={14} />
                <span>Insights</span>
              </button>

              <button
                type="button"
                className="toolbar-btn"
                onClick={toggleFullscreen}
                title="Modo Tela Cheia (Tecla F)"
              >
                {isFullscreen ? <Icons.Minimize size={14} /> : <Icons.Maximize size={14} />}
              </button>
            </div>
          </div>

          {/* Main Slide Canvas */}
          <div className="deck-canvas">
            <div key={currentSlide.id} className="slide-content-wrapper">
              <div className="slide-title-group">
                <h2>{currentSlide.title}</h2>
                <p className="slide-subtitle">{currentSlide.subtitle}</p>
              </div>

              {/* Bullet Points */}
              <ul className="slide-bullets">
                {currentSlide.content.map((item, idx) => (
                  <li key={idx} className="bullet-item">
                    <span className="bullet-icon">
                      <Icons.CheckCircle2 size={18} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Highlight Cards */}
              <div className="slide-highlights">
                {currentSlide.highlights.map((hl, idx) => (
                  <div key={idx} className="highlight-box">
                    <h4>{hl.title}</h4>
                    <p>{hl.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="deck-navigation">
            <div className="nav-arrows">
              <button
                type="button"
                className="arrow-btn"
                onClick={prevSlide}
                title="Slide Anterior (←)"
                aria-label="Slide anterior"
              >
                <Icons.ChevronLeft size={22} />
              </button>
              <button
                type="button"
                className="arrow-btn"
                onClick={nextSlide}
                title="Próximo Slide (→)"
                aria-label="Próximo slide"
              >
                <Icons.ChevronRight size={22} />
              </button>
            </div>

            {/* Slide Quick Selectors */}
            <div className="slide-thumbnails">
              {slides.map((s, index) => (
                <button
                  key={s.id}
                  type="button"
                  className={`thumb-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  title={s.title}
                >
                  <span>{s.number}</span>
                  <span className="thumb-label">{s.badge}</span>
                </button>
              ))}
            </div>

            <span className="shortcuts-tip">Use as setas ← → ou Espaço</span>
          </div>
        </div>
      </div>
    </section>
  );
}
