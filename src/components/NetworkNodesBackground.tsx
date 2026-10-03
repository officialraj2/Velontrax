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

    // Mouse coordinates for desktop fine-pointers only (zero overhead on mobile touch)
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
    };

    const isDesktopPointer = window.matchMedia('(pointer: fine)').matches;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    if (isDesktopPointer) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    }

    // Ultra-lightweight node count: 18 on mobile, 32 on tablet, 50 on desktop
    // Guarantees zero lag and buttery 60-120fps on any mobile phone
    const getNodeCount = () => {
      if (window.innerWidth < 640) return 18;
      if (window.innerWidth < 1024) return 32;
      return 50;
    };

    let nodeCount = getNodeCount();
    let maxDistance = window.innerWidth < 640 ? 85 : 130;
    let nodes: NodePoint[] = [];

    const initNodes = () => {
      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        const isHub = i % 4 === 0; // exactly 25% glowing hubs
        const baseRadius = isHub ? 2.8 : 1.5;
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          radius: baseRadius,
          baseRadius,
          alpha: isHub ? 0.9 : 0.45,
          isHub,
          glowPhase: Math.random() * Math.PI * 2,
          glowSpeed: 0.035,
        });
      }
    };

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (!canvas) return;
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        nodeCount = getNodeCount();
        maxDistance = window.innerWidth < 640 ? 85 : 130;
        initNodes();
      }, 150);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    initNodes();

    let lastTime = performance.now();

    const render = (time: number) => {
      // Pause completely if tab is hidden
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const deltaSec = Math.min((time - lastTime) / 1000, 0.05);
      const speedFactor = deltaSec * 60;
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      const nodesLength = nodes.length;
      const maxDistSq = maxDistance * maxDistance;

      // ⚡ BATCHED DRAW CALL 1: All standard connection lines in ONE single stroke!
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.22)';
      ctx.lineWidth = 0.85;

      for (let i = 0; i < nodesLength; i++) {
        const nodeA = nodes[i];
        for (let j = i + 1; j < nodesLength; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
          }
        }

        // Desktop mouse interactive line
        if (isDesktopPointer) {
          const mdx = mouse.x - nodeA.x;
          const mdy = mouse.y - nodeA.y;
          if (mdx * mdx + mdy * mdy < mouse.radius * mouse.radius) {
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(mouse.x, mouse.y);
          }
        }
      }
      ctx.stroke();

      // ⚡ FAST NODE DRAWING (No shadowBlur, no createRadialGradient in loop)
      for (let i = 0; i < nodesLength; i++) {
        const node = nodes[i];

        // Position update
        node.x += node.vx * speedFactor;
        node.y += node.vy * speedFactor;

        // Boundary wrap
        if (node.x < -10) node.x = width + 10;
        else if (node.x > width + 10) node.x = -10;
        if (node.y < -10) node.y = height + 10;
        else if (node.y > height + 10) node.y = -10;

        node.glowPhase += node.glowSpeed * speedFactor;

        if (node.isHub) {
          const pulse = Math.sin(node.glowPhase);
          // Soft outer halo (super-fast concentric circle without costly shadowBlur)
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.baseRadius * 3.5 + pulse * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(56, 189, 248, 0.16)';
          ctx.fill();

          // Mid glow
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.baseRadius * 1.8, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(14, 165, 233, 0.45)';
          ctx.fill();

          // Bright center
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.baseRadius, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.fill();
        } else {
          // Standard node
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(186, 230, 253, 0.55)';
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        lastTime = performance.now();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (isDesktopPointer) {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 
        GPU-friendly native radial gradients instead of heavy blur filters!
        Zero compositing penalty on mobile processors.
      */}
      <div 
        className="absolute inset-0 bg-[#060d1e]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 15%, rgba(2, 132, 199, 0.12) 0%, transparent 45%),
            radial-gradient(circle at 85% 30%, rgba(3, 105, 161, 0.12) 0%, transparent 40%),
            radial-gradient(circle at 50% 80%, rgba(14, 165, 233, 0.08) 0%, transparent 50%),
            linear-gradient(to bottom, #060c1a 0%, #08152e 50%, #050b17 100%)
          `
        }} 
      />

      {/* Lightweight Hardware-Accelerated Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-85 block transform-gpu will-change-transform"
      />
    </div>
  );
};
