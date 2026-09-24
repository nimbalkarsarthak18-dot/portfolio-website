import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, FileText, Terminal, Shield, ChevronDown, Mail, Phone, Linkedin, Cpu } from 'lucide-react';
import portraitImg from '../assets/portrait.jpg';

export default function Hero() {
  const containerRef = useRef(null);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = (e) => {
    e.preventDefault();
    // Creates a high-fidelity synthetic download trigger or opens resume
    alert('Resume download link initialized. Update file at /public/resume.pdf to attach your customized resume file.');
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6rem',
        paddingBottom: '3rem',
        overflow: 'hidden'
      }}
      className="tech-grid-bg"
    >
      {/* Cinematic Red Circular Moon Glow Behind Portrait / Hero Center */}
      <div
        style={{
          position: 'absolute',
          top: '35%',
          right: '12%',
          transform: 'translate(10%, -50%)',
          width: '560px',
          height: '560px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(229, 9, 20, 0.42) 0%, rgba(180, 5, 15, 0.22) 45%, rgba(5, 5, 5, 0) 72%)',
          filter: 'blur(45px)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <div
        style={{
          maxWidth: '1440px',
          width: '100%',
          margin: '0 auto',
          padding: '0 2.5rem',
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3.5rem',
          alignItems: 'center'
        }}
        className="hero-grid"
      >
        {/* Left Column: Bold Neo-Noir Typography */}
        <div style={{ display: 'flex', flexDirection: 'column', zIndex: 3 }}>
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              padding: '0.4rem 0.9rem',
              background: 'rgba(229, 9, 20, 0.08)',
              border: '1px solid rgba(229, 9, 20, 0.3)',
              borderRadius: '4px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.72rem',
              color: '#ff2a3a',
              letterSpacing: '2px',
              width: 'fit-content',
              marginBottom: '1.5rem'
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#ff1a2a',
                boxShadow: '0 0 8px #ff1a2a'
              }}
            />
            SANJIVANI COLLEGE OF ENGINEERING, KOPARGAON // PUNE DIVISION
          </motion.div>

          {/* Subheading Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 'clamp(1rem, 2vw, 1.4rem)',
              color: '#8e8e99',
              letterSpacing: '3px',
              marginBottom: '0.5rem',
              fontWeight: 400
            }}
          >
            HELLO, I'M
          </motion.div>

          {/* Oversized Cinematic Name */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(2.8rem, 6.5vw, 5.8rem)',
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: '-1px',
              color: '#ffffff',
              textTransform: 'uppercase',
              margin: '0 0 1.2rem 0'
            }}
          >
            SARTHAK<br />
            <span
              style={{
                color: '#ffffff',
                textShadow: '0 0 35px rgba(229, 9, 20, 0.35)'
              }}
            >
              NIMBALKAR
            </span>
          </motion.h1>

          {/* Identity Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 'clamp(0.85rem, 1.6vw, 1.15rem)',
              fontWeight: 700,
              color: '#ff2a3a',
              letterSpacing: '3px',
              marginBottom: '1rem'
            }}
          >
            <span>ENGINEERING</span>
            <span style={{ color: '#444' }}>×</span>
            <span>DATA</span>
            <span style={{ color: '#444' }}>×</span>
            <span>AI</span>
            <span style={{ color: '#444' }}>×</span>
            <span>ROBOTICS</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
              color: '#a1a1aa',
              maxWidth: '560px',
              lineHeight: 1.6,
              marginBottom: '2.2rem'
            }}
          >
            Mechanical Engineering Student developing intelligent cyber-physical systems through
            advanced <strong style={{ color: '#ffffff' }}>Data Science</strong>,{' '}
            <strong style={{ color: '#ffffff' }}>Machine Learning</strong>,{' '}
            <strong style={{ color: '#ffffff' }}>IoT</strong>, and autonomous{' '}
            <strong style={{ color: '#ffffff' }}>Robotics</strong>.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              flexWrap: 'wrap'
            }}
          >
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              data-magnetic="true"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.9rem 1.85rem',
                background: '#e50914',
                color: '#ffffff',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '1.5px',
                borderRadius: '4px',
                textDecoration: 'none',
                boxShadow: '0 0 25px rgba(229, 9, 20, 0.45)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#ff1a2a';
                e.currentTarget.style.boxShadow = '0 0 35px rgba(229, 9, 20, 0.75)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#e50914';
                e.currentTarget.style.boxShadow = '0 0 25px rgba(229, 9, 20, 0.45)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>EXPLORE MY WORK</span>
              <ArrowDownRight size={18} />
            </a>

            <button
              onClick={handleDownloadResume}
              data-magnetic="true"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.9rem 1.85rem',
                background: 'rgba(15, 15, 20, 0.7)',
                color: '#f5f5f7',
                border: '1px solid rgba(229, 9, 20, 0.45)',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '1.5px',
                borderRadius: '4px',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#ff1a2a';
                e.currentTarget.style.background = 'rgba(229, 9, 20, 0.15)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(229, 9, 20, 0.35)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(229, 9, 20, 0.45)';
                e.currentTarget.style.background = 'rgba(15, 15, 20, 0.7)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <FileText size={17} color="#ff2a3a" />
              <span>DOWNLOAD RESUME</span>
            </button>
          </motion.div>

          {/* Quick Direct Comms Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              marginTop: '1.75rem',
              flexWrap: 'wrap'
            }}
          >
            <a
              href="mailto:nimbalkarsarthak18@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                color: '#8e8e99',
                textDecoration: 'none',
                padding: '0.4rem 0.8rem',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(229, 9, 20, 0.25)',
                borderRadius: '3px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = '#ff1a2a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#8e8e99';
                e.currentTarget.style.borderColor = 'rgba(229, 9, 20, 0.25)';
              }}
            >
              <Mail size={13} color="#ff1a2a" />
              <span>nimbalkarsarthak18@gmail.com</span>
            </a>

            <a
              href="tel:+917249649039"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                color: '#8e8e99',
                textDecoration: 'none',
                padding: '0.4rem 0.8rem',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(229, 9, 20, 0.25)',
                borderRadius: '3px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = '#ff1a2a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#8e8e99';
                e.currentTarget.style.borderColor = 'rgba(229, 9, 20, 0.25)';
              }}
            >
              <Phone size={13} color="#ff1a2a" />
              <span>+91 72496 49039</span>
            </a>

            <a
              href="https://www.linkedin.com/in/sarthak-nimbalkar"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                color: '#8e8e99',
                textDecoration: 'none',
                padding: '0.4rem 0.8rem',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(229, 9, 20, 0.25)',
                borderRadius: '3px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = '#ff1a2a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#8e8e99';
                e.currentTarget.style.borderColor = 'rgba(229, 9, 20, 0.25)';
              }}
            >
              <Linkedin size={13} color="#ff1a2a" />
              <span>LINKEDIN</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Cinematic Circular Moon-Glow Aperture for Sarthak's Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem 1rem'
          }}
          className="portrait-wrapper"
        >
          {/* Outer Rotating Cyber HUD Ring */}
          <div
            style={{
              position: 'absolute',
              width: 'clamp(380px, 38vw, 500px)',
              height: 'clamp(380px, 38vw, 500px)',
              borderRadius: '50%',
              border: '1px dashed rgba(229, 9, 20, 0.35)',
              boxShadow: '0 0 45px rgba(229, 9, 20, 0.25)',
              pointerEvents: 'none',
              animation: 'spinRing 35s linear infinite'
            }}
          />

          {/* Secondary Concentric Tech Orbit */}
          <div
            style={{
              position: 'absolute',
              width: 'clamp(350px, 35vw, 460px)',
              height: 'clamp(350px, 35vw, 460px)',
              borderRadius: '50%',
              border: '1px solid rgba(255, 26, 42, 0.2)',
              pointerEvents: 'none'
            }}
          />

          {/* Top Identifier Badge */}
          <div
            style={{
              position: 'absolute',
              top: '0px',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '0.4rem 0.9rem',
              background: 'rgba(8, 8, 12, 0.95)',
              border: '1px solid rgba(229, 9, 20, 0.5)',
              borderRadius: '20px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.68rem',
              color: '#ffffff',
              boxShadow: '0 0 15px rgba(229, 9, 20, 0.35)'
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#ff1a2a',
                boxShadow: '0 0 6px #ff1a2a'
              }}
            />
            <span>SYS.ACTIVE // SARTHAK NIMBALKAR</span>
          </div>

          {/* Main Circular Portrait Aperture */}
          <div
            style={{
              position: 'relative',
              width: 'clamp(300px, 30vw, 400px)',
              height: 'clamp(300px, 30vw, 400px)',
              borderRadius: '50%',
              overflow: 'hidden',
              background: '#050505',
              border: '3px solid rgba(229, 9, 20, 0.8)',
              boxShadow: '0 0 50px rgba(229, 9, 20, 0.5), inset 0 0 30px rgba(229, 9, 20, 0.25)',
              zIndex: 5
            }}
          >
            <img
              src={portraitImg}
              alt="Sarthak Nimbalkar - Mechanical Engineering, Data Science & Robotics Specialist"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center center',
                filter: 'contrast(1.06) brightness(1.02)',
                transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'block'
              }}
              className="portrait-img"
            />

            {/* Red Rim Lighting Overlay Gradient */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                background: 'radial-gradient(circle at 75% 25%, rgba(255, 26, 42, 0.25) 0%, transparent 55%), linear-gradient(180deg, transparent 65%, rgba(5,5,5,0.7) 100%)',
                pointerEvents: 'none'
              }}
            />

            {/* Subtle CRT scanline effect */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1) 1px, transparent 1px, transparent 2px)',
                pointerEvents: 'none',
                opacity: 0.35
              }}
            />
          </div>

          {/* Bottom Sub-Spec Badge */}
          <div
            style={{
              position: 'absolute',
              bottom: '0px',
              zIndex: 10,
              padding: '0.4rem 1rem',
              background: 'rgba(8, 8, 12, 0.95)',
              border: '1px solid rgba(229, 9, 20, 0.5)',
              borderRadius: '20px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.68rem',
              color: '#d4d4d8',
              boxShadow: '0 0 15px rgba(229, 9, 20, 0.35)'
            }}
          >
            <span style={{ color: '#ff2a3a', fontWeight: 700 }}>SANJIVANI COE, KOPARGAON</span>
            <span style={{ color: '#555', margin: '0 6px' }}>//</span>
            <span>ENG × DATA × AI</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.35rem',
          color: '#545460',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.65rem',
          letterSpacing: '2px',
          zIndex: 2
        }}
      >
        <span>SCROLL DOWN</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={14} color="#ff2a3a" />
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
        .portrait-wrapper:hover .portrait-img {
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
}
