'use client'

import dynamic from 'next/dynamic'
import { type ReactNode, useRef } from 'react'
const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false })

const Layout = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div ref={ref} className="relative w-full h-full overflow-auto touch-auto">
      {children}
      <Scene
        className="fixed top-0 left-0 w-screen h-screen pointer-events-none"
        eventSource={ref}
        eventPrefix="client"
      />
    </div>
  )
}

export { Layout }
