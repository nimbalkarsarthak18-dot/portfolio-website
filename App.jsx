import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Preloader from './Preloader';
import CustomCursor from './CustomCursor';
import Navbar from './Navbar';
import SectionTracker from './SectionTracker';
import BackgroundCanvas from './BackgroundCanvas';
import Toast from './Toast';

import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import DataLab from './DataLab';
import Projects from './Projects';
import EngineeringLab from './EngineeringLab';
import Journey from './Journey';
import GitHubDashboard from './GitHubDashboard';
import Contact from './Contact';

import { useActiveSection } from './useActiveSection';

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

  const triggerToast = (message) => {
    setToastMessage(message);
    setToastVisible(true);

    setTimeout(() => {
      setToastVisible(false);
    }, 3200);
  };

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#050505'
      }}
    >

      {/* Cinematic Film Grain Overlay */}
      <div className="noise-overlay" />

      {/* Background Particles and Mouse Glow */}
      <BackgroundCanvas />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Preloader */}
      <AnimatePresence>
        {loading && (
          <Preloader
            onComplete={() => setLoading(false)}
          />
        )}
      </AnimatePresence>

      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Right Side Section Tracker */}
      <SectionTracker activeSection={activeSection} />

      {/* Main Website Content */}
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="datalab">
          <DataLab />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="engineering-lab">
          <EngineeringLab />
        </section>

        <section id="journey">
          <Journey />
        </section>

        <section id="github">
          <GitHubDashboard />
        </section>

        <section id="contact">
          <Contact onShowToast={triggerToast} />
        </section>
      </main>

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        isVisible={toastVisible}
        onDismiss={() => setToastVisible(false)}
      />

    </div>
  );
}
