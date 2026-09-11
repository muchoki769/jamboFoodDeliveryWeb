'use client'

import { useMemo, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const COLORS = {
  ground: '#EEF0E9',
  road: '#DAD6C9',
  roadLine: '#F6F7F3',
  primary: '#1F4B3F',
  primaryDark: '#163B31',
  accent: '#C97A3D',
  ink: '#26251F',
  buildingA: '#FFFFFF',
  buildingB: '#E9E4D8',
  buildingC: '#DCE8E0',
}

// Loop road defined as a closed rounded-rectangle curve in the XZ plane.
const ROAD_POINTS = [
  [-3, -4.2], [3, -4.2], [4.2, -3], [4.2, 3],
  [3, 4.2], [-3, 4.2], [-4.2, 3], [-4.2, -3],
].map(([x, z]) => new THREE.Vector3(x, 0.01, z))
const ROAD_CURVE = new THREE.CatmullRomCurve3(ROAD_POINTS, true, 'catmullrom', 0.5)

const BUILDINGS: Array<{ pos: [number, number]; w: number; d: number; h: number; color: string }> = [
  { pos: [-1.6, -1.4], w: 1.1, d: 1.1, h: 2.4, color: COLORS.buildingA },
  { pos: [0.2, -1.8], w: 0.9, d: 0.9, h: 1.6, color: COLORS.buildingB },
  { pos: [1.8, -1.2], w: 1.2, d: 1, h: 3.1, color: COLORS.buildingC },
  { pos: [-1.8, 0.6], w: 1, d: 1.2, h: 1.9, color: COLORS.buildingC },
  { pos: [0, 0.3], w: 1.3, d: 1.3, h: 2.8, color: COLORS.buildingA },
  { pos: [1.7, 1], w: 0.9, d: 0.9, h: 1.4, color: COLORS.buildingB },
  { pos: [-1.2, 1.9], w: 1, d: 0.9, h: 2.1, color: COLORS.buildingB },
  { pos: [5.6, 0], w: 1.1, d: 1.6, h: 1.7, color: COLORS.buildingC },
  { pos: [-5.6, -0.4], w: 1.2, d: 1.4, h: 2.2, color: COLORS.buildingA },
]

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = () => setReduced(mq.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return reduced
}

function RoadDashes() {
  const dashes = useMemo(() => {
    const count = 40
    return Array.from({ length: count }, (_, i) => {
      const t = i / count
      if (i % 2 === 0) return null // skip alternate for dashed effect
      const point = ROAD_CURVE.getPointAt(t)
      const tangent = ROAD_CURVE.getTangentAt(t)
      const angle = Math.atan2(tangent.x, tangent.z)
      return { key: i, point, angle }
    }).filter(Boolean) as { key: number; point: THREE.Vector3; angle: number }[]
  }, [])

  return (
    <>
      {dashes.map(({ key, point, angle }) => (
        <mesh key={key} position={[point.x, 0.02, point.z]} rotation={[-Math.PI / 2, 0, angle]}>
          <planeGeometry args={[0.08, 0.35]} />
          <meshBasicMaterial color={COLORS.roadLine} />
        </mesh>
      ))}
    </>
  )
}

function Buildings() {
  return (
    <>
      {BUILDINGS.map((b, i) => (
        <mesh key={i} position={[b.pos[0], b.h / 2, b.pos[1]]} castShadow receiveShadow>
          <boxGeometry args={[b.w, b.h, b.d]} />
          <meshStandardMaterial color={b.color} roughness={0.9} />
        </mesh>
      ))}
    </>
  )
}

function DestinationPin({ reducedMotion }: { reducedMotion: boolean }) {
  const ref = useRef<THREE.Group>(null!)
  const point = useMemo(() => ROAD_CURVE.getPointAt(0.78), [])

  useFrame(({ clock }) => {
    if (reducedMotion || !ref.current) return
    const s = 1 + Math.sin(clock.elapsedTime * 2.2) * 0.06
    ref.current.scale.set(s, s, s)
  })

  return (
    <group ref={ref} position={[point.x, 0, point.z + 0.6]}>
      <mesh position={[0, 0.75, 0]}>
        <sphereGeometry args={[0.16, 16, 16]} />
        <meshStandardMaterial color={COLORS.accent} />
      </mesh>
      <mesh position={[0, 0.45, 0]}>
        <coneGeometry args={[0.16, 0.5, 16]} />
        <meshStandardMaterial color={COLORS.accent} />
      </mesh>
    </group>
  )
}

function Rider({ reducedMotion }: { reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null!)
  const t = useRef(0.02)

  useFrame((_, delta) => {
    if (reducedMotion || !group.current) return
    t.current = (t.current + delta * 0.045) % 1
    const point = ROAD_CURVE.getPointAt(t.current)
    const tangent = ROAD_CURVE.getTangentAt(t.current)
    group.current.position.set(point.x, 0.16, point.z)
    group.current.rotation.y = Math.atan2(tangent.x, tangent.z)
  })

  return (
    <group ref={group} position={[ROAD_POINTS[0].x, 0.16, ROAD_POINTS[0].z]}>
      {/* body */}
      <mesh position={[0, 0.12, 0]} castShadow>
        <boxGeometry args={[0.16, 0.16, 0.42]} />
        <meshStandardMaterial color={COLORS.primary} />
      </mesh>
      {/* delivery bag */}
      <mesh position={[0, 0.28, -0.16]} castShadow>
        <boxGeometry args={[0.2, 0.2, 0.16]} />
        <meshStandardMaterial color={COLORS.accent} />
      </mesh>
      {/* rider head */}
      <mesh position={[0, 0.32, 0.12]} castShadow>
        <sphereGeometry args={[0.09, 12, 12]} />
        <meshStandardMaterial color={COLORS.ink} />
      </mesh>
      {/* wheels */}
      <mesh position={[0, 0.06, 0.19]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.09, 0.09, 0.03, 16]} />
        <meshStandardMaterial color="#3A382F" />
      </mesh>
      <mesh position={[0, 0.06, -0.19]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.09, 0.09, 0.03, 16]} />
        <meshStandardMaterial color="#3A382F" />
      </mesh>
    </group>
  )
}

