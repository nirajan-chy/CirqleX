"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./cursor-trail.module.css";

type Point = { x: number; y: number };

const OFFSCREEN_POINT: Point = { x: -100, y: -100 };

export function CursorTrail() {
  const target = useRef<Point>(OFFSCREEN_POINT);
  const points = useRef<Point[]>(Array.from({ length: 4 }, () => ({ ...OFFSCREEN_POINT })));
  const [dots, setDots] = useState<Point[]>(() =>
    Array.from({ length: 4 }, () => ({ ...OFFSCREEN_POINT }))
  );

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frameId = 0;
    const move = (event: PointerEvent) => {
      target.current = { x: event.clientX, y: event.clientY };
    };
    const leave = () => {
      target.current = OFFSCREEN_POINT;
    };
    const render = () => {
      points.current = points.current.map((point, index, all) => {
        const lead = index === 0 ? target.current : all[index - 1];
        const easing = index === 0 ? 0.18 : 0.14;
        return {
          x: point.x + (lead.x - point.x) * easing,
          y: point.y + (lead.y - point.y) * easing,
        };
      });
      setDots(points.current);
      frameId = requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("mouseleave", leave);
    frameId = requestAnimationFrame(render);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className={styles.trail} aria-hidden="true">
      {dots.map((dot, index) => (
        <span
          key={index}
          className={styles.dot}
          style={{
            transform: `translate3d(${dot.x}px, ${dot.y}px, 0) translate(-50%, -50%) scale(${1 - index * 0.16})`,
            opacity: 1 - index * 0.2,
          }}
        />
      ))}
    </div>
  );
}
