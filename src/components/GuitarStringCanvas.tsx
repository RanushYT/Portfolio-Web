import { useEffect, useRef } from 'react';

interface Pluck {
  pluckPos: number;
  amp: number;
  startTime: number;
  freq: number;
  decay: number;
  spread: number;
}

interface StringModel {
  base: number;
  plucks: Pluck[];
}

export default function GuitarStringCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    const SPACING = 32;

    let hStrings: StringModel[] = [];
    let vStrings: StringModel[] = [];

    const mouse = {
      x: -1000,
      y: -1000,
      prevX: -1000,
      prevY: -1000,
      vx: 0,
      vy: 0,
      speed: 0,
      active: false,
    };

    function segmentsIntersect(
      x1: number, y1: number, x2: number, y2: number,
      x3: number, y3: number, x4: number, y4: number
    ) {
      const det = (x2 - x1) * (y4 - y3) - (y2 - y1) * (x4 - x3);
      if (det === 0) return null;
      const lambda = ((y4 - y3) * (x4 - x1) + (x3 - x4) * (y4 - y1)) / det;
      const gamma = ((y1 - y2) * (x4 - x1) + (x2 - x1) * (y4 - y1)) / det;
      if (lambda >= 0 && lambda <= 1 && gamma >= 0 && gamma <= 1) {
        return {
          x: x1 + lambda * (x2 - x1),
          y: y1 + lambda * (y2 - y1),
        };
      }
      return null;
    }

    function createStrings() {
      if (!canvas || !ctx) return;
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);

      const numH = Math.ceil(height / SPACING) + 2;
      const numV = Math.ceil(width / SPACING) + 2;

      const oldH = new Map(hStrings.map(s => [Math.round(s.base), s.plucks]));
      const oldV = new Map(vStrings.map(s => [Math.round(s.base), s.plucks]));

      hStrings = [];
      for (let i = 0; i <= numH; i++) {
        const y = i * SPACING;
        hStrings.push({
          base: y,
          plucks: oldH.get(y) || [],
        });
      }

      vStrings = [];
      for (let i = 0; i <= numV; i++) {
        const x = i * SPACING;
        vStrings.push({
          base: x,
          plucks: oldV.get(x) || [],
        });
      }
    }

    createStrings();
    window.addEventListener('resize', createStrings);

    const handleMouseMove = (e: MouseEvent) => {
      const currentX = e.clientX;
      const currentY = e.clientY;

      if (!mouse.active) {
        mouse.prevX = currentX;
        mouse.prevY = currentY;
        mouse.active = true;
      }

      const dx = currentX - mouse.prevX;
      const dy = currentY - mouse.prevY;
      mouse.vx = dx;
      mouse.vy = dy;
      mouse.speed = Math.hypot(dx, dy);

      if (!prefersReducedMotion && mouse.speed > 1.2) {
        const now = performance.now();

        // Horizontal strings
        const minY = Math.min(mouse.prevY, currentY);
        const maxY = Math.max(mouse.prevY, currentY);

        for (let i = 0; i < hStrings.length; i++) {
          const str = hStrings[i];
          if (str.base >= minY - 4 && str.base <= maxY + 4) {
            const isect = segmentsIntersect(
              mouse.prevX, mouse.prevY, currentX, currentY,
              0, str.base, width, str.base
            );
            const pluckX = isect ? isect.x : (mouse.prevX + currentX) * 0.5;
            const impulse = Math.min(Math.max(Math.abs(dy) * 0.45 + mouse.speed * 0.1, 3.5), 24);
            const direction = dy >= 0 ? 1 : -1;

            str.plucks.push({
              pluckPos: pluckX,
              amp: impulse * direction,
              startTime: now,
              freq: 0.038 + Math.random() * 0.008,
              decay: 0.0055,
              spread: 120 + Math.min(mouse.speed * 3, 140),
            });

            if (str.plucks.length > 5) str.plucks.shift();
          }
        }

        // Vertical strings
        const minX = Math.min(mouse.prevX, currentX);
        const maxX = Math.max(mouse.prevX, currentX);

        for (let i = 0; i < vStrings.length; i++) {
          const str = vStrings[i];
          if (str.base >= minX - 4 && str.base <= maxX + 4) {
            const isect = segmentsIntersect(
              mouse.prevX, mouse.prevY, currentX, currentY,
              str.base, 0, str.base, height
            );
            const pluckY = isect ? isect.y : (mouse.prevY + currentY) * 0.5;
            const impulse = Math.min(Math.max(Math.abs(dx) * 0.45 + mouse.speed * 0.1, 3.5), 24);
            const direction = dx >= 0 ? 1 : -1;

            str.plucks.push({
              pluckPos: pluckY,
              amp: impulse * direction,
              startTime: now,
              freq: 0.038 + Math.random() * 0.008,
              decay: 0.0055,
              spread: 120 + Math.min(mouse.speed * 3, 140),
            });

            if (str.plucks.length > 5) str.plucks.shift();
          }
        }
      }

      mouse.prevX = currentX;
      mouse.prevY = currentY;
      mouse.x = currentX;
      mouse.y = currentY;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    let animationFrameId: number;

    function render() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      const now = performance.now();
      const baseLineColor = 'rgba(226, 232, 240, 0.72)';

      // 1. Draw Horizontal Strings
      for (let i = 0; i < hStrings.length; i++) {
        const str = hStrings[i];

        if (str.plucks.length > 0) {
          str.plucks = str.plucks.filter(p => {
            const t = now - p.startTime;
            const currentAmp = Math.abs(p.amp) * Math.exp(-t * p.decay);
            return currentAmp > 0.12 && t < 1500;
          });
        }

        if (str.plucks.length === 0 || prefersReducedMotion) {
          ctx.beginPath();
          ctx.strokeStyle = baseLineColor;
          ctx.lineWidth = 1;
          ctx.moveTo(0, str.base);
          ctx.lineTo(width, str.base);
          ctx.stroke();
          continue;
        }

        let maxVibe = 0;
        for (const p of str.plucks) {
          const t = now - p.startTime;
          const amp = Math.abs(p.amp) * Math.exp(-t * p.decay);
          if (amp > maxVibe) maxVibe = amp;
        }

        const step = 8;
        ctx.beginPath();
        let isFirst = true;

        for (let x = 0; x <= width + step; x += step) {
          let totalOffset = 0;
          for (let k = 0; k < str.plucks.length; k++) {
            const p = str.plucks[k];
            const t = now - p.startTime;
            const harmonic = p.amp * Math.sin(t * p.freq) * Math.exp(-t * p.decay);
            const dist = Math.abs(x - p.pluckPos);
            const spatialFactor = Math.exp(-(dist * dist) / (2 * p.spread * p.spread));
            totalOffset += harmonic * spatialFactor;
          }

          const curY = str.base + totalOffset;
          if (isFirst) {
            ctx.moveTo(x, curY);
            isFirst = false;
          } else {
            ctx.lineTo(x, curY);
          }
        }

        const glowFactor = Math.min(maxVibe / 14, 1);
        if (glowFactor > 0.05) {
          ctx.strokeStyle = `rgba(245, 158, 11, ${0.4 + glowFactor * 0.45})`;
          ctx.lineWidth = 1 + glowFactor * 0.9;
        } else {
          ctx.strokeStyle = baseLineColor;
          ctx.lineWidth = 1;
        }
        ctx.stroke();
      }

      // 2. Draw Vertical Strings
      for (let j = 0; j < vStrings.length; j++) {
        const str = vStrings[j];

        if (str.plucks.length > 0) {
          str.plucks = str.plucks.filter(p => {
            const t = now - p.startTime;
            const currentAmp = Math.abs(p.amp) * Math.exp(-t * p.decay);
            return currentAmp > 0.12 && t < 1500;
          });
        }

        if (str.plucks.length === 0 || prefersReducedMotion) {
          ctx.beginPath();
          ctx.strokeStyle = baseLineColor;
          ctx.lineWidth = 1;
          ctx.moveTo(str.base, 0);
          ctx.lineTo(str.base, height);
          ctx.stroke();
          continue;
        }

        let maxVibe = 0;
        for (const p of str.plucks) {
          const t = now - p.startTime;
          const amp = Math.abs(p.amp) * Math.exp(-t * p.decay);
          if (amp > maxVibe) maxVibe = amp;
        }

        const step = 8;
        ctx.beginPath();
        let isFirst = true;

        for (let y = 0; y <= height + step; y += step) {
          let totalOffset = 0;
          for (let k = 0; k < str.plucks.length; k++) {
            const p = str.plucks[k];
            const t = now - p.startTime;
            const harmonic = p.amp * Math.sin(t * p.freq) * Math.exp(-t * p.decay);
            const dist = Math.abs(y - p.pluckPos);
            const spatialFactor = Math.exp(-(dist * dist) / (2 * p.spread * p.spread));
            totalOffset += harmonic * spatialFactor;
          }

          const curX = str.base + totalOffset;
          if (isFirst) {
            ctx.moveTo(curX, y);
            isFirst = false;
          } else {
            ctx.lineTo(curX, y);
          }
        }

        const glowFactor = Math.min(maxVibe / 14, 1);
        if (glowFactor > 0.05) {
          ctx.strokeStyle = `rgba(99, 102, 241, ${0.35 + glowFactor * 0.45})`;
          ctx.lineWidth = 1 + glowFactor * 0.9;
        } else {
          ctx.strokeStyle = baseLineColor;
          ctx.lineWidth = 1;
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    }

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', createStrings);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="liquid-grid-canvas"
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-0"
    />
  );
}
