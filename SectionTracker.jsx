import React from 'react';

export default function SectionTracker({ activeSection }) {
  const sections = [
    { id: 'about', label: '01', name: 'ABOUT' },
    { id: 'skills', label: '02', name: 'SKILLS' },
    { id: 'datalab', label: '03', name: 'DATA LAB' },
    { id: 'projects', label: '04', name: 'PROJECTS' },
    { id: 'engineering-lab', label: '05', name: 'ENG LAB' },
    { id: 'journey', label: '06', name: 'JOURNEY' },
    { id: 'github', label: '07', name: 'GITHUB' },
    { id: 'contact', label: '08', name: 'CONTACT' }
  ];

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      className="section-tracker"
      style={{
        position: 'fixed',
        right: '2rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 90,
        display: 'none',
        flexDirection: 'column',
        gap: '0.85rem',
        alignItems: 'flex-end',
        pointerEvents: 'auto'
      }}
      aria-label="Section navigation tracker"
    >
      <div
        style={{
          fontSize: '0.6rem',
          fontFamily: "'JetBrains Mono', monospace",
          color: '#545460',
          letterSpacing: '2px',
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          marginBottom: '0.5rem'
        }}
      >
        SECTION INDEX
      </div>

      {sections.map((sec) => {
        const isActive = activeSection === sec.id;
        return (
          <button
            key={sec.id}
            onClick={() => handleClick(sec.id)}
            data-magnetic="true"
            className="tracker-item"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '2px 0',
              outline: 'none',
              transition: 'all 0.3s ease'
            }}
          >
            <span
              className="tracker-name"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.65rem',
                letterSpacing: '1px',
                color: isActive ? '#ff1a2a' : '#71717a',
                opacity: isActive ? 1 : 0,
                transform: isActive ? 'translateX(0)' : 'translateX(10px)',
                transition: 'all 0.25s ease',
                pointerEvents: 'none',
                fontWeight: 600
              }}
            >
              {sec.name}
            </span>

            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                fontWeight: isActive ? 800 : 500,
                color: isActive ? '#ffffff' : '#52525b',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '28px',
                height: '24px',
                borderRadius: '3px',
                background: isActive ? 'rgba(229, 9, 20, 0.2)' : 'transparent',
                border: isActive ? '1px solid #ff1a2a' : '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: isActive ? '0 0 12px rgba(229, 9, 20, 0.5)' : 'none',
                transition: 'all 0.3s ease'
              }}
            >
              {sec.label}
              {isActive && (
                <span
                  style={{
                    position: 'absolute',
                    right: '-6px',
                    width: '3px',
                    height: '14px',
                    background: '#ff1a2a',
                    borderRadius: '2px',
                    boxShadow: '0 0 8px #ff1a2a'
                  }}
                />
              )}
            </div>
          </button>
        );
      })}

      <style>{`
        @media (min-width: 1200px) {
          .section-tracker {
            display: flex !important;
          }
          .tracker-item:hover .tracker-name {
            opacity: 1 !important;
            transform: translateX(0) !important;
            color: #ffffff !important;
          }
        }
      `}</style>
    </aside>
  );
}
