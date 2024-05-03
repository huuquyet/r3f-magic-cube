'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Loading from './loading'

const MagicCube = dynamic(() => import('@/components/MagicCube'), { ssr: false })
const View = dynamic(() => import('@/components/View'), { ssr: false, loading: Loading })
const Common = dynamic(() => import('@/components/Common'), { ssr: false })

export default function Page() {
  return (
    <main>
      <Aspect type={1} />
      <Aspect type={2} />
      <Aspect type={3} />
      <Aspect type={4} />
    </main>
  )
}

const Aspect = ({ type }: { type: number }) => {
  return (
    <div
      className={`mx-auto flex flex-col flex-wrap w-full items-center lg:w-4/5 ${
        type % 2 !== 1 ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
    >
      <div
        className={`flex flex-col p-12 w-full items-start justify-center text-center md:w-2/5 ${
          type % 2 !== 1 ? 'md:text-right' : 'md:text-left'
        }`}
      >
        <h1 className="w-full my-4 text-5xl font-bold leading-tight text-slate-500">Magic Cube</h1>
        <p className="w-full uppercase text-slate-500">Aspect {type}</p>
      </div>

      <div className="my-6 h-96 w-full md:w-3/5 ">
        <View className="h-full items-center justify-center">
          <Suspense fallback={null}>
            <MagicCube type={type} />
            <Common orbit color={`${type % 2 !== 1 ? '' : 'black'}`} />
          </Suspense>
        </View>
      </div>
    </div>
  )
}
