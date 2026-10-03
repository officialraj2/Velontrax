import React, { useEffect, useRef } from 'react';

interface NodePoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  alpha: number;
  isHub: boolean;
  glowPhase: number;
  glowSpeed: number;
}

export const NetworkNodesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates for subtle interactive node attraction
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // Responsive node count based on screen width
    const getNodeCount = () => {
      if (window.innerWidth < 640) return 40;
      if (window.innerWidth < 1024) return 65;
      return 95;
    };

    let nodeCount = getNodeCount();
    let maxDistance = window.innerWidth < 640 ? 95 : 145;
    let nodes: NodePoint[] = [];

    const initNodes = () => {
      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        const isHub = Math.random() < 0.18; // ~18% hub nodes with glowing aura
        const baseRadius = isHub ? Math.random() * 2.2 + 2.8 : Math.random() * 1.5 + 1.2;
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: baseRadius,
          baseRadius,
          alpha: isHub ? 0.95 : Math.random() * 0.5 + 0.35,
          isHub,
          glowPhase: Math.random() * Math.PI * 2,
          glowSpeed: Math.random() * 0.025 + 0.015,
        });
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      nodeCount = getNodeCount();
      maxDistance = window.innerWidth < 640 ? 95 : 145;
      initNodes();
    };

    window.addEventListener('resize', handleResize);
    initNodes();

    let lastTime = performance.now();

    const render = (time: number) => {
      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle connections
      const nodesLength = nodes.length;
      for (let i = 0; i < nodesLength; i++) {
        const nodeA = nodes[i];

        // Connect with other nodes
        for (let j = i + 1; j < nodesLength; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const distSq = dx * dx + dy * dy;
          const maxDistSq = maxDistance * maxDistance;

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            const lineAlpha = (1 - dist / maxDistance) * (nodeA.isHub || nodeB.isHub ? 0.42 : 0.24);

            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);

            // Sleek electric cyan / blue gradient line
            if (nodeA.isHub || nodeB.isHub) {
              ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha * 1.25})`;
              ctx.lineWidth = 1.1;
            } else {
              ctx.strokeStyle = `rgba(37, 99, 235, ${lineAlpha * 0.9})`;
              ctx.lineWidth = 0.75;
            }
            ctx.stroke();
          }
        }

        // Connect with cursor proximity
        const mdx = mouse.x - nodeA.x;
        const mdy = mouse.y - nodeA.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < mouse.radius) {
          const mouseLineAlpha = (1 - mDist / mouse.radius) * 0.65;
          ctx.beginPath();
          ctx.moveTo(nodeA.x, nodeA.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(125, 211, 252, ${mouseLineAlpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }

        // Update position
        nodeA.x += nodeA.vx * 60 * delta;
        nodeA.y += nodeA.vy * 60 * delta;

        // Wrap around boundaries smoothly
        if (nodeA.x < -20) nodeA.x = width + 20;
        else if (nodeA.x > width + 20) nodeA.x = -20;
        if (nodeA.y < -20) nodeA.y = height + 20;
        else if (nodeA.y > height + 20) nodeA.y = -20;

        // Animate glowing hub nodes
        nodeA.glowPhase += nodeA.glowSpeed;
        const pulse = Math.sin(nodeA.glowPhase);

        // Draw node
        if (nodeA.isHub) {
          const glowRadius = nodeA.baseRadius * 4.5 + pulse * 2;
          // Outer bloom halo
          const gradient = ctx.createRadialGradient(
            nodeA.x,
            nodeA.y,
            0,
            nodeA.x,
            nodeA.y,
            glowRadius
          );
          gradient.addColorStop(0, 'rgba(56, 189, 248, 0.75)');
          gradient.addColorStop(0.35, 'rgba(14, 165, 233, 0.35)');
          gradient.addColorStop(1, 'rgba(2, 132, 199, 0)');

          ctx.beginPath();
          ctx.arc(nodeA.x, nodeA.y, glowRadius, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();

          // Bright solid core
          ctx.beginPath();
          ctx.arc(nodeA.x, nodeA.y, nodeA.baseRadius + pulse * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = '#e0f2fe';
          ctx.shadowColor = '#38bdf8';
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0; // reset
        } else {
          // Standard connecting node
          ctx.beginPath();
          ctx.arc(nodeA.x, nodeA.y, nodeA.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(186, 230, 253, ${nodeA.alpha})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Dynamic Deep Blue / Cyber Indigo Gradient backdrop matching uploaded image */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060c1a]/90 via-[#08152e]/85 to-[#050b17]/95" />

      {/* Cyber Teal / Ocean Blue Ambient Radial Lighting Spots */}
      <div className="absolute -top-32 -left-32 w-[520px] h-[520px] bg-[#0284c7]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 -right-36 w-[580px] h-[580px] bg-[#0369a1]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 left-1/4 w-[650px] h-[550px] bg-[#0ea5e9]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Network Canvas Animation Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-85 block"
      />
    </div>
  );
};
