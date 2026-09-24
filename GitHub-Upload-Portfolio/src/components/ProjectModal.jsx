import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Cpu, Layers, Activity, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          background: 'rgba(5, 5, 7, 0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)'
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '720px',
            maxHeight: '90vh',
            overflowY: 'auto',
            background: '#0a0a0e',
            border: '1px solid rgba(229, 9, 20, 0.4)',
            borderRadius: '6px',
            padding: '2.5rem 2rem',
            boxShadow: '0 0 50px rgba(229, 9, 20, 0.25)',
            color: '#f5f5f7'
          }}
          className="hud-corner"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#8e8e99',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#ff1a2a';
              e.currentTarget.style.borderColor = '#ff1a2a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#8e8e99';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }}
            aria-label="Close project modal"
          >
            <X size={18} />
          </button>

          {/* Header info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.8rem',
                color: '#ff1a2a',
                padding: '2px 8px',
                background: 'rgba(229, 9, 20, 0.12)',
                border: '1px solid rgba(229, 9, 20, 0.3)',
                borderRadius: '3px'
              }}
            >
              PROJECT {project.id}
            </span>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                color: '#8e8e99'
              }}
            >
              // {project.category.toUpperCase()}
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '1.85rem',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '1px',
              marginBottom: '1rem',
              lineHeight: 1.2
            }}
          >
            {project.title}
          </h2>

          <p
            style={{
              fontSize: '0.95rem',
              color: '#a1a1aa',
              lineHeight: 1.6,
              marginBottom: '1.75rem'
            }}
          >
            {project.fullDesc || project.shortDesc}
          </p>

          {/* Architecture Pipeline Flow */}
          {project.architecture && (
            <div
              style={{
                background: 'rgba(15, 15, 20, 0.8)',
                border: '1px solid rgba(229, 9, 20, 0.2)',
                borderRadius: '4px',
                padding: '1.25rem',
                marginBottom: '1.75rem'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.75rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  color: '#ff2a3a',
                  marginBottom: '0.75rem',
                  letterSpacing: '1px'
                }}
              >
                <Layers size={15} />
                SYSTEM ARCHITECTURE & PIPELINE
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.8rem',
                  color: '#e4e4e7',
                  lineHeight: 1.7,
                  background: 'rgba(5, 5, 8, 0.6)',
                  padding: '0.75rem 1rem',
                  borderRadius: '4px',
                  borderLeft: '3px solid #ff1a2a'
                }}
              >
                {project.architecture}
              </div>
            </div>
          )}

          {/* Metrics & Models */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1rem',
              marginBottom: '1.75rem'
            }}
          >
            {project.metrics?.map((m, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '0.85rem 1rem',
                  borderRadius: '4px'
                }}
              >
                <div style={{ fontSize: '0.7rem', color: '#71717a', fontFamily: "'JetBrains Mono', monospace", marginBottom: '4px' }}>
                  {m.label.toUpperCase()}
                </div>
                <div style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 600, fontFamily: "'JetBrains Mono', monospace" }}>
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div style={{ marginBottom: '2rem' }}>
            <div
              style={{
                fontSize: '0.75rem',
                fontFamily: "'JetBrains Mono', monospace",
                color: '#71717a',
                marginBottom: '0.65rem'
              }}
            >
              TECHNOLOGY MATRIX:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.75rem',
                    color: '#ff2a3a',
                    background: 'rgba(229, 9, 20, 0.08)',
                    border: '1px solid rgba(229, 9, 20, 0.25)',
                    padding: '4px 10px',
                    borderRadius: '3px'
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '1.25rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#71717a', fontFamily: "'JetBrains Mono', monospace" }}>
              <CheckCircle2 size={15} color="#22c55e" />
              STATUS: {project.status || 'VERIFIED CODEBASE'}
            </div>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic="true"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.8rem',
                fontWeight: 600,
                color: '#ffffff',
                textDecoration: 'none',
                padding: '0.65rem 1.25rem',
                background: '#e50914',
                borderRadius: '4px',
                boxShadow: '0 0 16px rgba(229, 9, 20, 0.4)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#ff1a2a';
                e.currentTarget.style.boxShadow = '0 0 25px rgba(229, 9, 20, 0.7)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#e50914';
                e.currentTarget.style.boxShadow = '0 0 16px rgba(229, 9, 20, 0.4)';
              }}
            >
              <Github size={16} />
              <span>VIEW ON GITHUB</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
