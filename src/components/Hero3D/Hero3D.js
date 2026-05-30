/* eslint-disable react/no-unknown-property */
import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { Color, AdditiveBlending } from 'three'
import './Hero3D.css'

/* ── Spiral galaxy of points ─────────────────────── */
const Galaxy = ({ count = 9000 }) => {
  const ref = useRef()

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const inside = new Color('#a855f7')   // purple core
    const outside = new Color('#6366f1')  // indigo arms
    const branches = 4
    const radiusMax = 4.2
    const spin = 1.05
    const randomness = 0.45
    const power = 3

    for (let i = 0; i < count; i += 1) {
      const i3 = i * 3
      const radius = Math.random() * radiusMax
      const branchAngle = ((i % branches) / branches) * Math.PI * 2
      const spinAngle = radius * spin

      const rx = (Math.random() ** power) * (Math.random() < 0.5 ? 1 : -1) * randomness * radius
      const ry = (Math.random() ** power) * (Math.random() < 0.5 ? 1 : -1) * randomness * radius * 0.4
      const rz = (Math.random() ** power) * (Math.random() < 0.5 ? 1 : -1) * randomness * radius

      pos[i3] = Math.cos(branchAngle + spinAngle) * radius + rx
      pos[i3 + 1] = ry
      pos[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + rz

      const mixed = inside.clone().lerp(outside, radius / radiusMax)
      col[i3] = mixed.r
      col[i3 + 1] = mixed.g
      col[i3 + 2] = mixed.b
    }
    return { positions: pos, colors: col }
  }, [count])

  useFrame((state) => {
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.09
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach='attributes-position' array={positions} count={count} itemSize={3} />
        <bufferAttribute attach='attributes-color' array={colors} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.028}
        sizeAttenuation
        depthWrite={false}
        vertexColors
        transparent
        opacity={0.95}
        blending={AdditiveBlending}
      />
    </points>
  )
}

/* ── Mouse-reactive parallax wrapper ─────────────── */
const ParallaxGroup = ({ children, position = [0, 0, 0] }) => {
  const ref = useRef()
  useFrame((state) => {
    const targetY = state.pointer.x * 0.3
    const targetX = -state.pointer.y * 0.2 + 0.5 /* base tilt to see the disc */
    ref.current.rotation.y += (targetY - ref.current.rotation.y) * 0.04
    ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.04
  })
  return (
    <group ref={ref} position={position}>
      {children}
    </group>
  )
}

/* ── Scene ───────────────────────────────────────── */
const Scene = () => (
  <>
    <ambientLight intensity={0.5} />
    <pointLight position={[0, 0, 0]} intensity={2} color='#c084fc' distance={8} />
    <Stars radius={140} depth={90} count={4500} factor={4.5} saturation={0} fade speed={0.5} />
    <ParallaxGroup position={[1.7, 0, 0]}>
      <Galaxy />
    </ParallaxGroup>
  </>
)

/* ── Main export ─────────────────────────────────── */
const Hero3D = () => (
  <div className='hero3d'>
    <Canvas
      camera={{ position: [0, 1.2, 6], fov: 55 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      dpr={[1, 1.5]}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  </div>
)

export default Hero3D
