'use client'

import { Center, Line, MeshDistortMaterial, Text3D, useCursor } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRouter } from 'next/navigation'
import { useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

export const Logo = ({ route = '/period', ...props }) => {
  const mesh = useRef(null)
  const router = useRouter()

  const [hovered, hover] = useState(false)
  const points = useMemo(
    () => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100),
    []
  )

  useCursor(hovered)
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()
    mesh.current.rotation.y = Math.sin(t) * (Math.PI / 8)
    mesh.current.rotation.x = Math.cos(t) * (Math.PI / 8)
    mesh.current.rotation.z -= delta / 4
  })

  return (
    <group ref={mesh} {...props}>
      {/* @ts-ignore */}
      <Line worldUnits points={points} color="#1fb2f5" lineWidth={0.15} />
      {/* @ts-ignore */}
      <Line worldUnits points={points} color="#1fb2f5" lineWidth={0.15} rotation={[0, 0, 1]} />
      {/* @ts-ignore */}
      <Line worldUnits points={points} color="#1fb2f5" lineWidth={0.15} rotation={[0, 0, -1]} />
      <mesh
        onClick={() => router.push(route)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <sphereGeometry args={[0.55, 64, 64]} />
        <meshPhysicalMaterial roughness={0.5} color={hovered ? 'hotpink' : '#1fb2f5'} />
      </mesh>
    </group>
  )
}

export const Period = ({ route = '/', ...props }) => {
  const router = useRouter()
  return (
    <mesh onClick={() => router.push(route)} {...props}>
      <TextNumber text="1" scale={0.5} position={[-1, -1, -1]} />
      <TextNumber text="2" scale={0.5} position={[0, -1, -1]} />
      <TextNumber text="3" scale={0.5} position={[1, -1, -1]} />
      <TextNumber text="4" scale={0.5} position={[-1, 0, -1]} />
      <TextNumber text="5" scale={0.5} position={[0, 0, -1]} />
      <TextNumber text="6" scale={0.5} position={[1, 0, -1]} />
      <TextNumber text="7" scale={0.5} position={[-1, 1, -1]} />
      <TextNumber text="8" scale={0.5} position={[0, 1, -1]} />
      <TextNumber text="9" scale={0.5} position={[1, 1, -1]} />
      <TextNumber text="10" scale={0.5} position={[-1, -1, 0]} />
      <TextNumber text="11" scale={0.5} position={[0, -1, 0]} />
      <TextNumber text="12" scale={0.5} position={[1, -1, 0]} />
      <TextNumber text="13" scale={0.5} position={[-1, 0, 0]} />
      <TextNumber text="14" scale={0.5} position={[0, 0, 0]} />
      <TextNumber text="15" scale={0.5} position={[1, 0, 0]} />
      <TextNumber text="16" scale={0.5} position={[-1, 1, 0]} />
      <TextNumber text="17" scale={0.5} position={[0, 1, 0]} />
      <TextNumber text="18" scale={0.5} position={[1, 1, 0]} />
      <TextNumber text="19" scale={0.5} position={[-1, -1, 1]} />
      <TextNumber text="20" scale={0.5} position={[0, -1, 1]} />
      <TextNumber text="21" scale={0.5} position={[1, -1, 1]} />
      <TextNumber text="22" scale={0.5} position={[-1, 0, 1]} />
      <TextNumber text="23" scale={0.5} position={[0, 0, 1]} />
      <TextNumber text="24" scale={0.5} position={[1, 0, 1]} />
      <TextNumber text="25" scale={0.5} position={[-1, 1, 1]} />
      <TextNumber text="26" scale={0.5} position={[0, 1, 1]} />
      <TextNumber text="27" scale={0.5} position={[1, 1, 1]} />
    </mesh>
  )
}

const TextNumber = ({ text, ...props }) => {
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  return (
    <Center onPointerOver={() => hover(true)} onPointerOut={() => hover(false)} {...props}>
      <Text3D font="/fonts/Inter_Bold.json" size={0.5}>
        {text}
        <meshStandardMaterial transparent roughness={0.5} color={hovered ? 'hotpink' : '#1fb2f5'} />
      </Text3D>
    </Center>
  )
}
