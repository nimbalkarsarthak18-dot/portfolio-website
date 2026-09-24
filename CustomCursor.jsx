import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState('default'); // 'default' | 'hover' | 'magnetic' | 'card'
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only render on non-touch desktop devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      if (target.closest('button') || target.closest('a') || target.closest('[data-magnetic="true"]')) {
        setCursorType('hover');
      } else if (target.closest('.project-card') || target.closest('[data-interactive="card"]')) {
        setCursorType('card');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const getVariants = () => {
    switch (cursorType) {
      case 'hover':
        return {
          dot: { scale: 0 },
          ring: {
            scale: 1.8,
            borderColor: '#ff1a2a',
            backgroundColor: 'rgba(229, 9, 20, 0.12)',
            boxShadow: '0 0 20px rgba(229, 9, 20, 0.5)'
          }
        };
      case 'card':
        return {
          dot: { scale: 1.5, backgroundColor: '#ff1a2a' },
          ring: {
            scale: 2.2,
            borderColor: 'rgba(255, 26, 42, 0.4)',
            backgroundColor: 'rgba(229, 9, 20, 0.06)'
          }
        };
      default:
        return {
          dot: { scale: 1, backgroundColor: '#ffffff' },
          ring: {
            scale: 1,
            borderColor: 'rgba(229, 9, 20, 0.65)',
            backgroundColor: 'transparent',
            boxShadow: 'none'
          }
        };
    }
  };

  const variants = getVariants();

  return (
    <div style={{ pointerEvents: 'none', position: 'fixed', inset: 0, zIndex: 99999 }}>
      {/* Center Dot */}
      <motion.div
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          ...variants.dot
        }}
        transition={{ type: 'spring', stiffness: 1200, damping: 50, mass: 0.1 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#ff1a2a',
          boxShadow: '0 0 8px #ff1a2a',
          pointerEvents: 'none'
        }}
      />

      {/* Trailing Ring */}
      <motion.div
        animate={{
          x: position.x - 18,
          y: position.y - 18,
          ...variants.ring
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 32, mass: 0.3 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          border: '1.5px solid rgba(229, 9, 20, 0.7)',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}
