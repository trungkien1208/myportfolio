/* eslint-disable react/no-unknown-property */
import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Box3, Vector3 } from 'three'

/*
 * Loads any humanoid .glb and AUTO-FRAMES it:
 *  - measures the model's bounding box and scales it to TARGET_HEIGHT
 *  - re-centers it at the origin (then nudges down a touch)
 *  - floats gently, eases toward the cursor, and turns the head if a Head bone exists
 *
 * TARGET_HEIGHT controls how big the avatar appears (bigger = closer crop).
 */
const TARGET_HEIGHT = 4.6
const Y_NUDGE = -0.1

const HumanAvatar = ({ url }) => {
  const group = useRef()
  const headRef = useRef(null)
  const fit = useRef({ scale: 1, cx: 0, cy: 0, cz: 0 })
  const { scene } = useGLTF(url)

  useEffect(() => {
    headRef.current =
      scene.getObjectByName('Head') ||
      scene.getObjectByName('head') ||
      scene.getObjectByName('mixamorigHead') ||
      null

    const box = new Box3().setFromObject(scene)
    const size = new Vector3()
    const center = new Vector3()
    box.getSize(size)
    box.getCenter(center)
    const scale = TARGET_HEIGHT / (size.y || 1)
    fit.current = { scale, cx: center.x, cy: center.y, cz: center.z }
  }, [scene])

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.getElapsedTime()
    const { scale, cx, cy, cz } = fit.current

    group.current.scale.setScalar(scale)
    group.current.position.set(
      -cx * scale,
      -cy * scale + Y_NUDGE + Math.sin(t * 1.1) * 0.06,
      -cz * scale
    )

    /* body eases toward the cursor */
    const targetY = state.pointer.x * 0.4
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.05

    /* head tracks the cursor if the bone exists */
    if (headRef.current) {
      headRef.current.rotation.y = state.pointer.x * 0.35
      headRef.current.rotation.x = -state.pointer.y * 0.22
    }
  })

  return <primitive ref={group} object={scene} />
}

export default HumanAvatar
