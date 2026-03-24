'use client';

import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Line, Edges, Environment } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { useCube } from '@/context/CubeContext';
import * as THREE from 'three';

/* ============================================
   Nebula — universe inside the cube
   ============================================ */

function Nebula() {
  const groupRef = useRef<THREE.Group>(null);
  const starsRef = useRef<THREE.Group>(null);

  // Generate star positions
  const stars = useMemo(() => {
    return Array.from({ length: 200 }, () => ({
      pos: [
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
      ] as [number, number, number],
      size: Math.random() * 0.015 + 0.005,
      brightness: Math.random() * 0.5 + 0.5,
    }));
  }, []);

  // Nebula clouds — translucent spheres with color
  const clouds = useMemo(() => [
    { pos: [0.3, 0.2, 0] as [number, number, number], scale: 0.6, color: '#4a0e8f', opacity: 0.12 },
    { pos: [-0.2, -0.1, 0.3] as [number, number, number], scale: 0.5, color: '#1a3a8f', opacity: 0.1 },
    { pos: [0, 0.1, -0.2] as [number, number, number], scale: 0.45, color: '#0e4a6f', opacity: 0.08 },
    { pos: [-0.3, 0.3, -0.1] as [number, number, number], scale: 0.35, color: '#6b1a5e', opacity: 0.1 },
    { pos: [0.1, -0.3, 0.2] as [number, number, number], scale: 0.4, color: '#1a1a5f', opacity: 0.09 },
    { pos: [0.2, 0, -0.3] as [number, number, number], scale: 0.55, color: '#2a1a6f', opacity: 0.07 },
  ], []);

  // Bright core stars
  const coreStars = useMemo(() => [
    { pos: [0.1, 0.05, 0.1] as [number, number, number], color: '#aaccff', size: 0.03 },
    { pos: [-0.15, 0.2, -0.1] as [number, number, number], color: '#ffccdd', size: 0.025 },
    { pos: [0.25, -0.15, 0.05] as [number, number, number], color: '#ccddff', size: 0.02 },
    { pos: [-0.1, -0.1, 0.25] as [number, number, number], color: '#ffeedd', size: 0.022 },
    { pos: [0, 0.3, 0] as [number, number, number], color: '#ddccff', size: 0.028 },
  ], []);

  useFrame((state, dt) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += dt * 0.08;
      groupRef.current.rotation.x += dt * 0.03;
    }
    if (starsRef.current) {
      starsRef.current.rotation.y -= dt * 0.05;
    }
  });

  return (
    <group>
      {/* Slow-rotating nebula clouds */}
      <group ref={groupRef}>
        {clouds.map((c, i) => (
          <mesh key={i} position={c.pos} scale={c.scale}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshBasicMaterial color={c.color} transparent opacity={c.opacity} depthWrite={false} />
          </mesh>
        ))}

        {/* Bright core stars that glow */}
        {coreStars.map((s, i) => (
          <mesh key={`core${i}`} position={s.pos}>
            <sphereGeometry args={[s.size, 8, 8]} />
            <meshBasicMaterial color={s.color} />
          </mesh>
        ))}
      </group>

      {/* Star field — counter-rotates for depth */}
      <group ref={starsRef}>
        {stars.map((s, i) => (
          <mesh key={i} position={s.pos}>
            <sphereGeometry args={[s.size, 4, 4]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={s.brightness} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

/* ============================================
   Rich face compositions for each cube face
   ============================================ */

const C = '#ffffff';    // primary text — white
const C2 = '#d0d8e0';   // secondary text — soft white
const DIM = '#a0a8b4';  // dim text — light gray

/* --- SQL Face --- */
function SqlFace() {
  return (
    <group>
      <Line points={[[-0.55, 0.5, 0], [-0.1, 0.5, 0], [-0.1, 0.15, 0], [-0.55, 0.15, 0], [-0.55, 0.5, 0]]} color="#ffffff" lineWidth={1} opacity={0.45} transparent />
      <Text position={[-0.325, 0.55, 0]} fontSize={0.055} color={C} anchorX="center" fillOpacity={0.6}>fact_sales</Text>
      <Text position={[-0.325, 0.4, 0]} fontSize={0.04} color={DIM} anchorX="center" fillOpacity={0.5}>sale_id INT PK</Text>
      <Text position={[-0.325, 0.33, 0]} fontSize={0.04} color={DIM} anchorX="center" fillOpacity={0.5}>customer_id FK</Text>
      <Text position={[-0.325, 0.26, 0]} fontSize={0.04} color={DIM} anchorX="center" fillOpacity={0.5}>revenue DECIMAL</Text>
      <Line points={[[0.1, 0.5, 0], [0.55, 0.5, 0], [0.55, 0.2, 0], [0.1, 0.2, 0], [0.1, 0.5, 0]]} color="#ffffff" lineWidth={1} opacity={0.45} transparent />
      <Text position={[0.325, 0.55, 0]} fontSize={0.055} color={C} anchorX="center" fillOpacity={0.6}>dim_customer</Text>
      <Text position={[0.325, 0.4, 0]} fontSize={0.04} color={DIM} anchorX="center" fillOpacity={0.5}>customer_id PK</Text>
      <Text position={[0.325, 0.33, 0]} fontSize={0.04} color={DIM} anchorX="center" fillOpacity={0.5}>name VARCHAR</Text>
      <Line points={[[-0.1, 0.33, 0], [0.1, 0.4, 0]]} color="#d0d8e0" lineWidth={1.2} opacity={0.4} transparent />
      <Line points={[[-0.35, -0.05, 0], [0.1, -0.05, 0], [0.1, -0.35, 0], [-0.35, -0.35, 0], [-0.35, -0.05, 0]]} color="#ffffff" lineWidth={1} opacity={0.35} transparent />
      <Text position={[-0.125, 0, 0]} fontSize={0.055} color={C2} anchorX="center" fillOpacity={0.5}>dim_date</Text>
      <Text position={[-0.125, -0.13, 0]} fontSize={0.04} color={DIM} anchorX="center" fillOpacity={0.4}>date_id PK</Text>
      <Text position={[-0.125, -0.2, 0]} fontSize={0.04} color={DIM} anchorX="center" fillOpacity={0.4}>fiscal_year INT</Text>
      <Text position={[-0.3, -0.5, 0]} fontSize={0.045} color={C} anchorX="left" fillOpacity={0.4}>SELECT * FROM fact_sales</Text>
      <Text position={[-0.3, -0.57, 0]} fontSize={0.045} color={DIM} anchorX="left" fillOpacity={0.3}>JOIN dim_customer USING(id)</Text>
      <Text position={[0, -0.75, 0]} fontSize={0.14} color={C} anchorX="center" fillOpacity={0.7}>SQL</Text>
    </group>
  );
}

/* --- Python Face --- */
function PythonFace() {
  const lines = [
    { y: 0.55, text: 'import pandas as pd', color: C },
    { y: 0.46, text: 'from sklearn.model_selection import', color: C },
    { y: 0.37, text: '    train_test_split', color: C2 },
    { y: 0.25, text: 'df = pd.read_csv("data.csv")', color: '#e8ecf1' },
    { y: 0.16, text: 'X = df.drop("target", axis=1)', color: '#e8ecf1' },
    { y: 0.07, text: 'y = df["target"]', color: '#e8ecf1' },
    { y: -0.05, text: '', color: DIM },
    { y: -0.14, text: 'def train_pipeline(X, y):', color: C },
    { y: -0.23, text: '    X_train, X_test = split(X)', color: DIM },
    { y: -0.32, text: '    model = XGBoost(n=200)', color: DIM },
    { y: -0.41, text: '    model.fit(X_train, y_train)', color: '#10b981' },
    { y: -0.50, text: '    return model.score(X_test)', color: '#10b981' },
  ];
  return (
    <group>
      {lines.map((l, i) => l.text && (
        <Text key={`n${i}`} position={[-0.6, l.y, 0]} fontSize={0.035} color={DIM} anchorX="right" fillOpacity={0.3}>
          {i + 1}
        </Text>
      ))}
      {lines.map((l, i) => (
        <Text key={i} position={[-0.52, l.y, 0]} fontSize={0.04} color={l.color} anchorX="left" fillOpacity={0.5}>
          {l.text}
        </Text>
      ))}
      <Line points={[[0.25, -0.48, 0], [0.25, -0.54, 0]]} color="#ffffff" lineWidth={1.5} opacity={0.6} transparent />
      <Text position={[0, -0.75, 0]} fontSize={0.14} color={C} anchorX="center" fillOpacity={0.7}>Python</Text>
    </group>
  );
}

/* --- ETL Face --- */
function EtlFace() {
  return (
    <group>
      <Line points={[[-0.6, 0.35, 0], [-0.25, 0.35, 0], [-0.25, 0.1, 0], [-0.6, 0.1, 0], [-0.6, 0.35, 0]]} color="#ffffff" lineWidth={1.2} opacity={0.5} transparent />
      <Text position={[-0.425, 0.225, 0]} fontSize={0.06} color={C} anchorX="center" fillOpacity={0.6}>Extract</Text>
      <Text position={[-0.425, 0.03, 0]} fontSize={0.035} color={DIM} anchorX="center" fillOpacity={0.4}>API / DB / Files</Text>
      <Line points={[[-0.25, 0.225, 0], [-0.1, 0.225, 0]]} color="#d0d8e0" lineWidth={1.5} opacity={0.5} transparent />
      <Line points={[[-0.13, 0.25, 0], [-0.1, 0.225, 0], [-0.13, 0.2, 0]]} color="#d0d8e0" lineWidth={1.5} opacity={0.5} transparent />
      <Line points={[[-0.1, 0.35, 0], [0.25, 0.35, 0], [0.25, 0.1, 0], [-0.1, 0.1, 0], [-0.1, 0.35, 0]]} color="#d0d8e0" lineWidth={1.2} opacity={0.5} transparent />
      <Text position={[0.075, 0.225, 0]} fontSize={0.06} color={C} anchorX="center" fillOpacity={0.6}>Transform</Text>
      <Text position={[0.075, 0.03, 0]} fontSize={0.035} color={DIM} anchorX="center" fillOpacity={0.4}>Clean / Enrich</Text>
      <Line points={[[0.25, 0.225, 0], [0.4, 0.225, 0]]} color="#d0d8e0" lineWidth={1.5} opacity={0.5} transparent />
      <Line points={[[0.37, 0.25, 0], [0.4, 0.225, 0], [0.37, 0.2, 0]]} color="#d0d8e0" lineWidth={1.5} opacity={0.5} transparent />
      <Line points={[[0.4, 0.35, 0], [0.7, 0.35, 0], [0.7, 0.1, 0], [0.4, 0.1, 0], [0.4, 0.35, 0]]} color="#ffffff" lineWidth={1.2} opacity={0.5} transparent />
      <Text position={[0.55, 0.225, 0]} fontSize={0.06} color={C} anchorX="center" fillOpacity={0.6}>Load</Text>
      <Text position={[0.55, 0.03, 0]} fontSize={0.035} color={DIM} anchorX="center" fillOpacity={0.4}>Warehouse</Text>
      {Array.from({ length: 6 }, (_, i) => (
        <mesh key={i} position={[-0.7 + i * 0.28, -0.15, 0]}>
          <sphereGeometry args={[0.015, 6, 6]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.3 + i * 0.1} />
        </mesh>
      ))}
      <Line points={[[-0.7, -0.15, 0], [0.7, -0.15, 0]]} color="#ffffff" lineWidth={0.8} opacity={0.2} transparent />
      <Text position={[-0.4, -0.35, 0]} fontSize={0.04} color={DIM} anchorX="left" fillOpacity={0.35}>schedule: &quot;0 6 * * *&quot;</Text>
      <Text position={[-0.4, -0.43, 0]} fontSize={0.04} color={DIM} anchorX="left" fillOpacity={0.35}>retries: 3</Text>
      <Text position={[-0.4, -0.51, 0]} fontSize={0.04} color={C2} anchorX="left" fillOpacity={0.35}>status: running</Text>
      <Text position={[0, -0.75, 0]} fontSize={0.14} color={C} anchorX="center" fillOpacity={0.7}>ETL Pipeline</Text>
    </group>
  );
}

/* --- AI/ML Face --- */
function AiMlFace() {
  const layers = [[3, -0.45], [4, -0.15], [4, 0.15], [2, 0.45]] as [number, number][];
  const nodePositions: [number, number, number][][] = layers.map(([count, x]) => {
    return Array.from({ length: count }, (_, i) => {
      const yOff = (i - (count - 1) / 2) * 0.18;
      return [x, yOff + 0.2, 0] as [number, number, number];
    });
  });

  const connections: [[number, number, number], [number, number, number]][] = [];
  for (let l = 0; l < nodePositions.length - 1; l++) {
    for (const from of nodePositions[l]) {
      for (const to of nodePositions[l + 1]) {
        connections.push([from, to]);
      }
    }
  }

  return (
    <group>
      {connections.map((pts, i) => (
        <Line key={`c${i}`} points={pts} color="#ffffff" lineWidth={0.6} opacity={0.15} transparent />
      ))}
      {nodePositions.flat().map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
        </mesh>
      ))}
      <Text position={[-0.45, -0.15, 0]} fontSize={0.035} color={DIM} anchorX="center" fillOpacity={0.4}>Input</Text>
      <Text position={[0.45, -0.15, 0]} fontSize={0.035} color={DIM} anchorX="center" fillOpacity={0.4}>Output</Text>
      <Text position={[-0.5, -0.35, 0]} fontSize={0.04} color={C2} anchorX="left" fillOpacity={0.4}>accuracy: 0.94</Text>
      <Text position={[-0.5, -0.43, 0]} fontSize={0.04} color="#d0d8e0" anchorX="left" fillOpacity={0.4}>loss: 0.032</Text>
      <Text position={[-0.5, -0.51, 0]} fontSize={0.04} color={DIM} anchorX="left" fillOpacity={0.35}>epoch: 150/200</Text>
      <Text position={[0, -0.75, 0]} fontSize={0.14} color={C} anchorX="center" fillOpacity={0.7}>AI / ML</Text>
    </group>
  );
}

/* --- Databricks Face --- */
function DatabricksFace() {
  const clusterNodes = Array.from({ length: 6 }, (_, i) => {
    const angle = (i / 6) * Math.PI * 2;
    return [Math.cos(angle) * 0.3, Math.sin(angle) * 0.3 + 0.2, 0] as [number, number, number];
  });
  const driverNode: [number, number, number] = [0, 0.2, 0];

  return (
    <group>
      <mesh position={driverNode}>
        <octahedronGeometry args={[0.05, 0]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.7} />
      </mesh>
      <Text position={[0, 0.2, 0]} fontSize={0.03} color={C} anchorX="center" fillOpacity={0.5}>Driver</Text>
      {clusterNodes.map((pos, i) => (
        <group key={i}>
          <mesh position={pos}>
            <boxGeometry args={[0.05, 0.05, 0.05]} />
            <meshBasicMaterial color="#d0d8e0" transparent opacity={0.5} wireframe />
          </mesh>
          <Line points={[driverNode, pos]} color="#ffffff" lineWidth={0.8} opacity={0.2} transparent />
        </group>
      ))}
      <Line points={[[-0.55, -0.2, 0], [0.55, -0.2, 0]]} color="#ffffff" lineWidth={0.8} opacity={0.25} transparent />
      <Line points={[[-0.55, -0.28, 0], [0.55, -0.28, 0]]} color="#ffffff" lineWidth={0.8} opacity={0.2} transparent />
      <Line points={[[-0.55, -0.36, 0], [0.55, -0.36, 0]]} color="#ffffff" lineWidth={0.8} opacity={0.15} transparent />
      <Text position={[-0.5, -0.24, 0]} fontSize={0.035} color={DIM} anchorX="left" fillOpacity={0.35}>delta.`gold_sales`</Text>
      <Text position={[-0.5, -0.32, 0]} fontSize={0.035} color={DIM} anchorX="left" fillOpacity={0.35}>partitions: date_id</Text>
      <Text position={[-0.5, -0.48, 0]} fontSize={0.04} color={C2} anchorX="left" fillOpacity={0.4}>Spark 3.5 | 8 cores</Text>
      <Text position={[-0.5, -0.56, 0]} fontSize={0.04} color="#d0d8e0" anchorX="left" fillOpacity={0.4}>jobs: 24 completed</Text>
      <Text position={[0, -0.75, 0]} fontSize={0.14} color={C} anchorX="center" fillOpacity={0.7}>Databricks</Text>
    </group>
  );
}

/* --- Claude AI Face --- */
function ClaudeFace() {
  const chainNodes: [number, number, number][] = [
    [-0.45, 0.45, 0], [-0.15, 0.45, 0], [0.15, 0.45, 0], [0.45, 0.45, 0],
  ];
  return (
    <group>
      {chainNodes.map((pos, i) => (
        <group key={i}>
          <mesh position={pos}>
            <circleGeometry args={[0.04, 16]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.5} />
          </mesh>
          {i < chainNodes.length - 1 && (
            <Line points={[pos, chainNodes[i + 1]]} color="#d0d8e0" lineWidth={1} opacity={0.3} transparent />
          )}
        </group>
      ))}
      <Text position={[-0.45, 0.35, 0]} fontSize={0.03} color={DIM} anchorX="center" fillOpacity={0.4}>Parse</Text>
      <Text position={[-0.15, 0.35, 0]} fontSize={0.03} color={DIM} anchorX="center" fillOpacity={0.4}>Think</Text>
      <Text position={[0.15, 0.35, 0]} fontSize={0.03} color={DIM} anchorX="center" fillOpacity={0.4}>Plan</Text>
      <Text position={[0.45, 0.35, 0]} fontSize={0.03} color={DIM} anchorX="center" fillOpacity={0.4}>Execute</Text>
      <Text position={[-0.5, 0.15, 0]} fontSize={0.04} color={C} anchorX="left" fillOpacity={0.5}>User: Analyze sales Q4</Text>
      <Text position={[-0.5, 0.05, 0]} fontSize={0.04} color="#d0d8e0" anchorX="left" fillOpacity={0.45}>Claude: I&apos;ll query the</Text>
      <Text position={[-0.5, -0.03, 0]} fontSize={0.04} color="#d0d8e0" anchorX="left" fillOpacity={0.45}>  fact_sales table and</Text>
      <Text position={[-0.5, -0.11, 0]} fontSize={0.04} color="#d0d8e0" anchorX="left" fillOpacity={0.45}>  build a trend report...</Text>
      <Line points={[[-0.3, -0.25, 0], [-0.3, -0.45, 0], [0.3, -0.45, 0], [0.3, -0.25, 0]]} color="#ffffff" lineWidth={0.8} opacity={0.25} transparent />
      <Text position={[0, -0.28, 0]} fontSize={0.035} color={C2} anchorX="center" fillOpacity={0.4}>tool_use: sql_query</Text>
      <Text position={[0, -0.36, 0]} fontSize={0.035} color={DIM} anchorX="center" fillOpacity={0.35}>SELECT SUM(revenue)...</Text>
      <Text position={[0, -0.75, 0]} fontSize={0.14} color={C} anchorX="center" fillOpacity={0.7}>Claude AI</Text>
    </group>
  );
}

/* ============================================
   Frosted glass cube with Edges + transmission
   ============================================ */

function FrostedCube() {
  const groupRef = useRef<THREE.Group>(null);
  const cubeSize = 2.4;
  const h = cubeSize / 2;

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
      groupRef.current.rotation.x += delta * 0.04;
    }
  });

  return (
    <group>
      {/* Rotating cube */}
      <group ref={groupRef}>
        {/* Glass box with Edges for neon border */}
        <mesh scale={cubeSize}>
          <boxGeometry args={[1, 1, 1]} />
          <meshPhysicalMaterial
            color="#e0ffff"
            transparent
            opacity={0.28}
            roughness={0}
            metalness={0.3}
            envMapIntensity={2.5}
            clearcoat={1}
            clearcoatRoughness={0}
            reflectivity={1}
            side={THREE.DoubleSide}
          />
          {/* Neon edges — replaces manual Line edges */}
          <Edges
            threshold={15}
            color="#ffffff"
          />
        </mesh>

        {/* === Face compositions === */}
        <group position={[0, 0, h + 0.01]}>
          <SqlFace />
        </group>
        <group position={[0, 0, -(h + 0.01)]} rotation={[0, Math.PI, 0]}>
          <PythonFace />
        </group>
        <group position={[h + 0.01, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <EtlFace />
        </group>
        <group position={[-(h + 0.01), 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <AiMlFace />
        </group>
        <group position={[0, h + 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <DatabricksFace />
        </group>
        <group position={[0, -(h + 0.01), 0]} rotation={[Math.PI / 2, 0, 0]}>
          <ClaudeFace />
        </group>
      </group>

      {/* Nebula universe inside */}
      <Nebula />
    </group>
  );
}

/* ============================================
   Scene with lighting + postprocessing
   ============================================ */

function Scene() {
  return (
    <>
      {/* Environment for glass reflections/refractions */}
      <Environment preset="city" background={false} />

      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} color="#ffffff" />
      <pointLight position={[3, 3, 4]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-3, -2, 3]} intensity={0.4} color="#0066cc" />

      {/* The cube */}
      <FrostedCube />

      {/* Post-processing: Bloom — multisampling=0 + alpha background to preserve canvas transparency */}
      <EffectComposer multisampling={0}>
        <Bloom
          intensity={0.8}
          luminanceThreshold={0.4}
          luminanceSmoothing={0.9}
          mipmapBlur
          blendFunction={BlendFunction.ADD}
        />
      </EffectComposer>
    </>
  );
}

/* ============================================
   Canvas wrapper
   ============================================ */

export default function DataCube() {
  useCube(); // keep context connected for project card hover

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          premultipliedAlpha: false,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
        }}
        onCreated={({ gl, scene }) => {
          gl.setClearColor(0x000000, 0);
          scene.background = null;
        }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
