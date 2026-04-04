import type { FC, PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { Schibsted_Grotesk, Martian_Mono } from 'next/font/google'
import Navbar from '@/components/Navbar'
import LightRays from '@/components/LightRays'
import './globals.css'

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ['latin'],
  variable: '--font-schibsted-grotesk',
})

const martianMono = Martian_Mono({
  subsets: ['latin'],
  variable: '--font-martian-mono',
})

export const metadata: Metadata = {
  title: 'DevEvent',
  description: "The Hub for Every Dev Event You Mustn't Miss",
}

const RootLayout: FC<PropsWithChildren> = props => {
  return (
    <html lang='en'>
      <body
        className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased`}
      >
        <Navbar />
        <div className='absolute inset-0 -z-1 min-h-screen'>
          <LightRays
            raysOrigin='top-center-offset'
            raysColor='#5dfeca'
            raysSpeed={0.5}
            lightSpread={0.9}
            rayLength={1.4}
            followMouse={true}
            mouseInfluence={0.02}
            noiseAmount={0}
            distortion={0}
          />
        </div>
        <main>{props.children}</main>
      </body>
    </html>
  )
}

export default RootLayout
