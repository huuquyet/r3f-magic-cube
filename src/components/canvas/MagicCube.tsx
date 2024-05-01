'use client'

import { Center, Line, MeshDistortMaterial, Text3D, useCursor } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMemo, useRef, useState } from 'react'

const NUMBER_LIST = {
  8: [-1, 1, 1],
  24: [0, 1, 1],
  10: [1, 1, 1],
  15: [-1, 1, 0],
  1: [0, 1, 0],
  26: [1, 1, 0],
  19: [-1, 1, -1],
  17: [0, 1, -1],
  6: [1, 1, -1],
  12: [-1, 0, 1],
  7: [0, 0, 1],
  23: [1, 0, 1],
  25: [-1, 0, 0],
  14: [0, 0, 0],
  3: [1, 0, 0],
  5: [-1, 0, -1],
  21: [0, 0, -1],
  16: [1, 0, -1],
  22: [-1, -1, 1],
  11: [0, -1, 1],
  9: [1, -1, 1],
  2: [-1, -1, 0],
  27: [0, -1, 0],
  13: [1, -1, 0],
  18: [-1, -1, -1],
  4: [0, -1, -1],
  20: [1, -1, -1],
}

export const MagicCube = ({ ...props }) => {
  const ref = useRef(null)
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.x = Math.sin(t) * (Math.PI / 8)
    ref.current.rotation.y -= delta / 4
    ref.current.rotation.z = delta / 4
  })

  return (
    <group ref={ref} {...props}>
      {Object.entries(NUMBER_LIST).map(([key, value]) => (
        <NumberNode key={key} text={key} position={value} />
      ))}
    </group>
  )
}

const NumberNode = ({ text, ...props }) => {
  const [hovered, hover] = useState(false)
  useCursor(hovered)

  return (
    <Center
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      scale={0.5}
      {...props}
    >
      <Text3D font={'/fonts/Inter_Bold.typeface.json'} size={0.5}>
        {text}
        <meshPhysicalMaterial transparent roughness={0.5} color={hovered ? 'hotpink' : 'orange'} />
      </Text3D>
    </Center>
  )
}