function SceneContents({ reducedMotion }: { reducedMotion: boolean }) {
  const sceneGroup = useRef<THREE.Group>(null!)

  useFrame((_, delta) => {
    if (reducedMotion || !sceneGroup.current) return
    sceneGroup.current.rotation.y += delta * 0.015
  })

  return (
    <group ref={sceneGroup}>
      <ambientLight intensity={0.75} />
      <directionalLight position={[6, 8, 4]} intensity={0.9} castShadow />

      {/* ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[24, 24]} />
        <meshStandardMaterial color={COLORS.ground} roughness={1} />
      </mesh>

      {/* road ribbon following the loop */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, 0]}>
        <ringGeometry args={[3.1, 5.3, 8, 1]} />
        <meshStandardMaterial color={COLORS.road} roughness={1} />
      </mesh>

      <RoadDashes />
      <Buildings />
      <DestinationPin reducedMotion={reducedMotion} />
      <Rider reducedMotion={reducedMotion} />
    </group>
  )
}

export default function RiderScene() {
  const reducedMotion = usePrefersReducedMotion()
  const [supported, setSupported] = useState(true)

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      if (!gl) setSupported(false)
    } catch {
      setSupported(false)
    }
  }, [])

  if (!supported) {
    return (
      <div
        className="flex h-full w-full items-center justify-center rounded-2xl"
        style={{ backgroundColor: COLORS.ground }}
      >
        <p className="px-8 text-center text-[14px]" style={{ color: COLORS.ink }}>
          Fresh meals, delivered across the city.
        </p>
      </div>
    )
  }

  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [7, 6, 7], fov: 32 }}
      gl={{ antialias: true }}
    >
      <SceneContents reducedMotion={reducedMotion} />
    </Canvas>
  )
}