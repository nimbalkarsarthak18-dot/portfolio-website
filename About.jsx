import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Network, Binary, ShieldCheck, Zap } from 'lucide-react';

export default function About() {
  const domains = [
    { title: 'MECHANICAL ENGINEERING', desc: 'Sanjivani College of Engineering, Kopargaon (Pune Division) • Mechanics & Systems' },
    { title: 'DATA SCIENCE', desc: 'EDA, Statistical Telemetry, Data Preprocessing & Pandas' },
    { title: 'MACHINE LEARNING', desc: 'Predictive Regression, Classification & Random Forests' },
    { title: 'IoT & ROBOTICS', desc: 'ESP32 Edge Microcontrollers, Thermal MLX90640 & Autonomous Rovers' }
  ];

  const stats = [
    { value: '09', label: 'SELECTED PROJECTS', sub: 'End-to-End Built' },
    { value: '04', label: 'CORE DISCIPLINES', sub: 'Engineering × Data × AI × IoT' },
    { value: '32×24', label: 'THERMAL MATRIX', sub: 'Far-Infrared Grid Telemetry' },
    { value: '100%', label: 'PRACTICAL CODE', sub: 'Applied Implementations' }
  ];

  return (
    <section
      id="about"
      style={{
        padding: '7rem 2rem',
        position: 'relative',
        backgroundColor: '#050505',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <div
        style={{
          maxWidth: '1360px',
          margin: '0 auto'
        }}
      >
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.9rem',
              fontWeight: 700,
              color: '#ff2a3a',
              letterSpacing: '3px'
            }}
          >
            01 / ABOUT
          </span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(229, 9, 20, 0.25)' }} />
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.7rem',
              color: '#52525b',
              letterSpacing: '2px'
            }}
          >
            SYS.ORIGIN // PROFILE
          </span>
        </div>

        {/* Large Statement */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            marginBottom: '4rem'
          }}
          className="about-grid-top"
        >
          <div>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 'clamp(2.4rem, 5vw, 4.4rem)',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-1px',
                color: '#ffffff',
                textTransform: 'uppercase',
                margin: 0
              }}
            >
              ENGINEERING<br />
              <span style={{ color: '#ff2a3a' }}>THE FUTURE</span><br />
              WITH DATA.
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.15rem',
                lineHeight: 1.7,
                color: '#b5b5be',
                marginBottom: '1.5rem'
              }}
            >
              I am a <strong style={{ color: '#ffffff' }}>Mechanical Engineering student</strong> at{' '}
              <strong style={{ color: '#ffffff' }}>Sanjivani College of Engineering, Kopargaon</strong> (Pune Division, Maharashtra), focused on bridging
              physical engineering with the mathematical rigor of <strong style={{ color: '#ff2a3a' }}>Data Science</strong>,{' '}
              predictive <strong style={{ color: '#ff2a3a' }}>Machine Learning</strong>, and edge <strong style={{ color: '#ff2a3a' }}>IoT & Robotics</strong>.
            </p>

            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1rem',
                lineHeight: 1.7,
                color: '#8e8e99'
              }}
            >
              Rather than viewing software and hardware in isolation, my approach synthesizes mechanical dynamics,
              microcontroller circuits, statistical data pipelines, and machine learning models into unified,
              autonomous real-world solutions.
            </p>
          </div>
        </div>

        {/* Small Technical Timeline Chips */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.75rem',
              color: '#71717a',
              letterSpacing: '2px',
              marginBottom: '1rem'
            }}
          >
            // CORE DOMAIN PATHWAYS
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {domains.map((d, idx) => (
              <motion.div
                key={d.title}
                whileHover={{ y: -4, borderColor: '#ff1a2a' }}
                style={{
                  padding: '1.5rem 1.25rem',
                  background: 'rgba(12, 12, 16, 0.75)',
                  border: '1px solid rgba(229, 9, 20, 0.22)',
                  borderRadius: '4px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
                  position: 'relative'
                }}
                className="hud-corner"
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.7rem',
                    color: '#ff2a3a',
                    marginBottom: '0.5rem',
                    letterSpacing: '1px'
                  }}
                >
                  STAGE 0{idx + 1}
                </div>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                    letterSpacing: '0.5px'
                  }}
                >
                  {d.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: '#8e8e99',
                    lineHeight: 1.5
                  }}
                >
                  {d.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Real Animated Statistics */}
        <div
          style={{
            background: 'rgba(10, 10, 14, 0.85)',
            border: '1px solid rgba(229, 9, 20, 0.3)',
            borderRadius: '6px',
            padding: '2.5rem 2rem',
            boxShadow: '0 10px 40px rgba(0,0,0,0.6), inset 0 0 25px rgba(229, 9, 20, 0.08)'
          }}
          className="hud-corner"
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem'
            }}
          >
            {stats.map((s, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '1rem',
                  borderRight: idx < stats.length - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'
                }}
                className="stat-box"
              >
                <span
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 'clamp(2.4rem, 4vw, 3.5rem)',
                    fontWeight: 900,
                    color: '#ffffff',
                    lineHeight: 1,
                    marginBottom: '0.5rem',
                    textShadow: '0 0 25px rgba(229, 9, 20, 0.4)'
                  }}
                >
                  {s.value}
                </span>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#ff2a3a',
                    letterSpacing: '2px',
                    marginBottom: '0.25rem'
                  }}
                >
                  {s.label}
                </span>
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.8rem',
                    color: '#71717a'
                  }}
                >
                  {s.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-grid-top {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
        @media (max-width: 768px) {
          .stat-box {
            border-right: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }
        }
      `}</style>
    </section>
  );
}
