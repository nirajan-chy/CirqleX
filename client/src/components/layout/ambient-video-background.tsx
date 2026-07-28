"use client";

import { useEffect, useRef } from "react";
import styles from "./ambient-video-background.module.css";

type Star = { x: number; y: number; depth: number; size: number; phase: number };
type Comet = { x: number; y: number; speed: number; drift: number; length: number };
type TrailPoint = { x: number; y: number; life: number };
type Planet = { orbit: number; angle: number; speed: number; radius: number; color: string; glow: string; offsetY: number };

const POINTER_RADIUS = 240;
const WARM_LIGHT = "255, 182, 91";

export function AmbientVideoBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let frame = 0;
    let lastTime = performance.now();
    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let comets: Comet[] = [];
    let planets: Planet[] = [];
    const trail: TrailPoint[] = [];
    const pointer = { x: -1000, y: -1000, active: false };

    const makeStar = (): Star => ({
      x: Math.random() * width,
      y: Math.random() * height,
      depth: Math.random() * 0.85 + 0.15,
      size: Math.random() * 1.5 + 0.25,
      phase: Math.random() * Math.PI * 2,
    });

    const resetComet = (comet: Comet, delayed = false) => {
      comet.x = -comet.length - Math.random() * width * (delayed ? 0.7 : 0.35);
      comet.y = Math.random() * height * 0.66;
      comet.speed = 4.2 + Math.random() * 4.2;
      comet.drift = 0.13 + Math.random() * 0.22;
      comet.length = 70 + Math.random() * 110;
    };

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      stars = Array.from({ length: width < 640 ? 76 : 158 }, makeStar);
      comets = Array.from({ length: width < 640 ? 3 : 7 }, () => {
        const comet = { x: 0, y: 0, speed: 0, drift: 0, length: 0 };
        resetComet(comet, true);
        return comet;
      });
      planets = [
        { orbit: Math.max(width, height) * 0.31, angle: 0.5, speed: 0.000024, radius: width < 640 ? 26 : 42, color: "#6e4430", glow: "255, 151, 74", offsetY: -0.12 },
        { orbit: Math.max(width, height) * 0.46, angle: 2.9, speed: -0.000016, radius: width < 640 ? 16 : 28, color: "#334056", glow: "115, 157, 210", offsetY: 0.13 },
      ];
    };

    const drawSunTrail = () => {
      trail.forEach((point, index) => {
        point.life -= 0.018;
        if (point.life <= 0) return;
        const radius = 5 + point.life * 32;
        const glow = context.createRadialGradient(point.x, point.y, 0, point.x, point.y, radius);
        glow.addColorStop(0, `rgba(${WARM_LIGHT}, ${point.life * 0.42})`);
        glow.addColorStop(0.32, `rgba(255, 128, 50, ${point.life * 0.14})`);
        glow.addColorStop(1, "rgba(255, 102, 40, 0)");
        context.fillStyle = glow;
        context.beginPath();
        context.arc(point.x, point.y, radius, 0, Math.PI * 2);
        context.fill();
        if (index > 0 && trail[index - 1].life > 0) {
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(trail[index - 1].x, trail[index - 1].y);
          context.strokeStyle = `rgba(${WARM_LIGHT}, ${point.life * 0.2})`;
          context.lineWidth = point.life * 2.8;
          context.stroke();
        }
      });
      while (trail.length && trail[0].life <= 0) trail.shift();
    };

    const draw = (now: number) => {
      const delta = Math.min((now - lastTime) / 16.67, 2);
      lastTime = now;
      context.clearRect(0, 0, width, height);
      const centerX = width / 2;
      const centerY = height / 2;

      stars.forEach((star) => {
        const pointerX = pointer.x - centerX;
        const pointerY = pointer.y - centerY;
        const distance = Math.hypot(star.x - pointer.x, star.y - pointer.y);
        const influence = pointer.active && distance < POINTER_RADIUS ? 1 - distance / POINTER_RADIUS : 0;
        const parallaxX = pointer.active ? pointerX * star.depth * 0.012 : 0;
        const parallaxY = pointer.active ? pointerY * star.depth * 0.012 : 0;
        const twinkle = 0.32 + Math.sin(now * 0.001 + star.phase) * 0.16 + influence * 0.48;
        context.fillStyle = influence > 0 ? `rgba(255, 214, 150, ${twinkle})` : `rgba(226, 235, 255, ${twinkle})`;
        context.beginPath();
        context.arc(star.x + parallaxX, star.y + parallaxY, star.size + influence * 1.35, 0, Math.PI * 2);
        context.fill();
      });

      planets.forEach((planet) => {
        planet.angle += planet.speed * delta * 16.67;
        const x = centerX + Math.cos(planet.angle) * planet.orbit + (pointer.active ? (pointer.x - centerX) * 0.025 : 0);
        const y = centerY + Math.sin(planet.angle) * planet.orbit * 0.46 + height * planet.offsetY + (pointer.active ? (pointer.y - centerY) * 0.018 : 0);
        const halo = context.createRadialGradient(x, y, planet.radius * 0.3, x, y, planet.radius * 3.4);
        halo.addColorStop(0, `rgba(${planet.glow}, 0.2)`);
        halo.addColorStop(1, `rgba(${planet.glow}, 0)`);
        context.fillStyle = halo;
        context.beginPath();
        context.arc(x, y, planet.radius * 3.4, 0, Math.PI * 2);
        context.fill();
        const surface = context.createRadialGradient(x - planet.radius * 0.35, y - planet.radius * 0.38, 0, x, y, planet.radius);
        surface.addColorStop(0, "rgba(255, 245, 218, 0.82)");
        surface.addColorStop(0.18, planet.color);
        surface.addColorStop(1, "rgba(0, 0, 0, 0.96)");
        context.fillStyle = surface;
        context.beginPath();
        context.arc(x, y, planet.radius, 0, Math.PI * 2);
        context.fill();
      });

      comets.forEach((comet) => {
        comet.x += comet.speed * delta;
        comet.y += comet.drift * delta;
        if (comet.x > width + comet.length) resetComet(comet, true);
        const tail = context.createLinearGradient(comet.x - comet.length, comet.y - comet.length * 0.18, comet.x, comet.y);
        tail.addColorStop(0, "rgba(167, 203, 255, 0)");
        tail.addColorStop(0.78, "rgba(205, 225, 255, 0.2)");
        tail.addColorStop(1, "rgba(255, 248, 224, 0.9)");
        context.strokeStyle = tail;
        context.lineWidth = 1.2;
        context.beginPath();
        context.moveTo(comet.x - comet.length, comet.y - comet.length * 0.18);
        context.lineTo(comet.x, comet.y);
        context.stroke();
      });

      drawSunTrail();
      if (pointer.active) {
        const sun = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 48);
        sun.addColorStop(0, "rgba(255, 250, 215, 0.86)");
        sun.addColorStop(0.12, "rgba(255, 205, 111, 0.44)");
        sun.addColorStop(0.5, "rgba(255, 145, 50, 0.12)");
        sun.addColorStop(1, "rgba(255, 116, 43, 0)");
        context.fillStyle = sun;
        context.beginPath();
        context.arc(pointer.x, pointer.y, 48, 0, Math.PI * 2);
        context.fill();
      }
      frame = requestAnimationFrame(draw);
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
      const previous = trail[trail.length - 1];
      if (!previous || Math.hypot(previous.x - pointer.x, previous.y - pointer.y) > 5) trail.push({ x: pointer.x, y: pointer.y, life: 1 });
      if (trail.length > 32) trail.shift();
    };
    const onPointerLeave = () => { pointer.active = false; };

    resize();
    draw(performance.now());
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return <div className={styles.background} aria-hidden="true"><canvas ref={canvasRef} className={styles.canvas} /><div className={styles.nebula} /><div className={styles.vignette} /></div>;
}







