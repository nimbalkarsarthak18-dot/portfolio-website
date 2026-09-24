import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';

export default function Toast({ message, isVisible, onDismiss }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 30, x: '-50%' }}
          transition={{ duration: 0.25 }}
          style={{
            position: 'fixed',
            bottom: '2rem',
            left: '50%',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'rgba(10, 10, 14, 0.95)',
            border: '1px solid #ff1a2a',
            borderRadius: '4px',
            padding: '0.75rem 1.25rem',
            boxShadow: '0 0 25px rgba(229, 9, 20, 0.4)',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.8rem',
            color: '#ffffff',
            pointerEvents: 'none'
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#ff1a2a',
              boxShadow: '0 0 8px #ff1a2a'
            }}
          />
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
