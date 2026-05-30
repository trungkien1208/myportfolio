/* eslint-disable react/no-unknown-property */
import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Float, MeshDistortMaterial, Sphere } from '@react-three/drei'
import './Hero3D.css'

/* ── Orbiting ring of particles ─────────────────── */
const OrbitParticles = ({ count = 80, radius = 2.4 }) => {
  const ref = useRef()
  const positions = new Float32Array(count * 3)
  const sizes = new Float32Array(count)

  for (let i = 0; i < count; i += 1) {
    const angle = (i / count) * Math.PI * 2
    const spread = (Math.random() - 0.5) * 0.6
    positions[i * 3] = Math.cos(angle) * (radius + spread)
    positions[i * 3 + 1] = (Math.random() - 0.5) * 1.2
    positions[i * 3 + 2] = Math.sin(angle) * (radius + spread)
    sizes[i] = Math.random() * 6 + 2
  }

  useFrame((state) => {
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.2
    ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.15) * 0.15
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach='attributes-position'
          array={positions}
          count={count}
          itemSize={3}
        />
        <bufferAttribute
          attach='attributes-size'
          array={sizes}
          count={count}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        color='#818cf8'
        size={0.05}
        transparent
        opacity={0.85}
        sizeAttenuation
      />
    </points>
  )
}

/* ── Floating distorted sphere (main shape) ──────── */
const CoreSphere = () => {
  const meshRef = useRef()
  const wireRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.y = t * 0.12
    meshRef.current.rotation.x = Math.sin(t * 0.2) * 0.15
    wireRef.current.rotation.y = t * 0.12
    wireRef.current.rotation.x = Math.sin(t * 0.2) * 0.15
  })

  return (
    <group>
      {/* Glowing distorted core */}
      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.6}>
        <mesh ref={meshRef} scale={1.5}>
          <Sphere args={[1, 64, 64]}>
            <MeshDistortMaterial
              color='#6366f1'
              emissive='#4338ca'
              emissiveIntensity={0.6}
              roughness={0.05}
              metalness={0.9}
              distort={0.35}
              speed={2.5}
              transparent
              opacity={0.92}
            />
          </Sphere>
        </mesh>
      </Float>

      {/* Wireframe icosahedron shell */}
      <mesh ref={wireRef} scale={1.65}>
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial
          color='#a5b4fc'
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
    </group>
  )
}

/* ── Scene ───────────────────────────────────────── */
const Scene = () => (
  <>
    <ambientLight intensity={0.25} />
    <pointLight position={[4, 4, 4]} intensity={2.5} color='#6366f1' />
    <pointLight position={[-4, -2, 3]} intensity={1.2} color='#a855f7' />
    <pointLight position={[0, 5, -4]} intensity={0.8} color='#10b981' />
    <Stars
      radius={90}
      depth={70}
      count={5000}
      factor={4}
      saturation={0}
      fade
      speed={0.6}
    />
    <CoreSphere />
    <OrbitParticles />
  </>
)

/* ── Main export ─────────────────────────────────── */
const Hero3D = () => (
  <div className='hero3d'>
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  </div>
)

export default Hero3D
