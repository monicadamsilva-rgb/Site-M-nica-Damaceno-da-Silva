import React, { useState } from 'react';
import { profileData } from './data/profileData';
import { Navbar } from './components/Navbar/Navbar';
import { HeroSection } from './components/HeroSection/HeroSection';
import { PresentationDeck } from './components/PresentationDeck/PresentationDeck';
import { ExperienceTimeline } from './components/ExperienceTimeline/ExperienceTimeline';
import { SkillsMatrix } from './components/SkillsMatrix/SkillsMatrix';
import { ProjectsShowcase } from './components/ProjectsShowcase/ProjectsShowcase';
import { ContactSection } from './components/ContactSection/ContactSection';
import './App.css';

export default function App() {
  const [viewMode, setViewMode] = useState('deck'); // 'deck' | 'scroll'
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  const handleStartDeck = () => {
    setViewMode('deck');
    const deckElem = document.getElementById('apresentacao');
    if (deckElem) {
      deckElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`app-root ${viewMode === 'deck' ? 'deck-view-active' : ''}`}>
      <Navbar
        viewMode={viewMode}
        setViewMode={setViewMode}
        isFullscreen={isFullscreen}
        toggleFullscreen={toggleFullscreen}
        linkedinUrl={profileData.personal.linkedinUrl}
      />

      {viewMode === 'deck' ? (
        <main className="animate-fade-in">
          <HeroSection
            personal={profileData.personal}
            onStartDeck={handleStartDeck}
          />
          <PresentationDeck
            slides={profileData.slides}
            isFullscreen={isFullscreen}
            toggleFullscreen={toggleFullscreen}
          />
          <ContactSection personal={profileData.personal} />
        </main>
      ) : (
        <main className="animate-fade-in">
          <HeroSection
            personal={profileData.personal}
            onStartDeck={handleStartDeck}
          />
          <PresentationDeck
            slides={profileData.slides}
            isFullscreen={isFullscreen}
            toggleFullscreen={toggleFullscreen}
          />
          <ExperienceTimeline experiences={profileData.experiences} />
          <SkillsMatrix skills={profileData.skills} />
          <ProjectsShowcase projects={profileData.projects} />
          <ContactSection personal={profileData.personal} />
        </main>
      )}
    </div>
  );
}
