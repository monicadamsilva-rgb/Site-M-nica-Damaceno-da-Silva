# Plataforma de Apresentações Interativas - Mônica Damaceno da Silva

Aplicação interativa desenvolvida com **React** + **Vite** e estilizada puramente com **CSS Vanilla** (sem frameworks utilitários externos, seguindo design tokens modernos e glassmorphism).

---

## 🚀 Como Executar o Projeto

1. Abra o terminal na raiz do projeto:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Acesse a aplicação no seu navegador: [http://localhost:3000](http://localhost:3000)

---

## 🌟 Funcionalidades e Interatividade

- **Modo Apresentação (Deck de Slides):**
  - Navegação dinâmica por teclado (`←`, `→`, tecla `F` para tela cheia e barra de `Espaço` para pausar/retomar).
  - Reprodução automática (*Auto-Play*) com controle de timer.
  - Indicadores e seletor rápido de slides na base.
  - Painel de insights e notas de apresentação.
- **Visão Completa (Scroll Geral):**
  - Permite alternar no menu superior para explorar todo o histórico sequencialmente.
- **Linha do Tempo Interativa (`ExperienceTimeline`):**
  - Filtro dinâmico por tags e competências.
  - Cards com efeito glassmorphism e marcadores luminosos.
- **Matriz de Competências (`SkillsMatrix`):**
  - Barras de proficiência com gradientes luminescentes.
- **Cases e Resultados de Impacto (`ProjectsShowcase`):**
  - Métricas e entregas mensuráveis de destaque.
- **Canais de Contato (`ContactSection`):**
  - Atalho direto para o LinkedIn oficial e botão com feedback visual de cópia de e-mail.

---

## 📁 Estrutura de Arquivos e Componentização

```
├── index.html                    # Entry HTML com fontes Google & SEO
├── package.json                  # Dependências React + Vite
├── vite.config.js                # Configuração do Vite
├── src/
│   ├── main.jsx                  # Ponto de entrada React
│   ├── App.jsx                   # Controle de modos (Deck vs Completo) e estado de tela cheia
│   ├── App.css                   # Estilização da raiz da aplicação
│   ├── index.css                 # Tokens globais de CSS Vanilla (cores, espaçamentos, tipografia)
│   ├── data/
│   │   └── profileData.js        # Schema centralizado com dados da Mônica Damaceno
│   └── components/
│       ├── ui/
│       │   └── Icons.jsx         # Suíte de ícones vetoriais SVG autossuficiente
│       ├── Navbar/               # Barra superior com alternância de modos e links
│       ├── HeroSection/          # Apresentação executiva e métricas rápidas
│       ├── PresentationDeck/     # Mecanismo de slides interativos e atalhos
│       ├── ExperienceTimeline/   # Linha do tempo de carreira e filtros
│       ├── SkillsMatrix/         # Matriz de habilidades e competências
│       ├── ProjectsShowcase/     # Vitrine de cases estratégicos
│       └── ContactSection/       # Seção de contato e conectividade
```

---

## ✏️ Como Atualizar os Dados do Perfil

Basta editar o arquivo [`src/data/profileData.js`](file:///c:/Users/Aluno/Documents/Plataforma%20de%20apresenta%C3%A7%C3%B5es%20interativas/src/data/profileData.js). Todo o conteúdo de texto, slides, experiências e competências está modularizado e reflete instantaneamente em toda a plataforma!
