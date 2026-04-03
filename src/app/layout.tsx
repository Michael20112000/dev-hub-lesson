import type { FC, PropsWithChildren } from 'react'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

const RootLayout: FC<PropsWithChildren> = props => {
  return (
    <html lang='en' className={geist.variable}>
      <body>{props.children}</body>
    </html>
  )
}

export default RootLayout
