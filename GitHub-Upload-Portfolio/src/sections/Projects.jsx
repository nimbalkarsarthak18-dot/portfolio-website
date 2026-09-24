import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import { ExternalLink, Github, ArrowUpRight, Cpu, Eye } from 'lucide-react';
import ProjectModal from '../components/ProjectModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['ALL', 'Machine Learning', 'Data Analytics', 'IoT & Robotics'];

  const filteredProjects = activeCategory === 'ALL'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      style={{
        padding: '7rem 2rem',
        position: 'relative',
        backgroundColor: '#07070a',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
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
            04 / SELECTED PROJECTS
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
            INDEX // 09 ARTIFACTS
          </span>
        </div>

        {/* Title & Filter Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '2rem',
            marginBottom: '3.5rem'
          }}
        >
          <div>
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
              ENGINEERED ARTIFACTS &<br />
              <span style={{ color: '#ff2a3a' }}>INTELLIGENT SYSTEMS</span>
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
              A selection of machine learning architectures, statistical data pipelines, and cyber-physical
              IoT rover systems built with practical rigor.
            </p>
          </div>

          {/* Filter Categories */}
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              background: 'rgba(12, 12, 16, 0.8)',
              padding: '6px',
              borderRadius: '4px',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  data-magnetic="true"
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '3px',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    background: isSelected ? '#e50914' : 'transparent',
                    color: isSelected ? '#ffffff' : '#8e8e99',
                    boxShadow: isSelected ? '0 0 15px rgba(229, 9, 20, 0.4)' : 'none',
                    transition: 'all 0.25s ease'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
            gap: '2rem'
          }}
          className="projects-grid"
        >
          <AnimatePresence>
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                data-interactive="card"
                className="project-card hud-corner"
                style={{
                  background: 'rgba(12, 12, 16, 0.75)',
                  border: '1px solid rgba(229, 9, 20, 0.25)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                  position: 'relative',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {/* Top Card Bar */}
                <div>
                  <div
                    style={{
                      padding: '0.85rem 1.4rem',
                      background: 'rgba(16, 16, 22, 0.9)',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.72rem'
                    }}
                  >
                    <span style={{ color: '#ff2a3a', fontWeight: 700 }}>
                      PROJECT {proj.id}
                    </span>
                    <span style={{ color: '#71717a' }}>
                      // {proj.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div style={{ padding: '1.75rem 1.5rem' }}>
                    <h3
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: '1.35rem',
                        fontWeight: 800,
                        color: '#ffffff',
                        letterSpacing: '0.5px',
                        marginBottom: '0.75rem',
                        lineHeight: 1.25
                      }}
                    >
                      {proj.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '0.92rem',
                        color: '#a1a1aa',
                        lineHeight: 1.6,
                        marginBottom: '1.5rem'
                      }}
                    >
                      {proj.shortDesc}
                    </p>

                    {/* Tech Pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.5rem' }}>
                      {proj.tech.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '0.7rem',
                            color: '#ff2a3a',
                            background: 'rgba(229, 9, 20, 0.08)',
                            border: '1px solid rgba(229, 9, 20, 0.22)',
                            padding: '3px 8px',
                            borderRadius: '3px'
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Models / Sub-attributes if any */}
                    {proj.models && (
                      <div
                        style={{
                          fontSize: '0.75rem',
                          fontFamily: "'JetBrains Mono', monospace",
                          color: '#71717a',
                          borderLeft: '2px solid rgba(229, 9, 20, 0.5)',
                          paddingLeft: '0.75rem',
                          marginBottom: '1rem'
                        }}
                      >
                        <span style={{ color: '#ffffff' }}>Algorithms:</span> {proj.models.join(' • ')}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div
                  style={{
                    padding: '1rem 1.5rem',
                    background: 'rgba(8, 8, 12, 0.8)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem'
                  }}
                >
                  <button
                    onClick={() => setSelectedProject(proj)}
                    data-magnetic="true"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#ffffff',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      padding: '0.5rem 0.9rem',
                      borderRadius: '3px',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#ff1a2a';
                      e.currentTarget.style.color = '#ff1a2a';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                  >
                    <Eye size={14} />
                    <span>SYSTEM SPECS</span>
                  </button>

                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-magnetic="true"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#ff2a3a',
                      textDecoration: 'none',
                      padding: '0.5rem 0.9rem',
                      borderRadius: '3px',
                      border: '1px solid rgba(229, 9, 20, 0.3)',
                      background: 'rgba(229, 9, 20, 0.08)',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#e50914';
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.boxShadow = '0 0 15px rgba(229, 9, 20, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(229, 9, 20, 0.08)';
                      e.currentTarget.style.color = '#ff2a3a';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <Github size={14} />
                    <span>GITHUB REPO</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <style>{`
        .project-card:hover {
          border-color: rgba(229, 9, 20, 0.65) !important;
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(229, 9, 20, 0.2) !important;
        }
        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
