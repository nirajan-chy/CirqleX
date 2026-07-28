"use client";

import { useMemo, useRef, useCallback, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function seededRandom(seed: number) {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

interface NodeData {
  position: [number, number, number];
  baseSize: number;
}

interface EdgeData {
  from: number;
  to: number;
}

const MOUSE = { x: 0, y: 0 };

function NetworkStructure() {
  const groupRef = useRef<THREE.Group>(null);
  const nodesRef = useRef<THREE.Points>(null);
  const edgeMaterialRef = useRef<THREE.LineBasicMaterial>(null);

  const { nodes, edges } = useMemo(() => {
    const nodeCount = 28;
    const radius = 6;
    const nodes: NodeData[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const theta = seededRandom(i * 3) * Math.PI * 2;
      const phi = Math.acos(2 * seededRandom(i * 3 + 1) - 1);
      const r = radius * (0.4 + 0.6 * seededRandom(i * 3 + 2));

      nodes.push({
        position: [
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi),
        ],
        baseSize: 0.03 + seededRandom(i * 7) * 0.06,
      });
    }

    const edges: EdgeData[] = [];
    const connectionDistance = 3.6;

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dx = nodes[i].position[0] - nodes[j].position[0];
        const dy = nodes[i].position[1] - nodes[j].position[1];
        const dz = nodes[i].position[2] - nodes[j].position[2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < connectionDistance) {
          edges.push({ from: i, to: j });
        }
      }
    }

    return { nodes, edges };
  }, []);

  const nodesGeometry = useMemo(() => {
    const positions = new Float32Array(nodes.length * 3);
    const sizes = new Float32Array(nodes.length);

    nodes.forEach((node, i) => {
      positions[i * 3] = node.position[0];
      positions[i * 3 + 1] = node.position[1];
      positions[i * 3 + 2] = node.position[2];
      sizes[i] = node.baseSize;
    });

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    return geometry;
  }, [nodes]);

  const edgesGeometry = useMemo(() => {
    const positions: number[] = [];

    edges.forEach((edge) => {
      positions.push(
        ...nodes[edge.from].position,
        ...nodes[edge.to].position
      );
    });

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    return geometry;
  }, [edges, nodes]);

  // Data flow particles
  const particleCount = 12;
  const particleData = useMemo(() => {
    return Array.from({ length: particleCount }, (_, i) => ({
      edgeIndex: i % edges.length,
      speed: 0.15 + seededRandom(i * 11) * 0.2,
      offset: seededRandom(i * 13),
    }));
  }, [edges.length]);

  const particleGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [particleCount]);

  const particleRef = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const t = state.clock.getElapsedTime();

    // Slow rotation
    groupRef.current.rotation.y += delta * 0.06;
    groupRef.current.rotation.x += delta * 0.02;

    // Gentle bobbing
    groupRef.current.position.y = Math.sin(t * 0.4) * 0.15;

    // Mouse-reactive camera parallax
    const targetCamX = MOUSE.x * 1.5;
    const targetCamY = MOUSE.y * 1.0;
    state.camera.position.x += (targetCamX - state.camera.position.x) * 0.02;
    state.camera.position.y += (targetCamY - state.camera.position.y) * 0.02;
    state.camera.lookAt(0, 0, 0);

    // Pulsing nodes
    if (nodesRef.current) {
      const sizeAttr = nodesRef.current.geometry.getAttribute("size");
      if (sizeAttr) {
        for (let i = 0; i < nodes.length; i++) {
          const pulse = Math.sin(t * 0.8 + i * 0.5) * 0.35;
          (sizeAttr.array as Float32Array)[i] =
            nodes[i].baseSize * (1 + pulse);
        }
        sizeAttr.needsUpdate = true;
      }
    }

    // Edge glow oscillation
    if (edgeMaterialRef.current) {
      edgeMaterialRef.current.opacity =
        0.08 + Math.sin(t * 0.5) * 0.04;
    }

    // Animate data flow particles
    if (particleRef.current) {
      const posAttr = particleRef.current.geometry.getAttribute("position");
      if (posAttr) {
        for (let i = 0; i < particleCount; i++) {
          const pd = particleData[i];
          const edge = edges[pd.edgeIndex];
          const progress = ((t * pd.speed + pd.offset) % 1);
          const from = nodes[edge.from].position;
          const to = nodes[edge.to].position;
          const idx = i * 3;
          (posAttr.array as Float32Array)[idx] =
            from[0] + (to[0] - from[0]) * progress;
          (posAttr.array as Float32Array)[idx + 1] =
            from[1] + (to[1] - from[1]) * progress;
          (posAttr.array as Float32Array)[idx + 2] =
            from[2] + (to[2] - from[2]) * progress;
        }
        posAttr.needsUpdate = true;
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* Nodes with pulsing sizes */}
      <points ref={nodesRef} geometry={nodesGeometry}>
        <pointsMaterial
          size={0.07}
          color="#FFFFFF"
          transparent
          opacity={0.7}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      {/* Connection edges with oscillating opacity */}
      <lineSegments geometry={edgesGeometry}>
        <lineBasicMaterial
          ref={edgeMaterialRef}
          color="#FFFFFF"
          transparent
          opacity={0.08}
          depthWrite={false}
        />
      </lineSegments>

      {/* Data flow particles */}
      <points ref={particleRef} geometry={particleGeometry}>
        <pointsMaterial
          size={0.05}
          color="#CCCCCC"
          transparent
          opacity={0.8}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </group>
  );
}

interface HeroNetworkProps {
  className?: string;
}

export default function HeroNetwork({ className }: HeroNetworkProps) {
  const handleMouseMove = useCallback((e: MouseEvent) => {
    MOUSE.x = (e.clientX / window.innerWidth - 0.5) * 2;
    MOUSE.y = -(e.clientY / window.innerHeight - 0.5) * 2;
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 14], fov: 50 }}
        gl={{
          alpha: true,
          antialias: false,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
      >
        <NetworkStructure />
      </Canvas>
    </div>
  );
}
