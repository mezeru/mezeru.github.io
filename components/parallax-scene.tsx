"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useEffect, useMemo, useRef, type RefObject } from "react";
import * as THREE from "three";
import type { BackgroundMotion } from "./site-background";

function ContextLifecycle({ onFailure }: { onFailure: () => void }) {
  const gl = useThree((state) => state.gl);
  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("webglcontextlost", onFailure, { once: true });
    // A normal pause unmounts the renderer; detach before its intentional context disposal.
    return () => canvas.removeEventListener("webglcontextlost", onFailure);
  }, [gl, onFailure]);
  return null;
}

function makeTopology() {
  const vertices: THREE.Vector3[] = [];
  const count = 74;
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = Math.PI * (3 - Math.sqrt(5)) * i;
    vertices.push(
      new THREE.Vector3(Math.cos(theta) * radius * 2.3, y * 2.3, Math.sin(theta) * radius * 2.3),
    );
  }
  const segments: number[] = [];
  for (let i = 0; i < count; i++)
    for (let j = i + 1; j < count; j++) {
      if (vertices[i].distanceTo(vertices[j]) < 1.18)
        segments.push(...vertices[i].toArray(), ...vertices[j].toArray());
    }
  return {
    dots: new Float32Array(vertices.flatMap((v) => v.toArray())),
    lines: new Float32Array(segments),
  };
}

function NetworkMesh({
  dots,
  lines,
  distant = false,
}: ReturnType<typeof makeTopology> & { distant?: boolean }) {
  return (
    <Float speed={distant ? 0.25 : 0.4} rotationIntensity={0} floatIntensity={0.1}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[lines, 3]} />
        </bufferGeometry>
        <lineBasicMaterial
          color="#7299c5"
          transparent
          opacity={distant ? 0.1 : 0.2}
          depthWrite={false}
        />
      </lineSegments>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[dots, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#bad3f2"
          size={distant ? 0.025 : 0.035}
          transparent
          opacity={distant ? 0.35 : 0.75}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </Float>
  );
}

function Topology({ motion }: { motion: RefObject<BackgroundMotion> }) {
  const near = useRef<THREE.Group>(null);
  const far = useRef<THREE.Group>(null);
  const rotation = useRef(0);
  const invalidate = useThree((state) => state.invalidate);
  const viewport = useThree((state) => state.viewport);
  const geometry = useMemo(() => makeTopology(), []);
  const compact = viewport.width < 5.2;

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    const start = () => {
      clearInterval(timer);
      timer = setInterval(
        () => {
          if (document.visibilityState === "visible") invalidate();
        },
        window.innerWidth < 768 ? 50 : 1000 / 30,
      );
    };
    start();
    window.addEventListener("resize", start, { passive: true });
    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", start);
    };
  }, [invalidate]);

  useFrame((_, delta) => {
    if (!near.current || !far.current) return;
    const step = Math.min(delta, 0.05);
    rotation.current += step * 0.035;
    const { x, y, progress } = motion.current;
    // Both depth layers travel throughout the entire document, at different rates.
    near.current.position.x = THREE.MathUtils.damp(
      near.current.position.x,
      viewport.width * (compact ? 0.39 : 0.28) + x * 0.28 - progress * 0.6,
      3,
      step,
    );
    near.current.position.y = THREE.MathUtils.damp(
      near.current.position.y,
      0.35 - progress * 1.4 - y * 0.2,
      3,
      step,
    );
    near.current.rotation.y = THREE.MathUtils.damp(
      near.current.rotation.y,
      rotation.current + x * 0.18 + progress * 0.8,
      2,
      step,
    );
    near.current.rotation.x = THREE.MathUtils.damp(
      near.current.rotation.x,
      0.22 + y * 0.12 + progress * 0.25,
      2,
      step,
    );
    far.current.position.x = THREE.MathUtils.damp(
      far.current.position.x,
      viewport.width * -0.45 + x * 0.08 + progress * 0.25,
      3,
      step,
    );
    far.current.position.y = THREE.MathUtils.damp(
      far.current.position.y,
      -1.2 + progress * 0.8 - y * 0.06,
      3,
      step,
    );
    far.current.rotation.y = -rotation.current * 0.45 - progress * 0.35;
  });

  return (
    <>
      <group
        ref={near}
        position={[viewport.width * (compact ? 0.39 : 0.28), 0.35, 0]}
        scale={compact ? 0.75 : 0.9}
        rotation={[0.22, 0, -0.2]}
      >
        <NetworkMesh {...geometry} />
      </group>
      <group
        ref={far}
        position={[-viewport.width * 0.45, -1.2, -3]}
        scale={compact ? 0.65 : 1.25}
        rotation={[0.6, 0.4, 0.3]}
      >
        <NetworkMesh {...geometry} distant />
      </group>
    </>
  );
}

export default function ParallaxScene({
  motion,
  onReady,
  onFailure,
}: {
  motion: RefObject<BackgroundMotion>;
  onReady: () => void;
  onFailure: () => void;
}) {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6.7], fov: 47 }}
      gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
        onReady();
      }}
    >
      <ContextLifecycle onFailure={onFailure} />
      <Topology motion={motion} />
    </Canvas>
  );
}
