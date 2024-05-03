'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Loading from './loading'

const MagicCube = dynamic(() => import('@/components/MagicCube'), { ssr: false })
const View = dynamic(() => import('@/components/View'), { ssr: false, loading: Loading })
const Common = dynamic(() => import('@/components/Common'), { ssr: false })

export default function Page() {
  return (
    <main className="">
      <div className="mx-auto flex flex-col flex-wrap w-full items-center md:flex-row lg:w-4/5">
        <div className="flex flex-col w-full items-start justify-center p-12 text-center md:w-2/5 md:text-left">
          <p className="uppercase text-sky-500">React Three Fiber</p>
          <h1 className="my-4 text-5xl font-bold leading-tight text-slate-500">Magic Cube</h1>
          <p className="uppercase text-slate-500">Aspect 1</p>
        </div>

        <div className="my-6 h-96 w-full md:w-3/5 ">
          <View className="h-full items-center justify-center md:w-full">
            <Suspense fallback={null}>
              <MagicCube type={1} />
              <Common orbit color="black" enableZoom />
            </Suspense>
          </View>
        </div>
      </div>

      <div className="mx-auto flex flex-col flex-wrap w-full items-center md:flex-row-reverse lg:w-4/5">
        <div className="flex flex-col p-12 w-full items-start justify-center text-center md:w-2/5 md:text-right">
          <h1 className="my-4 text-5xl font-bold leading-tight text-slate-500">Magic Cube</h1>
          <p className="uppercase text-slate-500">Aspect 2</p>
        </div>

        <div className="my-6 h-96 w-full md:w-3/5 ">
          <View className="h-full items-center justify-center">
            <Suspense fallback={null}>
              <MagicCube type={2} />
              <Common orbit enableZoom />
            </Suspense>
          </View>
        </div>
      </div>

      <div className="mx-auto flex flex-col flex-wrap w-full items-center md:flex-row lg:w-4/5">
        <div className="flex flex-col w-full items-start justify-center p-12 text-center md:w-2/5 md:text-left">
          <p className="uppercase text-sky-500">React Three Fiber</p>
          <h1 className="my-4 text-5xl font-bold leading-tight text-slate-500">Magic Cube</h1>
          <p className="uppercase text-slate-500">Aspect 3</p>
        </div>

        <div className="my-6 h-96 w-full md:w-3/5 ">
          <View className="h-full items-center justify-center md:w-full">
            <Suspense fallback={null}>
              <MagicCube type={3} />
              <Common orbit color="black" enableZoom />
            </Suspense>
          </View>
        </div>
      </div>

      <div className="mx-auto flex flex-col flex-wrap w-full items-center md:flex-row-reverse lg:w-4/5">
        <div className="flex flex-col p-12 w-full items-start justify-center text-center md:w-2/5 md:text-right">
          <h1 className="my-4 text-5xl font-bold leading-tight text-slate-500">Magic Cube</h1>
          <p className="uppercase text-slate-500">Aspect 4</p>
        </div>

        <div className="my-6 h-96 w-full md:w-3/5 ">
          <View className="h-full items-center justify-center">
            <Suspense fallback={null}>
              <MagicCube type={4} />
              <Common orbit enableZoom />
            </Suspense>
          </View>
        </div>
      </div>
    </main>
  )
}
