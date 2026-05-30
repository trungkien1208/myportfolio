/* eslint-disable react/no-unknown-property */
import { useRef, useEffect, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Box3, Vector3 } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const useGLTF = (url) => {
  const [gltf, setGltf] = useState(null)
  useEffect(() => {
    const loader = new GLTFLoader()
    loader.load(url, setGltf)
  }, [url])
  return gltf || { scene: null }
}

/*
 * Renders a .glb avatar in a small canvas.
 *  - mode="full" : whole body, centered (portrait frame)
 *  - mode="bust" : head-and-shoulders crop
 *
 * Live behaviour (full mode):
 *  - head + eyes track the cursor across the whole page
 *  - subtle idle breathing on the spine
 */
const FRAMING = {
  full: { camZ: 3.2, fov: 32, targetHeight: 1.72, yNudge: 0.02 },
  bust: { camZ: 1.7, fov: 30, headView: 0.62, yNudge: -0.16 },
}

const lerp = (a, b, t) => a + (b - a) * t

const Model = ({ url, mode }) => {
  const ref = useRef()
  const fit = useRef({ scale: 1, x: 0, y: 0, z: 0 })
  const bones = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const { scene } = useGLTF(url)

  /* track page-wide cursor, normalised to -1..1 */
  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useEffect(() => {
    if (!scene) return
    const cfg = FRAMING[mode]
    const box = new Box3().setFromObject(scene)
    const size = new Vector3()
    const center = new Vector3()
    box.getSize(size)
    box.getCenter(center)

    if (mode === 'full') {
      const scale = cfg.targetHeight / (size.y || 1)
      fit.current = { scale, x: center.x, y: center.y, z: center.z }
    } else {
      const head =
        scene.getObjectByName('Head') ||
        scene.getObjectByName('mixamorigHead') ||
        scene.getObjectByName('head') ||
        null
      let focusY = box.max.y - size.y * 0.08
      if (head) {
        const v = new Vector3()
        head.getWorldPosition(v)
        focusY = v.y
      }
      const scale = cfg.headView / (size.y * 0.16)
      fit.current = { scale, x: center.x, y: focusY, z: center.z }
    }

    /* grab bones + remember their rest rotations */
    const grab = (n) => scene.getObjectByName(n)
    const head = grab('Head')
    const neck = grab('Neck')
    const eyeL = grab('LeftEye')
    const eyeR = grab('RightEye')
    const spine = grab('Spine2') || grab('Spine1') || grab('Spine')
    const rest = (b) => (b ? { x: b.rotation.x, y: b.rotation.y, z: b.rotation.z } : null)
    bones.current = {
      head,
      neck,
      eyeL,
      eyeR,
      spine,
      rest: {
        head: rest(head),
        neck: rest(neck),
        spine: rest(spine),
      },
      t0: null,
    }
  }, [scene, mode])

  useFrame((state) => {
    if (!ref.current) return
    const cfg = FRAMING[mode]
    const { scale, x, y, z } = fit.current
    const time = state.clock.getElapsedTime()

    ref.current.scale.setScalar(scale)
    ref.current.position.set(
      -x * scale,
      -y * scale + cfg.yNudge + Math.sin(time * 1.1) * 0.025,
      -z * scale
    )

    const b = bones.current
    if (!b) return

    /* cursor look — split between neck, head and eyes */
    const yaw = mouse.current.x * 0.5
    const pitch = mouse.current.y * 0.32
    if (b.neck && b.rest.neck) {
      b.neck.rotation.y = lerp(b.neck.rotation.y, b.rest.neck.y + yaw * 0.35, 0.1)
      b.neck.rotation.x = lerp(b.neck.rotation.x, b.rest.neck.x + pitch * 0.35, 0.1)
    }
    if (b.head && b.rest.head) {
      b.head.rotation.y = lerp(b.head.rotation.y, b.rest.head.y + yaw * 0.6, 0.12)
      b.head.rotation.x = lerp(b.head.rotation.x, b.rest.head.x + pitch * 0.5, 0.12)
    }
    if (b.eyeL) b.eyeL.rotation.y = lerp(b.eyeL.rotation.y, yaw * 0.5, 0.2)
    if (b.eyeR) b.eyeR.rotation.y = lerp(b.eyeR.rotation.y, yaw * 0.5, 0.2)

    /* idle breathing */
    if (b.spine && b.rest.spine) {
      b.spine.rotation.x = b.rest.spine.x + Math.sin(time * 1.4) * 0.02
    }
  })

  if (!scene) return null
  return <primitive ref={ref} object={scene} />
}

const AvatarBust = ({ url, mode = 'bust' }) => {
  const cfg = FRAMING[mode]
  return (
    <Canvas
      className='about__avatar-canvas'
      camera={{ position: [0, 0, cfg.camZ], fov: cfg.fov }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.85} />
      <pointLight position={[2, 2, 3]} intensity={2.2} color='#ffffff' />
      <pointLight position={[-2, 1, 2]} intensity={0.9} color='#a855f7' />
      <Suspense fallback={null}>
        <Model url={url} mode={mode} />
      </Suspense>
    </Canvas>
  )
}

export default AvatarBust
