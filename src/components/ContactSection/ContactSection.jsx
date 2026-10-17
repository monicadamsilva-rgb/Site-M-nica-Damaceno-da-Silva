import React, { useState } from 'react';
import { Icons } from '../ui/Icons';
import './ContactSection.css';

export function ContactSection({ personal }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <footer id="contato" className="contact-section">
      <div className="container">
        <div className="contact-card-box">
          <div className="hero-badge-pill">
            <Icons.Sparkles size={16} />
            <span>Vamos Conversar</span>
          </div>

          <h2 className="contact-title">
            Pronta para Conectar e Gerar Novos Resultados
          </h2>

          <p className="contact-subtitle">
            Interessado(a) em oportunidades nas áreas fiscal e tributária, projetos de mapeamento de processos ou consultoria em savings e mitigação de riscos?
          </p>

          <div className="contact-channels">
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="channel-btn primary"
            >
              <Icons.Linkedin size={20} />
              <span>Conectar via LinkedIn</span>
            </a>

            <button
              type="button"
              className="channel-btn"
              onClick={handleCopyEmail}
              title="Copiar endereço de e-mail"
            >
              {copiedEmail ? <Icons.Check size={20} /> : <Icons.Copy size={20} />}
              <span>{copiedEmail ? 'E-mail Copiado!' : 'Copiar E-mail'}</span>
            </button>

            <a
              href={`mailto:${personal.email}`}
              className="channel-btn"
            >
              <Icons.Mail size={20} />
              <span>Enviar Mensagem</span>
            </a>
          </div>

          {copiedEmail && (
            <span className="copy-toast">
              ✓ E-mail {personal.email} copiado para a área de transferência!
            </span>
          )}

          <div className="footer-note">
            <p>© {new Date().getFullYear()} {personal.name} • Plataforma de Apresentações Interativas</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
