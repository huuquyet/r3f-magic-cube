import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei'
import { Suspense } from 'react'
import { Loading } from './Loading'

export function Common({
  color,
  orbit,
  enableZoom,
}: { color?: string; orbit?: boolean; enableZoom?: boolean }) {
  return (
    <Suspense fallback={<Loading />}>
      {color && <color attach="background" args={[color]} />}
      <ambientLight />
      <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
      <pointLight position={[-10, -10, -10]} color="blue" decay={0.2} />
      <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
      <Stars saturation={0} count={500} speed={0.5} />
      {orbit && <OrbitControls enableZoom={enableZoom} />}
    </Suspense>
  )
}
