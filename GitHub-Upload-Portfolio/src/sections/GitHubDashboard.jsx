import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, GitBranch, Star, Code2, Terminal, Flame, Sparkles } from 'lucide-react';

export default function GitHubDashboard() {
  const username = 'nimbalkarsarthak18-dot';
  const profileUrl = `https://github.com/${username}`;

  const [profileData, setProfileData] = useState({
    login: username,
    name: 'Sarthak Nimbalkar',
    bio: 'Mechanical Engineering Student | Data Science, ML & Robotics',
    public_repos: 9,
    followers: 0,
    following: 0,
    avatar_url: null
  });
  const [repos, setRepos] = useState([
    {
      name: 'thermal-camera-rescue-robot',
      description: 'Autonomous & teleoperated rover streaming 32x24 thermal heat matrix via ESP32 to Raspberry Pi.',
      language: 'C++ / Python',
      stars: 0,
      forks: 0,
      category: 'IoT & Robotics'
    },
    {
      name: 'student-score-prediction',
      description: 'Predictive machine learning pipeline for student scores using regression models and evaluation.',
      language: 'Python',
      stars: 0,
      forks: 0,
      category: 'Machine Learning'
    },
    {
      name: 'smart-agriculture-iot',
      description: 'Closed-loop micro-climate and soil moisture control system with ESP32 and automated relays.',
      language: 'C++',
      stars: 0,
      forks: 0,
      category: 'IoT & Embedded'
    },
    {
      name: 'customer-churn-prediction',
      description: 'Classification model identifying customer churn risks using Scikit-learn and behavioral features.',
      language: 'Python',
      stars: 0,
      forks: 0,
      category: 'Machine Learning'
    }
  ]);
  const [isLiveLoaded, setIsLiveLoaded] = useState(false);

  useEffect(() => {
    // Attempt live fetch from public GitHub API
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (!res.ok) throw new Error('Network response not ok');
        return res.json();
      })
      .then((data) => {
        if (data && data.login) {
          setProfileData((prev) => ({
            ...prev,
            login: data.login,
            name: data.name || prev.name,
            bio: data.bio || prev.bio,
            public_repos: data.public_repos || prev.public_repos,
            followers: data.followers || prev.followers,
            following: data.following || prev.following,
            avatar_url: data.avatar_url
          }));
          setIsLiveLoaded(true);
        }
      })
      .catch(() => {
        // Fallback to static profile data safely
        setIsLiveLoaded(false);
      });
  }, [username]);

  // Generate simulated futuristic commit heatmap grid
  const renderHeatmap = () => {
    const weeks = 28;
    const days = 7;
    const cells = [];

    for (let w = 0; w < weeks; w++) {
      const weekCells = [];
      for (let d = 0; d < days; d++) {
        // Pseudo random commit level: 0 to 4
        const rand = (w * 3 + d * 7 + (w * d) % 5) % 10;
        let level = 0;
        if (rand > 7) level = 4;
        else if (rand > 5) level = 3;
        else if (rand > 3) level = 2;
        else if (rand > 1) level = 1;

        weekCells.push(level);
      }
      cells.push(weekCells);
    }

    const getColor = (lvl) => {
      switch (lvl) {
        case 4: return '#ff1a2a';
        case 3: return '#e50914';
        case 2: return 'rgba(229, 9, 20, 0.45)';
        case 1: return 'rgba(229, 9, 20, 0.2)';
        default: return 'rgba(255, 255, 255, 0.04)';
      }
    };

    return (
      <div
        style={{
          display: 'flex',
          gap: '4px',
          overflowX: 'auto',
          padding: '1.25rem 0 0.5rem 0'
        }}
        className="heatmap-scroll"
      >
        {cells.map((col, cIdx) => (
          <div key={cIdx} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {col.map((lvl, rIdx) => (
              <div
                key={rIdx}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '2px',
                  backgroundColor: getColor(lvl),
                  boxShadow: lvl >= 3 ? '0 0 6px rgba(229, 9, 20, 0.6)' : 'none',
                  transition: 'transform 0.2s ease'
                }}
                className="heatmap-cell"
              />
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section
      id="github"
      style={{
        padding: '7rem 2rem',
        position: 'relative',
        backgroundColor: '#050505',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
      }}
      className="tech-grid-bg"
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
            07 / GITHUB
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
            VERSION CONTROL TELEMETRY
          </span>
        </div>

        {/* Section Title */}
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
              CODEBASE REPOSITORIES &<br />
              <span style={{ color: '#ff2a3a' }}>OPEN SOURCE TELEMETRY</span>
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
              Direct live telemetry into active code repositories and algorithmic implementations
              hosted under profile <code>{username}</code>.
            </p>
          </div>

          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic="true"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              padding: '0.85rem 1.6rem',
              background: '#e50914',
              color: '#ffffff',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '1px',
              borderRadius: '4px',
              textDecoration: 'none',
              boxShadow: '0 0 20px rgba(229, 9, 20, 0.4)',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#ff1a2a';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(229, 9, 20, 0.7)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#e50914';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(229, 9, 20, 0.4)';
            }}
          >
            <Github size={18} />
            <span>VIEW GITHUB PROFILE</span>
            <ExternalLink size={15} />
          </a>
        </div>

        {/* GitHub Command Dashboard */}
        <div
          style={{
            background: 'rgba(10, 10, 14, 0.95)',
            border: '1px solid rgba(229, 9, 20, 0.35)',
            borderRadius: '6px',
            padding: '2rem',
            marginBottom: '3rem',
            boxShadow: '0 10px 40px rgba(0,0,0,0.6)'
          }}
          className="hud-corner"
        >
          {/* Profile Header Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '8px',
                  border: '1px solid #ff1a2a',
                  background: 'rgba(229, 9, 20, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0 0 20px rgba(229, 9, 20, 0.35)'
                }}
              >
                <Github size={28} />
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      color: '#ffffff'
                    }}
                  >
                    {profileData.name}
                  </h3>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.7rem',
                      color: isLiveLoaded ? '#22c55e' : '#ff2a3a',
                      background: 'rgba(255,255,255,0.05)',
                      padding: '2px 6px',
                      borderRadius: '3px'
                    }}
                  >
                    {isLiveLoaded ? 'API // LIVE' : 'STATUS // READY'}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.8rem',
                    color: '#ff2a3a'
                  }}
                >
                  @{profileData.login}
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div style={{ display: 'flex', gap: '2rem' }}>
              <div>
                <div style={{ fontSize: '0.7rem', color: '#71717a', fontFamily: "'JetBrains Mono', monospace" }}>
                  REPOSITORIES
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', fontFamily: "'JetBrains Mono', monospace" }}>
                  {profileData.public_repos}+
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: '#71717a', fontFamily: "'JetBrains Mono', monospace" }}>
                  PRIMARY STACK
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ff2a3a', fontFamily: "'JetBrains Mono', monospace" }}>
                  Python • C++
                </div>
              </div>
            </div>
          </div>

          {/* Activity / Contribution Grid Simulation */}
          <div style={{ marginTop: '1.5rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                color: '#8e8e99',
                marginBottom: '0.5rem'
              }}
            >
              <span>ENGINEERING COMMIT FREQUENCY (SIMULATED ACTIVITY)</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.65rem' }}>
                <span>LESS</span>
                <span style={{ width: '8px', height: '8px', background: 'rgba(255,255,255,0.04)', borderRadius: '2px' }} />
                <span style={{ width: '8px', height: '8px', background: 'rgba(229,9,20,0.2)', borderRadius: '2px' }} />
                <span style={{ width: '8px', height: '8px', background: 'rgba(229,9,20,0.45)', borderRadius: '2px' }} />
                <span style={{ width: '8px', height: '8px', background: '#ff1a2a', borderRadius: '2px' }} />
                <span>MORE</span>
              </div>
            </div>

            {renderHeatmap()}
          </div>
        </div>

        {/* Curated Repository Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {repos.map((r) => (
            <div
              key={r.name}
              style={{
                background: 'rgba(12, 12, 16, 0.75)',
                border: '1px solid rgba(229, 9, 20, 0.2)',
                borderRadius: '4px',
                padding: '1.4rem 1.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                transition: 'all 0.25s ease'
              }}
              className="hud-corner repo-card"
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.75rem'
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.68rem',
                      color: '#ff2a3a'
                    }}
                  >
                    // {r.category}
                  </span>
                  <Code2 size={15} color="#71717a" />
                </div>

                <h4
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.5rem'
                  }}
                >
                  {r.name}
                </h4>

                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.82rem',
                    color: '#a1a1aa',
                    lineHeight: 1.5,
                    marginBottom: '1.25rem'
                  }}
                >
                  {r.description}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  fontSize: '0.75rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  color: '#71717a'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#ff1a2a'
                    }}
                  />
                  <span>{r.language}</span>
                </div>

                <a
                  href={`https://github.com/${username}/${r.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#ff1a2a',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  REPO <ArrowUpRightShort />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .heatmap-scroll::-webkit-scrollbar {
          height: 3px;
        }
        .heatmap-scroll::-webkit-scrollbar-thumb {
          background: rgba(229, 9, 20, 0.35);
        }
        .heatmap-cell:hover {
          transform: scale(1.3);
        }
        .repo-card:hover {
          border-color: rgba(229, 9, 20, 0.5) !important;
          transform: translateY(-3px);
        }
      `}</style>
    </section>
  );
}

function ArrowUpRightShort() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  );
}
