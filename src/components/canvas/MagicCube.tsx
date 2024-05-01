'use client'

import { Center, Line, MeshDistortMaterial, Text3D, useCursor } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMemo, useRef, useState } from 'react'

const NUMBER_LIST = {
  1: [-1, 1, 1],
  2: [0, 1, 1],
  3: [1, 1, 1],
  4: [-1, 1, 0],
  5: [0, 1, 0],
  6: [1, 1, 0],
  7: [-1, 1, -1],
  8: [0, 1, -1],
  9: [1, 1, -1],
  10: [-1, 0, 1],
  11: [0, 0, 1],
  12: [1, 0, 1],
  13: [-1, 0, 0],
  14: [0, 0, 0],
  15: [1, 0, 0],
  16: [-1, 0, -1],
  17: [0, 0, -1],
  18: [1, 0, -1],
  19: [-1, -1, 1],
  20: [0, -1, 1],
  21: [1, -1, 1],
  22: [-1, -1, 0],
  23: [0, -1, 0],
  24: [1, -1, 0],
  25: [-1, -1, -1],
  26: [0, -1, -1],
  27: [1, -1, -1],
}

export const MagicCube = ({ ...props }) => {
  const ref = useRef()
  return (
    <mesh ref={ref} {...props}>
      {Object.entries(NUMBER_LIST).map(([key, value]) => (
        <NumberNode key={key} text={key} position={value} />
      ))}
    </mesh>
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
