import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Radio, Cpu, Wifi, Eye, Gauge, ShieldAlert, ArrowRight, Activity, Terminal } from 'lucide-react';

export default function EngineeringLab() {
  const [controlMode, setControlMode] = useState('AUTONOMOUS'); // 'AUTONOMOUS' | 'MANUAL'
  const [targetTemp, setTargetTemp] = useState(36.8);
  const [obstacleDistance, setObstacleDistance] = useState(48);
  const [heatGrid, setHeatGrid] = useState([]);

  // Generate a 12x12 thermal sensor matrix simulation for MLX90640
  useEffect(() => {
    const generateGrid = () => {
      const grid = [];
      for (let r = 0; r < 8; r++) {
        const row = [];
        for (let c = 0; c < 12; c++) {
          // Heat source around center
          const distToCenter = Math.hypot(r - 4, c - 6);
          let temp = 22.5 + Math.random() * 2.5;
          if (distToCenter < 2.5) {
            temp += (3 - distToCenter) * 4.5 + Math.random() * 1.5;
          }
          row.push(temp);
        }
        grid.push(row);
      }
      return grid;
    };

    setHeatGrid(generateGrid());

    const interval = setInterval(() => {
      setHeatGrid(generateGrid());
      setObstacleDistance((prev) => {
        if (controlMode === 'AUTONOMOUS') {
          return Math.floor(35 + Math.random() * 30);
        }
        return Math.floor(20 + Math.random() * 50);
      });
      setTargetTemp((prev) => +(36.4 + Math.random() * 0.9).toFixed(1));
    }, 1400);

    return () => clearInterval(interval);
  }, [controlMode]);

  const getColorForTemp = (temp) => {
    if (temp > 35) return 'rgba(255, 30, 45, 0.95)'; // Human body heat signature
    if (temp > 30) return 'rgba(229, 9, 20, 0.7)';
    if (temp > 26) return 'rgba(180, 20, 30, 0.4)';
    return 'rgba(40, 20, 25, 0.25)';
  };

  return (
    <section
      id="engineering-lab"
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
            05 / ENGINEERING LAB
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
            CYBER-PHYSICAL CONTROL ROOM
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
              THERMAL CAMERA<br />
              <span style={{ color: '#ff2a3a' }}>RESCUE ROBOT</span>
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
              A cyber-physical search & rescue rover combining infrared thermography, ultrasonic ranging,
              dual-processor edge computing, and real-time teleoperation telemetry.
            </p>
          </div>

          {/* Mode Switcher */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'rgba(12, 12, 16, 0.9)',
              border: '1px solid rgba(229, 9, 20, 0.35)',
              padding: '6px 8px',
              borderRadius: '4px',
              boxShadow: '0 0 20px rgba(229, 9, 20, 0.15)'
            }}
          >
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.7rem',
                color: '#71717a',
                padding: '0 8px'
              }}
            >
              MISSION MODE:
            </span>
            <button
              onClick={() => setControlMode('AUTONOMOUS')}
              data-magnetic="true"
              style={{
                padding: '0.5rem 1.1rem',
                borderRadius: '3px',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '1px',
                background: controlMode === 'AUTONOMOUS' ? '#e50914' : 'transparent',
                color: controlMode === 'AUTONOMOUS' ? '#ffffff' : '#8e8e99',
                boxShadow: controlMode === 'AUTONOMOUS' ? '0 0 15px rgba(229, 9, 20, 0.5)' : 'none',
                transition: 'all 0.25s ease'
              }}
            >
              AUTONOMOUS
            </button>
            <button
              onClick={() => setControlMode('MANUAL')}
              data-magnetic="true"
              style={{
                padding: '0.5rem 1.1rem',
                borderRadius: '3px',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '1px',
                background: controlMode === 'MANUAL' ? '#e50914' : 'transparent',
                color: controlMode === 'MANUAL' ? '#ffffff' : '#8e8e99',
                boxShadow: controlMode === 'MANUAL' ? '0 0 15px rgba(229, 9, 20, 0.5)' : 'none',
                transition: 'all 0.25s ease'
              }}
            >
              MANUAL (Wi-Fi)
            </button>
          </div>
        </div>

        {/* Technical Signal Architecture Pipeline */}
        <div
          style={{
            background: 'rgba(10, 10, 14, 0.85)',
            border: '1px solid rgba(229, 9, 20, 0.28)',
            borderRadius: '6px',
            padding: '1.75rem',
            marginBottom: '3rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
          }}
          className="hud-corner"
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.75rem',
              color: '#ff2a3a',
              letterSpacing: '2px',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Activity size={16} />
            SIGNAL PIPELINE ARCHITECTURE // REAL-TIME DATA FLOW
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
            className="signal-flow-row"
          >
            {[
              { code: 'MLX90640', label: '32×24 IR Array Sensor' },
              { code: 'ESP32', label: 'Edge Microcontroller (I2C)' },
              { code: 'THERMAL DATA', label: 'Packet Serialization' },
              { code: 'RASPBERRY PI', label: 'Telemetry & Logic Host' },
              { code: 'WEB INTERFACE', label: 'Live Client HUD Stream' }
            ].map((node, idx, arr) => (
              <React.Fragment key={node.code}>
                <div
                  style={{
                    background: 'rgba(18, 12, 16, 0.8)',
                    border: '1px solid rgba(229, 9, 20, 0.35)',
                    borderRadius: '4px',
                    padding: '1rem 1.25rem',
                    minWidth: '170px',
                    flex: '1 1 170px',
                    textAlign: 'center'
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: '1rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      marginBottom: '4px'
                    }}
                  >
                    {node.code}
                  </div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.7rem',
                      color: '#8e8e99'
                    }}
                  >
                    {node.label}
                  </div>
                </div>

                {idx < arr.length - 1 && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#ff2a3a',
                      fontSize: '1.2rem',
                      padding: '0 4px'
                    }}
                  >
                    <ArrowRight size={18} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Control Room Console: 2-Column Split */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem'
          }}
          className="engineering-console-grid"
        >
          {/* Left: Thermal Camera Heatmap Matrix */}
          <div
            style={{
              background: 'rgba(10, 10, 14, 0.95)',
              border: '1px solid rgba(229, 9, 20, 0.35)',
              borderRadius: '6px',
              overflow: 'hidden',
              padding: '1.75rem',
              boxShadow: '0 0 35px rgba(229, 9, 20, 0.15)'
            }}
            className="hud-corner"
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.25rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                paddingBottom: '0.75rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: '#ff1a2a',
                    boxShadow: '0 0 8px #ff1a2a'
                  }}
                />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: '#ffffff' }}>
                  MLX90640 THERMAL MATRIX (8×12 VIEWPORT)
                </span>
              </div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: '#ff2a3a' }}>
                MAX SIGNATURE: {targetTemp}°C
              </span>
            </div>

            {/* Thermal Matrix Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '4px',
                aspectRatio: '12 / 8',
                background: '#040406',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid rgba(229, 9, 20, 0.2)',
                marginBottom: '1.25rem'
              }}
            >
              {heatGrid.map((row, rIdx) =>
                row.map((val, cIdx) => (
                  <div
                    key={`${rIdx}-${cIdx}`}
                    title={`${val.toFixed(1)}°C`}
                    style={{
                      backgroundColor: getColorForTemp(val),
                      borderRadius: '2px',
                      transition: 'background-color 0.8s ease',
                      boxShadow: val > 35 ? '0 0 6px rgba(255, 26, 42, 0.8)' : 'none'
                    }}
                  />
                ))
              )}
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.72rem',
                fontFamily: "'JetBrains Mono', monospace",
                color: '#8e8e99'
              }}
            >
              <span>LOW: 22.0°C</span>
              <span style={{ color: '#ff2a3a' }}>// AMBIENT DETECTED</span>
              <span>HUMAN BODY: 36.8°C</span>
            </div>
          </div>

          {/* Right: Hardware Subsystems & Telemetry Controls */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}
          >
            {/* Hardware Actuation Matrix */}
            <div
              style={{
                background: 'rgba(10, 10, 14, 0.9)',
                border: '1px solid rgba(229, 9, 20, 0.28)',
                borderRadius: '6px',
                padding: '1.5rem'
              }}
              className="hud-corner"
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.75rem',
                  color: '#ff2a3a',
                  letterSpacing: '1.5px',
                  marginBottom: '1rem'
                }}
              >
                // HARDWARE ACTUATION SUITE
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1rem'
                }}
              >
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.85rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '0.7rem', color: '#71717a', fontFamily: "'JetBrains Mono', monospace" }}>ULTRASONIC SENSOR</div>
                  <div style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace" }}>
                    {obstacleDistance} cm
                  </div>
                  <div style={{ fontSize: '0.65rem', color: obstacleDistance < 25 ? '#ff1a2a' : '#22c55e', fontFamily: "'JetBrains Mono', monospace" }}>
                    {obstacleDistance < 25 ? 'WARNING: EVADING' : 'STATUS: CLEAR'}
                  </div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.85rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '0.7rem', color: '#71717a', fontFamily: "'JetBrains Mono', monospace" }}>L298N MOTOR DRIVER</div>
                  <div style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace" }}>
                    DUAL H-BRIDGE
                  </div>
                  <div style={{ fontSize: '0.65rem', color: '#22c55e', fontFamily: "'JetBrains Mono', monospace" }}>
                    PWM DUTY: 85%
                  </div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.85rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '0.7rem', color: '#71717a', fontFamily: "'JetBrains Mono', monospace" }}>4 DC MOTORS</div>
                  <div style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace" }}>
                    4WD CHASSIS
                  </div>
                  <div style={{ fontSize: '0.65rem', color: '#8e8e99', fontFamily: "'JetBrains Mono', monospace" }}>
                    SYNCHRONOUS ROTATION
                  </div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.85rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '0.7rem', color: '#71717a', fontFamily: "'JetBrains Mono', monospace" }}>Wi-Fi CONTROL</div>
                  <div style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace" }}>
                    UDP / WEBSOCKET
                  </div>
                  <div style={{ fontSize: '0.65rem', color: '#22c55e', fontFamily: "'JetBrains Mono', monospace" }}>
                    PING: 14ms
                  </div>
                </div>
              </div>
            </div>

            {/* Live Controller Console Output */}
            <div
              style={{
                background: '#07070a',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '6px',
                padding: '1.25rem',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                color: '#a1a1aa',
                lineHeight: 1.6
              }}
            >
              <div style={{ color: '#ff2a3a', marginBottom: '0.5rem', fontWeight: 700 }}>
                // TELEMETRY LOG [RUNNING MODE: {controlMode}]
              </div>
              <div>[SYS] ESP32 MLX90640 initialized via I2C at 400kHz</div>
              <div>[SYS] Streaming 768 float thermal points to RPi server</div>
              <div style={{ color: '#ffffff' }}>
                [NAV] Ultrasonic distance = {obstacleDistance} cm // Motors {controlMode === 'AUTONOMOUS' ? 'Autonavigating' : 'Manual Teleop'}
              </div>
              <div style={{ color: '#22c55e' }}>[STATUS] Human heat target identified at coord (4, 6)</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .engineering-console-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
}
