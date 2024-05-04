import Loading from '@/app/loading'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const MagicCube = dynamic(() => import('@/components/MagicCube'), { ssr: false })
const View = dynamic(() => import('@/components/View'), { ssr: false, loading: Loading })
const Common = dynamic(() => import('@/components/Common'), { ssr: false })

export function generateStaticParams() {
  return [{ aspect: '1' }, { aspect: '2' }, { aspect: '3' }, { aspect: '4' }]
}

export default function Page({ params }: { params: { aspect: string } }) {
  const { aspect } = params

  return (
    <>
      <div className="mx-auto flex flex-col flex-wrap w-full items-center md:flex-row">
        <div className="flex flex-col p-12 w-full items-start justify-center text-center md:w-2/5 md:text-left z-[1]">
          <p className="w-full uppercase text-sky-500">React Three Fiber</p>
          <Link href="https://en.wikipedia.org/wiki/Magic_cube" target="_blank">
            <h1 className="my-4 text-5xl font-bold leading-tight text-slate-400">Magic Cube</h1>
          </Link>
          <p className="w-full uppercase text-slate-400">Aspect {aspect}</p>
          <Link href="/">
            <p className="mb-8 text-2xl leading-normal text-sky-400">Back to home</p>
          </Link>
        </div>
      </div>

      <View className="absolute top-0 flex flex-col h-full w-full items-center justify-center">
        <MagicCube aspect={aspect} />
        <Common orbit color="black" />
      </View>
    </>
  )
}
