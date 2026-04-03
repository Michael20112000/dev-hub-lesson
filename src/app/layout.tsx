import type { FC, PropsWithChildren } from 'react'
import './globals.css'

const RootLayout: FC<PropsWithChildren> = props => {
  return (
    <html>
      <body>{props.children}</body>
    </html>
  )
}

export default RootLayout
