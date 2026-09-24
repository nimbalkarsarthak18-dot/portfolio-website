import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Copy, Check, Send, Terminal, ArrowUpRight, Globe, Shield } from 'lucide-react';

export default function Contact({ onShowToast }) {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [timeString, setTimeString] = useState('');

  // Contact details
  const githubUrl = 'https://github.com/nimbalkarsarthak18-dot';
  const linkedinUrl = 'https://www.linkedin.com/in/sarthak-nimbalkar';
  const emailAddress = 'nimbalkarsarthak18@gmail.com';
  const phoneNumber = '+91 72496 49039';
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(now.toUTCString().replace('GMT', 'UTC'));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    onShowToast?.('Email address copied to clipboard');
    setTimeout(() => setCopied(false), 2200);
  };

  const handleCopyPhone = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    onShowToast?.('Phone number copied to clipboard');
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!formState.email || !formState.message) {
      onShowToast?.('Please provide email and message');
      return;
    }
    setIsTransmitting(true);
    setTimeout(() => {
      setIsTransmitting(false);
      onShowToast?.('Transmission simulated: message ready for dispatch');
      setFormState({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section
      id="contact"
      style={{
        padding: '7rem 2rem 3rem 2rem',
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
            08 / CONTACT
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
            INITIALIZE UPLINK // COMMS
          </span>
        </div>

        {/* Big Heading Statement */}
        <div style={{ marginBottom: '4rem' }}>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-1px',
              color: '#ffffff',
              textTransform: 'uppercase',
              margin: '0 0 1.25rem 0'
            }}
          >
            LET'S BUILD<br />
            <span style={{ color: '#ff2a3a' }}>SOMETHING.</span>
          </h2>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '1.15rem',
              color: '#a1a1aa',
              maxWidth: '650px',
              lineHeight: 1.6
            }}
          >
            Have an idea, project, collaboration or opportunity? Let's connect and build intelligent systems together.
          </p>
        </div>

        {/* 2-Column Contact Suite */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            marginBottom: '6rem'
          }}
          className="contact-grid"
        >
          {/* Left: Quick Uplink Action Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                color: '#71717a',
                letterSpacing: '1.5px'
              }}
            >
              // DIRECT COMMUNICATION CHANNELS
            </div>

            {/* GitHub Card */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic="true"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.4rem 1.75rem',
                background: 'rgba(12, 12, 16, 0.8)',
                border: '1px solid rgba(229, 9, 20, 0.3)',
                borderRadius: '6px',
                color: '#ffffff',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                transition: 'all 0.25s ease'
              }}
              className="comms-channel-btn hud-corner"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '6px',
                    background: 'rgba(229, 9, 20, 0.12)',
                    border: '1px solid rgba(229, 9, 20, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ff1a2a'
                  }}
                >
                  <Github size={22} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.15rem', fontWeight: 700 }}>
                    GITHUB
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: '#8e8e99' }}>
                    github.com/nimbalkarsarthak18-dot
                  </div>
                </div>
              </div>
              <ArrowUpRight size={20} color="#ff2a3a" />
            </a>

            {/* LinkedIn Card */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic="true"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.4rem 1.75rem',
                background: 'rgba(12, 12, 16, 0.8)',
                border: '1px solid rgba(229, 9, 20, 0.3)',
                borderRadius: '6px',
                color: '#ffffff',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                transition: 'all 0.25s ease'
              }}
              className="comms-channel-btn hud-corner"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '6px',
                    background: 'rgba(229, 9, 20, 0.12)',
                    border: '1px solid rgba(229, 9, 20, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ff1a2a'
                  }}
                >
                  <Linkedin size={22} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.15rem', fontWeight: 700 }}>
                    LINKEDIN
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: '#8e8e99' }}>
                    Sarthak Nimbalkar • Pune Division, Maharashtra
                  </div>
                </div>
              </div>
              <ArrowUpRight size={20} color="#ff2a3a" />
            </a>

            {/* Email Card with Copy Trigger */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.4rem 1.75rem',
                background: 'rgba(12, 12, 16, 0.8)',
                border: '1px solid rgba(229, 9, 20, 0.3)',
                borderRadius: '6px',
                color: '#ffffff',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                transition: 'all 0.25s ease'
              }}
              className="comms-channel-btn hud-corner"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '6px',
                    background: 'rgba(229, 9, 20, 0.12)',
                    border: '1px solid rgba(229, 9, 20, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ff1a2a'
                  }}
                >
                  <Mail size={22} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.15rem', fontWeight: 700 }}>
                    EMAIL ENCRYPTED
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: '#8e8e99' }}>
                    {emailAddress}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={handleCopyEmail}
                  data-magnetic="true"
                  style={{
                    padding: '0.5rem 0.85rem',
                    borderRadius: '4px',
                    background: copied ? '#22c55e' : 'rgba(229, 9, 20, 0.15)',
                    border: '1px solid rgba(229, 9, 20, 0.4)',
                    color: '#ffffff',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    transition: 'all 0.2s ease'
                  }}
                  title="Copy email address"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'COPIED' : 'COPY'}</span>
                </button>

                <a
                  href={`mailto:${emailAddress}`}
                  style={{
                    padding: '0.5rem 0.85rem',
                    borderRadius: '4px',
                    background: '#e50914',
                    color: '#ffffff',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.75rem',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    boxShadow: '0 0 10px rgba(229, 9, 20, 0.4)'
                  }}
                >
                  SEND
                </a>
              </div>
            </div>

            {/* Direct Phone / Call Card */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.4rem 1.75rem',
                background: 'rgba(12, 12, 16, 0.8)',
                border: '1px solid rgba(229, 9, 20, 0.3)',
                borderRadius: '6px',
                color: '#ffffff',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                transition: 'all 0.25s ease'
              }}
              className="comms-channel-btn hud-corner"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '6px',
                    background: 'rgba(229, 9, 20, 0.12)',
                    border: '1px solid rgba(229, 9, 20, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ff1a2a'
                  }}
                >
                  <Phone size={22} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.15rem', fontWeight: 700 }}>
                    DIRECT TELEPHONE
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: '#8e8e99' }}>
                    {phoneNumber}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={handleCopyPhone}
                  data-magnetic="true"
                  style={{
                    padding: '0.5rem 0.85rem',
                    borderRadius: '4px',
                    background: copiedPhone ? '#22c55e' : 'rgba(229, 9, 20, 0.15)',
                    border: '1px solid rgba(229, 9, 20, 0.4)',
                    color: '#ffffff',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    transition: 'all 0.2s ease'
                  }}
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedPhone ? 'COPIED' : 'COPY'}</span>
                </button>

                <a
                  href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                  style={{
                    padding: '0.5rem 0.85rem',
                    borderRadius: '4px',
                    background: '#e50914',
                    color: '#ffffff',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.75rem',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    boxShadow: '0 0 10px rgba(229, 9, 20, 0.4)'
                  }}
                >
                  CALL
                </a>
              </div>
            </div>
          </div>

          {/* Right: Interactive Terminal Dispatch Console */}
          <div
            style={{
              background: 'rgba(10, 10, 14, 0.95)',
              border: '1px solid rgba(229, 9, 20, 0.35)',
              borderRadius: '6px',
              padding: '2rem',
              boxShadow: '0 10px 40px rgba(0,0,0,0.6)'
            }}
            className="hud-corner"
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                color: '#ff2a3a',
                paddingBottom: '1rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                marginBottom: '1.5rem'
              }}
            >
              <Terminal size={16} />
              <span>TERMINAL DISPATCH CONSOLE // TRANSMIT MESSAGE</span>
            </div>

            <form onSubmit={handleSendMessage} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.7rem',
                    color: '#8e8e99',
                    marginBottom: '6px',
                    letterSpacing: '1px'
                  }}
                >
                  // IDENTIFICATION (NAME / ORG)
                </label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Dr. Alex Mercer / Robotics Lab"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: 'rgba(5, 5, 8, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '4px',
                    color: '#ffffff',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.9rem',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#ff1a2a')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.7rem',
                    color: '#8e8e99',
                    marginBottom: '6px',
                    letterSpacing: '1px'
                  }}
                >
                  // RETURN COMMS ADDRESS (EMAIL) *
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="name@domain.com"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: 'rgba(5, 5, 8, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '4px',
                    color: '#ffffff',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.9rem',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#ff1a2a')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.7rem',
                    color: '#8e8e99',
                    marginBottom: '6px',
                    letterSpacing: '1px'
                  }}
                >
                  // TRANSMISSION CONTENT *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Project specifications, inquiries, or collaboration opportunities..."
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: 'rgba(5, 5, 8, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '4px',
                    color: '#ffffff',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#ff1a2a')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                />
              </div>

              <button
                type="submit"
                data-magnetic="true"
                disabled={isTransmitting}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.65rem',
                  padding: '0.9rem',
                  background: isTransmitting ? '#ff1a2a' : '#e50914',
                  color: '#ffffff',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  borderRadius: '4px',
                  boxShadow: '0 0 20px rgba(229, 9, 20, 0.45)',
                  transition: 'all 0.25s ease'
                }}
              >
                <Send size={16} />
                <span>{isTransmitting ? 'ENCRYPTING & SENDING...' : 'DISPATCH TRANSMISSION'}</span>
              </button>
            </form>
          </div>
        </div>

        {/* Global Footer & System Specs */}
        <footer
          style={{
            paddingTop: '3rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            fontSize: '0.75rem',
            fontFamily: "'JetBrains Mono', monospace",
            color: '#71717a'
          }}
        >
          <div>
            <div style={{ color: '#ffffff', fontWeight: 700, marginBottom: '2px' }}>
              SARTHAK NIMBALKAR // PORTFOLIO OS
            </div>
            <div>B.E. Mechanical Engineering • Sanjivani College of Engineering, Kopargaon (Pune Division, Maharashtra, India)</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
              <span>TIME: {timeString || 'UTC ACTIVE'}</span>
            </div>
            <span>© 2026 // ALL RIGHTS RESERVED</span>
          </div>
        </footer>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        .comms-channel-btn:hover {
          border-color: #ff1a2a !important;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(229, 9, 20, 0.25) !important;
        }
      `}</style>
    </section>
  );
}
