import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState('INITIALIZING SYSTEM');

  useEffect(() => {
    const stages = [
      { threshold: 15, text: 'CALIBRATING SENSORS & HARDWARE' },
      { threshold: 38, text: 'DATA PIPELINES & STATS LOADED' },
      { threshold: 65, text: 'AI & NEURAL ARCHITECTURES ARMED' },
      { threshold: 88, text: 'ROBOTIC TELEMETRY ONLINE' },
      { threshold: 100, text: 'SYSTEM INITIALIZATION COMPLETE' }
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete?.();
          }, 450);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 4;
        const next = Math.min(100, prev + increment);
        const currentStage = stages.find(s => next <= s.threshold) || stages[stages.length - 1];
        setStage(currentStage.text);
        return next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="preloader-overlay"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.03,
        filter: 'blur(10px)',
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#050505',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff',
        fontFamily: "'JetBrains Mono', monospace",
        overflow: 'hidden'
      }}
    >
      {/* Background radial glow */}
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(229, 9, 20, 0.22) 0%, rgba(5, 5, 5, 0) 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none'
        }}
      />

      {/* Grid Pattern Behind */}
      <div 
        className="tech-grid-bg"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.35,
          pointerEvents: 'none'
        }}
      />

      {/* Center Console Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '90vw',
          width: '560px',
          padding: '2.5rem',
          background: 'rgba(10, 10, 14, 0.8)',
          border: '1px solid rgba(229, 9, 20, 0.35)',
          borderRadius: '4px',
          boxShadow: '0 0 40px rgba(229, 9, 20, 0.18), inset 0 0 20px rgba(229, 9, 20, 0.08)'
        }}
      >
        {/* HUD corners */}
        <div style={{ position: 'absolute', top: -1, left: -1, width: 10, height: 10, borderTop: '2px solid #e50914', borderLeft: '2px solid #e50914' }} />
        <div style={{ position: 'absolute', top: -1, right: -1, width: 10, height: 10, borderTop: '2px solid #e50914', borderRight: '2px solid #e50914' }} />
        <div style={{ position: 'absolute', bottom: -1, left: -1, width: 10, height: 10, borderBottom: '2px solid #e50914', borderLeft: '2px solid #e50914' }} />
        <div style={{ position: 'absolute', bottom: -1, right: -1, width: 10, height: 10, borderBottom: '2px solid #e50914', borderRight: '2px solid #e50914' }} />

        {/* Monogram */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1rem'
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '6px',
              border: '1px solid #ff1a2a',
              background: 'rgba(229, 9, 20, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 900,
              fontSize: '1.25rem',
              letterSpacing: '-1px',
              boxShadow: '0 0 15px rgba(229, 9, 20, 0.4)'
            }}
          >
            SN
          </div>
          <span style={{ fontSize: '0.85rem', letterSpacing: '3px', color: '#a0a0b0', textTransform: 'uppercase' }}>
            PORTFOLIO // OS v2.6
          </span>
        </motion.div>

        {/* Name Title */}
        <h1
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '1.75rem',
            fontWeight: 800,
            letterSpacing: '4px',
            color: '#ffffff',
            margin: '0 0 0.5rem 0',
            textAlign: 'center',
            textTransform: 'uppercase'
          }}
        >
          SARTHAK NIMBALKAR
        </h1>

        {/* Tagline pills */}
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            fontSize: '0.7rem',
            color: '#ff2a3a',
            letterSpacing: '2px',
            marginBottom: '2rem'
          }}
        >
          <span>DATA</span>
          <span style={{ color: '#555' }}>•</span>
          <span>AI</span>
          <span style={{ color: '#555' }}>•</span>
          <span>ENGINEERING</span>
          <span style={{ color: '#555' }}>•</span>
          <span>ROBOTICS</span>
        </div>

        {/* Diagnostic Bar */}
        <div
          style={{
            width: '100%',
            height: '4px',
            background: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '2px',
            overflow: 'hidden',
            marginBottom: '1rem',
            position: 'relative'
          }}
        >
          <motion.div
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #8b0000, #e50914, #ff2a3a)',
              boxShadow: '0 0 12px #ff1a2a',
              width: `${progress}%`
            }}
          />
        </div>

        {/* Telemetry info and Percentage */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.75rem',
            color: '#8e8e99'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span
              style={{
                display: 'inline-block',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#ff1a2a',
                boxShadow: '0 0 8px #ff1a2a'
              }}
            />
            <span style={{ color: '#ffffff', letterSpacing: '1px' }}>{stage}</span>
          </div>

          <span
            style={{
              fontWeight: 700,
              fontSize: '1rem',
              color: '#ff2a3a',
              fontFamily: "'JetBrains Mono', monospace"
            }}
          >
            {progress}%
          </span>
        </div>
      </div>
    </motion.div>
  );
}
