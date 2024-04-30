'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Loading from './loading'

const Logo = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Logo), {
  ssr: false,
})
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => <Loading />,
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), {
  ssr: false,
})

export default function Page() {
  return (
    <>
      <div className="mx-auto flex w-full flex-col flex-wrap items-center md:flex-row  lg:w-4/5">
        {/* jumbo */}
        <div className="flex w-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left">
          <p className="w-full uppercase">Next + React Three Fiber</p>
          <h1 className="my-4 text-5xl font-bold leading-tight">Next 3D Starter</h1>
          <p className="mb-8 text-2xl leading-normal">
            A minimalist starter for React, React-three-fiber and Threejs.
          </p>
        </div>

        <div className="w-full text-center md:w-3/5">
          <View className="flex h-96 w-full flex-col items-center justify-center">
            <Suspense fallback={null}>
              <Logo route="/period" scale={0.6} position={[0, 0, 0]} />
              <Common />
            </Suspense>
          </View>
        </div>
      </div>
    </>
  )
}
