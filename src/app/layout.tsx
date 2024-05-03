import dynamic from 'next/dynamic'
import './global.css'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

const APP_NAME = 'Magic Cube'
const APP_DEFAULT_TITLE = 'Magic Cube built with React Three Fiber'
const APP_TITLE_TEMPLATE = '%s - Awesome App'
const APP_DESCRIPTION = 'Magic Cube built with React-Three-Fiber + Three.js + Next.js.'
const APP_URL = 'https://magic-cube-r3f.vercel.app/'
const TWITTER = '@HuuQuyetNg'

const Scene = dynamic(() => import('@/components/Scene'), { ssr: false })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        {children}
        <Scene
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
          }}
        />
        <Analytics />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.json',
  metadataBase: new URL('https://${process.env.VERCEL_URL}'),
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    url: APP_URL,
    images: ['/icons/share.png'],
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    site: TWITTER,
  },
  keywords: ['Magic Cube', 'React Three Fiber', 'Three.js', 'Next.js'],
}
