'use client'

import { Center, Text3D, useCursor } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import type { Group } from 'three'

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
  const ref = useRef<Group>(null!)
  useFrame((state: any, delta: number) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.x = (Math.sin(t) * Math.PI) / 8
    ref.current.rotation.y += Math.abs(Math.sin(delta / 4))
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

const NumberNode = ({ text, ...props }: { text: any }) => {
  const [hovered, hover] = useState(false)
  useCursor(hovered)

  return (
    <Center
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      scale={0.5}
      {...props}
    >
      <Text3D font={'/fonts/helvetiker_bold.typeface.json'}>
        {text}
        <meshPhysicalMaterial transparent roughness={0.5} color={hovered ? 'hotpink' : 'orange'} />
      </Text3D>
    </Center>
  )
}

export const MagicCubeShort = ({ ...props }) => {
  const ref = useRef<Group>(null!)
  const arrNumber = [
    18, 4, 20, 2, 27, 13, 22, 11, 9, 5, 21, 16, 25, 14, 3, 12, 7, 23, 19, 17, 6, 15, 1, 26, 8, 24,
    10,
  ]
  useFrame((state: any, delta: number) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.x = (Math.sin(t) * Math.PI) / 8
    ref.current.rotation.y += delta / 4
    ref.current.rotation.z = delta / 4
  })

  return (
    <group ref={ref} {...props}>
      {arrNumber.map((e, i) => (
        <NumberNode key={e} text={e} position={[i % 3, Math.floor(i / 9), Math.floor(i / 3) % 3]} />
      ))}
    </group>
  )
}
