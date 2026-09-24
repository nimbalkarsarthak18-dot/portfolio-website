import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import SectionTracker from './components/SectionTracker';
import BackgroundCanvas from './components/BackgroundCanvas';
import Toast from './components/Toast';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import DataLab from './sections/DataLab';
import Projects from './sections/Projects';
import EngineeringLab from './sections/EngineeringLab';
import Journey from './sections/Journey';
import GitHubDashboard from './sections/GitHubDashboard';
import Contact from './sections/Contact';

import { useActiveSection } from './hooks/useActiveSection';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const sectionIds = [
    'hero',
    'about',
    'skills',
    'datalab',
    'projects',
    'engineering-lab',
    'journey',
    'github',
    'contact'
  ];

  const activeSection = useActiveSection(sectionIds);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3200);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#050505' }}>
      {/* Cinematic Film Grain Overlay */}
      <div className="noise-overlay" />

      {/* Atmospheric Particles & Mouse Glow Canvas */}
      <BackgroundCanvas />

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Preloader Screen */}
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Fixed Top Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Right HUD Section Tracker (01 to 08) */}
      <SectionTracker activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <DataLab />
        <Projects />
        <EngineeringLab />
        <Journey />
        <GitHubDashboard />
        <Contact onShowToast={triggerToast} />
      </main>

      {/* HUD Toast Notifications */}
      <Toast
        message={toastMessage}
        isVisible={toastVisible}
        onDismiss={() => setToastVisible(false)}
      />
    </div>
  );
}
