'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Suspense } from 'react'
import Loading from './loading'

const MagicCube = dynamic(() => import('@/components/MagicCube'), { ssr: false })
const View = dynamic(() => import('@/components/View'), { ssr: false, loading: Loading })
const Common = dynamic(() => import('@/components/Common'), { ssr: false })

export default function Page() {
  return (
    <main>
      <Aspect aspect={1} />
      <Aspect aspect={2} />
      <Aspect aspect={3} />
      <Aspect aspect={4} />
    </main>
  )
}

const Aspect = ({ aspect }: { aspect: number }) => {
  return (
    <div className="mx-auto flex flex-col flex-wrap w-full items-center lg:w-4/5 md:flex-row">
      <div className="flex flex-col p-12 w-full items-start justify-center text-center md:w-2/5 md:text-left">
        <Link href={`/${aspect}`}>
          <h1 className="w-full my-4 text-5xl font-bold leading-tight text-sky-600">Magic Cube</h1>
          <p className="w-full underline text-slate-400">Aspect {aspect} →</p>
        </Link>
      </div>

      <div className="my-6 h-96 w-full md:w-3/5 ">
        <View className="h-full items-center justify-center">
          <Suspense fallback={null}>
            <MagicCube aspect={aspect} />
            <Common orbit color={`${aspect % 2 !== 1 ? '' : 'black'}`} />
          </Suspense>
        </View>
      </div>
    </div>
  )
}
