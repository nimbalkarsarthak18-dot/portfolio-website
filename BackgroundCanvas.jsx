import React, { useEffect, useRef } from 'react';

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -500, y: -500, targetX: -500, targetY: -500 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Particle pool: atmospheric crimson embers
    const count = Math.min(45, Math.floor(window.innerWidth / 30));
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.6 + 0.6,
      vx: (Math.random() - 0.5) * 0.35,
      vy: -Math.random() * 0.45 - 0.1, // gently rising
      alpha: Math.random() * 0.6 + 0.2,
      pulse: Math.random() * Math.PI,
      pulseSpeed: 0.02 + Math.random() * 0.02
    }));

    const render = () => {
      // Lerp mouse
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Subtle mouse radial glow
      if (mouseRef.current.x > 0 && mouseRef.current.y > 0) {
        const gradient = ctx.createRadialGradient(
          mouseRef.current.x,
          mouseRef.current.y,
          0,
          mouseRef.current.x,
          mouseRef.current.y,
          450
        );
        gradient.addColorStop(0, 'rgba(229, 9, 20, 0.06)');
        gradient.addColorStop(0.5, 'rgba(139, 0, 0, 0.025)');
        gradient.addColorStop(1, 'rgba(5, 5, 5, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Draw floating red embers
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        // Wrap around boundaries
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        const currentAlpha = p.alpha * (0.6 + Math.sin(p.pulse) * 0.4);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 30, 45, ${Math.max(0, currentAlpha)})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#e50914';
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.85
      }}
    />
  );
}
