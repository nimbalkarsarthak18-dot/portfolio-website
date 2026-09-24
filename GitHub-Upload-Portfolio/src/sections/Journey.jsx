import React from 'react';
import { motion } from 'framer-motion';
import { journeyData, currentFocus } from '../data/journeyData';
import { Compass, CheckCircle2, ChevronRight, Target } from 'lucide-react';

export default function Journey() {
  return (
    <section
      id="journey"
      style={{
        padding: '7rem 2rem',
        position: 'relative',
        backgroundColor: '#07070a',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
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
            06 / JOURNEY
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
            CHRONOLOGY // EVOLUTION
          </span>
        </div>

        {/* Section Title */}
        <div style={{ marginBottom: '4rem' }}>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-1px',
              color: '#ffffff',
              textTransform: 'uppercase',
              margin: '0 0 0.75rem 0'
            }}
          >
            ENGINEERING TRAJECTORY &<br />
            <span style={{ color: '#ff2a3a' }}>SYSTEM SPECIALIZATION</span>
          </h2>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '1.05rem',
              color: '#8e8e99',
              maxWidth: '620px',
              lineHeight: 1.6
            }}
          >
            From mechanical principles to high-dimensional data pipelines, predictive models,
            and cyber-physical robotics.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div
          style={{
            position: 'relative',
            paddingLeft: '2.5rem',
            marginBottom: '4.5rem'
          }}
          className="timeline-container"
        >
          {/* Vertical Glowing Line */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '11px',
              width: '2px',
              background: 'linear-gradient(180deg, #e50914 0%, rgba(229, 9, 20, 0.4) 70%, rgba(229, 9, 20, 0.1) 100%)',
              boxShadow: '0 0 10px rgba(229, 9, 20, 0.35)'
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {journeyData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{ position: 'relative' }}
              >
                {/* Glowing Node Dot */}
                <div
                  style={{
                    position: 'absolute',
                    top: '6px',
                    left: '-2.5rem',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: '#07070a',
                    border: '2px solid #ff1a2a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 15px rgba(229, 9, 20, 0.6)'
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#ff1a2a'
                    }}
                  />
                </div>

                {/* Timeline Card */}
                <div
                  style={{
                    background: 'rgba(12, 12, 16, 0.8)',
                    border: '1px solid rgba(229, 9, 20, 0.22)',
                    borderRadius: '6px',
                    padding: '1.75rem',
                    boxShadow: '0 5px 25px rgba(0, 0, 0, 0.4)'
                  }}
                  className="hud-corner"
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '0.75rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          color: '#ff2a3a',
                          background: 'rgba(229, 9, 20, 0.12)',
                          padding: '2px 8px',
                          borderRadius: '3px',
                          border: '1px solid rgba(229, 9, 20, 0.3)'
                        }}
                      >
                        {item.year}
                      </span>
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.75rem',
                          color: '#71717a'
                        }}
                      >
                        // {item.tag}
                      </span>
                    </div>

                    {item.subtitle && (
                      <span
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: '0.85rem',
                          color: '#a1a1aa'
                        }}
                      >
                        {item.subtitle}
                      </span>
                    )}
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      marginBottom: '0.75rem',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.95rem',
                      lineHeight: 1.65,
                      color: '#a1a1aa',
                      marginBottom: '1.25rem'
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {item.highlights.map((h, hIdx) => (
                      <div
                        key={hIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '0.85rem',
                          color: '#d4d4d8',
                          fontFamily: "'JetBrains Mono', monospace"
                        }}
                      >
                        <ChevronRight size={14} color="#ff1a2a" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Current Focus Banner */}
        <div
          style={{
            background: 'rgba(15, 10, 14, 0.85)',
            border: '1px solid #ff1a2a',
            borderRadius: '6px',
            padding: '2rem 2.5rem',
            boxShadow: '0 0 35px rgba(229, 9, 20, 0.25)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1.5rem'
          }}
          className="hud-corner"
        >
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '6px',
              background: 'rgba(229, 9, 20, 0.15)',
              border: '1px solid #ff1a2a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 0 15px rgba(229, 9, 20, 0.4)'
            }}
          >
            <Target size={22} color="#ff2a3a" />
          </div>

          <div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                color: '#ff2a3a',
                letterSpacing: '2px',
                marginBottom: '0.35rem'
              }}
            >
              // {currentFocus.title}
            </div>
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '1.35rem',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '0.5rem'
              }}
            >
              {currentFocus.statement}
            </h3>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.95rem',
                color: '#a1a1aa',
                lineHeight: 1.6
              }}
            >
              {currentFocus.details}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
