import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', href: '#hero', id: 'hero' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'SKILLS', href: '#skills', id: 'skills' },
    { label: 'DATA LAB', href: '#datalab', id: 'datalab' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'ENGINEERING LAB', href: '#engineering-lab', id: 'engineering-lab' },
    { label: 'JOURNEY', href: '#journey', id: 'journey' },
    { label: 'CONTACT', href: '#contact', id: 'contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'all 0.4s ease',
          background: isScrolled
            ? 'rgba(6, 6, 8, 0.88)'
            : 'linear-gradient(to bottom, rgba(5, 5, 5, 0.9) 0%, rgba(5, 5, 5, 0) 100%)',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(229, 9, 20, 0.2)' : '1px solid transparent'
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '1.1rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Logo / Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              textDecoration: 'none',
              color: '#ffffff'
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '6px',
                border: '1px solid rgba(229, 9, 20, 0.7)',
                background: 'rgba(229, 9, 20, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 900,
                fontSize: '1.15rem',
                color: '#ffffff',
                boxShadow: '0 0 15px rgba(229, 9, 20, 0.35)',
                transition: 'all 0.3s ease'
              }}
              className="logo-box"
            >
              SN
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  letterSpacing: '2px',
                  color: '#ffffff',
                  lineHeight: 1.1
                }}
              >
                SARTHAK NIMBALKAR
              </span>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.65rem',
                  color: '#ff2a3a',
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: '1px'
                }}
              >
                <span
                  style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    background: '#ff1a2a',
                    boxShadow: '0 0 6px #ff1a2a'
                  }}
                />
                SYS.ACTIVE // ENG × DATA × AI
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1.6rem'
            }}
            className="desktop-nav"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  data-magnetic="true"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.8rem',
                    letterSpacing: '1.5px',
                    textDecoration: 'none',
                    position: 'relative',
                    padding: '0.35rem 0.5rem',
                    color: isActive ? '#ffffff' : '#8e8e99',
                    transition: 'all 0.25s ease'
                  }}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '0.5rem',
                        right: '0.5rem',
                        height: '2px',
                        background: '#e50914',
                        boxShadow: '0 0 8px #ff1a2a'
                      }}
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                </a>
              );
            })}

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              data-magnetic="true"
              style={{
                marginLeft: '0.8rem',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                letterSpacing: '1.5px',
                fontWeight: 600,
                color: '#ffffff',
                textDecoration: 'none',
                padding: '0.5rem 1.1rem',
                border: '1px solid rgba(229, 9, 20, 0.7)',
                borderRadius: '4px',
                background: 'rgba(229, 9, 20, 0.1)',
                boxShadow: '0 0 14px rgba(229, 9, 20, 0.25)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#e50914';
                e.currentTarget.style.boxShadow = '0 0 25px rgba(229, 9, 20, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(229, 9, 20, 0.1)';
                e.currentTarget.style.boxShadow = '0 0 14px rgba(229, 9, 20, 0.25)';
              }}
            >
              INITIALIZE CONTACT
            </a>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '6px',
              border: '1px solid rgba(229, 9, 20, 0.4)',
              background: 'rgba(15, 15, 20, 0.8)',
              color: '#ffffff',
              padding: 0
            }}
            className="mobile-menu-btn"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} color="#ff1a2a" /> : <Menu size={20} color="#ffffff" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: '68px',
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 99,
              background: 'rgba(5, 5, 7, 0.98)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderTop: '1px solid rgba(229, 9, 20, 0.3)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  color: '#ff2a3a',
                  letterSpacing: '2px',
                  marginBottom: '0.5rem'
                }}
              >
                // COMMAND NAVIGATION
              </div>

              {navItems.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontFamily: "'Syne', sans-serif",
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    color: activeSection === item.id ? '#ff1a2a' : '#f5f5f7',
                    textDecoration: 'none',
                    paddingBottom: '0.5rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
                  }}
                >
                  <span>{item.label}</span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.8rem',
                      color: activeSection === item.id ? '#ff1a2a' : '#52525b'
                    }}
                  >
                    0{idx + 1}
                  </span>
                </a>
              ))}
            </div>

            <div
              style={{
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(229, 9, 20, 0.2)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.75rem',
                fontFamily: "'JetBrains Mono', monospace",
                color: '#8e8e99'
              }}
            >
              <span>SYS: SANJIVANI ENG // DATA LAB</span>
              <span style={{ color: '#ff2a3a' }}>LIVE</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
