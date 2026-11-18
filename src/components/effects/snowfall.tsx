"use client";

import { useEffect, useRef } from "react";
import { isSnowSeason } from "@/lib/seasonal";

type Flake = {
  x: number;
  y: number;
  r: number;
  vy: number;
  vx: number;
  drift: number;
  driftSpeed: number;
  opacity: number;
  blur: number;
};

const TARGET_FPS = 30;
const FRAME_MS = 1000 / TARGET_FPS;

function createFlake(width: number, height: number, randomY = true): Flake {
  const r = 1 + Math.random() * 2.6;
  const soft = Math.random() < 0.45;
  return {
    x: Math.random() * width,
    y: randomY ? Math.random() * height : -r - Math.random() * height * 0.2,
    r,
    vy: 0.35 + Math.random() * 0.9 + r * 0.08,
    vx: (Math.random() - 0.5) * 0.25,
    drift: Math.random() * Math.PI * 2,
    driftSpeed: 0.004 + Math.random() * 0.012,
    opacity: soft ? 0.35 + Math.random() * 0.3 : 0.55 + Math.random() * 0.4,
    blur: soft ? 1.5 + Math.random() * 2.5 : Math.random() * 0.6,
  };
}

export function Snowfall() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!isSnowSeason()) return;
    if (typeof window === "undefined") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    const canvas = document.createElement("canvas");
    canvasRef.current = canvas;
    canvas.setAttribute("aria-hidden", "true");
    Object.assign(canvas.style, {
      position: "fixed",
      inset: "0",
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      zIndex: "60",
    } as Partial<CSSStyleDeclaration>);
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      canvas.remove();
      return;
    }

    let width = 0;
    let height = 0;
    let dpr = 1;
    let flakes: Flake[] = [];
    let raf = 0;
    let last = 0;
    let acc = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const area = width * height;
      const targetCount = Math.min(140, Math.max(40, Math.floor(area / 18000)));
      if (flakes.length === 0) {
        flakes = Array.from({ length: targetCount }, () => createFlake(width, height, true));
      } else if (flakes.length < targetCount) {
        for (let i = flakes.length; i < targetCount; i++) flakes.push(createFlake(width, height, true));
      } else if (flakes.length > targetCount) {
        flakes.length = targetCount;
      }
    };

    const step = (dt: number) => {
      for (let i = 0; i < flakes.length; i++) {
        const f = flakes[i];
        f.drift += f.driftSpeed * dt;
        f.y += f.vy * (dt / 16.67);
        f.x += f.vx * (dt / 16.67) + Math.sin(f.drift) * 0.25;
        if (f.y - f.r > height) {
          flakes[i] = createFlake(width, height, false);
          flakes[i].y = -f.r;
        }
        if (f.x < -10) f.x = width + 10;
        else if (f.x > width + 10) f.x = -10;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < flakes.length; i++) {
        const f = flakes[i];
        ctx.beginPath();
        ctx.globalAlpha = f.opacity;
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "rgba(255,255,255,0.9)";
        ctx.shadowBlur = f.blur;
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    };

    const loop = (ts: number) => {
      if (!last) last = ts;
      const delta = ts - last;
      last = ts;
      acc += delta;
      if (acc >= FRAME_MS) {
        const steps = Math.min(3, Math.floor(acc / FRAME_MS));
        for (let s = 0; s < steps; s++) step(FRAME_MS);
        acc -= steps * FRAME_MS;
        draw();
      }
      raf = window.requestAnimationFrame(loop);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    raf = window.requestAnimationFrame(loop);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.remove();
      canvasRef.current = null;
    };
  }, []);

  return null;
}
