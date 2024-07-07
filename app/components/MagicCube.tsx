import { Center, Text3D, useCursor } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import type { Group } from 'three'
import helveFont from '../../public/fonts/helvetiker_bold.typeface.json'

const ASPECT_1 = [
  18, 4, 20, 2, 27, 13, 22, 11, 9, 5, 21, 16, 25, 14, 3, 12, 7, 23, 19, 17, 6, 15, 1, 26, 8, 24, 10,
]
const ASPECT_2 = [
  16, 5, 21, 2, 27, 13, 24, 10, 8, 6, 19, 17, 25, 14, 3, 11, 9, 22, 20, 18, 4, 15, 1, 26, 7, 23, 12,
]
const ASPECT_3 = [
  10, 5, 27, 6, 25, 11, 26, 12, 4, 8, 21, 13, 19, 14, 9, 15, 7, 20, 24, 16, 2, 17, 3, 22, 1, 23, 18,
]
const ASPECT_4 = [
  12, 5, 25, 4, 27, 11, 26, 10, 6, 8, 19, 15, 21, 14, 7, 13, 9, 20, 22, 18, 2, 17, 1, 24, 3, 23, 16,
]

export function MagicCube({ aspect, ...props }: { aspect: number }) {
  const ref = useRef<Group>(null!)
  useFrame((state: any, delta: number) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.x = (Math.sin(t) * Math.PI) / 8
    ref.current.rotation.y = Math.sin(delta / 4)
    ref.current.rotation.z = (Math.cos(t) * Math.PI) / 8
  })

  let cubeArray: number[]
  switch (aspect) {
    case 1:
      cubeArray = ASPECT_1
      break
    case 2:
      cubeArray = ASPECT_2
      break
    case 3:
      cubeArray = ASPECT_3
      break
    default:
      cubeArray = ASPECT_4
  }

  return (
    <group ref={ref} {...props}>
      {cubeArray.map((e, i) => (
        <NumberNode
          key={e}
          text={e}
          position={[(i % 3) - 1, Math.floor(i / 9) - 1, (Math.floor(i / 3) % 3) - 1]}
        />
      ))}
    </group>
  )
}

const NumberNode = ({
  text,
  font = helveFont,
  ...props
}: { text: number; font?: any; position?: [x: number, y: number, z: number] }) => {
  const [hovered, hover] = useState(false)
  useCursor(hovered)

  return (
    <Center
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      scale={0.42}
      {...props}
    >
      <Text3D font={font} castShadow letterSpacing={0}>
        {text}
        <meshPhysicalMaterial transparent roughness={0.5} color={hovered ? 'hotpink' : 'orange'} />
      </Text3D>
    </Center>
  )
}
