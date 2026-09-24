import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '../data/skillsData';
import { Cpu, Terminal, Database, Globe, Wrench, Sparkles, CheckCircle } from 'lucide-react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(skillsData[0].id);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'programming-data': return <Database size={18} />;
      case 'ds-ml': return <Cpu size={18} />;
      case 'iot-embedded': return <Sparkles size={18} />;
      case 'web': return <Globe size={18} />;
      case 'tools': return <Wrench size={18} />;
      default: return <Terminal size={18} />;
    }
  };

  const currentCategoryData = skillsData.find((c) => c.id === selectedCategory) || skillsData[0];

  return (
    <section
      id="skills"
      style={{
        padding: '7rem 2rem',
        position: 'relative',
        backgroundColor: '#07070a',
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
            02 / SKILLS
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
            SYS.ECOSYSTEM // MATRIX
          </span>
        </div>

        {/* Section Title */}
        <div style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-1px',
              color: '#ffffff',
              textTransform: 'uppercase',
              margin: '0 0 1rem 0'
            }}
          >
            TECHNICAL CAPABILITIES &<br />
            <span style={{ color: '#ff2a3a' }}>INTELLIGENT ECOSYSTEM</span>
          </h2>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '1.05rem',
              color: '#8e8e99',
              maxWidth: '640px',
              lineHeight: 1.6
            }}
          >
            Select a domain to inspect the operational stack. Hover across individual skill nodes
            to activate real-time telemetry details.
          </p>
        </div>

        {/* Category Tabs / Switcher */}
        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            overflowX: 'auto',
            paddingBottom: '1.25rem',
            marginBottom: '2.5rem'
          }}
          className="skills-tab-bar"
        >
          {skillsData.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                data-magnetic="true"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  padding: '0.75rem 1.4rem',
                  borderRadius: '4px',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  whiteSpace: 'nowrap',
                  background: isSelected ? 'rgba(229, 9, 20, 0.2)' : 'rgba(15, 15, 20, 0.6)',
                  color: isSelected ? '#ffffff' : '#8e8e99',
                  border: isSelected ? '1px solid #ff1a2a' : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isSelected ? '0 0 20px rgba(229, 9, 20, 0.4)' : 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <span style={{ color: isSelected ? '#ff1a2a' : '#52525b' }}>
                  {getCategoryIcon(cat.id)}
                </span>
                <span>{cat.category}</span>
                <span
                  style={{
                    fontSize: '0.7rem',
                    color: isSelected ? '#ff2a3a' : '#52525b',
                    padding: '1px 6px',
                    borderRadius: '2px',
                    background: 'rgba(255, 255, 255, 0.05)'
                  }}
                >
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Category Info Banner */}
        <div
          style={{
            background: 'rgba(12, 12, 16, 0.8)',
            border: '1px solid rgba(229, 9, 20, 0.25)',
            borderRadius: '4px',
            padding: '1.25rem 1.75rem',
            marginBottom: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#ff1a2a',
                boxShadow: '0 0 10px #ff1a2a'
              }}
            />
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem', color: '#d4d4d8' }}>
              {currentCategoryData.description}
            </span>
          </div>

          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.75rem',
              color: '#ff2a3a',
              letterSpacing: '1px'
            }}
          >
            ACTIVE MATRIX: {currentCategoryData.skills.length} NODES
          </div>
        </div>

        {/* Interactive Skill Grid */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {currentCategoryData.skills.map((skill, idx) => {
            const isHovered = hoveredSkill === skill.name;
            return (
              <motion.div
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                whileHover={{ y: -4, borderColor: '#ff1a2a' }}
                style={{
                  background: isHovered ? 'rgba(25, 15, 18, 0.9)' : 'rgba(12, 12, 16, 0.65)',
                  border: isHovered ? '1px solid #ff1a2a' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '4px',
                  padding: '1.4rem 1.25rem',
                  position: 'relative',
                  boxShadow: isHovered ? '0 0 25px rgba(229, 9, 20, 0.35)' : 'none',
                  transition: 'background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease'
                }}
                className="hud-corner"
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '0.75rem'
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.7rem',
                      color: isHovered ? '#ff2a3a' : '#71717a'
                    }}
                  >
                    NODE 0{idx + 1}
                  </span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.65rem',
                      color: isHovered ? '#ffffff' : '#a1a1aa',
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: '2px 6px',
                      borderRadius: '2px',
                      border: '1px solid rgba(255, 255, 255, 0.06)'
                    }}
                  >
                    {skill.level}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.35rem',
                    letterSpacing: '0.5px'
                  }}
                >
                  {skill.name}
                </h3>

                <p
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.75rem',
                    color: isHovered ? '#ff2a3a' : '#8e8e99',
                    letterSpacing: '0.5px'
                  }}
                >
                  // {skill.tag}
                </p>

                {/* Subtle indicator beacon */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: isHovered ? '#ff1a2a' : '#52525b',
                    boxShadow: isHovered ? '0 0 8px #ff1a2a' : 'none'
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        .skills-tab-bar::-webkit-scrollbar {
          height: 3px;
        }
        .skills-tab-bar::-webkit-scrollbar-thumb {
          background: rgba(229, 9, 20, 0.4);
        }
      `}</style>
    </section>
  );
}
